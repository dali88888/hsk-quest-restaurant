import { useGameStore } from '../../store/gameStore';
import { useI18n } from '../../i18n/I18nProvider';
import { Button } from '../UI/Button';
import { RESTAURANT_SCENE } from '../../data/scenes/restaurant';

export function TitleScreen() {
  const startScene = useGameStore((s) => s.startScene);
  const resetProgress = useGameStore((s) => s.resetProgress);
  const quizScores = useGameStore((s) => s.progress.quizScores);
  const completedScenes = useGameStore((s) => s.progress.completedScenes);
  const learnedCount = useGameStore((s) => s.progress.learnedWords.length);
  const { t } = useI18n();

  const restaurantScores = quizScores.filter((q) => q.sceneId === 'restaurant');
  const bestRestaurant = restaurantScores.reduce(
    (best, cur) => (cur.correct > best ? cur.correct : best),
    -1
  );
  const restaurantTotal = restaurantScores[0]?.total ?? RESTAURANT_SCENE.quiz.length;
  const hasPlayed = bestRestaurant >= 0;
  const hasCompleted = completedScenes.includes('restaurant');

  function handleReset() {
    if (window.confirm(t('title.resetConfirm'))) {
      resetProgress();
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border-2 border-amber-200 p-8 text-center">
        <p className="text-6xl mb-2">🥢</p>
        <h2 className="text-3xl font-bold text-amber-900">
          {t('app.title')}
        </h2>
        <p className="text-stone-600 mt-1">{t('app.subtitle')}</p>

        <div className="my-8 text-left">
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <h3 className="font-bold text-lg text-amber-900">
              {t('scene.restaurant.title')}
            </h3>
            <p className="text-sm text-stone-600 mt-1">
              {t('scene.restaurant.description')}
            </p>
            <div className="flex items-center justify-between mt-3 text-xs text-stone-500">
              <span>
                {t('title.lastScore')}:{' '}
                {hasPlayed ? (
                  <strong className="text-amber-700">
                    {bestRestaurant} / {restaurantTotal}
                  </strong>
                ) : (
                  <em>{t('title.notPlayed')}</em>
                )}
              </span>
              <span>
                {learnedCount} {t('vocab.log.count')}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            variant="primary"
            onClick={() => startScene(RESTAURANT_SCENE)}
            className="text-lg py-3"
          >
            {hasCompleted ? t('title.continue') : t('title.start')} →
          </Button>
          {hasPlayed && (
            <Button variant="ghost" onClick={handleReset}>
              {t('title.reset')}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
