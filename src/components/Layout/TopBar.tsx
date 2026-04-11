import { useGameStore } from '../../store/gameStore';
import { useI18n } from '../../i18n/I18nProvider';
import { Toggle } from '../UI/Toggle';
import { LanguageToggle } from '../UI/LanguageToggle';

export function TopBar() {
  const showPinyin = useGameStore((s) => s.progress.showPinyin);
  const showEnglish = useGameStore((s) => s.progress.showEnglish);
  const setShowPinyin = useGameStore((s) => s.setShowPinyin);
  const setShowEnglish = useGameStore((s) => s.setShowEnglish);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 bg-amber-50/95 backdrop-blur border-b-2 border-amber-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center gap-x-6 gap-y-2 justify-between">
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl font-bold text-amber-900">
            {t('app.title')}
          </h1>
          <span className="text-xs text-amber-700 hidden sm:inline">
            {t('app.subtitle')}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Toggle
            label={t('topbar.showPinyin')}
            checked={showPinyin}
            onChange={setShowPinyin}
          />
          <Toggle
            label={t('topbar.showEnglish')}
            checked={showEnglish}
            onChange={setShowEnglish}
          />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
