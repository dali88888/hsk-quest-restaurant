import type { Chapter } from '../../types/chapter';

/**
 * HSK 2, Chapter 1 — September Is Best for Beijing Travel
 * Based on HSK Standard Course 2 textbook
 */
const hsk2Chapter1: Chapter = {
  id: 'hsk2-ch1',
  number: 1,
  hskLevel: 2,
  titleEn: 'September Is Best for Beijing Travel',
  titleZh: '九月去北京旅游最好',
  descriptionEn: 'Travel, sports, body parts, and maternal grandparents.',
  descriptionZh: '旅游、运动、身体部位和外祖父母。',
  vocabulary: [
    { id: 'h2c1-lvyou', hanzi: '旅游', pinyin: 'lǚyóu', english: 'to travel', syllables: [{ hanzi: '旅', pinyin: 'lǚ' }, { hanzi: '游', pinyin: 'yóu' }], emoji: '✈️' },
    { id: 'h2c1-juede', hanzi: '觉得', pinyin: 'juéde', english: 'to feel/think', syllables: [{ hanzi: '觉', pinyin: 'jué' }, { hanzi: '得', pinyin: 'de' }], emoji: '🤔' },
    { id: 'h2c1-zui', hanzi: '最', pinyin: 'zuì', english: 'most', syllables: [{ hanzi: '最', pinyin: 'zuì' }], emoji: '🏆' },
    { id: 'h2c1-weishenme', hanzi: '为什么', pinyin: 'wèishénme', english: 'why', syllables: [{ hanzi: '为', pinyin: 'wèi' }, { hanzi: '什', pinyin: 'shén' }, { hanzi: '么', pinyin: 'me' }], emoji: '❓' },
    { id: 'h2c1-yundong', hanzi: '运动', pinyin: 'yùndòng', english: 'sports/to exercise', syllables: [{ hanzi: '运', pinyin: 'yùn' }, { hanzi: '动', pinyin: 'dòng' }], emoji: '🏃' },
    { id: 'h2c1-qiu', hanzi: '球', pinyin: 'qiú', english: 'ball', syllables: [{ hanzi: '球', pinyin: 'qiú' }], emoji: '⚾' },
    { id: 'h2c1-zu', hanzi: '足', pinyin: 'zú', english: 'foot', syllables: [{ hanzi: '足', pinyin: 'zú' }], emoji: '🦶' },
    { id: 'h2c1-ti', hanzi: '踢', pinyin: 'tī', english: 'to kick', syllables: [{ hanzi: '踢', pinyin: 'tī' }], emoji: '🦵' },
    { id: 'h2c1-tizuqiu', hanzi: '踢足球', pinyin: 'tī zúqiú', english: 'to play soccer', syllables: [{ hanzi: '踢', pinyin: 'tī' }, { hanzi: '足', pinyin: 'zú' }, { hanzi: '球', pinyin: 'qiú' }], emoji: '⚽' },
    { id: 'h2c1-yao', hanzi: '要', pinyin: 'yào', english: 'to want/need', syllables: [{ hanzi: '要', pinyin: 'yào' }], emoji: '🙋' },
    { id: 'h2c1-xin', hanzi: '新', pinyin: 'xīn', english: 'new', syllables: [{ hanzi: '新', pinyin: 'xīn' }], emoji: '✨' },
    { id: 'h2c1-jiu', hanzi: '旧', pinyin: 'jiù', english: 'old (things)', syllables: [{ hanzi: '旧', pinyin: 'jiù' }], emoji: '📦' },
    { id: 'h2c1-yanjing', hanzi: '眼睛', pinyin: 'yǎnjing', english: 'eyes', syllables: [{ hanzi: '眼', pinyin: 'yǎn' }, { hanzi: '睛', pinyin: 'jing' }], emoji: '👀' },
    { id: 'h2c1-zui3', hanzi: '嘴', pinyin: 'zuǐ', english: 'mouth', syllables: [{ hanzi: '嘴', pinyin: 'zuǐ' }], emoji: '👄' },
    { id: 'h2c1-zuiba', hanzi: '嘴巴', pinyin: 'zuǐba', english: 'mouth', syllables: [{ hanzi: '嘴', pinyin: 'zuǐ' }, { hanzi: '巴', pinyin: 'ba' }], emoji: '👄' },
    { id: 'h2c1-bi2', hanzi: '鼻', pinyin: 'bí', english: 'nose', syllables: [{ hanzi: '鼻', pinyin: 'bí' }], emoji: '👃' },
    { id: 'h2c1-bizi', hanzi: '鼻子', pinyin: 'bízi', english: 'nose', syllables: [{ hanzi: '鼻', pinyin: 'bí' }, { hanzi: '子', pinyin: 'zi' }], emoji: '👃' },
    { id: 'h2c1-tou', hanzi: '头', pinyin: 'tóu', english: 'head', syllables: [{ hanzi: '头', pinyin: 'tóu' }], emoji: '🗣️' },
    { id: 'h2c1-pao', hanzi: '跑', pinyin: 'pǎo', english: 'to run', syllables: [{ hanzi: '跑', pinyin: 'pǎo' }], emoji: '🏃' },
    { id: 'h2c1-paobu', hanzi: '跑步', pinyin: 'pǎobù', english: 'to jog/run', syllables: [{ hanzi: '跑', pinyin: 'pǎo' }, { hanzi: '步', pinyin: 'bù' }], emoji: '🏃‍♂️' },
    { id: 'h2c1-lan', hanzi: '篮', pinyin: 'lán', english: 'basket', syllables: [{ hanzi: '篮', pinyin: 'lán' }], emoji: '🧺' },
    { id: 'h2c1-lanqiu', hanzi: '篮球', pinyin: 'lánqiú', english: 'basketball', syllables: [{ hanzi: '篮', pinyin: 'lán' }, { hanzi: '球', pinyin: 'qiú' }], emoji: '🏀' },
    { id: 'h2c1-dalanqiu', hanzi: '打篮球', pinyin: 'dǎ lánqiú', english: 'to play basketball', syllables: [{ hanzi: '打', pinyin: 'dǎ' }, { hanzi: '篮', pinyin: 'lán' }, { hanzi: '球', pinyin: 'qiú' }], emoji: '🏀' },
    { id: 'h2c1-wang', hanzi: '网', pinyin: 'wǎng', english: 'net', syllables: [{ hanzi: '网', pinyin: 'wǎng' }], emoji: '🕸️' },
    { id: 'h2c1-wangqiu', hanzi: '网球', pinyin: 'wǎngqiú', english: 'tennis', syllables: [{ hanzi: '网', pinyin: 'wǎng' }, { hanzi: '球', pinyin: 'qiú' }], emoji: '🎾' },
    { id: 'h2c1-dawangqiu', hanzi: '打网球', pinyin: 'dǎ wǎngqiú', english: 'to play tennis', syllables: [{ hanzi: '打', pinyin: 'dǎ' }, { hanzi: '网', pinyin: 'wǎng' }, { hanzi: '球', pinyin: 'qiú' }], emoji: '🎾' },
    { id: 'h2c1-pingpangqiu', hanzi: '乒乓球', pinyin: 'pīngpāngqiú', english: 'ping-pong', syllables: [{ hanzi: '乒', pinyin: 'pīng' }, { hanzi: '乓', pinyin: 'pāng' }, { hanzi: '球', pinyin: 'qiú' }], emoji: '🏓' },
    { id: 'h2c1-dapingpangqiu', hanzi: '打乒乓球', pinyin: 'dǎ pīngpāngqiú', english: 'to play ping-pong', syllables: [{ hanzi: '打', pinyin: 'dǎ' }, { hanzi: '乒', pinyin: 'pīng' }, { hanzi: '乓', pinyin: 'pāng' }, { hanzi: '球', pinyin: 'qiú' }], emoji: '🏓' },
    { id: 'h2c1-yumao', hanzi: '羽毛', pinyin: 'yǔmáo', english: 'feather', syllables: [{ hanzi: '羽', pinyin: 'yǔ' }, { hanzi: '毛', pinyin: 'máo' }], emoji: '🪶' },
    { id: 'h2c1-yumaoqiu', hanzi: '羽毛球', pinyin: 'yǔmáoqiú', english: 'badminton', syllables: [{ hanzi: '羽', pinyin: 'yǔ' }, { hanzi: '毛', pinyin: 'máo' }, { hanzi: '球', pinyin: 'qiú' }], emoji: '🏸' },
    { id: 'h2c1-dayumaoqiu', hanzi: '打羽毛球', pinyin: 'dǎ yǔmáoqiú', english: 'to play badminton', syllables: [{ hanzi: '打', pinyin: 'dǎ' }, { hanzi: '羽', pinyin: 'yǔ' }, { hanzi: '毛', pinyin: 'máo' }, { hanzi: '球', pinyin: 'qiú' }], emoji: '🏸' },
    { id: 'h2c1-daqiu', hanzi: '打球', pinyin: 'dǎqiú', english: 'to play ball', syllables: [{ hanzi: '打', pinyin: 'dǎ' }, { hanzi: '球', pinyin: 'qiú' }], emoji: '🏐' },
    { id: 'h2c1-laolao', hanzi: '姥姥', pinyin: 'lǎolao', english: "grandma (mom's mom)", syllables: [{ hanzi: '姥', pinyin: 'lǎo' }, { hanzi: '姥', pinyin: 'lao' }], emoji: '👵' },
    { id: 'h2c1-laoye', hanzi: '姥爷', pinyin: 'lǎoye', english: "grandpa (mom's dad)", syllables: [{ hanzi: '姥', pinyin: 'lǎo' }, { hanzi: '爷', pinyin: 'ye' }], emoji: '👴' },
  ],
  sentences: [
    { id: 's1', english: 'I think September is the best time to travel to Beijing.', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '觉', pinyin: 'jué' }, { hanzi: '得', pinyin: 'de' }, { hanzi: '九', pinyin: 'jiǔ' }, { hanzi: '月', pinyin: 'yuè' }, { hanzi: '去', pinyin: 'qù' }, { hanzi: '北', pinyin: 'běi' }, { hanzi: '京', pinyin: 'jīng' }, { hanzi: '旅', pinyin: 'lǚ' }, { hanzi: '游', pinyin: 'yóu' }, { hanzi: '最', pinyin: 'zuì' }, { hanzi: '好', pinyin: 'hǎo' }, { hanzi: '。', pinyin: '' }] },
    { id: 's2', english: 'Why do you want to play basketball?', syllables: [{ hanzi: '你', pinyin: 'nǐ' }, { hanzi: '为', pinyin: 'wèi' }, { hanzi: '什', pinyin: 'shén' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '要', pinyin: 'yào' }, { hanzi: '打', pinyin: 'dǎ' }, { hanzi: '篮', pinyin: 'lán' }, { hanzi: '球', pinyin: 'qiú' }, { hanzi: '？', pinyin: '' }] },
    { id: 's3', english: "Grandma (mom's mom) likes to jog.", syllables: [{ hanzi: '姥', pinyin: 'lǎo' }, { hanzi: '姥', pinyin: 'lao' }, { hanzi: '喜', pinyin: 'xǐ' }, { hanzi: '欢', pinyin: 'huan' }, { hanzi: '跑', pinyin: 'pǎo' }, { hanzi: '步', pinyin: 'bù' }, { hanzi: '。', pinyin: '' }] },
  ],
};

export default hsk2Chapter1;
