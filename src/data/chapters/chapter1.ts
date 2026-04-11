import type { Chapter } from '../../types/chapter';

/**
 * HSK 1, Chapter 1 — Greetings & Introductions (问候与介绍)
 *
 * Each vocab item lists its hanzi, pinyin, english, and per-syllable
 * (hanzi, pinyin) pairs. The `syllables` array is the source of truth
 * for rendering — every Chinese character has its own pinyin and never
 * silently degrades.
 *
 * To add new vocabulary later, just append a new item to the `vocabulary`
 * array. To add a brand new chapter, copy this file as `chapter2.ts`,
 * change the metadata, and register it in `data/chapters/index.ts`.
 */
const chapter1: Chapter = {
  id: 'hsk1-ch1',
  number: 1,
  hskLevel: 1,
  titleEn: 'Greetings & Introductions',
  titleZh: '问候与介绍',
  descriptionEn:
    'Learn the most essential Mandarin greetings and how to introduce yourself.',
  descriptionZh: '学习最基础的中文问候语和自我介绍。',
  vocabulary: [
    {
      id: 'ni',
      hanzi: '你',
      pinyin: 'nǐ',
      english: 'you',
      syllables: [{ hanzi: '你', pinyin: 'nǐ' }],
      emoji: '👤',
    },
    {
      id: 'hao',
      hanzi: '好',
      pinyin: 'hǎo',
      english: 'good',
      syllables: [{ hanzi: '好', pinyin: 'hǎo' }],
      emoji: '👍',
    },
    {
      id: 'nihao',
      hanzi: '你好',
      pinyin: 'nǐ hǎo',
      english: 'hello',
      syllables: [
        { hanzi: '你', pinyin: 'nǐ' },
        { hanzi: '好', pinyin: 'hǎo' },
      ],
      emoji: '👋',
    },
    {
      id: 'wo',
      hanzi: '我',
      pinyin: 'wǒ',
      english: 'I, me',
      syllables: [{ hanzi: '我', pinyin: 'wǒ' }],
      emoji: '🙋',
    },
    {
      id: 'shi',
      hanzi: '是',
      pinyin: 'shì',
      english: 'to be (am/is/are)',
      syllables: [{ hanzi: '是', pinyin: 'shì' }],
      emoji: '🟰',
    },
    {
      id: 'laoshi',
      hanzi: '老师',
      pinyin: 'lǎoshī',
      english: 'teacher',
      syllables: [
        { hanzi: '老', pinyin: 'lǎo' },
        { hanzi: '师', pinyin: 'shī' },
      ],
      emoji: '👨‍🏫',
    },
    {
      id: 'xuesheng',
      hanzi: '学生',
      pinyin: 'xuésheng',
      english: 'student',
      syllables: [
        { hanzi: '学', pinyin: 'xué' },
        { hanzi: '生', pinyin: 'sheng' },
      ],
      emoji: '🎓',
    },
    {
      id: 'ma',
      hanzi: '吗',
      pinyin: 'ma',
      english: '(question particle)',
      syllables: [{ hanzi: '吗', pinyin: 'ma' }],
      emoji: '❓',
    },
    {
      id: 'bu',
      hanzi: '不',
      pinyin: 'bù',
      english: 'not, no',
      syllables: [{ hanzi: '不', pinyin: 'bù' }],
      emoji: '🚫',
    },
    {
      id: 'xiexie',
      hanzi: '谢谢',
      pinyin: 'xièxie',
      english: 'thank you',
      syllables: [
        { hanzi: '谢', pinyin: 'xiè' },
        { hanzi: '谢', pinyin: 'xie' },
      ],
      emoji: '🙏',
    },
  ],
  // Sentences are not used by Flash Strike yet, but the data shape is ready
  // for future read-along / sentence quiz features.
  sentences: [
    {
      id: 's1',
      english: 'Hello!',
      syllables: [
        { hanzi: '你', pinyin: 'nǐ' },
        { hanzi: '好', pinyin: 'hǎo' },
        { hanzi: '!', pinyin: '' },
      ],
    },
    {
      id: 's2',
      english: 'I am a student.',
      syllables: [
        { hanzi: '我', pinyin: 'wǒ' },
        { hanzi: '是', pinyin: 'shì' },
        { hanzi: '学', pinyin: 'xué' },
        { hanzi: '生', pinyin: 'sheng' },
        { hanzi: '。', pinyin: '' },
      ],
    },
    {
      id: 's3',
      english: 'Are you a teacher?',
      syllables: [
        { hanzi: '你', pinyin: 'nǐ' },
        { hanzi: '是', pinyin: 'shì' },
        { hanzi: '老', pinyin: 'lǎo' },
        { hanzi: '师', pinyin: 'shī' },
        { hanzi: '吗', pinyin: 'ma' },
        { hanzi: '?', pinyin: '' },
      ],
    },
  ],
};

export default chapter1;
