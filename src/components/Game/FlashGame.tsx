import { useEffect, useRef } from 'react';
import { useGameStore } from '../../store/gameStore';
import { useI18n } from '../../i18n/I18nProvider';
import { GameHud } from './GameHud';
import { PromptCard } from './PromptCard';
import { AnswerCard } from './AnswerCard';

/**
 * Main game container. Drives the per-second timer, renders the HUD,
 * the english prompt, and 4 hanzi answer cards. Auto-advances to the
 * next question 700ms after an answer.
 */
export function FlashGame() {
  const phase = useGameStore((s) => s.phase);
  const question = useGameStore((s) => s.question);
  const answerFeedback = useGameStore((s) => s.answerFeedback);
  const lastAnswerId = useGameStore((s) => s.lastAnswerId);
  const submitAnswer = useGameStore((s) => s.submitAnswer);
  const nextQuestion = useGameStore((s) => s.nextQuestion);
  const tickTimer = useGameStore((s) => s.tickTimer);
  const goHome = useGameStore((s) => s.goHome);
  const { t } = useI18n();

  // Timer: tick once per second while in game phase
  useEffect(() => {
    if (phase !== 'game') return;
    const handle = window.setInterval(() => {
      useGameStore.getState().tickTimer();
    }, 1000);
    return () => window.clearInterval(handle);
  }, [phase, tickTimer]);

  // Auto-advance after a short feedback flash
  const advanceTimer = useRef<number | null>(null);
  useEffect(() => {
    if (!answerFeedback) return;
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    advanceTimer.current = window.setTimeout(() => {
      useGameStore.getState().nextQuestion();
    }, 700);
    return () => {
      if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    };
  }, [answerFeedback, nextQuestion]);

  if (!question) return null;

  function cardState(
    optionId: string
  ): 'idle' | 'correct' | 'wrong' | 'reveal' | 'dim' {
    if (!answerFeedback || !question) return 'idle';
    const correctId = question.prompt.id;
    if (answerFeedback === 'correct') {
      return optionId === correctId ? 'correct' : 'dim';
    }
    // wrong
    if (optionId === correctId) return 'reveal';
    if (optionId === lastAnswerId) return 'wrong';
    return 'dim';
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={goHome}
          className="text-sm text-amber-700 hover:text-amber-900 hover:underline"
        >
          ← {t('common.backHome')}
        </button>
        <p className="text-xs text-stone-500">
          {t('game.questionNo')} {useGameStore.getState().questionCount}
        </p>
      </div>
      <GameHud />
      <PromptCard prompt={question.prompt} />
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {question.options.map((opt) => (
          <AnswerCard
            key={opt.id}
            vocab={opt}
            onClick={submitAnswer}
            state={cardState(opt.id)}
            disabled={!!answerFeedback}
          />
        ))}
      </div>
    </div>
  );
}
