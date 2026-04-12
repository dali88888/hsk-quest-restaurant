import type { Chapter } from '../../types/chapter';
import chapter1 from './chapter1';
import chapter2 from './chapter2';
import chapter3 from './chapter3';
import chapter4 from './chapter4';

/**
 * Registry of all chapters in display order. To add a chapter:
 *   1. Create a new file like `chapter5.ts` exporting a Chapter object
 *   2. Import it here and append to the array below
 */
export const CHAPTERS: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
];

export function getChapter(id: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.id === id);
}

/**
 * Score threshold to "pass" a chapter and unlock the next one.
 * Tune this for difficulty.
 */
export const PASS_THRESHOLD = 100;
