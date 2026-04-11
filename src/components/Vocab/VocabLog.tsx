import { useGameStore } from '../../store/gameStore';
import { getWords } from '../../data/hsk1';
import { useI18n } from '../../i18n/I18nProvider';
import { VocabEntry } from './VocabEntry';

export function VocabLog() {
  const learnedIds = useGameStore((s) => s.progress.learnedWords);
  const { t } = useI18n();
  const words = getWords(learnedIds).sort((a, b) =>
    a.pinyin.localeCompare(b.pinyin)
  );

  return (
    <div className="bg-white/90 rounded-2xl shadow border border-amber-200 p-4 sticky top-4 max-h-[80vh] overflow-y-auto">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-amber-900">{t('vocab.log.heading')}</h3>
        <span className="text-xs text-stone-500">
          {words.length} {t('vocab.log.count')}
        </span>
      </div>
      {words.length === 0 ? (
        <p className="text-sm text-stone-500 italic">{t('vocab.log.empty')}</p>
      ) : (
        <ul className="divide-y divide-amber-100">
          {words.map((w) => (
            <VocabEntry key={w.id} word={w} />
          ))}
        </ul>
      )}
    </div>
  );
}
