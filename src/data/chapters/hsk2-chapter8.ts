import type { Chapter } from '../../types/chapter';

/**
 * HSK 2, Chapter 8 — Communication, Requests & Prices
 * Based on HSK Standard Course 2 textbook
 */
const hsk2Chapter8: Chapter = {
  id: 'hsk2-ch8',
  number: 8,
  hskLevel: 2,
  titleEn: 'Let Me Think Before I Tell You',
  titleZh: '让我想想再告诉你',
  descriptionEn: 'Communication, requests, and prices.',
  descriptionZh: '沟通、请求和价格。',
  vocabulary: [
    {
      id: 'zai4',
      hanzi: '再',
      pinyin: 'zài',
      english: 'again',
      syllables: [{ hanzi: '再', pinyin: 'zài' }],
      emoji: '🔄',
    },
    {
      id: 'rang4',
      hanzi: '让',
      pinyin: 'ràng',
      english: 'to let/allow',
      syllables: [{ hanzi: '让', pinyin: 'ràng' }],
      emoji: '🤲',
    },
    {
      id: 'gaosu',
      hanzi: '告诉',
      pinyin: 'gàosu',
      english: 'to tell',
      syllables: [
        { hanzi: '告', pinyin: 'gào' },
        { hanzi: '诉', pinyin: 'su' },
      ],
      emoji: '🗣️',
    },
    {
      id: 'deng3',
      hanzi: '等',
      pinyin: 'děng',
      english: 'to wait',
      syllables: [{ hanzi: '等', pinyin: 'děng' }],
      emoji: '⏳',
    },
    {
      id: 'zhao3',
      hanzi: '找',
      pinyin: 'zhǎo',
      english: 'to look for',
      syllables: [{ hanzi: '找', pinyin: 'zhǎo' }],
      emoji: '🔍',
    },
    {
      id: 'shiqing',
      hanzi: '事情',
      pinyin: 'shìqing',
      english: 'matter/thing',
      syllables: [
        { hanzi: '事', pinyin: 'shì' },
        { hanzi: '情', pinyin: 'qing' },
      ],
      emoji: '📋',
    },
    {
      id: 'fuwuyuan',
      hanzi: '服务员',
      pinyin: 'fúwùyuán',
      english: 'waiter/attendant',
      syllables: [
        { hanzi: '服', pinyin: 'fú' },
        { hanzi: '务', pinyin: 'wù' },
        { hanzi: '员', pinyin: 'yuán' },
      ],
      emoji: '🧑‍🍳',
    },
    {
      id: 'gui4',
      hanzi: '贵',
      pinyin: 'guì',
      english: 'expensive',
      syllables: [{ hanzi: '贵', pinyin: 'guì' }],
      emoji: '💰',
    },
    {
      id: 'jian4',
      hanzi: '贱',
      pinyin: 'jiàn',
      english: 'cheap (derogatory)',
      syllables: [{ hanzi: '贱', pinyin: 'jiàn' }],
      emoji: '🏷️',
    },
    {
      id: 'pianyi',
      hanzi: '便宜',
      pinyin: 'piányi',
      english: 'cheap/inexpensive',
      syllables: [
        { hanzi: '便', pinyin: 'pián' },
        { hanzi: '宜', pinyin: 'yi' },
      ],
      emoji: '🤑',
    },
  ],
  sentences: [
    {
      id: 's1',
      english: 'Let me think, then I will tell you.',
      syllables: [
        { hanzi: '让', pinyin: 'ràng' },
        { hanzi: '我', pinyin: 'wǒ' },
        { hanzi: '想', pinyin: 'xiǎng' },
        { hanzi: '想', pinyin: 'xiǎng' },
        { hanzi: '再', pinyin: 'zài' },
        { hanzi: '告', pinyin: 'gào' },
        { hanzi: '诉', pinyin: 'su' },
        { hanzi: '你', pinyin: 'nǐ' },
        { hanzi: '。', pinyin: '' },
      ],
    },
    {
      id: 's2',
      english: 'Waiter, this is too expensive, is there something cheaper?',
      syllables: [
        { hanzi: '服', pinyin: 'fú' },
        { hanzi: '务', pinyin: 'wù' },
        { hanzi: '员', pinyin: 'yuán' },
        { hanzi: '，', pinyin: '' },
        { hanzi: '这', pinyin: 'zhè' },
        { hanzi: '个', pinyin: 'ge' },
        { hanzi: '太', pinyin: 'tài' },
        { hanzi: '贵', pinyin: 'guì' },
        { hanzi: '了', pinyin: 'le' },
        { hanzi: '，', pinyin: '' },
        { hanzi: '有', pinyin: 'yǒu' },
        { hanzi: '便', pinyin: 'pián' },
        { hanzi: '宜', pinyin: 'yi' },
        { hanzi: '的', pinyin: 'de' },
        { hanzi: '吗', pinyin: 'ma' },
        { hanzi: '？', pinyin: '' },
      ],
    },
  ],
};

export default hsk2Chapter8;
