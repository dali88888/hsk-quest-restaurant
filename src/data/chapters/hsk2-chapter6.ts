import type { Chapter } from '../../types/chapter';

/**
 * HSK 2, Chapter 6 — Food, Transportation & Frequency
 * Based on HSK Standard Course 2 textbook
 */
const hsk2Chapter6: Chapter = {
  id: 'hsk2-ch6',
  number: 6,
  hskLevel: 2,
  titleEn: 'Why Did You Stop Eating?',
  titleZh: '你怎么不吃了',
  descriptionEn: 'Food, transportation, and frequency.',
  descriptionZh: '食物、交通和频率。',
  vocabulary: [
    {
      id: 'men2',
      hanzi: '门',
      pinyin: 'mén',
      english: 'door',
      syllables: [{ hanzi: '门', pinyin: 'mén' }],
      emoji: '🚪',
    },
    {
      id: 'zixingche',
      hanzi: '自行车',
      pinyin: 'zìxíngchē',
      english: 'bicycle',
      syllables: [
        { hanzi: '自', pinyin: 'zì' },
        { hanzi: '行', pinyin: 'xíng' },
        { hanzi: '车', pinyin: 'chē' },
      ],
      emoji: '🚲',
    },
    {
      id: 'yangrou',
      hanzi: '羊肉',
      pinyin: 'yángròu',
      english: 'mutton/lamb',
      syllables: [
        { hanzi: '羊', pinyin: 'yáng' },
        { hanzi: '肉', pinyin: 'ròu' },
      ],
      emoji: '🐑',
    },
    {
      id: 'haochi',
      hanzi: '好吃',
      pinyin: 'hǎochī',
      english: 'delicious',
      syllables: [
        { hanzi: '好', pinyin: 'hǎo' },
        { hanzi: '吃', pinyin: 'chī' },
      ],
      emoji: '😋',
    },
    {
      id: 'miantiao',
      hanzi: '面条',
      pinyin: 'miàntiáo',
      english: 'noodles',
      syllables: [
        { hanzi: '面', pinyin: 'miàn' },
        { hanzi: '条', pinyin: 'tiáo' },
      ],
      emoji: '🍜',
    },
    {
      id: 'yinwei',
      hanzi: '因为',
      pinyin: 'yīnwèi',
      english: 'because',
      syllables: [
        { hanzi: '因', pinyin: 'yīn' },
        { hanzi: '为', pinyin: 'wèi' },
      ],
      emoji: '💡',
    },
    {
      id: 'suoyi',
      hanzi: '所以',
      pinyin: 'suǒyǐ',
      english: 'so/therefore',
      syllables: [
        { hanzi: '所', pinyin: 'suǒ' },
        { hanzi: '以', pinyin: 'yǐ' },
      ],
      emoji: '➡️',
    },
    {
      id: 'youyong',
      hanzi: '游泳',
      pinyin: 'yóuyǒng',
      english: 'to swim',
      syllables: [
        { hanzi: '游', pinyin: 'yóu' },
        { hanzi: '泳', pinyin: 'yǒng' },
      ],
      emoji: '🏊',
    },
    {
      id: 'jingchang',
      hanzi: '经常',
      pinyin: 'jīngcháng',
      english: 'often',
      syllables: [
        { hanzi: '经', pinyin: 'jīng' },
        { hanzi: '常', pinyin: 'cháng' },
      ],
      emoji: '🔄',
    },
    {
      id: 'changchang',
      hanzi: '常常',
      pinyin: 'chángcháng',
      english: 'often',
      syllables: [
        { hanzi: '常', pinyin: 'cháng' },
        { hanzi: '常', pinyin: 'cháng' },
      ],
      emoji: '🔁',
    },
    {
      id: 'gongjin',
      hanzi: '公斤',
      pinyin: 'gōngjīn',
      english: 'kilogram',
      syllables: [
        { hanzi: '公', pinyin: 'gōng' },
        { hanzi: '斤', pinyin: 'jīn' },
      ],
      emoji: '⚖️',
    },
  ],
  sentences: [
    {
      id: 's1',
      english: 'The noodles are delicious!',
      syllables: [
        { hanzi: '面', pinyin: 'miàn' },
        { hanzi: '条', pinyin: 'tiáo' },
        { hanzi: '很', pinyin: 'hěn' },
        { hanzi: '好', pinyin: 'hǎo' },
        { hanzi: '吃', pinyin: 'chī' },
        { hanzi: '！', pinyin: '' },
      ],
    },
    {
      id: 's2',
      english: 'Because I often swim, so I am healthy.',
      syllables: [
        { hanzi: '因', pinyin: 'yīn' },
        { hanzi: '为', pinyin: 'wèi' },
        { hanzi: '我', pinyin: 'wǒ' },
        { hanzi: '经', pinyin: 'jīng' },
        { hanzi: '常', pinyin: 'cháng' },
        { hanzi: '游', pinyin: 'yóu' },
        { hanzi: '泳', pinyin: 'yǒng' },
        { hanzi: '，', pinyin: '' },
        { hanzi: '所', pinyin: 'suǒ' },
        { hanzi: '以', pinyin: 'yǐ' },
        { hanzi: '身', pinyin: 'shēn' },
        { hanzi: '体', pinyin: 'tǐ' },
        { hanzi: '很', pinyin: 'hěn' },
        { hanzi: '好', pinyin: 'hǎo' },
        { hanzi: '。', pinyin: '' },
      ],
    },
  ],
};

export default hsk2Chapter6;
