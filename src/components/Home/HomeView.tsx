import { getChaptersByLevel, HSK_LEVELS, type HskLevel } from '../../data/chapters';
import { ChapterCard } from './ChapterCard';
import { useI18n } from '../../i18n/I18nProvider';
import { useGameStore } from '../../store/gameStore';

export function HomeView() {
  const { t } = useI18n();
  const resetProgress = useGameStore((s) => s.resetProgress);
  const startTetris = useGameStore((s) => s.startTetris);
  const startTetris2 = useGameStore((s) => s.startTetris2);
  const selectedLevel = useGameStore((s) => s.selectedHskLevel);
  const setHskLevel = useGameStore((s) => s.setHskLevel);
  const hasAnyProgress = useGameStore((s) =>
    Object.keys(s.progress.chapterRecords).length > 0
  );

  const chapters = getChaptersByLevel(selectedLevel);
  const hasContent = chapters.length > 0;

  return (
    <div className="fade-in">
      <div className="text-center mb-6">
        <p className="text-5xl mb-2">🥢</p>
        <h2 className="text-3xl font-bold text-amber-900">
          {t('home.heading')}
        </h2>
        <p className="text-stone-600 mt-2">{t('home.subheading')}</p>
      </div>

      {/* HSK Level Tabs */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-xl bg-stone-100 p-1 gap-1">
          {HSK_LEVELS.map((level) => {
            const active = level === selectedLevel;
            const levelChapters = getChaptersByLevel(level);
            const available = levelChapters.length > 0;
            return (
              <button
                key={level}
                type="button"
                onClick={() => setHskLevel(level as HskLevel)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  active
                    ? 'bg-amber-600 text-white shadow-sm'
                    : available
                      ? 'text-stone-600 hover:bg-stone-200'
                      : 'text-stone-300 cursor-not-allowed'
                }`}
                disabled={!available && !active}
              >
                HSK {level}
              </button>
            );
          })}
        </div>
      </div>

      {hasContent ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-stone-400">
          <p className="text-4xl mb-3">🔒</p>
          <p className="text-lg font-medium">{t('home.comingSoon')}</p>
        </div>
      )}

      {/* Tetris bonus game — HSK 1 & HSK 2 */}
      {(selectedLevel === 1 || selectedLevel === 2) && hasContent && (
        <div className="mt-8">
          <button
            type="button"
            onClick={selectedLevel === 2 ? startTetris2 : startTetris}
            className="w-full rounded-2xl border-2 border-dashed border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 p-5 text-left hover:border-amber-400 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">🧱</span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-amber-900 group-hover:text-amber-700">
                  {t('home.tetrisTitle')} — HSK {selectedLevel}
                </h3>
                <p className="text-sm text-stone-600 mt-1">
                  {selectedLevel === 2 ? t('home.tetrisDesc2') : t('home.tetrisDesc')}
                </p>
              </div>
              <span className="text-2xl text-amber-400 group-hover:text-amber-600">&rarr;</span>
            </div>
          </button>
        </div>
      )}

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
