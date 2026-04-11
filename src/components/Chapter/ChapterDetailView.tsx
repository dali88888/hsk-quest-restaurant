import { useGameStore } from '../../store/gameStore';
import { useI18n } from '../../i18n/I18nProvider';
import { getChapter, PASS_THRESHOLD } from '../../data/chapters';
import { getChapterRecord } from '../../types/progress';
import { ChineseLine } from '../Common/ChineseLine';
import { Button } from '../UI/Button';
import { GAME_CONFIG } from '../../utils/gameLogic';

export function ChapterDetailView() {
  const activeChapterId = useGameStore((s) => s.activeChapterId);
  const progress = useGameStore((s) => s.progress);
  const startGame = useGameStore((s) => s.startGame);
  const goHome = useGameStore((s) => s.goHome);
  const { t, language } = useI18n();

  if (!activeChapterId) return null;
  const chapter = getChapter(activeChapterId);
  if (!chapter) return null;

  const record = getChapterRecord(progress, chapter.id);
  const title = language === 'zh' ? chapter.titleZh : chapter.titleEn;
  const description =
    language === 'zh' ? chapter.descriptionZh : chapter.descriptionEn;

  return (
    <div className="fade-in">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={goHome}
          className="text-sm text-amber-700 hover:text-amber-900 hover:underline"
        >
          ← {t('common.backHome')}
        </button>
      </div>

      <div className="text-center mb-6">
        <p className="text-[11px] uppercase tracking-widest text-amber-700 font-bold">
          HSK {chapter.hskLevel} · {t('home.chapter')} {chapter.number}
        </p>
        <h2 className="text-3xl font-bold text-amber-900 mt-1">{title}</h2>
        <p className="text-stone-600 mt-2">{description}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border-2 border-amber-200 p-5 mb-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3">
          {t('chapter.vocabulary')} ({chapter.vocabulary.length})
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {chapter.vocabulary.map((v) => (
            <div
              key={v.id}
              className="bg-amber-50/60 rounded-xl p-3 text-center border border-amber-100"
            >
              {v.emoji && (
                <p className="text-2xl mb-1" aria-hidden>
                  {v.emoji}
                </p>
              )}
              <ChineseLine
                syllables={v.syllables}
                size="md"
                centered
                forcePinyin
              />
              <p className="text-xs text-stone-600 mt-1">{v.english}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl border-2 border-amber-200 p-5 mb-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-800">
          {t('chapter.howToPlay')}
        </h3>
        <ul className="text-sm text-stone-700 mt-2 space-y-1 list-disc list-inside">
          <li>
            {t('chapter.rule.duration', {
              seconds: GAME_CONFIG.duration,
            })}
          </li>
          <li>{t('chapter.rule.lives')}</li>
          <li>{t('chapter.rule.combo')}</li>
          <li>{t('chapter.rule.timeBonus')}</li>
          <li>
            {t('chapter.rule.pass', { score: PASS_THRESHOLD })}
          </li>
        </ul>
      </div>

      {record.bestScore > 0 && (
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl border border-amber-200 p-3 text-center">
            <p className="text-[10px] uppercase tracking-wider text-stone-500">
              {t('home.best')}
            </p>
            <p className="text-2xl font-bold text-amber-900">
              {record.bestScore}
            </p>
          </div>
          <div className="bg-white rounded-xl border border-amber-200 p-3 text-center">
            <p className="text-[10px] uppercase tracking-wider text-stone-500">
              {t('result.maxCombo')}
            </p>
            <p className="text-2xl font-bold text-orange-600">
              ×{record.bestCombo}
            </p>
          </div>
        </div>
      )}

      <div className="text-center">
        <Button onClick={startGame} variant="primary" className="text-lg px-8 py-3">
          {t('chapter.startGame')} →
        </Button>
      </div>
    </div>
  );
}
