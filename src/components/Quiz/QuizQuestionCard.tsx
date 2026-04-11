import { useMemo, useState } from 'react';
import type { QuizQuestion } from '../../types/scene';
import { useI18n } from '../../i18n/I18nProvider';
import { Button } from '../UI/Button';
import { shuffle } from '../../utils/shuffle';

interface Props {
  question: QuizQuestion;
  questionNumber: number;
  total: number;
  onAnswer: (correct: boolean) => void;
}

export function QuizQuestionCard({
  question,
  questionNumber,
  total,
  onAnswer,
}: Props) {
  const { t } = useI18n();
  const options = useMemo(
    () => shuffle([question.answer, ...question.distractors]),
    [question]
  );
  const [picked, setPicked] = useState<string | null>(null);
  const isAnswered = picked !== null;
  const isCorrect = picked === question.answer;

  const promptLabel =
    question.type === 'pinyin-to-hanzi'
      ? t('quiz.matchPinyin')
      : t('quiz.translateTo');

  function handlePick(opt: string) {
    if (isAnswered) return;
    setPicked(opt);
  }

  function handleNext() {
    onAnswer(isCorrect);
    setPicked(null);
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-amber-200 p-6 fade-in">
      <p className="text-xs uppercase tracking-wider text-amber-700 font-bold mb-1">
        {t('quiz.question')} {questionNumber} {t('quiz.of')} {total}
      </p>
      <p className="text-sm text-stone-600 mb-4">{promptLabel}</p>
      <p className="text-5xl text-center font-semibold text-stone-900 my-6">
        {question.prompt}
      </p>
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt) => {
          const isPicked = picked === opt;
          const isCorrectOpt = opt === question.answer;
          let cls = 'border-amber-200 hover:bg-amber-50';
          if (isAnswered) {
            if (isCorrectOpt) cls = 'bg-green-100 border-green-400';
            else if (isPicked) cls = 'bg-red-100 border-red-400';
            else cls = 'opacity-60 border-stone-200';
          }
          return (
            <button
              key={opt}
              type="button"
              onClick={() => handlePick(opt)}
              disabled={isAnswered}
              className={`text-lg py-3 px-4 rounded-xl border-2 font-medium transition-all ${cls}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {isAnswered && (
        <div className="mt-5 flex items-center justify-between fade-in">
          <p
            className={`font-bold ${
              isCorrect ? 'text-green-700' : 'text-red-700'
            }`}
          >
            {isCorrect ? t('quiz.correct') : t('quiz.incorrect')}
          </p>
          <Button onClick={handleNext}>{t('quiz.next')} →</Button>
        </div>
      )}
    </div>
  );
}
