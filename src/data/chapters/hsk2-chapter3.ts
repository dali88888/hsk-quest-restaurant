import type { Chapter } from '../../types/chapter';

/**
 * HSK 2, Chapter 3 — The Red One on the Left Is Mine
 * Based on HSK Standard Course 2 textbook
 */
const hsk2Chapter3: Chapter = {
  id: 'hsk2-ch3',
  number: 3,
  hskLevel: 2,
  titleEn: 'The Red One on the Left Is Mine',
  titleZh: '左边那个红色的是我的',
  descriptionEn: 'Colors, household items, family, and positions.',
  descriptionZh: '颜色、日常物品、家庭和方位。',
  vocabulary: [
    { id: 'h2c3-shoubiao', hanzi: '手表', pinyin: 'shǒubiǎo', english: 'watch', syllables: [{ hanzi: '手', pinyin: 'shǒu' }, { hanzi: '表', pinyin: 'biǎo' }], emoji: '⌚' },
    { id: 'h2c3-baozhi', hanzi: '报纸', pinyin: 'bàozhǐ', english: 'newspaper', syllables: [{ hanzi: '报', pinyin: 'bào' }, { hanzi: '纸', pinyin: 'zhǐ' }], emoji: '📰' },
    { id: 'h2c3-shou', hanzi: '收', pinyin: 'shōu', english: 'to receive', syllables: [{ hanzi: '收', pinyin: 'shōu' }], emoji: '📥' },
    { id: 'h2c3-song', hanzi: '送', pinyin: 'sòng', english: 'to give as a gift/deliver', syllables: [{ hanzi: '送', pinyin: 'sòng' }], emoji: '🎁' },
    { id: 'h2c3-nai', hanzi: '奶', pinyin: 'nǎi', english: 'milk', syllables: [{ hanzi: '奶', pinyin: 'nǎi' }], emoji: '🥛' },
    { id: 'h2c3-niunai', hanzi: '牛奶', pinyin: 'niúnǎi', english: 'cow milk', syllables: [{ hanzi: '牛', pinyin: 'niú' }, { hanzi: '奶', pinyin: 'nǎi' }], emoji: '🥛' },
    { id: 'h2c3-fangjian', hanzi: '房间', pinyin: 'fángjiān', english: 'room', syllables: [{ hanzi: '房', pinyin: 'fáng' }, { hanzi: '间', pinyin: 'jiān' }], emoji: '🏠' },
    { id: 'h2c3-zhangfu', hanzi: '丈夫', pinyin: 'zhàngfu', english: 'husband', syllables: [{ hanzi: '丈', pinyin: 'zhàng' }, { hanzi: '夫', pinyin: 'fu' }], emoji: '🤵' },
    { id: 'h2c3-qizi', hanzi: '妻子', pinyin: 'qīzi', english: 'wife', syllables: [{ hanzi: '妻', pinyin: 'qī' }, { hanzi: '子', pinyin: 'zi' }], emoji: '👰' },
    { id: 'h2c3-pangbian', hanzi: '旁边', pinyin: 'pángbiān', english: 'next to/side', syllables: [{ hanzi: '旁', pinyin: 'páng' }, { hanzi: '边', pinyin: 'biān' }], emoji: '↔️' },
    { id: 'h2c3-zhen', hanzi: '真', pinyin: 'zhēn', english: 'really/true', syllables: [{ hanzi: '真', pinyin: 'zhēn' }], emoji: '💯' },
    { id: 'h2c3-yanse', hanzi: '颜色', pinyin: 'yánsè', english: 'color', syllables: [{ hanzi: '颜', pinyin: 'yán' }, { hanzi: '色', pinyin: 'sè' }], emoji: '🎨' },
    { id: 'h2c3-hei', hanzi: '黑', pinyin: 'hēi', english: 'black', syllables: [{ hanzi: '黑', pinyin: 'hēi' }], emoji: '⚫' },
    { id: 'h2c3-bai', hanzi: '白', pinyin: 'bái', english: 'white', syllables: [{ hanzi: '白', pinyin: 'bái' }], emoji: '⚪' },
    { id: 'h2c3-hong', hanzi: '红', pinyin: 'hóng', english: 'red', syllables: [{ hanzi: '红', pinyin: 'hóng' }], emoji: '🔴' },
    { id: 'h2c3-huang', hanzi: '黄', pinyin: 'huáng', english: 'yellow', syllables: [{ hanzi: '黄', pinyin: 'huáng' }], emoji: '🟡' },
    { id: 'h2c3-lv', hanzi: '绿', pinyin: 'lǜ', english: 'green', syllables: [{ hanzi: '绿', pinyin: 'lǜ' }], emoji: '🟢' },
    { id: 'h2c3-lan', hanzi: '蓝', pinyin: 'lán', english: 'blue', syllables: [{ hanzi: '蓝', pinyin: 'lán' }], emoji: '🔵' },
    { id: 'h2c3-fen', hanzi: '粉', pinyin: 'fěn', english: 'pink', syllables: [{ hanzi: '粉', pinyin: 'fěn' }], emoji: '🌸' },
    { id: 'h2c3-heise', hanzi: '黑色', pinyin: 'hēisè', english: 'black (color)', syllables: [{ hanzi: '黑', pinyin: 'hēi' }, { hanzi: '色', pinyin: 'sè' }], emoji: '⚫' },
    { id: 'h2c3-baise', hanzi: '白色', pinyin: 'báisè', english: 'white (color)', syllables: [{ hanzi: '白', pinyin: 'bái' }, { hanzi: '色', pinyin: 'sè' }], emoji: '⚪' },
    { id: 'h2c3-hongse', hanzi: '红色', pinyin: 'hóngsè', english: 'red (color)', syllables: [{ hanzi: '红', pinyin: 'hóng' }, { hanzi: '色', pinyin: 'sè' }], emoji: '🔴' },
    { id: 'h2c3-huangse', hanzi: '黄色', pinyin: 'huángsè', english: 'yellow (color)', syllables: [{ hanzi: '黄', pinyin: 'huáng' }, { hanzi: '色', pinyin: 'sè' }], emoji: '🟡' },
    { id: 'h2c3-lvse', hanzi: '绿色', pinyin: 'lǜsè', english: 'green (color)', syllables: [{ hanzi: '绿', pinyin: 'lǜ' }, { hanzi: '色', pinyin: 'sè' }], emoji: '🟢' },
    { id: 'h2c3-lanse', hanzi: '蓝色', pinyin: 'lánsè', english: 'blue (color)', syllables: [{ hanzi: '蓝', pinyin: 'lán' }, { hanzi: '色', pinyin: 'sè' }], emoji: '🔵' },
    { id: 'h2c3-fense', hanzi: '粉色', pinyin: 'fěnsè', english: 'pink (color)', syllables: [{ hanzi: '粉', pinyin: 'fěn' }, { hanzi: '色', pinyin: 'sè' }], emoji: '🌸' },
  ],
  sentences: [
    { id: 's1', english: 'The red one on the left is mine.', syllables: [{ hanzi: '左', pinyin: 'zuǒ' }, { hanzi: '边', pinyin: 'biān' }, { hanzi: '那', pinyin: 'nà' }, { hanzi: '个', pinyin: 'ge' }, { hanzi: '红', pinyin: 'hóng' }, { hanzi: '色', pinyin: 'sè' }, { hanzi: '的', pinyin: 'de' }, { hanzi: '是', pinyin: 'shì' }, { hanzi: '我', pinyin: 'wǒ' }, { hanzi: '的', pinyin: 'de' }, { hanzi: '。', pinyin: '' }] },
    { id: 's2', english: 'My husband gave me a watch as a gift.', syllables: [{ hanzi: '丈', pinyin: 'zhàng' }, { hanzi: '夫', pinyin: 'fu' }, { hanzi: '送', pinyin: 'sòng' }, { hanzi: '我', pinyin: 'wǒ' }, { hanzi: '一', pinyin: 'yí' }, { hanzi: '个', pinyin: 'ge' }, { hanzi: '手', pinyin: 'shǒu' }, { hanzi: '表', pinyin: 'biǎo' }, { hanzi: '。', pinyin: '' }] },
    { id: 's3', english: 'What color do you like?', syllables: [{ hanzi: '你', pinyin: 'nǐ' }, { hanzi: '喜', pinyin: 'xǐ' }, { hanzi: '欢', pinyin: 'huan' }, { hanzi: '什', pinyin: 'shén' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '颜', pinyin: 'yán' }, { hanzi: '色', pinyin: 'sè' }, { hanzi: '？', pinyin: '' }] },
  ],
};

export default hsk2Chapter3;
