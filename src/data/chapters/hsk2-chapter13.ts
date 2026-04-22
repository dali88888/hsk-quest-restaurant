import type { Chapter } from '../../types/chapter';

/**
 * HSK 2, Chapter 13 — The Door Is Open
 * Based on HSK Standard Course 2 textbook
 */
const hsk2Chapter13: Chapter = {
  id: 'hsk2-ch13',
  number: 13,
  hskLevel: 2,
  titleEn: 'The Door Is Open',
  titleZh: '门开着呢',
  descriptionEn: 'Body parts, writing tools, directions, and states.',
  descriptionZh: '身体部位、书写工具、方向和状态。',
  vocabulary: [
    { id: 'h2c13-zhe', hanzi: '着', pinyin: 'zhe', english: '(state particle, zhe)', syllables: [{ hanzi: '着', pinyin: 'zhe' }], emoji: '🔄' },
    { id: 'h2c13-shou', hanzi: '手', pinyin: 'shǒu', english: 'hand', syllables: [{ hanzi: '手', pinyin: 'shǒu' }], emoji: '✋' },
    { id: 'h2c13-jiao', hanzi: '脚', pinyin: 'jiǎo', english: 'foot', syllables: [{ hanzi: '脚', pinyin: 'jiǎo' }], emoji: '🦶' },
    { id: 'h2c13-tui', hanzi: '腿', pinyin: 'tuǐ', english: 'leg', syllables: [{ hanzi: '腿', pinyin: 'tuǐ' }], emoji: '🦵' },
    { id: 'h2c13-gebo', hanzi: '胳膊', pinyin: 'gēbo', english: 'arm', syllables: [{ hanzi: '胳', pinyin: 'gē' }, { hanzi: '膊', pinyin: 'bo' }], emoji: '💪' },
    { id: 'h2c13-tou', hanzi: '头', pinyin: 'tóu', english: 'head', syllables: [{ hanzi: '头', pinyin: 'tóu' }], emoji: '🗣️' },
    { id: 'h2c13-na', hanzi: '拿', pinyin: 'ná', english: 'to hold/take', syllables: [{ hanzi: '拿', pinyin: 'ná' }], emoji: '🤲' },
    { id: 'h2c13-qianbi', hanzi: '铅笔', pinyin: 'qiānbǐ', english: 'pencil', syllables: [{ hanzi: '铅', pinyin: 'qiān' }, { hanzi: '笔', pinyin: 'bǐ' }], emoji: '✏️' },
    { id: 'h2c13-ban', hanzi: '班', pinyin: 'bān', english: 'class/shift', syllables: [{ hanzi: '班', pinyin: 'bān' }], emoji: '🏫' },
    { id: 'h2c13-zhang13', hanzi: '长', pinyin: 'zhǎng', english: 'to grow; chief', syllables: [{ hanzi: '长', pinyin: 'zhǎng' }], emoji: '👑' },
    { id: 'h2c13-xiao', hanzi: '笑', pinyin: 'xiào', english: 'to laugh/smile', syllables: [{ hanzi: '笑', pinyin: 'xiào' }], emoji: '😊' },
    { id: 'h2c13-ku', hanzi: '哭', pinyin: 'kū', english: 'to cry', syllables: [{ hanzi: '哭', pinyin: 'kū' }], emoji: '😢' },
    { id: 'h2c13-weixiao', hanzi: '微笑', pinyin: 'wēixiào', english: 'smile', syllables: [{ hanzi: '微', pinyin: 'wēi' }, { hanzi: '笑', pinyin: 'xiào' }], emoji: '🙂' },
    { id: 'h2c13-daxiao', hanzi: '大笑', pinyin: 'dàxiào', english: 'to laugh loudly', syllables: [{ hanzi: '大', pinyin: 'dà' }, { hanzi: '笑', pinyin: 'xiào' }], emoji: '😂' },
    { id: 'h2c13-binguan', hanzi: '宾馆', pinyin: 'bīnguǎn', english: 'hotel', syllables: [{ hanzi: '宾', pinyin: 'bīn' }, { hanzi: '馆', pinyin: 'guǎn' }], emoji: '🏨' },
    { id: 'h2c13-yizhi', hanzi: '一直', pinyin: 'yìzhí', english: 'always/straight', syllables: [{ hanzi: '一', pinyin: 'yì' }, { hanzi: '直', pinyin: 'zhí' }], emoji: '➡️' },
    { id: 'h2c13-wang', hanzi: '往', pinyin: 'wǎng', english: 'toward', syllables: [{ hanzi: '往', pinyin: 'wǎng' }], emoji: '👉' },
    { id: 'h2c13-lukou', hanzi: '路口', pinyin: 'lùkǒu', english: 'intersection', syllables: [{ hanzi: '路', pinyin: 'lù' }, { hanzi: '口', pinyin: 'kǒu' }], emoji: '🚦' },
    { id: 'h2c13-gangbi', hanzi: '钢笔', pinyin: 'gāngbǐ', english: 'fountain pen', syllables: [{ hanzi: '钢', pinyin: 'gāng' }, { hanzi: '笔', pinyin: 'bǐ' }], emoji: '🖋️' },
    { id: 'h2c13-yuanzhubi', hanzi: '圆珠笔', pinyin: 'yuánzhūbǐ', english: 'ballpoint pen', syllables: [{ hanzi: '圆', pinyin: 'yuán' }, { hanzi: '珠', pinyin: 'zhū' }, { hanzi: '笔', pinyin: 'bǐ' }], emoji: '🖊️' },
    { id: 'h2c13-zhongxingbi', hanzi: '中性笔', pinyin: 'zhōngxìngbǐ', english: 'gel pen', syllables: [{ hanzi: '中', pinyin: 'zhōng' }, { hanzi: '性', pinyin: 'xìng' }, { hanzi: '笔', pinyin: 'bǐ' }], emoji: '🖊️' },
    { id: 'h2c13-huabi', hanzi: '画笔', pinyin: 'huàbǐ', english: 'paintbrush', syllables: [{ hanzi: '画', pinyin: 'huà' }, { hanzi: '笔', pinyin: 'bǐ' }], emoji: '🖌️' },
  ],
  sentences: [
    { id: 's1', english: 'The door is open, please come in.', syllables: [{ hanzi: '门', pinyin: 'mén' }, { hanzi: '开', pinyin: 'kāi' }, { hanzi: '着', pinyin: 'zhe' }, { hanzi: '呢', pinyin: 'ne' }, { hanzi: '，', pinyin: '' }, { hanzi: '请', pinyin: 'qǐng' }, { hanzi: '进', pinyin: 'jìn' }, { hanzi: '来', pinyin: 'lái' }, { hanzi: '。', pinyin: '' }] },
    { id: 's2', english: 'He holds a pencil in his hand.', syllables: [{ hanzi: '他', pinyin: 'tā' }, { hanzi: '手', pinyin: 'shǒu' }, { hanzi: '里', pinyin: 'lǐ' }, { hanzi: '拿', pinyin: 'ná' }, { hanzi: '着', pinyin: 'zhe' }, { hanzi: '铅', pinyin: 'qiān' }, { hanzi: '笔', pinyin: 'bǐ' }, { hanzi: '。', pinyin: '' }] },
    { id: 's3', english: 'Go straight ahead, the hotel is at the intersection.', syllables: [{ hanzi: '一', pinyin: 'yì' }, { hanzi: '直', pinyin: 'zhí' }, { hanzi: '往', pinyin: 'wǎng' }, { hanzi: '前', pinyin: 'qián' }, { hanzi: '走', pinyin: 'zǒu' }, { hanzi: '，', pinyin: '' }, { hanzi: '宾', pinyin: 'bīn' }, { hanzi: '馆', pinyin: 'guǎn' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '路', pinyin: 'lù' }, { hanzi: '口', pinyin: 'kǒu' }, { hanzi: '。', pinyin: '' }] },
  ],
};

export default hsk2Chapter13;
