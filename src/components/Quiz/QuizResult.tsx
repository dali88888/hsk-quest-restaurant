import { useGameStore } from '../../store/gameStore';
import { useI18n } from '../../i18n/I18nProvider';
import { Button } from '../UI/Button';
import { RESTAURANT_SCENE } from '../../data/scenes/restaurant';

export function QuizResult() {
  const correct = useGameStore((s) => s.lastQuizCorrect);
  const total = useGameStore((s) => s.lastQuizTotal);
  const startScene = useGameStore((s) => s.startScene);
  const goToTitle = useGameStore((s) => s.goToTitle);
  const { t } = useI18n();

  const pct = total === 0 ? 0 : correct / total;
  const message =
    pct === 1
      ? t('quiz.result.perfect')
      : pct >= 0.6
      ? t('quiz.result.good')
      : t('quiz.result.keepGoing');

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border-2 border-amber-200 p-8 text-center fade-in">
      <h2 className="text-2xl font-bold text-amber-900">
        {t('quiz.result.title')}
      </h2>
      <p className="mt-4 text-stone-600">{t('quiz.result.score')}</p>
      <p className="text-6xl font-bold text-amber-600 my-2">
        {correct} / {total}
      </p>
      <p className="text-lg text-amber-800 font-medium mb-6">{message}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          variant="primary"
          onClick={() => startScene(RESTAURANT_SCENE)}
        >
          {t('quiz.result.retry')}
        </Button>
        <Button variant="secondary" onClick={goToTitle}>
          {t('quiz.result.backToTitle')}
        </Button>
      </div>
    </div>
  );
}
