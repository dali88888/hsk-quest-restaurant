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
  descriptionEn: 'Weather, clothing, movement, and preparation.',
  descriptionZh: '天气、穿着、进出和准备。',
  vocabulary: [
    { id: 'h2c12-de', hanzi: '得', pinyin: 'de', english: '(degree particle, de)', syllables: [{ hanzi: '得', pinyin: 'de' }], emoji: '🔗' },
    { id: 'h2c12-xue', hanzi: '雪', pinyin: 'xuě', english: 'snow', syllables: [{ hanzi: '雪', pinyin: 'xuě' }], emoji: '❄️' },
    { id: 'h2c12-du', hanzi: '度', pinyin: 'dù', english: 'degree', syllables: [{ hanzi: '度', pinyin: 'dù' }], emoji: '🌡️' },
    { id: 'h2c12-chuan', hanzi: '穿', pinyin: 'chuān', english: 'to wear', syllables: [{ hanzi: '穿', pinyin: 'chuān' }], emoji: '👔' },
    { id: 'h2c12-chuanzhe', hanzi: '穿着', pinyin: 'chuānzhe', english: 'to be wearing', syllables: [{ hanzi: '穿', pinyin: 'chuān' }, { hanzi: '着', pinyin: 'zhe' }], emoji: '👗' },
    { id: 'h2c12-chuanshang', hanzi: '穿上', pinyin: 'chuānshàng', english: 'to put on', syllables: [{ hanzi: '穿', pinyin: 'chuān' }, { hanzi: '上', pinyin: 'shàng' }], emoji: '🧥' },
    { id: 'h2c12-jin', hanzi: '进', pinyin: 'jìn', english: 'to enter', syllables: [{ hanzi: '进', pinyin: 'jìn' }], emoji: '🚪' },
    { id: 'h2c12-chu', hanzi: '出', pinyin: 'chū', english: 'to go out', syllables: [{ hanzi: '出', pinyin: 'chū' }], emoji: '🚶' },
    { id: 'h2c12-piaoliang', hanzi: '漂亮', pinyin: 'piàoliang', english: 'pretty/beautiful', syllables: [{ hanzi: '漂', pinyin: 'piào' }, { hanzi: '亮', pinyin: 'liang' }], emoji: '💐' },
    { id: 'h2c12-qizi', hanzi: '妻子', pinyin: 'qīzi', english: 'wife', syllables: [{ hanzi: '妻', pinyin: 'qī' }, { hanzi: '子', pinyin: 'zi' }], emoji: '👰' },
    { id: 'h2c12-kaiche', hanzi: '开车', pinyin: 'kāichē', english: 'to drive a car', syllables: [{ hanzi: '开', pinyin: 'kāi' }, { hanzi: '车', pinyin: 'chē' }], emoji: '🚗' },
    { id: 'h2c12-zuoche', hanzi: '坐车', pinyin: 'zuòchē', english: 'to ride/take a car', syllables: [{ hanzi: '坐', pinyin: 'zuò' }, { hanzi: '车', pinyin: 'chē' }], emoji: '🚕' },
    { id: 'h2c12-zhunbei_prepare', hanzi: '准备', pinyin: 'zhǔnbèi', english: 'to prepare', syllables: [{ hanzi: '准', pinyin: 'zhǔn' }, { hanzi: '备', pinyin: 'bèi' }], emoji: '📝' },
    { id: 'h2c12-zhunbei_plan', hanzi: '准备', pinyin: 'zhǔnbèi', english: 'to plan', syllables: [{ hanzi: '准', pinyin: 'zhǔn' }, { hanzi: '备', pinyin: 'bèi' }], emoji: '📅' },
  ],
  sentences: [
    { id: 's1', english: "You're wearing too little, it's snowing outside.", syllables: [{ hanzi: '你', pinyin: 'nǐ' }, { hanzi: '穿', pinyin: 'chuān' }, { hanzi: '得', pinyin: 'de' }, { hanzi: '太', pinyin: 'tài' }, { hanzi: '少', pinyin: 'shǎo' }, { hanzi: '了', pinyin: 'le' }, { hanzi: '，', pinyin: '' }, { hanzi: '外', pinyin: 'wài' }, { hanzi: '面', pinyin: 'miàn' }, { hanzi: '下', pinyin: 'xià' }, { hanzi: '雪', pinyin: 'xuě' }, { hanzi: '了', pinyin: 'le' }, { hanzi: '。', pinyin: '' }] },
    { id: 's2', english: 'My wife is preparing to drive out.', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '妻', pinyin: 'qī' }, { hanzi: '子', pinyin: 'zi' }, { hanzi: '准', pinyin: 'zhǔn' }, { hanzi: '备', pinyin: 'bèi' }, { hanzi: '开', pinyin: 'kāi' }, { hanzi: '车', pinyin: 'chē' }, { hanzi: '出', pinyin: 'chū' }, { hanzi: '去', pinyin: 'qù' }, { hanzi: '。', pinyin: '' }] },
    { id: 's3', english: 'Put on your coat and come in.', syllables: [{ hanzi: '穿', pinyin: 'chuān' }, { hanzi: '上', pinyin: 'shàng' }, { hanzi: '衣', pinyin: 'yī' }, { hanzi: '服', pinyin: 'fu' }, { hanzi: '进', pinyin: 'jìn' }, { hanzi: '来', pinyin: 'lái' }, { hanzi: '。', pinyin: '' }] },
  ],
};

export default hsk2Chapter12;
