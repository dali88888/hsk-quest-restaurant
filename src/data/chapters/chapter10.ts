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
    { id: 's1', english: 'Can I sit here?', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '能', pinyin: 'néng' }, { hanzi: '坐', pinyin: 'zuò' }, { hanzi: '这', pinyin: 'zhè' }, { hanzi: '儿', pinyin: 'r' }, { hanzi: '吗', pinyin: 'ma' }, { hanzi: '？', pinyin: '' }] },
    { id: 's2', english: 'The computer is on the left side of the desk.', syllables: [{ hanzi: '电', pinyin: 'diàn' }, { hanzi: '脑', pinyin: 'nǎo' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '桌', pinyin: 'zhuō' }, { hanzi: '子', pinyin: 'zi' }, { hanzi: '左', pinyin: 'zuǒ' }, { hanzi: '边', pinyin: 'bian' }, { hanzi: '。', pinyin: '' }] },
  ],
};

export default chapter10;
