import type { Chapter } from '../../types/chapter';
import chapter1 from './chapter1';
import chapter2 from './chapter2';
import chapter3 from './chapter3';
import chapter4 from './chapter4';
import chapter5 from './chapter5';
import chapter6 from './chapter6';
import chapter7 from './chapter7';
import chapter8 from './chapter8';
import chapter9 from './chapter9';
import chapter10 from './chapter10';
import chapter11 from './chapter11';
import chapter12 from './chapter12';
import chapter13 from './chapter13';
import chapter14 from './chapter14';
import chapter15 from './chapter15';

/**
 * Registry of all chapters in display order. To add a chapter:
 *   1. Create a new file like `chapter16.ts` exporting a Chapter object
 *   2. Import it here and append to the array below
 */
export const CHAPTERS: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  chapter8,
  chapter9,
  chapter10,
  chapter11,
  chapter12,
  chapter13,
  chapter14,
  chapter15,
];

export function getChapter(id: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.id === id);
}

/**
 * Score threshold to "pass" a chapter and unlock the next one.
 * Tune this for difficulty.
 */
export const PASS_THRESHOLD = 100;
