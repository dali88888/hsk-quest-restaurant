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
 * Optional sentence/example for future expansion. Not used by the
 * Flash Strike game today, but the structure is ready when we add
 * sentence-level chapters.
 */
export interface ExampleSentence {
  id: string;
  syllables: Syllable[];
  english: string;
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
