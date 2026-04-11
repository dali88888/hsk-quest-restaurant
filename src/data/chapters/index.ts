import type { Chapter } from '../../types/chapter';
import chapter1 from './chapter1';

/**
 * Registry of all chapters in display order. To add a chapter:
 *   1. Create a new file like `chapter2.ts` exporting a Chapter object
 *   2. Import it here and append to the array below
 *
 * Locked / coming-soon chapters are placeholders shown grayed-out on the
 * home screen — give them `comingSoon: true` and an empty vocabulary array.
 * They render as locked cards but tell users more is coming.
 */
export const CHAPTERS: Chapter[] = [
  chapter1,
  // Placeholder upcoming chapters — fill in real content over time.
  {
    id: 'hsk1-ch2',
    number: 2,
    hskLevel: 1,
    titleEn: 'Numbers & Age',
    titleZh: '数字与年龄',
    descriptionEn: 'Count from 1-10 and talk about age.',
    descriptionZh: '学习 1-10 的数字以及如何谈论年龄。',
    vocabulary: [],
    comingSoon: true,
  },
  {
    id: 'hsk1-ch3',
    number: 3,
    hskLevel: 1,
    titleEn: 'Family',
    titleZh: '家人',
    descriptionEn: 'Vocabulary for family members.',
    descriptionZh: '关于家庭成员的词汇。',
    vocabulary: [],
    comingSoon: true,
  },
  {
    id: 'hsk1-ch4',
    number: 4,
    hskLevel: 1,
    titleEn: 'Food & Drink',
    titleZh: '饮食',
    descriptionEn: 'Common foods and how to order.',
    descriptionZh: '常见食物以及如何点餐。',
    vocabulary: [],
    comingSoon: true,
  },
];

export function getChapter(id: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.id === id);
}

/**
 * Score threshold to "pass" a chapter and unlock the next one.
 * Tune this for difficulty.
 */
export const PASS_THRESHOLD = 100;
