import { useGameStore } from '../../store/gameStore';
import type { Syllable } from '../../types/chapter';

export type ChineseLineSize = 'sm' | 'md' | 'lg' | 'xl';

interface Props {
  syllables: Syllable[];
  english?: string;
  size?: ChineseLineSize;
  /** force pinyin display regardless of toggle (e.g. preview cards) */
  forcePinyin?: boolean;
  /** force english display regardless of toggle */
  forceEnglish?: boolean;
  /** center-align the syllables row */
  centered?: boolean;
}

/**
 * Renders a Chinese phrase as ruby-style stacked clusters: pinyin above
 * each character. Every Syllable in the input gets its own (pinyin, hanzi)
 * column, so when "Show pinyin" is on, NO character is left without pinyin.
 *
 * Punctuation syllables (pinyin === '') still get a slot, but render an
 * empty pinyin row to preserve vertical alignment.
 */
export function ChineseLine({
  syllables,
  english,
  size = 'md',
  forcePinyin,
  forceEnglish,
  centered,
}: Props) {
  const showPinyinPref = useGameStore((s) => s.progress.showPinyin);
  const showEnglishPref = useGameStore((s) => s.progress.showEnglish);
  const showPinyin = forcePinyin ?? showPinyinPref;
  const showEnglish = forceEnglish ?? showEnglishPref;

  return (
    <div className={centered ? 'text-center' : ''}>
      <div
        className={`flex flex-wrap items-end gap-x-1 ${
          centered ? 'justify-center' : ''
        }`}
      >
        {syllables.map((s, i) => (
          <span key={i} className={`hanzi-cluster size-${size}`}>
            <span className="pinyin">
              {showPinyin && s.pinyin ? s.pinyin : '\u00A0'}
            </span>
            <span className="hanzi">{s.hanzi}</span>
          </span>
        ))}
      </div>
      {showEnglish && english && (
        <p
          className={`mt-1 text-stone-600 italic ${
            size === 'xl' || size === 'lg' ? 'text-base' : 'text-sm'
          } ${centered ? 'text-center' : ''}`}
        >
          {english}
        </p>
      )}
    </div>
  );
}
