import { useGameStore } from '../../store/gameStore';
import { useI18n } from '../../i18n/I18nProvider';

export function GameHud() {
  const lives = useGameStore((s) => s.lives);
  const score = useGameStore((s) => s.score);
  const combo = useGameStore((s) => s.combo);
  const timeLeft = useGameStore((s) => s.timeLeft);
  const { t } = useI18n();

  const hearts = '❤'.repeat(lives) + '🖤'.repeat(Math.max(0, 3 - lives));
  const timeColor =
    timeLeft <= 10 ? 'text-red-600' : timeLeft <= 20 ? 'text-amber-700' : 'text-stone-700';

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-6 select-none">
      <div className="bg-white rounded-xl shadow-sm border border-amber-200 p-2 sm:p-3 text-center">
        <p className="text-[10px] uppercase tracking-wider text-stone-500">
          {t('game.lives')}
        </p>
        <p className="text-xl sm:text-2xl mt-1">{hearts}</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-amber-200 p-2 sm:p-3 text-center">
        <p className="text-[10px] uppercase tracking-wider text-stone-500">
          {t('game.score')}
        </p>
        <p className="text-xl sm:text-2xl font-bold text-amber-900 mt-1">
          {score}
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-amber-200 p-2 sm:p-3 text-center">
        <p className="text-[10px] uppercase tracking-wider text-stone-500">
          {t('game.combo')}
        </p>
        <p
          key={combo}
          className={`text-xl sm:text-2xl font-bold mt-1 ${
            combo >= 5 ? 'text-orange-600 combo-pop' : 'text-stone-700'
          }`}
        >
          ×{combo}
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-amber-200 p-2 sm:p-3 text-center">
        <p className="text-[10px] uppercase tracking-wider text-stone-500">
          {t('game.time')}
        </p>
        <p className={`text-xl sm:text-2xl font-bold mt-1 ${timeColor}`}>
          {timeLeft}s
        </p>
      </div>
    </div>
  );
}
