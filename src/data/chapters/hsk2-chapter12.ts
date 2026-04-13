import type { Chapter } from '../../types/chapter';

/**
 * HSK 2, Chapter 12 — You're Wearing Too Little
 * Based on HSK Standard Course 2 textbook
 */
const hsk2Chapter12: Chapter = {
  id: 'hsk2-ch12',
  number: 12,
  hskLevel: 2,
  titleEn: "You're Wearing Too Little",
  titleZh: '你穿得太少了',
  descriptionEn: 'Weather, clothing, and movement.',
  descriptionZh: '天气、穿着和进出。',
  vocabulary: [
    {
      id: 'de12',
      hanzi: '得',
      pinyin: 'de',
      english: 'complement particle',
      syllables: [{ hanzi: '得', pinyin: 'de' }],
      emoji: '🔗',
    },
    {
      id: 'xue',
      hanzi: '雪',
      pinyin: 'xuě',
      english: 'snow',
      syllables: [{ hanzi: '雪', pinyin: 'xuě' }],
      emoji: '❄️',
    },
    {
      id: 'du',
      hanzi: '度',
      pinyin: 'dù',
      english: 'degree',
      syllables: [{ hanzi: '度', pinyin: 'dù' }],
      emoji: '🌡️',
    },
    {
      id: 'chuan',
      hanzi: '穿',
      pinyin: 'chuān',
      english: 'to wear',
      syllables: [{ hanzi: '穿', pinyin: 'chuān' }],
      emoji: '👔',
    },
    {
      id: 'jin',
      hanzi: '进',
      pinyin: 'jìn',
      english: 'to enter',
      syllables: [{ hanzi: '进', pinyin: 'jìn' }],
      emoji: '🚪',
    },
    {
      id: 'chu',
      hanzi: '出',
      pinyin: 'chū',
      english: 'to go out',
      syllables: [{ hanzi: '出', pinyin: 'chū' }],
      emoji: '🚶',
    },
    {
      id: 'piaoliang',
      hanzi: '漂亮',
      pinyin: 'piàoliang',
      english: 'pretty/beautiful',
      syllables: [
        { hanzi: '漂', pinyin: 'piào' },
        { hanzi: '亮', pinyin: 'liang' },
      ],
      emoji: '💐',
    },
  ],
  sentences: [
    {
      id: 's1',
      english: "You're wearing too little, it's snowing outside.",
      syllables: [
        { hanzi: '你', pinyin: 'nǐ' },
        { hanzi: '穿', pinyin: 'chuān' },
        { hanzi: '得', pinyin: 'de' },
        { hanzi: '太', pinyin: 'tài' },
        { hanzi: '少', pinyin: 'shǎo' },
        { hanzi: '了', pinyin: 'le' },
        { hanzi: '，', pinyin: '' },
        { hanzi: '外', pinyin: 'wài' },
        { hanzi: '面', pinyin: 'miàn' },
        { hanzi: '下', pinyin: 'xià' },
        { hanzi: '雪', pinyin: 'xuě' },
        { hanzi: '了', pinyin: 'le' },
        { hanzi: '。', pinyin: '' },
      ],
    },
    {
      id: 's2',
      english: 'She is wearing a very pretty dress.',
      syllables: [
        { hanzi: '她', pinyin: 'tā' },
        { hanzi: '穿', pinyin: 'chuān' },
        { hanzi: '得', pinyin: 'de' },
        { hanzi: '很', pinyin: 'hěn' },
        { hanzi: '漂', pinyin: 'piào' },
        { hanzi: '亮', pinyin: 'liang' },
        { hanzi: '。', pinyin: '' },
      ],
    },
  ],
};

export default hsk2Chapter12;
