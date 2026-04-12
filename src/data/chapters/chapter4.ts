import type { Chapter } from '../../types/chapter';

/**
 * HSK 1, Chapter 4 — People & Languages
 * Based on HSK Standard Course 1 textbook
 */
const chapter4: Chapter = {
  id: 'hsk1-ch4',
  number: 4,
  hskLevel: 1,
  titleEn: 'She Is My Chinese Teacher',
  titleZh: '她是我的汉语老师',
  descriptionEn:
    'Talk about other people, ask questions, and discuss languages.',
  descriptionZh: '谈论他人、提问和讨论语言。',
  vocabulary: [
    {
      id: 'ta-he',
      hanzi: '他',
      pinyin: 'tā',
      english: 'he, him',
      syllables: [{ hanzi: '他', pinyin: 'tā' }],
      emoji: '👦',
    },
    {
      id: 'ta-she',
      hanzi: '她',
      pinyin: 'tā',
      english: 'she, her',
      syllables: [{ hanzi: '她', pinyin: 'tā' }],
      emoji: '👧',
    },
    {
      id: 'shei',
      hanzi: '谁',
      pinyin: 'shéi',
      english: 'who',
      syllables: [{ hanzi: '谁', pinyin: 'shéi' }],
      emoji: '🔍',
    },
    {
      id: 'de',
      hanzi: '的',
      pinyin: 'de',
      english: '(possessive particle)',
      syllables: [{ hanzi: '的', pinyin: 'de' }],
      emoji: '🔗',
    },
    {
      id: 'hanyu',
      hanzi: '汉语',
      pinyin: 'Hànyǔ',
      english: 'Chinese (language)',
      syllables: [
        { hanzi: '汉', pinyin: 'Hàn' },
        { hanzi: '语', pinyin: 'yǔ' },
      ],
      emoji: '🗣️',
    },
    {
      id: 'na',
      hanzi: '哪',
      pinyin: 'nǎ',
      english: 'which, where',
      syllables: [{ hanzi: '哪', pinyin: 'nǎ' }],
      emoji: '👉',
    },
    {
      id: 'guo',
      hanzi: '国',
      pinyin: 'guó',
      english: 'country, nation',
      syllables: [{ hanzi: '国', pinyin: 'guó' }],
      emoji: '🌍',
    },
    {
      id: 'ne',
      hanzi: '呢',
      pinyin: 'ne',
      english: '(question particle)',
      syllables: [{ hanzi: '呢', pinyin: 'ne' }],
      emoji: '💬',
    },
    {
      id: 'tongxue',
      hanzi: '同学',
      pinyin: 'tóngxué',
      english: 'classmate',
      syllables: [
        { hanzi: '同', pinyin: 'tóng' },
        { hanzi: '学', pinyin: 'xué' },
      ],
      emoji: '🧑‍🤝‍🧑',
    },
    {
      id: 'pengyou',
      hanzi: '朋友',
      pinyin: 'péngyou',
      english: 'friend',
      syllables: [
        { hanzi: '朋', pinyin: 'péng' },
        { hanzi: '友', pinyin: 'you' },
      ],
      emoji: '🤝',
    },
  ],
  sentences: [
    {
      id: 's1',
      english: 'Who is he?',
      syllables: [
        { hanzi: '他', pinyin: 'tā' },
        { hanzi: '是', pinyin: 'shì' },
        { hanzi: '谁', pinyin: 'shéi' },
        { hanzi: '？', pinyin: '' },
      ],
    },
    {
      id: 's2',
      english: 'She is my friend.',
      syllables: [
        { hanzi: '她', pinyin: 'tā' },
        { hanzi: '是', pinyin: 'shì' },
        { hanzi: '我', pinyin: 'wǒ' },
        { hanzi: '的', pinyin: 'de' },
        { hanzi: '朋', pinyin: 'péng' },
        { hanzi: '友', pinyin: 'you' },
        { hanzi: '。', pinyin: '' },
      ],
    },
    {
      id: 's3',
      english: 'Which country is your classmate from?',
      syllables: [
        { hanzi: '你', pinyin: 'nǐ' },
        { hanzi: '同', pinyin: 'tóng' },
        { hanzi: '学', pinyin: 'xué' },
        { hanzi: '是', pinyin: 'shì' },
        { hanzi: '哪', pinyin: 'nǎ' },
        { hanzi: '国', pinyin: 'guó' },
        { hanzi: '人', pinyin: 'rén' },
        { hanzi: '？', pinyin: '' },
      ],
    },
  ],
};

export default chapter4;
