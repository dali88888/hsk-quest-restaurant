import { useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { useI18n } from '../../i18n/I18nProvider';
import { ProgressBar } from '../UI/ProgressBar';
import { QuizQuestionCard } from './QuizQuestionCard';

export function QuizView() {
  const scene = useGameStore((s) => s.activeScene);
  const recordQuizScore = useGameStore((s) => s.recordQuizScore);
  const { t } = useI18n();

  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  if (!scene) return null;
  const total = scene.quiz.length;
  const question = scene.quiz[index];

  function handleAnswer(correct: boolean) {
    const nextCorrect = correctCount + (correct ? 1 : 0);
    const nextIndex = index + 1;
    if (nextIndex >= total) {
      recordQuizScore(nextCorrect, total);
    } else {
      setCorrectCount(nextCorrect);
      setIndex(nextIndex);
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-amber-900 mb-3 text-center">
        {t('quiz.heading')}
      </h2>
      <div className="mb-4">
        <ProgressBar value={index} max={total} />
      </div>
      <QuizQuestionCard
        question={question}
        questionNumber={index + 1}
        total={total}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
