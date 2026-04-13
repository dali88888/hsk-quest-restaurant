import type { Chapter } from '../../types/chapter';

/**
 * HSK 2, Chapter 14 — Have You Seen That Movie?
 * Based on HSK Standard Course 2 textbook
 */
const hsk2Chapter14: Chapter = {
  id: 'hsk2-ch14',
  number: 14,
  hskLevel: 2,
  titleEn: 'Have You Seen That Movie?',
  titleZh: '你看过那个电影吗',
  descriptionEn: 'Experience, weather, and entertainment.',
  descriptionZh: '经历、天气和娱乐。',
  vocabulary: [
    {
      id: 'youyisi',
      hanzi: '有意思',
      pinyin: 'yǒu yìsi',
      english: 'interesting',
      syllables: [
        { hanzi: '有', pinyin: 'yǒu' },
        { hanzi: '意', pinyin: 'yì' },
        { hanzi: '思', pinyin: 'si' },
      ],
      emoji: '🤩',
    },
    {
      id: 'danshi',
      hanzi: '但是',
      pinyin: 'dànshì',
      english: 'but/however',
      syllables: [
        { hanzi: '但', pinyin: 'dàn' },
        { hanzi: '是', pinyin: 'shì' },
      ],
      emoji: '↩️',
    },
    {
      id: 'suiran',
      hanzi: '虽然',
      pinyin: 'suīrán',
      english: 'although',
      syllables: [
        { hanzi: '虽', pinyin: 'suī' },
        { hanzi: '然', pinyin: 'rán' },
      ],
      emoji: '🔀',
    },
    {
      id: 'ci',
      hanzi: '次',
      pinyin: 'cì',
      english: 'time (occurrence)',
      syllables: [{ hanzi: '次', pinyin: 'cì' }],
      emoji: '🔢',
    },
    {
      id: 'wanr',
      hanzi: '玩儿',
      pinyin: 'wánr',
      english: 'to play/have fun',
      syllables: [
        { hanzi: '玩', pinyin: 'wán' },
        { hanzi: '儿', pinyin: 'r' },
      ],
      emoji: '🎮',
    },
    {
      id: 'qing',
      hanzi: '晴',
      pinyin: 'qíng',
      english: 'sunny',
      syllables: [{ hanzi: '晴', pinyin: 'qíng' }],
      emoji: '☀️',
    },
    {
      id: 'qingtian',
      hanzi: '晴天',
      pinyin: 'qíngtiān',
      english: 'sunny day',
      syllables: [
        { hanzi: '晴', pinyin: 'qíng' },
        { hanzi: '天', pinyin: 'tiān' },
      ],
      emoji: '🌞',
    },
    {
      id: 'yintian',
      hanzi: '阴天',
      pinyin: 'yīntiān',
      english: 'cloudy day',
      syllables: [
        { hanzi: '阴', pinyin: 'yīn' },
        { hanzi: '天', pinyin: 'tiān' },
      ],
      emoji: '☁️',
    },
  ],
  sentences: [
    {
      id: 's1',
      english: 'Have you seen that movie? It is very interesting.',
      syllables: [
        { hanzi: '你', pinyin: 'nǐ' },
        { hanzi: '看', pinyin: 'kàn' },
        { hanzi: '过', pinyin: 'guo' },
        { hanzi: '那', pinyin: 'nà' },
        { hanzi: '个', pinyin: 'ge' },
        { hanzi: '电', pinyin: 'diàn' },
        { hanzi: '影', pinyin: 'yǐng' },
        { hanzi: '吗', pinyin: 'ma' },
        { hanzi: '？', pinyin: '' },
        { hanzi: '很', pinyin: 'hěn' },
        { hanzi: '有', pinyin: 'yǒu' },
        { hanzi: '意', pinyin: 'yì' },
        { hanzi: '思', pinyin: 'si' },
        { hanzi: '。', pinyin: '' },
      ],
    },
    {
      id: 's2',
      english: 'Although it is a cloudy day, we still want to go out and play.',
      syllables: [
        { hanzi: '虽', pinyin: 'suī' },
        { hanzi: '然', pinyin: 'rán' },
        { hanzi: '是', pinyin: 'shì' },
        { hanzi: '阴', pinyin: 'yīn' },
        { hanzi: '天', pinyin: 'tiān' },
        { hanzi: '，', pinyin: '' },
        { hanzi: '我', pinyin: 'wǒ' },
        { hanzi: '们', pinyin: 'men' },
        { hanzi: '还', pinyin: 'hái' },
        { hanzi: '是', pinyin: 'shì' },
        { hanzi: '想', pinyin: 'xiǎng' },
        { hanzi: '出', pinyin: 'chū' },
        { hanzi: '去', pinyin: 'qù' },
        { hanzi: '玩', pinyin: 'wán' },
        { hanzi: '儿', pinyin: 'r' },
        { hanzi: '。', pinyin: '' },
      ],
    },
  ],
};

export default hsk2Chapter14;
