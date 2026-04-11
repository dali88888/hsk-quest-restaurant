import { CHAPTERS } from '../../data/chapters';
import { ChapterCard } from './ChapterCard';
import { useI18n } from '../../i18n/I18nProvider';
import { useGameStore } from '../../store/gameStore';

export function HomeView() {
  const { t } = useI18n();
  const resetProgress = useGameStore((s) => s.resetProgress);
  const hasAnyProgress = useGameStore((s) =>
    Object.keys(s.progress.chapterRecords).length > 0
  );

  return (
    <div className="fade-in">
      <div className="text-center mb-8">
        <p className="text-5xl mb-2">🥢</p>
        <h2 className="text-3xl font-bold text-amber-900">
          {t('home.heading')}
        </h2>
        <p className="text-stone-600 mt-2">{t('home.subheading')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CHAPTERS.map((chapter) => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </div>

      {hasAnyProgress && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => {
              if (window.confirm(t('home.resetConfirm'))) {
                resetProgress();
              }
            }}
            className="text-xs text-stone-400 hover:text-red-600 underline"
          >
            {t('home.reset')}
          </button>
        </div>
      )}
    </div>
  );
}
