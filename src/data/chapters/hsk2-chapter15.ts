import type { Chapter } from '../../types/chapter';

/**
 * HSK 2, Chapter 15 — New Year Is Coming
 * Based on HSK Standard Course 2 textbook
 */
const hsk2Chapter15: Chapter = {
  id: 'hsk2-ch15',
  number: 15,
  hskLevel: 2,
  titleEn: 'New Year Is Coming',
  titleZh: '新年就要到了',
  descriptionEn: 'Travel, tickets, stations, and celebrations.',
  descriptionZh: '旅行、票务、车站和庆祝。',
  vocabulary: [
    { id: 'h2c15-xinnian', hanzi: '新年', pinyin: 'xīnnián', english: 'New Year', syllables: [{ hanzi: '新', pinyin: 'xīn' }, { hanzi: '年', pinyin: 'nián' }], emoji: '🎆' },
    { id: 'h2c15-piao', hanzi: '票', pinyin: 'piào', english: 'ticket', syllables: [{ hanzi: '票', pinyin: 'piào' }], emoji: '🎫' },
    { id: 'h2c15-chepiao', hanzi: '车票', pinyin: 'chēpiào', english: 'train/bus ticket', syllables: [{ hanzi: '车', pinyin: 'chē' }, { hanzi: '票', pinyin: 'piào' }], emoji: '🚂' },
    { id: 'h2c15-feijipiao', hanzi: '飞机票', pinyin: 'fēijīpiào', english: 'plane ticket', syllables: [{ hanzi: '飞', pinyin: 'fēi' }, { hanzi: '机', pinyin: 'jī' }, { hanzi: '票', pinyin: 'piào' }], emoji: '✈️' },
    { id: 'h2c15-jipiao', hanzi: '机票', pinyin: 'jīpiào', english: 'air ticket', syllables: [{ hanzi: '机', pinyin: 'jī' }, { hanzi: '票', pinyin: 'piào' }], emoji: '🎟️' },
    { id: 'h2c15-chezhan', hanzi: '车站', pinyin: 'chēzhàn', english: 'station', syllables: [{ hanzi: '车', pinyin: 'chē' }, { hanzi: '站', pinyin: 'zhàn' }], emoji: '🚏' },
    { id: 'h2c15-huochezhan', hanzi: '火车站', pinyin: 'huǒchēzhàn', english: 'train station', syllables: [{ hanzi: '火', pinyin: 'huǒ' }, { hanzi: '车', pinyin: 'chē' }, { hanzi: '站', pinyin: 'zhàn' }], emoji: '🚉' },
    { id: 'h2c15-dajia', hanzi: '大家', pinyin: 'dàjiā', english: 'everyone', syllables: [{ hanzi: '大', pinyin: 'dà' }, { hanzi: '家', pinyin: 'jiā' }], emoji: '👥' },
    { id: 'h2c15-geng', hanzi: '更', pinyin: 'gèng', english: 'even more', syllables: [{ hanzi: '更', pinyin: 'gèng' }], emoji: '⬆️' },
    { id: 'h2c15-xinnianhao', hanzi: '新年好', pinyin: 'xīnnián hǎo', english: 'Happy New Year', syllables: [{ hanzi: '新', pinyin: 'xīn' }, { hanzi: '年', pinyin: 'nián' }, { hanzi: '好', pinyin: 'hǎo' }], emoji: '🎊' },
    { id: 'h2c15-xinniankuaile', hanzi: '新年快乐', pinyin: 'xīnnián kuàilè', english: 'Happy New Year', syllables: [{ hanzi: '新', pinyin: 'xīn' }, { hanzi: '年', pinyin: 'nián' }, { hanzi: '快', pinyin: 'kuài' }, { hanzi: '乐', pinyin: 'lè' }], emoji: '🎉' },
  ],
  sentences: [
    { id: 's1', english: 'New Year is coming soon.', syllables: [{ hanzi: '新', pinyin: 'xīn' }, { hanzi: '年', pinyin: 'nián' }, { hanzi: '就', pinyin: 'jiù' }, { hanzi: '要', pinyin: 'yào' }, { hanzi: '到', pinyin: 'dào' }, { hanzi: '了', pinyin: 'le' }, { hanzi: '。', pinyin: '' }] },
    { id: 's2', english: 'I bought a plane ticket at the train station.', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '火', pinyin: 'huǒ' }, { hanzi: '车', pinyin: 'chē' }, { hanzi: '站', pinyin: 'zhàn' }, { hanzi: '买', pinyin: 'mǎi' }, { hanzi: '了', pinyin: 'le' }, { hanzi: '飞', pinyin: 'fēi' }, { hanzi: '机', pinyin: 'jī' }, { hanzi: '票', pinyin: 'piào' }, { hanzi: '。', pinyin: '' }] },
    { id: 's3', english: 'Happy New Year, everyone!', syllables: [{ hanzi: '大', pinyin: 'dà' }, { hanzi: '家', pinyin: 'jiā' }, { hanzi: '新', pinyin: 'xīn' }, { hanzi: '年', pinyin: 'nián' }, { hanzi: '快', pinyin: 'kuài' }, { hanzi: '乐', pinyin: 'lè' }, { hanzi: '！', pinyin: '' }] },
  ],
};

export default hsk2Chapter15;
