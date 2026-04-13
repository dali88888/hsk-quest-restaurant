import type { Chapter } from '../../types/chapter';

// HSK 1
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

// HSK 2
import hsk2ch1 from './hsk2-chapter1';
import hsk2ch2 from './hsk2-chapter2';
import hsk2ch3 from './hsk2-chapter3';
import hsk2ch4 from './hsk2-chapter4';
import hsk2ch5 from './hsk2-chapter5';
import hsk2ch6 from './hsk2-chapter6';
import hsk2ch7 from './hsk2-chapter7';
import hsk2ch8 from './hsk2-chapter8';
import hsk2ch9 from './hsk2-chapter9';
import hsk2ch10 from './hsk2-chapter10';
import hsk2ch11 from './hsk2-chapter11';
import hsk2ch12 from './hsk2-chapter12';
import hsk2ch13 from './hsk2-chapter13';
import hsk2ch14 from './hsk2-chapter14';
import hsk2ch15 from './hsk2-chapter15';

/**
 * All chapters across all HSK levels, ordered by level then chapter number.
 */
export const CHAPTERS: Chapter[] = [
  // HSK 1
  chapter1, chapter2, chapter3, chapter4, chapter5,
  chapter6, chapter7, chapter8, chapter9, chapter10,
  chapter11, chapter12, chapter13, chapter14, chapter15,
  // HSK 2
  hsk2ch1, hsk2ch2, hsk2ch3, hsk2ch4, hsk2ch5,
  hsk2ch6, hsk2ch7, hsk2ch8, hsk2ch9, hsk2ch10,
  hsk2ch11, hsk2ch12, hsk2ch13, hsk2ch14, hsk2ch15,
];

/** All HSK levels that have content. */
export const HSK_LEVELS = [1, 2, 3, 4, 5, 6] as const;
export type HskLevel = (typeof HSK_LEVELS)[number];

/** Chapters filtered by HSK level. */
export function getChaptersByLevel(level: HskLevel): Chapter[] {
  return CHAPTERS.filter((c) => c.hskLevel === level);
}

export function getChapter(id: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.id === id);
}

/**
 * Score threshold to "pass" a chapter and unlock the next one.
 */
export const PASS_THRESHOLD = 100;
