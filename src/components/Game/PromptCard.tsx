import type { VocabItem } from '../../types/chapter';
import { useI18n } from '../../i18n/I18nProvider';

interface Props {
  prompt: VocabItem;
}

/**
 * The big english word the player must match. The hanzi answer is hidden
 * — the player picks one of 4 hanzi cards below.
 */
export function PromptCard({ prompt }: Props) {
  const { t } = useI18n();
  return (
    <div className="bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-300 rounded-2xl p-6 sm:p-8 mb-6 text-center fade-in">
      <p className="text-[11px] uppercase tracking-widest text-amber-800 font-bold mb-2">
        {t('game.tapHanziForEnglish')}
      </p>
      {prompt.emoji && (
        <p className="text-5xl sm:text-6xl mb-2">{prompt.emoji}</p>
      )}
      <p className="text-3xl sm:text-4xl font-bold text-amber-900">
        {prompt.english}
      </p>
    </div>
  );
}
