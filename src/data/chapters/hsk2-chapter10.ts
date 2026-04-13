import type { Chapter } from '../../types/chapter';

/**
 * HSK 2, Chapter 10 — Daily Life, Food & Instructions
 * Based on HSK Standard Course 2 textbook
 */
const hsk2Chapter10: Chapter = {
  id: 'hsk2-ch10',
  number: 10,
  hskLevel: 2,
  titleEn: 'Stop Looking, the Phone Is on the Table',
  titleZh: '别找了，手机在桌子上呢',
  descriptionEn: 'Daily life, food, and instructions.',
  descriptionZh: '日常生活、食物和指令。',
  vocabulary: [
    {
      id: 'ke4',
      hanzi: '课',
      pinyin: 'kè',
      english: 'class/lesson',
      syllables: [{ hanzi: '课', pinyin: 'kè' }],
      emoji: '📖',
    },
    {
      id: 'bangzhu',
      hanzi: '帮助',
      pinyin: 'bāngzhù',
      english: 'to help',
      syllables: [
        { hanzi: '帮', pinyin: 'bāng' },
        { hanzi: '助', pinyin: 'zhù' },
      ],
      emoji: '🤝',
    },
    {
      id: 'bie2',
      hanzi: '别',
      pinyin: 'bié',
      english: "don't",
      syllables: [{ hanzi: '别', pinyin: 'bié' }],
      emoji: '🚫',
    },
    {
      id: 'ji1',
      hanzi: '鸡',
      pinyin: 'jī',
      english: 'chicken',
      syllables: [{ hanzi: '鸡', pinyin: 'jī' }],
      emoji: '🐔',
    },
    {
      id: 'dan4',
      hanzi: '蛋',
      pinyin: 'dàn',
      english: 'egg',
      syllables: [{ hanzi: '蛋', pinyin: 'dàn' }],
      emoji: '🥚',
    },
    {
      id: 'jidan',
      hanzi: '鸡蛋',
      pinyin: 'jīdàn',
      english: 'chicken egg',
      syllables: [
        { hanzi: '鸡', pinyin: 'jī' },
        { hanzi: '蛋', pinyin: 'dàn' },
      ],
      emoji: '🍳',
    },
    {
      id: 'xigua',
      hanzi: '西瓜',
      pinyin: 'xīguā',
      english: 'watermelon',
      syllables: [
        { hanzi: '西', pinyin: 'xī' },
        { hanzi: '瓜', pinyin: 'guā' },
      ],
      emoji: '🍉',
    },
    {
      id: 'zhengzai',
      hanzi: '正在',
      pinyin: 'zhèngzài',
      english: 'right now (doing)',
      syllables: [
        { hanzi: '正', pinyin: 'zhèng' },
        { hanzi: '在', pinyin: 'zài' },
      ],
      emoji: '⏱️',
    },
    {
      id: 'shouji',
      hanzi: '手机',
      pinyin: 'shǒujī',
      english: 'cellphone',
      syllables: [
        { hanzi: '手', pinyin: 'shǒu' },
        { hanzi: '机', pinyin: 'jī' },
      ],
      emoji: '📱',
    },
    {
      id: 'xi3',
      hanzi: '洗',
      pinyin: 'xǐ',
      english: 'to wash',
      syllables: [{ hanzi: '洗', pinyin: 'xǐ' }],
      emoji: '🧼',
    },
  ],
  sentences: [
    {
      id: 's1',
      english: "Don't look for it, the phone is on the table.",
      syllables: [
        { hanzi: '别', pinyin: 'bié' },
        { hanzi: '找', pinyin: 'zhǎo' },
        { hanzi: '了', pinyin: 'le' },
        { hanzi: '，', pinyin: '' },
        { hanzi: '手', pinyin: 'shǒu' },
        { hanzi: '机', pinyin: 'jī' },
        { hanzi: '在', pinyin: 'zài' },
        { hanzi: '桌', pinyin: 'zhuō' },
        { hanzi: '子', pinyin: 'zi' },
        { hanzi: '上', pinyin: 'shàng' },
        { hanzi: '呢', pinyin: 'ne' },
        { hanzi: '。', pinyin: '' },
      ],
    },
    {
      id: 's2',
      english: 'I am washing the watermelon right now.',
      syllables: [
        { hanzi: '我', pinyin: 'wǒ' },
        { hanzi: '正', pinyin: 'zhèng' },
        { hanzi: '在', pinyin: 'zài' },
        { hanzi: '洗', pinyin: 'xǐ' },
        { hanzi: '西', pinyin: 'xī' },
        { hanzi: '瓜', pinyin: 'guā' },
        { hanzi: '。', pinyin: '' },
      ],
    },
  ],
};

export default hsk2Chapter10;
