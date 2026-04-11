import { useI18n } from '../../i18n/I18nProvider';

export function LanguageToggle() {
  const { language, setLanguage, t } = useI18n();
  return (
    <div className="inline-flex items-center gap-1 text-sm">
      <span className="text-stone-600 mr-1">{t('topbar.language')}:</span>
      <div className="inline-flex rounded-lg overflow-hidden border border-amber-300">
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-xs font-medium transition-colors ${
            language === 'en'
              ? 'bg-amber-600 text-white'
              : 'bg-white text-amber-800 hover:bg-amber-50'
          }`}
          aria-pressed={language === 'en'}
        >
          {t('topbar.languageEN')}
        </button>
        <button
          type="button"
          onClick={() => setLanguage('zh')}
          className={`px-3 py-1 text-xs font-medium transition-colors ${
            language === 'zh'
              ? 'bg-amber-600 text-white'
              : 'bg-white text-amber-800 hover:bg-amber-50'
          }`}
          aria-pressed={language === 'zh'}
        >
          {t('topbar.languageZH')}
        </button>
      </div>
    </div>
  );
}
