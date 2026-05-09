import type { Chapter } from '../../types/chapter';

/**
 * HSK 1, Chapter 10 — Can I Sit Here?
 * Position words: left/right/front/back/inside/outside in -边 and -面 forms
 */
const chapter10: Chapter = {
  id: 'hsk1-ch10',
  number: 10,
  hskLevel: 1,
  titleEn: 'Can I Sit Here?',
  titleZh: '我能坐这儿吗',
  descriptionEn: 'Tables, positions (left/right/front/back/inside/outside), and asking permission.',
  descriptionZh: '桌子、方位（左右前后里外）和请求许可。',
  vocabulary: [
    { id: 'zhuozi', hanzi: '桌子', pinyin: 'zhuōzi', english: 'table, desk', syllables: [{ hanzi: '桌', pinyin: 'zhuō' }, { hanzi: '子', pinyin: 'zi' }], emoji: '🪑' },
    { id: 'zuo10', hanzi: '左', pinyin: 'zuǒ', english: 'left', syllables: [{ hanzi: '左', pinyin: 'zuǒ' }], emoji: '⬅️' },
    { id: 'you10', hanzi: '右', pinyin: 'yòu', english: 'right', syllables: [{ hanzi: '右', pinyin: 'yòu' }], emoji: '➡️' },
    { id: 'qian10', hanzi: '前', pinyin: 'qián', english: 'front', syllables: [{ hanzi: '前', pinyin: 'qián' }], emoji: '🔼' },
    { id: 'hou10', hanzi: '后', pinyin: 'hòu', english: 'back, behind', syllables: [{ hanzi: '后', pinyin: 'hòu' }], emoji: '🔽' },
    { id: 'li', hanzi: '里', pinyin: 'lǐ', english: 'inside', syllables: [{ hanzi: '里', pinyin: 'lǐ' }], emoji: '📥' },
    { id: 'wai', hanzi: '外', pinyin: 'wài', english: 'outside', syllables: [{ hanzi: '外', pinyin: 'wài' }], emoji: '📤' },
    { id: 'diannao', hanzi: '电脑', pinyin: 'diànnǎo', english: 'computer', syllables: [{ hanzi: '电', pinyin: 'diàn' }, { hanzi: '脑', pinyin: 'nǎo' }], emoji: '💻' },
    { id: 'he10', hanzi: '和', pinyin: 'hé', english: 'and', syllables: [{ hanzi: '和', pinyin: 'hé' }], emoji: '🤝' },
    { id: 'ben', hanzi: '本', pinyin: 'běn', english: '(measure word for books)', syllables: [{ hanzi: '本', pinyin: 'běn' }], emoji: '📕' },
    { id: 'mei10', hanzi: '没', pinyin: 'méi', english: 'not (have)', syllables: [{ hanzi: '没', pinyin: 'méi' }], emoji: '❌' },
    { id: 'meiyou', hanzi: '没有', pinyin: 'méiyǒu', english: "don't have", syllables: [{ hanzi: '没', pinyin: 'méi' }, { hanzi: '有', pinyin: 'yǒu' }], emoji: '🚫' },
    { id: 'neng', hanzi: '能', pinyin: 'néng', english: 'can, able to', syllables: [{ hanzi: '能', pinyin: 'néng' }], emoji: '💪' },
    { id: 'zuobian', hanzi: '左边', pinyin: 'zuǒbian', english: 'left side', syllables: [{ hanzi: '左', pinyin: 'zuǒ' }, { hanzi: '边', pinyin: 'bian' }], emoji: '⬅️' },
    { id: 'youbian', hanzi: '右边', pinyin: 'yòubian', english: 'right side', syllables: [{ hanzi: '右', pinyin: 'yòu' }, { hanzi: '边', pinyin: 'bian' }], emoji: '➡️' },
    { id: 'zuomian', hanzi: '左面', pinyin: 'zuǒmiàn', english: 'left side', syllables: [{ hanzi: '左', pinyin: 'zuǒ' }, { hanzi: '面', pinyin: 'miàn' }], emoji: '⬅️' },
    { id: 'youmian', hanzi: '右面', pinyin: 'yòumiàn', english: 'right side', syllables: [{ hanzi: '右', pinyin: 'yòu' }, { hanzi: '面', pinyin: 'miàn' }], emoji: '➡️' },
    { id: 'qianbian', hanzi: '前边', pinyin: 'qiánbian', english: 'in front', syllables: [{ hanzi: '前', pinyin: 'qián' }, { hanzi: '边', pinyin: 'bian' }], emoji: '🔼' },
    { id: 'houbian', hanzi: '后边', pinyin: 'hòubian', english: 'behind', syllables: [{ hanzi: '后', pinyin: 'hòu' }, { hanzi: '边', pinyin: 'bian' }], emoji: '🔽' },
    { id: 'qianmian', hanzi: '前面', pinyin: 'qiánmiàn', english: 'in front', syllables: [{ hanzi: '前', pinyin: 'qián' }, { hanzi: '面', pinyin: 'miàn' }], emoji: '🔼' },
    { id: 'houmian', hanzi: '后面', pinyin: 'hòumiàn', english: 'behind', syllables: [{ hanzi: '后', pinyin: 'hòu' }, { hanzi: '面', pinyin: 'miàn' }], emoji: '🔽' },
    { id: 'libian', hanzi: '里边', pinyin: 'lǐbian', english: 'inside', syllables: [{ hanzi: '里', pinyin: 'lǐ' }, { hanzi: '边', pinyin: 'bian' }], emoji: '📥' },
    { id: 'waibian', hanzi: '外边', pinyin: 'wàibian', english: 'outside', syllables: [{ hanzi: '外', pinyin: 'wài' }, { hanzi: '边', pinyin: 'bian' }], emoji: '📤' },
    { id: 'limian', hanzi: '里面', pinyin: 'lǐmiàn', english: 'inside', syllables: [{ hanzi: '里', pinyin: 'lǐ' }, { hanzi: '面', pinyin: 'miàn' }], emoji: '📥' },
    { id: 'waimian', hanzi: '外面', pinyin: 'wàimiàn', english: 'outside', syllables: [{ hanzi: '外', pinyin: 'wài' }, { hanzi: '面', pinyin: 'miàn' }], emoji: '📤' },
    { id: 'zuo10s', hanzi: '坐', pinyin: 'zuò', english: 'to sit', syllables: [{ hanzi: '坐', pinyin: 'zuò' }], emoji: '🧘' },
    { id: 'zhan', hanzi: '站', pinyin: 'zhàn', english: 'to stand', syllables: [{ hanzi: '站', pinyin: 'zhàn' }], emoji: '🧍' },
    { id: 'zher10', hanzi: '这儿', pinyin: 'zhèr', english: 'here', syllables: [{ hanzi: '这', pinyin: 'zhè' }, { hanzi: '儿', pinyin: 'r' }], emoji: '📍' },
    { id: 'nar10', hanzi: '那儿', pinyin: 'nàr', english: 'there', syllables: [{ hanzi: '那', pinyin: 'nà' }, { hanzi: '儿', pinyin: 'r' }], emoji: '📌' },
    { id: 'nar10_q', hanzi: '哪儿', pinyin: 'nǎr', english: 'where', syllables: [{ hanzi: '哪', pinyin: 'nǎ' }, { hanzi: '儿', pinyin: 'r' }], emoji: '❓' },
  ],
  sentences: [
    { id: 's1', english: "What's on the table?", syllables: [{ hanzi: '桌', pinyin: 'zhuō' }, { hanzi: '子', pinyin: 'zi' }, { hanzi: '上', pinyin: 'shàng' }, { hanzi: '有', pinyin: 'yǒu' }, { hanzi: '什', pinyin: 'shén' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '桌子', pinyin: 'zhuōzi' }, { hanzi: '上', pinyin: 'shàng' }, { hanzi: '有', pinyin: 'yǒu' }, { hanzi: '什么', pinyin: 'shénme' }], terminator: '？' },
    { id: 's2', english: 'There is a computer on the table.', syllables: [{ hanzi: '桌', pinyin: 'zhuō' }, { hanzi: '子', pinyin: 'zi' }, { hanzi: '上', pinyin: 'shàng' }, { hanzi: '有', pinyin: 'yǒu' }, { hanzi: '一', pinyin: 'yí' }, { hanzi: '个', pinyin: 'gè' }, { hanzi: '电', pinyin: 'diàn' }, { hanzi: '脑', pinyin: 'nǎo' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '桌子', pinyin: 'zhuōzi' }, { hanzi: '上', pinyin: 'shàng' }, { hanzi: '有', pinyin: 'yǒu' }, { hanzi: '一个', pinyin: 'yí gè' }, { hanzi: '电脑', pinyin: 'diànnǎo' }], terminator: '。' },
    { id: 's3', english: 'Where is the cup?', syllables: [{ hanzi: '杯', pinyin: 'bēi' }, { hanzi: '子', pinyin: 'zi' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '哪', pinyin: 'nǎ' }, { hanzi: '儿', pinyin: 'r' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '杯子', pinyin: 'bēizi' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '哪儿', pinyin: 'nǎr' }], terminator: '？' },
    { id: 's4', english: 'The cup is inside the table.', syllables: [{ hanzi: '杯', pinyin: 'bēi' }, { hanzi: '子', pinyin: 'zi' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '桌', pinyin: 'zhuō' }, { hanzi: '子', pinyin: 'zi' }, { hanzi: '里', pinyin: 'lǐ' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '杯子', pinyin: 'bēizi' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '桌子', pinyin: 'zhuōzi' }, { hanzi: '里', pinyin: 'lǐ' }], terminator: '。' },
    { id: 's5', english: "What's the name of the person in front?", syllables: [{ hanzi: '前', pinyin: 'qián' }, { hanzi: '面', pinyin: 'miàn' }, { hanzi: '那', pinyin: 'nà' }, { hanzi: '个', pinyin: 'gè' }, { hanzi: '人', pinyin: 'rén' }, { hanzi: '叫', pinyin: 'jiào' }, { hanzi: '什', pinyin: 'shén' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '名', pinyin: 'míng' }, { hanzi: '字', pinyin: 'zi' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '前面', pinyin: 'qiánmiàn' }, { hanzi: '那个', pinyin: 'nàge' }, { hanzi: '人', pinyin: 'rén' }, { hanzi: '叫', pinyin: 'jiào' }, { hanzi: '什么', pinyin: 'shénme' }, { hanzi: '名字', pinyin: 'míngzi' }], terminator: '？' },
    { id: 's6', english: 'She is called Wang Fang.', syllables: [{ hanzi: '她', pinyin: 'tā' }, { hanzi: '叫', pinyin: 'jiào' }, { hanzi: '王', pinyin: 'Wáng' }, { hanzi: '方', pinyin: 'Fāng' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '她', pinyin: 'tā' }, { hanzi: '叫', pinyin: 'jiào' }, { hanzi: '王方', pinyin: 'Wáng Fāng' }], terminator: '。' },
    { id: 's7', english: "What's the name of the person in back?", syllables: [{ hanzi: '后', pinyin: 'hòu' }, { hanzi: '面', pinyin: 'miàn' }, { hanzi: '那', pinyin: 'nà' }, { hanzi: '个', pinyin: 'gè' }, { hanzi: '人', pinyin: 'rén' }, { hanzi: '叫', pinyin: 'jiào' }, { hanzi: '什', pinyin: 'shén' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '名', pinyin: 'míng' }, { hanzi: '字', pinyin: 'zi' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '后面', pinyin: 'hòumiàn' }, { hanzi: '那个', pinyin: 'nàge' }, { hanzi: '人', pinyin: 'rén' }, { hanzi: '叫', pinyin: 'jiào' }, { hanzi: '什么', pinyin: 'shénme' }, { hanzi: '名字', pinyin: 'míngzi' }], terminator: '？' },
    { id: 's8', english: 'He is called Xie Peng.', syllables: [{ hanzi: '他', pinyin: 'tā' }, { hanzi: '叫', pinyin: 'jiào' }, { hanzi: '谢', pinyin: 'Xiè' }, { hanzi: '朋', pinyin: 'Péng' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '他', pinyin: 'tā' }, { hanzi: '叫', pinyin: 'jiào' }, { hanzi: '谢朋', pinyin: 'Xiè Péng' }], terminator: '。' },
    { id: 's9', english: 'Is anyone here?', syllables: [{ hanzi: '这', pinyin: 'zhè' }, { hanzi: '儿', pinyin: 'r' }, { hanzi: '有', pinyin: 'yǒu' }, { hanzi: '人', pinyin: 'rén' }, { hanzi: '吗', pinyin: 'ma' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '这儿', pinyin: 'zhèr' }, { hanzi: '有', pinyin: 'yǒu' }, { hanzi: '人', pinyin: 'rén' }, { hanzi: '吗', pinyin: 'ma' }], terminator: '？' },
    { id: 's10', english: 'Can I sit here?', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '能', pinyin: 'néng' }, { hanzi: '坐', pinyin: 'zuò' }, { hanzi: '这', pinyin: 'zhè' }, { hanzi: '儿', pinyin: 'r' }, { hanzi: '吗', pinyin: 'ma' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '能', pinyin: 'néng' }, { hanzi: '坐', pinyin: 'zuò' }, { hanzi: '这儿', pinyin: 'zhèr' }, { hanzi: '吗', pinyin: 'ma' }], terminator: '？' },
    { id: 's11', english: 'Please sit.', syllables: [{ hanzi: '请', pinyin: 'qǐng' }, { hanzi: '坐', pinyin: 'zuò' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '请坐', pinyin: 'qǐng zuò' }], terminator: '。' },
  ],
};

export default chapter10;
