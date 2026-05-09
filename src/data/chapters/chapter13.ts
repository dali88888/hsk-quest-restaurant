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
    { id: 's1', english: 'What are you doing?', syllables: [{ hanzi: '你', pinyin: 'nǐ' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '做', pinyin: 'zuò' }, { hanzi: '什', pinyin: 'shén' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '呢', pinyin: 'ne' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '你', pinyin: 'nǐ' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '做', pinyin: 'zuò' }, { hanzi: '什么', pinyin: 'shénme' }, { hanzi: '呢', pinyin: 'ne' }], terminator: '？' },
    { id: 's2', english: "I'm reading a book.", syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '看', pinyin: 'kàn' }, { hanzi: '书', pinyin: 'shū' }, { hanzi: '呢', pinyin: 'ne' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '看书', pinyin: 'kàn shū' }, { hanzi: '呢', pinyin: 'ne' }], terminator: '。' },
    { id: 's3', english: 'Is David also reading?', syllables: [{ hanzi: '大', pinyin: 'dà' }, { hanzi: '卫', pinyin: 'wèi' }, { hanzi: '也', pinyin: 'yě' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '看', pinyin: 'kàn' }, { hanzi: '书', pinyin: 'shū' }, { hanzi: '吗', pinyin: 'ma' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '大卫', pinyin: 'Dàwèi' }, { hanzi: '也', pinyin: 'yě' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '看书', pinyin: 'kàn shū' }, { hanzi: '吗', pinyin: 'ma' }], terminator: '？' },
    { id: 's4', english: "He's learning to cook Chinese food.", syllables: [{ hanzi: '他', pinyin: 'tā' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '学', pinyin: 'xué' }, { hanzi: '做', pinyin: 'zuò' }, { hanzi: '中', pinyin: 'zhōng' }, { hanzi: '国', pinyin: 'guó' }, { hanzi: '菜', pinyin: 'cài' }, { hanzi: '呢', pinyin: 'ne' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '他', pinyin: 'tā' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '学', pinyin: 'xué' }, { hanzi: '做', pinyin: 'zuò' }, { hanzi: '中国菜', pinyin: 'Zhōngguó cài' }, { hanzi: '呢', pinyin: 'ne' }], terminator: '。' },
    { id: 's5', english: 'What were you doing yesterday morning?', syllables: [{ hanzi: '昨', pinyin: 'zuó' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '上', pinyin: 'shàng' }, { hanzi: '午', pinyin: 'wǔ' }, { hanzi: '你', pinyin: 'nǐ' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '做', pinyin: 'zuò' }, { hanzi: '什', pinyin: 'shén' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '呢', pinyin: 'ne' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '昨天', pinyin: 'zuótiān' }, { hanzi: '上午', pinyin: 'shàngwǔ' }, { hanzi: '你', pinyin: 'nǐ' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '做', pinyin: 'zuò' }, { hanzi: '什么', pinyin: 'shénme' }, { hanzi: '呢', pinyin: 'ne' }], terminator: '？' },
    { id: 's6', english: 'I was sleeping.', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '睡', pinyin: 'shuì' }, { hanzi: '觉', pinyin: 'jiào' }, { hanzi: '呢', pinyin: 'ne' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '睡觉', pinyin: 'shuìjiào' }, { hanzi: '呢', pinyin: 'ne' }], terminator: '。' },
    { id: 's7', english: 'I was watching TV at home.', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '家', pinyin: 'jiā' }, { hanzi: '看', pinyin: 'kàn' }, { hanzi: '电', pinyin: 'diàn' }, { hanzi: '视', pinyin: 'shì' }, { hanzi: '呢', pinyin: 'ne' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '在家', pinyin: 'zài jiā' }, { hanzi: '看电视', pinyin: 'kàn diànshì' }, { hanzi: '呢', pinyin: 'ne' }], terminator: '。' },
    { id: 's8', english: 'Do you like watching TV?', syllables: [{ hanzi: '你', pinyin: 'nǐ' }, { hanzi: '喜', pinyin: 'xǐ' }, { hanzi: '欢', pinyin: 'huan' }, { hanzi: '看', pinyin: 'kàn' }, { hanzi: '电', pinyin: 'diàn' }, { hanzi: '视', pinyin: 'shì' }, { hanzi: '吗', pinyin: 'ma' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '你', pinyin: 'nǐ' }, { hanzi: '喜欢', pinyin: 'xǐhuan' }, { hanzi: '看电视', pinyin: 'kàn diànshì' }, { hanzi: '吗', pinyin: 'ma' }], terminator: '？' },
    { id: 's9', english: 'I like watching movies.', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '喜', pinyin: 'xǐ' }, { hanzi: '欢', pinyin: 'huan' }, { hanzi: '看', pinyin: 'kàn' }, { hanzi: '电', pinyin: 'diàn' }, { hanzi: '影', pinyin: 'yǐng' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '喜欢', pinyin: 'xǐhuan' }, { hanzi: '看电影', pinyin: 'kàn diànyǐng' }], terminator: '。' },
    { id: 's10', english: "I'll call her now.", syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '现', pinyin: 'xiàn' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '给', pinyin: 'gěi' }, { hanzi: '她', pinyin: 'tā' }, { hanzi: '打', pinyin: 'dǎ' }, { hanzi: '电', pinyin: 'diàn' }, { hanzi: '话', pinyin: 'huà' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '现在', pinyin: 'xiànzài' }, { hanzi: '给', pinyin: 'gěi' }, { hanzi: '她', pinyin: 'tā' }, { hanzi: '打电话', pinyin: 'dǎ diànhuà' }], terminator: '。' },
    { id: 's11', english: "She's working.", syllables: [{ hanzi: '她', pinyin: 'tā' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '工', pinyin: 'gōng' }, { hanzi: '作', pinyin: 'zuò' }, { hanzi: '呢', pinyin: 'ne' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '她', pinyin: 'tā' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '工作', pinyin: 'gōngzuò' }, { hanzi: '呢', pinyin: 'ne' }], terminator: '。' },
  ],
};

export default chapter13;
