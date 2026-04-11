import { useGameStore } from '../../store/gameStore';
import { useI18n } from '../../i18n/I18nProvider';
import { getChapter, PASS_THRESHOLD } from '../../data/chapters';
import { getChapterRecord } from '../../types/progress';
import { Button } from '../UI/Button';

export function GameResult() {
  const score = useGameStore((s) => s.score);
  const maxCombo = useGameStore((s) => s.maxCombo);
  const correctCount = useGameStore((s) => s.correctCount);
  const questionCount = useGameStore((s) => s.questionCount);
  const newBest = useGameStore((s) => s.lastGameNewBest);
  const activeChapterId = useGameStore((s) => s.activeChapterId);
  const progress = useGameStore((s) => s.progress);
  const startGame = useGameStore((s) => s.startGame);
  const goHome = useGameStore((s) => s.goHome);
  const { t } = useI18n();

  const chapter = activeChapterId ? getChapter(activeChapterId) : null;
  const record = activeChapterId
    ? getChapterRecord(progress, activeChapterId)
    : null;
  const passed = score >= PASS_THRESHOLD;

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border-2 border-amber-200 p-6 sm:p-8 fade-in">
      <h2 className="text-2xl font-bold text-amber-900 text-center">
        {t('result.title')}
      </h2>
      {chapter && (
        <p className="text-center text-stone-500 text-sm mt-1">
          {chapter.titleEn}
        </p>
      )}

      {newBest && (
        <p className="mt-4 text-center text-orange-600 font-bold uppercase tracking-wider text-sm combo-pop">
          ⭐ {t('result.newBest')} ⭐
        </p>
      )}

      <div className="mt-5 text-center">
        <p className="text-xs uppercase tracking-widest text-stone-500">
          {t('result.score')}
        </p>
        <p className="text-6xl font-extrabold text-amber-900 my-1">{score}</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="bg-amber-50 rounded-lg p-3 text-center">
          <p className="text-[11px] uppercase tracking-wider text-stone-500">
            {t('result.maxCombo')}
          </p>
          <p className="text-2xl font-bold text-orange-600">×{maxCombo}</p>
        </div>
        <div className="bg-amber-50 rounded-lg p-3 text-center">
          <p className="text-[11px] uppercase tracking-wider text-stone-500">
            {t('result.accuracy')}
          </p>
          <p className="text-2xl font-bold text-stone-700">
            {correctCount}/{questionCount}
          </p>
        </div>
      </div>

      {record && (
        <div className="mt-4 text-center text-xs text-stone-500">
          {t('result.bestSoFar')}: <strong>{record.bestScore}</strong> ·{' '}
          {t('result.gamesPlayed')}: {record.gamesPlayed}
        </div>
      )}

      <div className="mt-3 text-center text-xs">
        {passed ? (
          <span className="text-green-700 font-medium">
            ✓ {t('result.passed')} ({PASS_THRESHOLD}+ {t('result.threshold')})
          </span>
        ) : (
          <span className="text-stone-500">
            {t('result.tryAgain')} {PASS_THRESHOLD}+ {t('result.toPass')}
          </span>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <Button onClick={startGame} variant="primary">
          {t('result.playAgain')}
        </Button>
        <Button onClick={goHome} variant="secondary">
          {t('common.backHome')}
        </Button>
      </div>
    </div>
  );
}
