import { useGameStore } from '../../store/gameStore';
import type { DialogueLine } from '../../types/dialogue';
import type { HskWord } from '../../types/vocab';
import { getWord } from '../../data/hsk1';

interface Props {
  line: DialogueLine;
  /** rendered inside a choice button — uses smaller font */
  variant?: 'default' | 'choice';
  onWordClick?: (word: HskWord) => void;
}

/**
 * Renders a Chinese sentence as clusters of (pinyin / hanzi).
 * The sentence is split into HskWord chunks based on `wordIds` ordering;
 * any remaining characters not covered by a wordId are emitted as plain hanzi.
 *
 * Pinyin and English visibility are controlled by the gameStore preferences.
 */
export function ChineseLine({ line, variant = 'default', onWordClick }: Props) {
  const showPinyin = useGameStore((s) => s.progress.showPinyin);
  const showEnglish = useGameStore((s) => s.progress.showEnglish);

  const clusters = splitIntoClusters(line);

  const interactive = Boolean(onWordClick);

  return (
    <div className={variant === 'choice' ? 'text-left' : ''}>
      <div className="flex flex-wrap items-end">
        {clusters.map((c, i) =>
          c.word ? (
            interactive ? (
              <button
                key={`${c.word.id}-${i}`}
                type="button"
                className={`hanzi-cluster ${variant === 'choice' ? 'choice' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onWordClick!(c.word!);
                }}
                aria-label={`${c.word.hanzi} ${c.word.pinyin} ${c.word.english}`}
              >
                {showPinyin ? (
                  <span className="pinyin">{c.word.pinyin}</span>
                ) : (
                  <span className="pinyin">&nbsp;</span>
                )}
                <span className="hanzi">{c.word.hanzi}</span>
              </button>
            ) : (
              <span
                key={`${c.word.id}-${i}`}
                className={`hanzi-cluster ${variant === 'choice' ? 'choice' : ''}`}
                aria-label={`${c.word.hanzi} ${c.word.pinyin} ${c.word.english}`}
              >
                {showPinyin ? (
                  <span className="pinyin">{c.word.pinyin}</span>
                ) : (
                  <span className="pinyin">&nbsp;</span>
                )}
                <span className="hanzi">{c.word.hanzi}</span>
              </span>
            )
          ) : (
            <span
              key={`raw-${i}`}
              className={`hanzi-cluster ${variant === 'choice' ? 'choice' : ''}`}
              style={{ cursor: 'default' }}
            >
              {showPinyin ? (
                <span className="pinyin">&nbsp;</span>
              ) : (
                <span className="pinyin">&nbsp;</span>
              )}
              <span className="hanzi">{c.text}</span>
            </span>
          )
        )}
      </div>
      {showEnglish && (
        <p
          className={`mt-1 text-stone-600 italic ${
            variant === 'choice' ? 'text-xs' : 'text-sm'
          }`}
        >
          {line.english}
        </p>
      )}
    </div>
  );
}

interface Cluster {
  word?: HskWord;
  text: string;
}

/**
 * Greedy left-to-right split: walks the hanzi string, at each step tries to
 * match the longest prefix that corresponds to one of the line's wordIds.
 * If no match, emits a single character as a plain (non-clickable) cluster.
 */
function splitIntoClusters(line: DialogueLine): Cluster[] {
  const out: Cluster[] = [];
  const words = line.wordIds
    .map(getWord)
    .filter((w): w is HskWord => Boolean(w));

  // dedupe but preserve order
  const seen = new Set<string>();
  const dict = words.filter((w) => {
    if (seen.has(w.id)) return false;
    seen.add(w.id);
    return true;
  });

  // sort by hanzi length desc so longer matches win
  const byHanzi = dict.slice().sort((a, b) => b.hanzi.length - a.hanzi.length);

  const text = line.hanzi;
  let i = 0;
  while (i < text.length) {
    let matched: HskWord | null = null;
    for (const w of byHanzi) {
      if (text.startsWith(w.hanzi, i)) {
        matched = w;
        break;
      }
    }
    if (matched) {
      out.push({ word: matched, text: matched.hanzi });
      i += matched.hanzi.length;
    } else {
      out.push({ text: text[i] });
      i += 1;
    }
  }
  return out;
}
