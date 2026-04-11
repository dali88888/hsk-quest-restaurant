import type { Chapter } from '../../types/chapter';
import { useGameStore } from '../../store/gameStore';
import { useI18n } from '../../i18n/I18nProvider';
import { getChapterRecord } from '../../types/progress';

interface Props {
  chapter: Chapter;
}

export function ChapterCard({ chapter }: Props) {
  const enterChapter = useGameStore((s) => s.enterChapter);
  const progress = useGameStore((s) => s.progress);
  const { t, language } = useI18n();
  const record = getChapterRecord(progress, chapter.id);

  const locked = chapter.comingSoon;
  const title = language === 'zh' ? chapter.titleZh : chapter.titleEn;
  const description =
    language === 'zh' ? chapter.descriptionZh : chapter.descriptionEn;

  return (
    <button
      type="button"
      disabled={locked}
      onClick={() => !locked && enterChapter(chapter.id)}
      className={`group text-left rounded-2xl border-2 p-5 transition-all min-h-[160px] flex flex-col ${
        locked
          ? 'bg-stone-50 border-stone-200 cursor-not-allowed'
          : 'bg-white border-amber-200 hover:border-amber-400 hover:shadow-md hover:-translate-y-0.5'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-amber-700 font-bold">
            HSK {chapter.hskLevel} · {t('home.chapter')} {chapter.number}
          </p>
          <h3
            className={`text-lg font-bold mt-1 ${
              locked ? 'text-stone-400' : 'text-stone-900'
            }`}
          >
            {title}
          </h3>
        </div>
        {locked && <span className="text-2xl">🔒</span>}
      </div>

      <p
        className={`text-sm mt-2 flex-1 ${
          locked ? 'text-stone-400' : 'text-stone-600'
        }`}
      >
        {description}
      </p>

      <div className="mt-3 flex items-center justify-between">
        {locked ? (
          <span className="text-xs text-stone-400 italic">
            {t('home.comingSoon')}
          </span>
        ) : (
          <>
            <span className="text-xs text-stone-500">
              {chapter.vocabulary.length} {t('home.words')}
            </span>
            {record.bestScore > 0 ? (
              <span className="text-xs font-medium text-amber-700">
                {t('home.best')}: {record.bestScore}
              </span>
            ) : (
              <span className="text-xs text-stone-400 italic">
                {t('home.notPlayed')}
              </span>
            )}
          </>
        )}
      </div>
    </button>
  );
}
