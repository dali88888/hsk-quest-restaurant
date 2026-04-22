import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Progress, ChapterRecord } from '../types/progress';
import { EMPTY_PROGRESS, getChapterRecord } from '../types/progress';
import type { Chapter } from '../types/chapter';
import { getChapter, PASS_THRESHOLD, type HskLevel } from '../data/chapters';
import {
  GAME_CONFIG,
  makeQuestion,
  scoreForAnswer,
  timeBonusFor,
  type GameQuestion,
} from '../utils/gameLogic';
import { getProgressStore } from '../storage';

export type Phase = 'home' | 'chapter' | 'game' | 'result' | 'tetris' | 'tetris2';

interface GameState {
  // ----- transient state -----
  phase: Phase;
  /** currently selected HSK level tab */
  selectedHskLevel: HskLevel;
  /** active chapter id when phase is chapter/game/result */
  activeChapterId: string | null;

  // game session state (only valid during phase === 'game' or 'result')
  question: GameQuestion | null;
  questionCount: number;
  score: number;
  combo: number;
  maxCombo: number;
  lives: number;
  timeLeft: number;
  correctCount: number;
  answerFeedback: 'correct' | 'wrong' | null;
  /** id of the option just clicked, used for visual highlight */
  lastAnswerId: string | null;
  /** set of vocab ids already shown as prompts this session — used to
   *  cycle through every word before repeating. */
  seenIds: string[];
  /** sticky for the result screen */
  lastGameNewBest: boolean;

  // ----- persisted state -----
  progress: Progress;

  // ----- actions -----
  goHome: () => void;
  enterChapter: (chapterId: string) => void;
  startGame: () => void;
  submitAnswer: (vocabId: string) => void;
  nextQuestion: () => void;
  tickTimer: () => void;
  endGame: () => void;
  startTetris: () => void;
  startTetris2: () => void;
  setHskLevel: (level: HskLevel) => void;
  setLanguage: (lang: 'en' | 'zh') => void;
  setShowPinyin: (v: boolean) => void;
  setShowEnglish: (v: boolean) => void;
  resetProgress: () => void;
}

function getActiveChapter(state: { activeChapterId: string | null }): Chapter | null {
  if (!state.activeChapterId) return null;
  return getChapter(state.activeChapterId) ?? null;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      phase: 'home',
      selectedHskLevel: 1,
      activeChapterId: null,
      question: null,
      questionCount: 0,
      score: 0,
      combo: 0,
      maxCombo: 0,
      lives: GAME_CONFIG.startingLives,
      timeLeft: GAME_CONFIG.duration,
      correctCount: 0,
      answerFeedback: null,
      lastAnswerId: null,
      seenIds: [],
      lastGameNewBest: false,
      progress: { ...EMPTY_PROGRESS },

      goHome: () => {
        set({
          phase: 'home',
          activeChapterId: null,
          question: null,
          questionCount: 0,
          score: 0,
          combo: 0,
          maxCombo: 0,
          lives: GAME_CONFIG.startingLives,
          timeLeft: GAME_CONFIG.duration,
          correctCount: 0,
          answerFeedback: null,
          lastAnswerId: null,
          seenIds: [],
        });
      },

      enterChapter: (chapterId) => {
        const chapter = getChapter(chapterId);
        if (!chapter || chapter.comingSoon) return;
        set({
          phase: 'chapter',
          activeChapterId: chapterId,
        });
      },

      startGame: () => {
        const chapter = getActiveChapter(get());
        if (!chapter || chapter.vocabulary.length === 0) return;
        const firstQuestion = makeQuestion(
          chapter.vocabulary,
          1,
          new Set<string>()
        );
        set({
          phase: 'game',
          question: firstQuestion,
          questionCount: 1,
          score: 0,
          combo: 0,
          maxCombo: 0,
          lives: GAME_CONFIG.startingLives,
          timeLeft: GAME_CONFIG.duration,
          correctCount: 0,
          answerFeedback: null,
          lastAnswerId: null,
          seenIds: [firstQuestion.prompt.id],
        });
      },

      submitAnswer: (vocabId) => {
        const state = get();
        if (state.phase !== 'game' || !state.question || state.answerFeedback) {
          return;
        }
        const isCorrect = state.question.prompt.id === vocabId;

        if (isCorrect) {
          const earned = scoreForAnswer(state.combo);
          const newCombo = state.combo + 1;
          const bonusTime = timeBonusFor(newCombo);
          set({
            score: state.score + earned,
            combo: newCombo,
            maxCombo: Math.max(state.maxCombo, newCombo),
            correctCount: state.correctCount + 1,
            timeLeft: state.timeLeft + bonusTime,
            answerFeedback: 'correct',
            lastAnswerId: vocabId,
          });
        } else {
          const newLives = state.lives - 1;
          set({
            lives: newLives,
            combo: 0,
            answerFeedback: 'wrong',
            lastAnswerId: vocabId,
          });
        }
      },

      nextQuestion: () => {
        const state = get();
        if (state.phase !== 'game') return;
        if (state.lives <= 0 || state.timeLeft <= 0) {
          get().endGame();
          return;
        }
        const chapter = getActiveChapter(state);
        if (!chapter) return;
        const previousId = state.question?.prompt.id;

        // If we've already cycled through every word once, wipe the
        // seen-set so a new cycle begins (but keep previousId so we
        // still avoid an immediate repeat).
        const hasSeenAll = state.seenIds.length >= chapter.vocabulary.length;
        const activeSeen = hasSeenAll ? new Set<string>() : new Set(state.seenIds);

        const next = makeQuestion(
          chapter.vocabulary,
          state.questionCount + 1,
          activeSeen,
          previousId
        );
        const nextSeenIds = hasSeenAll
          ? [next.prompt.id]
          : [...state.seenIds, next.prompt.id];

        set({
          question: next,
          questionCount: state.questionCount + 1,
          answerFeedback: null,
          lastAnswerId: null,
          seenIds: nextSeenIds,
        });
      },

      tickTimer: () => {
        const state = get();
        if (state.phase !== 'game') return;
        const newTime = state.timeLeft - 1;
        if (newTime <= 0) {
          set({ timeLeft: 0 });
          get().endGame();
        } else {
          set({ timeLeft: newTime });
        }
      },

      endGame: () => {
        const state = get();
        if (state.phase !== 'game') return;
        const chapter = getActiveChapter(state);
        if (!chapter) {
          set({ phase: 'result' });
          return;
        }
        const prev = getChapterRecord(state.progress, chapter.id);
        const newBest = state.score > prev.bestScore;
        const updated: ChapterRecord = {
          chapterId: chapter.id,
          bestScore: Math.max(prev.bestScore, state.score),
          bestCombo: Math.max(prev.bestCombo, state.maxCombo),
          gamesPlayed: prev.gamesPlayed + 1,
          totalCorrect: prev.totalCorrect + state.correctCount,
          totalAnswered: prev.totalAnswered + state.questionCount,
          passed: prev.passed || state.score >= PASS_THRESHOLD,
          lastPlayed: Date.now(),
        };
        set({
          phase: 'result',
          lastGameNewBest: newBest,
          progress: {
            ...state.progress,
            chapterRecords: {
              ...state.progress.chapterRecords,
              [chapter.id]: updated,
            },
            lastUpdated: Date.now(),
          },
        });
      },

      startTetris: () => {
        set({ phase: 'tetris' });
      },

      startTetris2: () => {
        set({ phase: 'tetris2' });
      },

      setHskLevel: (level) => {
        set({ selectedHskLevel: level });
      },

      setLanguage: (lang) => {
        set((s) => ({
          progress: { ...s.progress, uiLanguage: lang, lastUpdated: Date.now() },
        }));
      },

      setShowPinyin: (v) => {
        set((s) => ({
          progress: { ...s.progress, showPinyin: v, lastUpdated: Date.now() },
        }));
      },

      setShowEnglish: (v) => {
        set((s) => ({
          progress: { ...s.progress, showEnglish: v, lastUpdated: Date.now() },
        }));
      },

      resetProgress: () => {
        set({
          progress: { ...EMPTY_PROGRESS },
          phase: 'home',
          activeChapterId: null,
          question: null,
          questionCount: 0,
          score: 0,
          combo: 0,
          maxCombo: 0,
          lives: GAME_CONFIG.startingLives,
          timeLeft: GAME_CONFIG.duration,
          correctCount: 0,
          answerFeedback: null,
          lastAnswerId: null,
          seenIds: [],
          lastGameNewBest: false,
        });
      },
    }),
    {
      name: 'hsk-quest-progress',
      version: 2,
      storage: createJSONStorage(() => getProgressStore()),
      partialize: (state) => ({ progress: state.progress }),
      // Old (v1) shape was completely different — wipe it cleanly.
      migrate: (_persisted, _version) => {
        return { progress: { ...EMPTY_PROGRESS } };
      },
    }
  )
);
