import type { Chapter } from '../../types/chapter';

/**
 * HSK 1, Chapter 3 — Names & Identities
 * Based on HSK Standard Course 1 textbook
 */
const chapter3: Chapter = {
  id: 'hsk1-ch3',
  number: 3,
  hskLevel: 1,
  titleEn: "What's Your Name?",
  titleZh: '你叫什么名字',
  descriptionEn:
    'Introduce yourself, talk about occupations, and learn country names.',
  descriptionZh: '自我介绍、职业和国家名称。',
  vocabulary: [
    {
      id: 'jiao',
      hanzi: '叫',
      pinyin: 'jiào',
      english: 'to be called',
      syllables: [{ hanzi: '叫', pinyin: 'jiào' }],
      emoji: '📢',
    },
    {
      id: 'shenme',
      hanzi: '什么',
      pinyin: 'shénme',
      english: 'what',
      syllables: [
        { hanzi: '什', pinyin: 'shén' },
        { hanzi: '么', pinyin: 'me' },
      ],
      emoji: '❓',
    },
    {
      id: 'mingzi',
      hanzi: '名字',
      pinyin: 'míngzi',
      english: 'name',
      syllables: [
        { hanzi: '名', pinyin: 'míng' },
        { hanzi: '字', pinyin: 'zi' },
      ],
      emoji: '📝',
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
      id: 'ma',
      hanzi: '吗',
      pinyin: 'ma',
      english: '(question particle)',
      syllables: [{ hanzi: '吗', pinyin: 'ma' }],
      emoji: '🤔',
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
      id: 'ren',
      hanzi: '人',
      pinyin: 'rén',
      english: 'person, people',
      syllables: [{ hanzi: '人', pinyin: 'rén' }],
      emoji: '🧑',
    },
    {
      id: 'zhongguo',
      hanzi: '中国',
      pinyin: 'Zhōngguó',
      english: 'China',
      syllables: [
        { hanzi: '中', pinyin: 'Zhōng' },
        { hanzi: '国', pinyin: 'guó' },
      ],
      emoji: '🇨🇳',
    },
    {
      id: 'meiguo',
      hanzi: '美国',
      pinyin: 'Měiguó',
      english: 'America / USA',
      syllables: [
        { hanzi: '美', pinyin: 'Měi' },
        { hanzi: '国', pinyin: 'guó' },
      ],
      emoji: '🇺🇸',
    },
    {
      id: 'ri',
      hanzi: '日',
      pinyin: 'rì',
      english: 'sun, day',
      syllables: [{ hanzi: '日', pinyin: 'rì' }],
      emoji: '☀️',
    },
    {
      id: 'yue',
      hanzi: '月',
      pinyin: 'yuè',
      english: 'moon, month',
      syllables: [{ hanzi: '月', pinyin: 'yuè' }],
      emoji: '🌙',
    },
  ],
  sentences: [
    {
      id: 's1',
      english: 'What is your name?',
      syllables: [
        { hanzi: '你', pinyin: 'nǐ' },
        { hanzi: '叫', pinyin: 'jiào' },
        { hanzi: '什', pinyin: 'shén' },
        { hanzi: '么', pinyin: 'me' },
        { hanzi: '名', pinyin: 'míng' },
        { hanzi: '字', pinyin: 'zi' },
        { hanzi: '？', pinyin: '' },
      ],
    },
    {
      id: 's2',
      english: 'I am a teacher.',
      syllables: [
        { hanzi: '我', pinyin: 'wǒ' },
        { hanzi: '是', pinyin: 'shì' },
        { hanzi: '老', pinyin: 'lǎo' },
        { hanzi: '师', pinyin: 'shī' },
        { hanzi: '。', pinyin: '' },
      ],
    },
    {
      id: 's3',
      english: 'Are you a student?',
      syllables: [
        { hanzi: '你', pinyin: 'nǐ' },
        { hanzi: '是', pinyin: 'shì' },
        { hanzi: '学', pinyin: 'xué' },
        { hanzi: '生', pinyin: 'sheng' },
        { hanzi: '吗', pinyin: 'ma' },
        { hanzi: '？', pinyin: '' },
      ],
    },
  ],
};

export default chapter3;
