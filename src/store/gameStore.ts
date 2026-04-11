import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Progress, QuizScore } from '../types/progress';
import { EMPTY_PROGRESS } from '../types/progress';
import type { Scene } from '../types/scene';
import type { Choice, DialogueNode } from '../types/dialogue';
import { getProgressStore } from '../storage';

export type Phase = 'title' | 'scene' | 'quiz' | 'result';

interface GameState {
  // ----- transient state -----
  phase: Phase;
  activeScene: Scene | null;
  currentNodeId: string | null;
  /** if true, an auto-advance node has been seen and player can click "continue" */
  awaitingContinue: boolean;
  lastQuizCorrect: number;
  lastQuizTotal: number;

  // ----- persisted state -----
  progress: Progress;

  // ----- actions -----
  startScene: (scene: Scene) => void;
  selectChoice: (choice: Choice) => void;
  advance: () => void;
  endSceneToQuiz: () => void;
  recordQuizScore: (correct: number, total: number) => void;
  goToTitle: () => void;
  setLanguage: (lang: 'en' | 'zh') => void;
  setShowPinyin: (v: boolean) => void;
  setShowEnglish: (v: boolean) => void;
  resetProgress: () => void;
}

function getNode(scene: Scene | null, id: string | null): DialogueNode | null {
  if (!scene || !id) return null;
  return scene.nodes[id] ?? null;
}

function addLearnedWords(progress: Progress, ids: string[]): Progress {
  if (ids.length === 0) return progress;
  const set = new Set(progress.learnedWords);
  for (const id of ids) set.add(id);
  if (set.size === progress.learnedWords.length) return progress;
  return {
    ...progress,
    learnedWords: Array.from(set),
    lastUpdated: Date.now(),
  };
}

function collectNodeWordIds(node: DialogueNode): string[] {
  const ids: string[] = [];
  for (const line of node.lines) ids.push(...line.wordIds);
  return ids;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      phase: 'title',
      activeScene: null,
      currentNodeId: null,
      awaitingContinue: false,
      lastQuizCorrect: 0,
      lastQuizTotal: 0,
      progress: { ...EMPTY_PROGRESS },

      startScene: (scene) => {
        const startNode = scene.nodes[scene.startNodeId];
        const newProgress = startNode
          ? addLearnedWords(get().progress, collectNodeWordIds(startNode))
          : get().progress;
        set({
          phase: 'scene',
          activeScene: scene,
          currentNodeId: scene.startNodeId,
          awaitingContinue: !!startNode && !startNode.choices,
          progress: newProgress,
        });
      },

      selectChoice: (choice) => {
        const { activeScene, progress } = get();
        if (!activeScene) return;
        const newProgress = addLearnedWords(progress, choice.line.wordIds);
        const nextNode = activeScene.nodes[choice.nextNodeId];
        if (!nextNode) return;
        const withNextNodeWords = addLearnedWords(
          newProgress,
          collectNodeWordIds(nextNode)
        );
        set({
          currentNodeId: choice.nextNodeId,
          awaitingContinue: !nextNode.choices,
          progress: withNextNodeWords,
        });
      },

      advance: () => {
        const { activeScene, currentNodeId } = get();
        const node = getNode(activeScene, currentNodeId);
        if (!node || node.choices) return;
        if (node.isEnd) {
          get().endSceneToQuiz();
          return;
        }
        const nextId = node.nextNodeId;
        if (!nextId || !activeScene) return;
        const nextNode = activeScene.nodes[nextId];
        if (!nextNode) return;
        const newProgress = addLearnedWords(
          get().progress,
          collectNodeWordIds(nextNode)
        );
        set({
          currentNodeId: nextId,
          awaitingContinue: !nextNode.choices,
          progress: newProgress,
        });
      },

      endSceneToQuiz: () => {
        const { activeScene, progress } = get();
        if (!activeScene) return;
        const completed = new Set(progress.completedScenes);
        completed.add(activeScene.id);
        set({
          phase: 'quiz',
          progress: {
            ...progress,
            completedScenes: Array.from(completed),
            lastUpdated: Date.now(),
          },
        });
      },

      recordQuizScore: (correct, total) => {
        const { activeScene, progress } = get();
        if (!activeScene) return;
        const score: QuizScore = {
          sceneId: activeScene.id,
          correct,
          total,
          timestamp: Date.now(),
        };
        set({
          phase: 'result',
          lastQuizCorrect: correct,
          lastQuizTotal: total,
          progress: {
            ...progress,
            quizScores: [...progress.quizScores, score],
            lastUpdated: Date.now(),
          },
        });
      },

      goToTitle: () => {
        set({
          phase: 'title',
          activeScene: null,
          currentNodeId: null,
          awaitingContinue: false,
        });
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
          phase: 'title',
          activeScene: null,
          currentNodeId: null,
          awaitingContinue: false,
          lastQuizCorrect: 0,
          lastQuizTotal: 0,
        });
      },
    }),
    {
      name: 'hsk-quest-progress',
      storage: createJSONStorage(() => getProgressStore()),
      partialize: (state) => ({ progress: state.progress }),
    }
  )
);
