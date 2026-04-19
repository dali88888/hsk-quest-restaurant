import type { Chapter } from '../../types/chapter';

/**
 * HSK 1, Chapter 13 — He's Learning to Cook Chinese Food
 * Hobbies, phones, and time prepositions (before/after)
 */
const chapter13: Chapter = {
  id: 'hsk1-ch13',
  number: 13,
  hskLevel: 1,
  titleEn: "He's Learning to Cook Chinese Food",
  titleZh: '他在学做中国菜呢',
  descriptionEn: 'Hobbies, phone calls, and time expressions (before/after).',
  descriptionZh: '爱好、打电话和时间表达（之前/之后）。',
  vocabulary: [
    { id: 'wei', hanzi: '喂', pinyin: 'wèi', english: 'hello (on phone)', syllables: [{ hanzi: '喂', pinyin: 'wèi' }], emoji: '📞' },
    { id: 'ye', hanzi: '也', pinyin: 'yě', english: 'also, too', syllables: [{ hanzi: '也', pinyin: 'yě' }], emoji: '➕' },
    { id: 'xuexi', hanzi: '学习', pinyin: 'xuéxí', english: 'to study', syllables: [{ hanzi: '学', pinyin: 'xué' }, { hanzi: '习', pinyin: 'xí' }], emoji: '📖' },
    { id: 'shuijiao', hanzi: '睡觉', pinyin: 'shuìjiào', english: 'to sleep', syllables: [{ hanzi: '睡', pinyin: 'shuì' }, { hanzi: '觉', pinyin: 'jiào' }], emoji: '😴' },
    { id: 'dianshi', hanzi: '电视', pinyin: 'diànshì', english: 'television', syllables: [{ hanzi: '电', pinyin: 'diàn' }, { hanzi: '视', pinyin: 'shì' }], emoji: '📺' },
    { id: 'xihuan', hanzi: '喜欢', pinyin: 'xǐhuan', english: 'to like', syllables: [{ hanzi: '喜', pinyin: 'xǐ' }, { hanzi: '欢', pinyin: 'huan' }], emoji: '💖' },
    { id: 'gei', hanzi: '给', pinyin: 'gěi', english: 'to give', syllables: [{ hanzi: '给', pinyin: 'gěi' }], emoji: '🎁' },
    { id: 'dadianhua', hanzi: '打电话', pinyin: 'dǎ diànhuà', english: 'to make a phone call', syllables: [{ hanzi: '打', pinyin: 'dǎ' }, { hanzi: '电', pinyin: 'diàn' }, { hanzi: '话', pinyin: 'huà' }], emoji: '📱' },
    { id: 'ba', hanzi: '吧', pinyin: 'ba', english: '(suggestion particle)', syllables: [{ hanzi: '吧', pinyin: 'ba' }], emoji: '💬' },
    { id: 'kandianshi', hanzi: '看电视', pinyin: 'kàn diànshì', english: 'to watch TV', syllables: [{ hanzi: '看', pinyin: 'kàn' }, { hanzi: '电', pinyin: 'diàn' }, { hanzi: '视', pinyin: 'shì' }], emoji: '📺' },
    { id: 'shouji', hanzi: '手机', pinyin: 'shǒujī', english: 'cell phone', syllables: [{ hanzi: '手', pinyin: 'shǒu' }, { hanzi: '机', pinyin: 'jī' }], emoji: '📱' },
    { id: 'qian13', hanzi: '前', pinyin: 'qián', english: 'before (in time)', syllables: [{ hanzi: '前', pinyin: 'qián' }], emoji: '⏮️' },
    { id: 'hou13', hanzi: '后', pinyin: 'hòu', english: 'after (in time)', syllables: [{ hanzi: '后', pinyin: 'hòu' }], emoji: '⏭️' },
    { id: 'zhiqian', hanzi: '之前', pinyin: 'zhīqián', english: 'before, ago', syllables: [{ hanzi: '之', pinyin: 'zhī' }, { hanzi: '前', pinyin: 'qián' }], emoji: '⏪' },
    { id: 'zhihou', hanzi: '之后', pinyin: 'zhīhòu', english: 'after, later', syllables: [{ hanzi: '之', pinyin: 'zhī' }, { hanzi: '后', pinyin: 'hòu' }], emoji: '⏩' },
  ],
  sentences: [
    { id: 's1', english: "He's learning to cook Chinese food.", syllables: [{ hanzi: '他', pinyin: 'tā' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '学', pinyin: 'xué' }, { hanzi: '做', pinyin: 'zuò' }, { hanzi: '中', pinyin: 'Zhōng' }, { hanzi: '国', pinyin: 'guó' }, { hanzi: '菜', pinyin: 'cài' }, { hanzi: '呢', pinyin: 'ne' }, { hanzi: '。', pinyin: '' }] },
    { id: 's2', english: 'I like watching TV.', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '喜', pinyin: 'xǐ' }, { hanzi: '欢', pinyin: 'huan' }, { hanzi: '看', pinyin: 'kàn' }, { hanzi: '电', pinyin: 'diàn' }, { hanzi: '视', pinyin: 'shì' }, { hanzi: '。', pinyin: '' }] },
    { id: 's3', english: 'Call me before going to bed.', syllables: [{ hanzi: '睡', pinyin: 'shuì' }, { hanzi: '觉', pinyin: 'jiào' }, { hanzi: '之', pinyin: 'zhī' }, { hanzi: '前', pinyin: 'qián' }, { hanzi: '给', pinyin: 'gěi' }, { hanzi: '我', pinyin: 'wǒ' }, { hanzi: '打', pinyin: 'dǎ' }, { hanzi: '电', pinyin: 'diàn' }, { hanzi: '话', pinyin: 'huà' }, { hanzi: '。', pinyin: '' }] },
  ],
};

export default chapter13;
