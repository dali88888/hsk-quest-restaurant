import type { Chapter } from '../../types/chapter';

/**
 * HSK 1, Chapter 11 — What Time Is It Now?
 * Time expressions, greetings throughout the day
 */
const chapter11: Chapter = {
  id: 'hsk1-ch11',
  number: 11,
  hskLevel: 1,
  titleEn: 'What Time Is It Now?',
  titleZh: '现在几点',
  descriptionEn: 'Time, greetings throughout the day, and places.',
  descriptionZh: '时间、全天问候语和地点。',
  vocabulary: [
    { id: 'xianzai', hanzi: '现在', pinyin: 'xiànzài', english: 'now', syllables: [{ hanzi: '现', pinyin: 'xiàn' }, { hanzi: '在', pinyin: 'zài' }], emoji: '⏰' },
    { id: 'dian', hanzi: '点', pinyin: 'diǎn', english: "o'clock", syllables: [{ hanzi: '点', pinyin: 'diǎn' }], emoji: '🕐' },
    { id: 'fen', hanzi: '分', pinyin: 'fēn', english: 'minute', syllables: [{ hanzi: '分', pinyin: 'fēn' }], emoji: '⏱️' },
    { id: 'ban11', hanzi: '半', pinyin: 'bàn', english: 'half', syllables: [{ hanzi: '半', pinyin: 'bàn' }], emoji: '½' },
    { id: 'shihou', hanzi: '时候', pinyin: 'shíhou', english: 'time, moment', syllables: [{ hanzi: '时', pinyin: 'shí' }, { hanzi: '候', pinyin: 'hou' }], emoji: '⌚' },
    { id: 'shenmeshihou', hanzi: '什么时候', pinyin: 'shénme shíhou', english: 'when', syllables: [{ hanzi: '什', pinyin: 'shén' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '时', pinyin: 'shí' }, { hanzi: '候', pinyin: 'hou' }], emoji: '❓' },
    { id: 'hui11', hanzi: '回', pinyin: 'huí', english: 'to return', syllables: [{ hanzi: '回', pinyin: 'huí' }], emoji: '↩️' },
    { id: 'dianying', hanzi: '电影', pinyin: 'diànyǐng', english: 'movie', syllables: [{ hanzi: '电', pinyin: 'diàn' }, { hanzi: '影', pinyin: 'yǐng' }], emoji: '🎬' },
    { id: 'zhu', hanzi: '住', pinyin: 'zhù', english: 'to live', syllables: [{ hanzi: '住', pinyin: 'zhù' }], emoji: '🏠' },
    { id: 'beijing', hanzi: '北京', pinyin: 'Běijīng', english: 'Beijing', syllables: [{ hanzi: '北', pinyin: 'Běi' }, { hanzi: '京', pinyin: 'jīng' }], emoji: '🏯' },
    { id: 'zaoshanghao', hanzi: '早上好', pinyin: 'zǎoshang hǎo', english: 'good morning', syllables: [{ hanzi: '早', pinyin: 'zǎo' }, { hanzi: '上', pinyin: 'shang' }, { hanzi: '好', pinyin: 'hǎo' }], emoji: '🌅' },
    { id: 'shangwuhao', hanzi: '上午好', pinyin: 'shàngwǔ hǎo', english: 'good morning (late)', syllables: [{ hanzi: '上', pinyin: 'shàng' }, { hanzi: '午', pinyin: 'wǔ' }, { hanzi: '好', pinyin: 'hǎo' }], emoji: '🌄' },
    { id: 'zhongwuhao', hanzi: '中午好', pinyin: 'zhōngwǔ hǎo', english: 'good afternoon (noon)', syllables: [{ hanzi: '中', pinyin: 'zhōng' }, { hanzi: '午', pinyin: 'wǔ' }, { hanzi: '好', pinyin: 'hǎo' }], emoji: '☀️' },
    { id: 'xiawuhao', hanzi: '下午好', pinyin: 'xiàwǔ hǎo', english: 'good afternoon', syllables: [{ hanzi: '下', pinyin: 'xià' }, { hanzi: '午', pinyin: 'wǔ' }, { hanzi: '好', pinyin: 'hǎo' }], emoji: '🌇' },
    { id: 'wanshanghao', hanzi: '晚上好', pinyin: 'wǎnshang hǎo', english: 'good evening', syllables: [{ hanzi: '晚', pinyin: 'wǎn' }, { hanzi: '上', pinyin: 'shang' }, { hanzi: '好', pinyin: 'hǎo' }], emoji: '🌃' },
    { id: 'wanan', hanzi: '晚安', pinyin: 'wǎn\'ān', english: 'good night', syllables: [{ hanzi: '晚', pinyin: 'wǎn' }, { hanzi: '安', pinyin: 'ān' }], emoji: '🌙' },
  ],
  sentences: [
    { id: 's1', english: 'What time is it now?', syllables: [{ hanzi: '现', pinyin: 'xiàn' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '几', pinyin: 'jǐ' }, { hanzi: '点', pinyin: 'diǎn' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '现在', pinyin: 'xiànzài' }, { hanzi: '几点', pinyin: 'jǐ diǎn' }], terminator: '？' },
    { id: 's2', english: "It's ten ten now.", syllables: [{ hanzi: '现', pinyin: 'xiàn' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '十', pinyin: 'shí' }, { hanzi: '点', pinyin: 'diǎn' }, { hanzi: '十', pinyin: 'shí' }, { hanzi: '分', pinyin: 'fēn' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '现在', pinyin: 'xiànzài' }, { hanzi: '十点', pinyin: 'shí diǎn' }, { hanzi: '十分', pinyin: 'shí fēn' }], terminator: '。' },
    { id: 's3', english: 'What time do we eat lunch?', syllables: [{ hanzi: '中', pinyin: 'zhōng' }, { hanzi: '午', pinyin: 'wǔ' }, { hanzi: '几', pinyin: 'jǐ' }, { hanzi: '点', pinyin: 'diǎn' }, { hanzi: '吃', pinyin: 'chī' }, { hanzi: '饭', pinyin: 'fàn' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '中午', pinyin: 'zhōngwǔ' }, { hanzi: '几点', pinyin: 'jǐ diǎn' }, { hanzi: '吃饭', pinyin: 'chīfàn' }], terminator: '？' },
    { id: 's4', english: 'We eat lunch at twelve.', syllables: [{ hanzi: '十', pinyin: 'shí' }, { hanzi: '二', pinyin: 'èr' }, { hanzi: '点', pinyin: 'diǎn' }, { hanzi: '吃', pinyin: 'chī' }, { hanzi: '饭', pinyin: 'fàn' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '十二', pinyin: 'shí\'èr' }, { hanzi: '点', pinyin: 'diǎn' }, { hanzi: '吃饭', pinyin: 'chīfàn' }], terminator: '。' },
    { id: 's5', english: 'When does Dad come home?', syllables: [{ hanzi: '爸', pinyin: 'bà' }, { hanzi: '爸', pinyin: 'ba' }, { hanzi: '什', pinyin: 'shén' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '时', pinyin: 'shí' }, { hanzi: '候', pinyin: 'hou' }, { hanzi: '回', pinyin: 'huí' }, { hanzi: '家', pinyin: 'jiā' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '爸爸', pinyin: 'bàba' }, { hanzi: '什么时候', pinyin: 'shénme shíhou' }, { hanzi: '回家', pinyin: 'huí jiā' }], terminator: '？' },
    { id: 's6', english: 'Five in the afternoon.', syllables: [{ hanzi: '下', pinyin: 'xià' }, { hanzi: '午', pinyin: 'wǔ' }, { hanzi: '五', pinyin: 'wǔ' }, { hanzi: '点', pinyin: 'diǎn' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '下午', pinyin: 'xiàwǔ' }, { hanzi: '五点', pinyin: 'wǔ diǎn' }], terminator: '。' },
    { id: 's7', english: 'When are we going to see a movie?', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '们', pinyin: 'men' }, { hanzi: '什', pinyin: 'shén' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '时', pinyin: 'shí' }, { hanzi: '候', pinyin: 'hou' }, { hanzi: '去', pinyin: 'qù' }, { hanzi: '看', pinyin: 'kàn' }, { hanzi: '电', pinyin: 'diàn' }, { hanzi: '影', pinyin: 'yǐng' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '我们', pinyin: 'wǒmen' }, { hanzi: '什么时候', pinyin: 'shénme shíhou' }, { hanzi: '去', pinyin: 'qù' }, { hanzi: '看电影', pinyin: 'kàn diànyǐng' }], terminator: '？' },
    { id: 's8', english: 'Six thirty.', syllables: [{ hanzi: '六', pinyin: 'liù' }, { hanzi: '点', pinyin: 'diǎn' }, { hanzi: '三', pinyin: 'sān' }, { hanzi: '十', pinyin: 'shí' }, { hanzi: '分', pinyin: 'fēn' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '六点', pinyin: 'liù diǎn' }, { hanzi: '三十分', pinyin: 'sānshí fēn' }], terminator: '。' },
    { id: 's9', english: "I'm going to Beijing on Monday.", syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '星', pinyin: 'xīng' }, { hanzi: '期', pinyin: 'qī' }, { hanzi: '一', pinyin: 'yī' }, { hanzi: '去', pinyin: 'qù' }, { hanzi: '北', pinyin: 'běi' }, { hanzi: '京', pinyin: 'jīng' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '星期一', pinyin: 'xīngqīyī' }, { hanzi: '去', pinyin: 'qù' }, { hanzi: '北京', pinyin: 'Běijīng' }], terminator: '。' },
    { id: 's10', english: 'How many days do you want to stay in Beijing?', syllables: [{ hanzi: '你', pinyin: 'nǐ' }, { hanzi: '想', pinyin: 'xiǎng' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '北', pinyin: 'běi' }, { hanzi: '京', pinyin: 'jīng' }, { hanzi: '住', pinyin: 'zhù' }, { hanzi: '几', pinyin: 'jǐ' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '你', pinyin: 'nǐ' }, { hanzi: '想', pinyin: 'xiǎng' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '北京', pinyin: 'Běijīng' }, { hanzi: '住', pinyin: 'zhù' }, { hanzi: '几天', pinyin: 'jǐ tiān' }], terminator: '？' },
    { id: 's11', english: 'Stay three days.', syllables: [{ hanzi: '住', pinyin: 'zhù' }, { hanzi: '三', pinyin: 'sān' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '住', pinyin: 'zhù' }, { hanzi: '三天', pinyin: 'sān tiān' }], terminator: '。' },
    { id: 's12', english: 'Can you come home before Friday?', syllables: [{ hanzi: '星', pinyin: 'xīng' }, { hanzi: '期', pinyin: 'qī' }, { hanzi: '五', pinyin: 'wǔ' }, { hanzi: '前', pinyin: 'qián' }, { hanzi: '能', pinyin: 'néng' }, { hanzi: '回', pinyin: 'huí' }, { hanzi: '家', pinyin: 'jiā' }, { hanzi: '吗', pinyin: 'ma' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '星期五', pinyin: 'xīngqīwǔ' }, { hanzi: '前', pinyin: 'qián' }, { hanzi: '能', pinyin: 'néng' }, { hanzi: '回家', pinyin: 'huí jiā' }, { hanzi: '吗', pinyin: 'ma' }], terminator: '？' },
  ],
};

export default chapter11;
