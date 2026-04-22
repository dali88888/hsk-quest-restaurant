import type { Chapter } from '../../types/chapter';

/**
 * HSK 2, Chapter 5 — Just Buy This One
 * Based on HSK Standard Course 2 textbook
 */
const hsk2Chapter5: Chapter = {
  id: 'hsk2-ch5',
  number: 5,
  hskLevel: 2,
  titleEn: 'Just Buy This One',
  titleZh: '就买这件吧',
  descriptionEn: 'Shopping, decisions, exams, and venues.',
  descriptionZh: '购物、决定、考试和场馆。',
  vocabulary: [
    { id: 'h2c5-waimian', hanzi: '外面', pinyin: 'wàimian', english: 'outside', syllables: [{ hanzi: '外', pinyin: 'wài' }, { hanzi: '面', pinyin: 'mian' }], emoji: '🌳' },
    { id: 'h2c5-zhunbei', hanzi: '准备', pinyin: 'zhǔnbèi', english: 'to prepare/plan', syllables: [{ hanzi: '准', pinyin: 'zhǔn' }, { hanzi: '备', pinyin: 'bèi' }], emoji: '📋' },
    { id: 'h2c5-jiu', hanzi: '就', pinyin: 'jiù', english: 'just/then', syllables: [{ hanzi: '就', pinyin: 'jiù' }], emoji: '👉' },
    { id: 'h2c5-ba5', hanzi: '吧', pinyin: 'ba', english: '(suggestion particle)', syllables: [{ hanzi: '吧', pinyin: 'ba' }], emoji: '💬' },
    { id: 'h2c5-jian', hanzi: '件', pinyin: 'jiàn', english: '(measure word for clothes)', syllables: [{ hanzi: '件', pinyin: 'jiàn' }], emoji: '👔' },
    { id: 'h2c5-hai', hanzi: '还', pinyin: 'hái', english: 'still/also', syllables: [{ hanzi: '还', pinyin: 'hái' }], emoji: '🔄' },
    { id: 'h2c5-keyi', hanzi: '可以', pinyin: 'kěyǐ', english: 'can/may', syllables: [{ hanzi: '可', pinyin: 'kě' }, { hanzi: '以', pinyin: 'yǐ' }], emoji: '✅' },
    { id: 'h2c5-bucuo', hanzi: '不错', pinyin: 'búcuò', english: 'not bad/pretty good', syllables: [{ hanzi: '不', pinyin: 'bú' }, { hanzi: '错', pinyin: 'cuò' }], emoji: '👍' },
    { id: 'h2c5-kaoshi', hanzi: '考试', pinyin: 'kǎoshì', english: 'exam/test', syllables: [{ hanzi: '考', pinyin: 'kǎo' }, { hanzi: '试', pinyin: 'shì' }], emoji: '📝' },
    { id: 'h2c5-yisi', hanzi: '意思', pinyin: 'yìsi', english: 'meaning', syllables: [{ hanzi: '意', pinyin: 'yì' }, { hanzi: '思', pinyin: 'si' }], emoji: '💭' },
    { id: 'h2c5-kafei', hanzi: '咖啡', pinyin: 'kāfēi', english: 'coffee', syllables: [{ hanzi: '咖', pinyin: 'kā' }, { hanzi: '啡', pinyin: 'fēi' }], emoji: '☕' },
    { id: 'h2c5-dui', hanzi: '对', pinyin: 'duì', english: 'correct/right', syllables: [{ hanzi: '对', pinyin: 'duì' }], emoji: '✔️' },
    { id: 'h2c5-yihou', hanzi: '以后', pinyin: 'yǐhòu', english: 'after/later', syllables: [{ hanzi: '以', pinyin: 'yǐ' }, { hanzi: '后', pinyin: 'hòu' }], emoji: '⏭️' },
    { id: 'h2c5-yi', hanzi: '衣', pinyin: 'yī', english: 'clothing', syllables: [{ hanzi: '衣', pinyin: 'yī' }], emoji: '👕' },
    { id: 'h2c5-yifu', hanzi: '衣服', pinyin: 'yīfu', english: 'clothes', syllables: [{ hanzi: '衣', pinyin: 'yī' }, { hanzi: '服', pinyin: 'fu' }], emoji: '👚' },
    { id: 'h2c5-guan', hanzi: '馆', pinyin: 'guǎn', english: 'hall/venue', syllables: [{ hanzi: '馆', pinyin: 'guǎn' }], emoji: '🏛️' },
    { id: 'h2c5-fanguan', hanzi: '饭馆', pinyin: 'fànguǎn', english: 'restaurant', syllables: [{ hanzi: '饭', pinyin: 'fàn' }, { hanzi: '馆', pinyin: 'guǎn' }], emoji: '🍽️' },
    { id: 'h2c5-kafeiguan', hanzi: '咖啡馆', pinyin: 'kāfēiguǎn', english: 'café', syllables: [{ hanzi: '咖', pinyin: 'kā' }, { hanzi: '啡', pinyin: 'fēi' }, { hanzi: '馆', pinyin: 'guǎn' }], emoji: '☕' },
    { id: 'h2c5-tiyuguan', hanzi: '体育馆', pinyin: 'tǐyùguǎn', english: 'gym/stadium', syllables: [{ hanzi: '体', pinyin: 'tǐ' }, { hanzi: '育', pinyin: 'yù' }, { hanzi: '馆', pinyin: 'guǎn' }], emoji: '🏟️' },
  ],
  sentences: [
    { id: 's1', english: "Just buy this one, it's not bad.", syllables: [{ hanzi: '就', pinyin: 'jiù' }, { hanzi: '买', pinyin: 'mǎi' }, { hanzi: '这', pinyin: 'zhè' }, { hanzi: '件', pinyin: 'jiàn' }, { hanzi: '吧', pinyin: 'ba' }, { hanzi: '，', pinyin: '' }, { hanzi: '不', pinyin: 'bú' }, { hanzi: '错', pinyin: 'cuò' }, { hanzi: '。', pinyin: '' }] },
    { id: 's2', english: 'I am preparing for the exam.', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '准', pinyin: 'zhǔn' }, { hanzi: '备', pinyin: 'bèi' }, { hanzi: '考', pinyin: 'kǎo' }, { hanzi: '试', pinyin: 'shì' }, { hanzi: '。', pinyin: '' }] },
    { id: 's3', english: 'Shall we drink coffee at the café later?', syllables: [{ hanzi: '以', pinyin: 'yǐ' }, { hanzi: '后', pinyin: 'hòu' }, { hanzi: '我', pinyin: 'wǒ' }, { hanzi: '们', pinyin: 'men' }, { hanzi: '在', pinyin: 'zài' }, { hanzi: '咖', pinyin: 'kā' }, { hanzi: '啡', pinyin: 'fēi' }, { hanzi: '馆', pinyin: 'guǎn' }, { hanzi: '喝', pinyin: 'hē' }, { hanzi: '咖', pinyin: 'kā' }, { hanzi: '啡', pinyin: 'fēi' }, { hanzi: '吧', pinyin: 'ba' }, { hanzi: '？', pinyin: '' }] },
  ],
};

export default hsk2Chapter5;
