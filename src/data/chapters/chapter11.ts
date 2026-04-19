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
    { id: 's1', english: 'What time is it now?', syllables: [{ hanzi: '现', pinyin: 'xiàn' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '几', pinyin: 'jǐ' }, { hanzi: '点', pinyin: 'diǎn' }, { hanzi: '？', pinyin: '' }] },
    { id: 's2', english: 'Good morning!', syllables: [{ hanzi: '早', pinyin: 'zǎo' }, { hanzi: '上', pinyin: 'shang' }, { hanzi: '好', pinyin: 'hǎo' }, { hanzi: '！', pinyin: '' }] },
    { id: 's3', english: 'When do you go home?', syllables: [{ hanzi: '你', pinyin: 'nǐ' }, { hanzi: '什', pinyin: 'shén' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '时', pinyin: 'shí' }, { hanzi: '候', pinyin: 'hou' }, { hanzi: '回', pinyin: 'huí' }, { hanzi: '家', pinyin: 'jiā' }, { hanzi: '？', pinyin: '' }] },
  ],
};

export default chapter11;
