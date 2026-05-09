/**
 * Core data primitive: a single (hanzi, pinyin) pair.
 *
 * Each character that appears in any chapter content has its own pinyin.
 * Punctuation uses pinyin: '' (empty string) which renders as a blank slot
 * above, preserving alignment without showing fake pinyin.
 *
 * For multi-syllable items, the consumer concatenates these in order.
 */
export interface Syllable {
  hanzi: string;
  pinyin: string;
}

/**
 * A vocabulary item — typically a single word or short phrase the player
 * must learn (e.g. 你好, 老师, 学生).
 *
 * `syllables` is the source of truth for rendering. `hanzi` and `pinyin`
 * are derived convenience strings the data file can fill in for display.
 */
export interface VocabItem {
  id: string;
  hanzi: string;
  pinyin: string;
  english: string;
  syllables: Syllable[];
  /** optional emoji or short visual cue shown alongside the entry */
  emoji?: string;
}

/**
 * A single draggable word/phrase token for the Sentence Builder game.
 * Each token carries its own pinyin so it can be displayed independently.
 */
export interface SentenceToken {
  hanzi: string;
  pinyin: string;
}

/**
 * Sentence/example used by:
 *  1. The optional read-along view (uses `syllables` for per-character
 *     pinyin alignment, including punctuation slots).
 *  2. The Sentence Builder game (uses `tokens` — a word-level breakdown
 *     of the sentence with terminal punctuation stripped). Sentences
 *     without `tokens` are skipped by the Sentence Builder.
 */
export interface ExampleSentence {
  id: string;
  syllables: Syllable[];
  english: string;
  /** Word-level tokenization for the Sentence Builder game. Order is the
   *  correct answer. Terminal punctuation is omitted from tokens but may
   *  be displayed by the renderer. */
  tokens?: SentenceToken[];
  /** Optional terminal punctuation (。！？) shown after the last token in
   *  the Sentence Builder. Defaults to '。' if omitted. */
  terminator?: string;
}

export interface Chapter {
  id: string;
  /** display order, also unlock ordering */
  number: number;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  hskLevel: 1 | 2 | 3 | 4 | 5 | 6;
  /** primary content the game draws from */
  vocabulary: VocabItem[];
  /** optional supplementary sentences (for future read-along features) */
  sentences?: ExampleSentence[];
  /** placeholder chapter shown as locked, no content yet */
  comingSoon?: boolean;
}

/** Helper: concatenate syllables into a hanzi string. */
export function syllablesToHanzi(syllables: Syllable[]): string {
  return syllables.map((s) => s.hanzi).join('');
}

/** Helper: concatenate syllables into a space-joined pinyin string. */
export function syllablesToPinyin(syllables: Syllable[]): string {
  return syllables
    .map((s) => s.pinyin)
    .filter((p) => p.length > 0)
    .join(' ');
}
