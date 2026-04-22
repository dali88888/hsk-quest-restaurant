import type { Chapter } from '../../types/chapter';

/**
 * HSK 2, Chapter 2 — I Get Up at Six Every Day
 * Based on HSK Standard Course 2 textbook
 */
const hsk2Chapter2: Chapter = {
  id: 'hsk2-ch2',
  number: 2,
  hskLevel: 2,
  titleEn: 'I Get Up at Six Every Day',
  titleZh: '我每天六点起床',
  descriptionEn: 'Daily routines, health, body descriptions, and time.',
  descriptionZh: '日常作息、健康、身体描述和时间。',
  vocabulary: [
    { id: 'h2c2-bing', hanzi: '病', pinyin: 'bìng', english: 'illness', syllables: [{ hanzi: '病', pinyin: 'bìng' }], emoji: '🤒' },
    { id: 'h2c2-shengbing', hanzi: '生病', pinyin: 'shēngbìng', english: 'to fall ill', syllables: [{ hanzi: '生', pinyin: 'shēng' }, { hanzi: '病', pinyin: 'bìng' }], emoji: '🤧' },
    { id: 'h2c2-mei', hanzi: '每', pinyin: 'měi', english: 'every', syllables: [{ hanzi: '每', pinyin: 'měi' }], emoji: '🔁' },
    { id: 'h2c2-zaoshang', hanzi: '早上', pinyin: 'zǎoshang', english: 'morning', syllables: [{ hanzi: '早', pinyin: 'zǎo' }, { hanzi: '上', pinyin: 'shang' }], emoji: '🌅' },
    { id: 'h2c2-qichuang', hanzi: '起床', pinyin: 'qǐchuáng', english: 'to get up', syllables: [{ hanzi: '起', pinyin: 'qǐ' }, { hanzi: '床', pinyin: 'chuáng' }], emoji: '🛌' },
    { id: 'h2c2-yao', hanzi: '药', pinyin: 'yào', english: 'medicine', syllables: [{ hanzi: '药', pinyin: 'yào' }], emoji: '💊' },
    { id: 'h2c2-shenti', hanzi: '身体', pinyin: 'shēntǐ', english: 'body/health', syllables: [{ hanzi: '身', pinyin: 'shēn' }, { hanzi: '体', pinyin: 'tǐ' }], emoji: '💪' },
    { id: 'h2c2-jin', hanzi: '进', pinyin: 'jìn', english: 'to enter', syllables: [{ hanzi: '进', pinyin: 'jìn' }], emoji: '➡️' },
    { id: 'h2c2-chu', hanzi: '出', pinyin: 'chū', english: 'to exit', syllables: [{ hanzi: '出', pinyin: 'chū' }], emoji: '⬅️' },
    { id: 'h2c2-chuyuan', hanzi: '出院', pinyin: 'chūyuàn', english: 'to leave hospital', syllables: [{ hanzi: '出', pinyin: 'chū' }, { hanzi: '院', pinyin: 'yuàn' }], emoji: '🏥' },
    { id: 'h2c2-gao', hanzi: '高', pinyin: 'gāo', english: 'tall/high', syllables: [{ hanzi: '高', pinyin: 'gāo' }], emoji: '📏' },
    { id: 'h2c2-ai', hanzi: '矮', pinyin: 'ǎi', english: 'short (height)', syllables: [{ hanzi: '矮', pinyin: 'ǎi' }], emoji: '📐' },
    { id: 'h2c2-pang', hanzi: '胖', pinyin: 'pàng', english: 'fat/chubby', syllables: [{ hanzi: '胖', pinyin: 'pàng' }], emoji: '🐷' },
    { id: 'h2c2-shou', hanzi: '瘦', pinyin: 'shòu', english: 'thin/skinny', syllables: [{ hanzi: '瘦', pinyin: 'shòu' }], emoji: '🦴' },
    { id: 'h2c2-mi', hanzi: '米', pinyin: 'mǐ', english: 'meter', syllables: [{ hanzi: '米', pinyin: 'mǐ' }], emoji: '📏' },
    { id: 'h2c2-limi', hanzi: '厘米', pinyin: 'límǐ', english: 'centimeter', syllables: [{ hanzi: '厘', pinyin: 'lí' }, { hanzi: '米', pinyin: 'mǐ' }], emoji: '📏' },
    { id: 'h2c2-zhidao', hanzi: '知道', pinyin: 'zhīdào', english: 'to know', syllables: [{ hanzi: '知', pinyin: 'zhī' }, { hanzi: '道', pinyin: 'dào' }], emoji: '💡' },
    { id: 'h2c2-xiuxi', hanzi: '休息', pinyin: 'xiūxi', english: 'to rest', syllables: [{ hanzi: '休', pinyin: 'xiū' }, { hanzi: '息', pinyin: 'xi' }], emoji: '😴' },
    { id: 'h2c2-mang', hanzi: '忙', pinyin: 'máng', english: 'busy', syllables: [{ hanzi: '忙', pinyin: 'máng' }], emoji: '🏃' },
    { id: 'h2c2-shijian', hanzi: '时间', pinyin: 'shíjiān', english: 'time', syllables: [{ hanzi: '时', pinyin: 'shí' }, { hanzi: '间', pinyin: 'jiān' }], emoji: '⏰' },
    { id: 'h2c2-duanlian', hanzi: '锻炼', pinyin: 'duànliàn', english: 'to work out', syllables: [{ hanzi: '锻', pinyin: 'duàn' }, { hanzi: '炼', pinyin: 'liàn' }], emoji: '🏋️' },
    { id: 'h2c2-tiyu', hanzi: '体育', pinyin: 'tǐyù', english: 'physical education/sports', syllables: [{ hanzi: '体', pinyin: 'tǐ' }, { hanzi: '育', pinyin: 'yù' }], emoji: '🏅' },
  ],
  sentences: [
    { id: 's1', english: 'I get up at six every day.', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '每', pinyin: 'měi' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '六', pinyin: 'liù' }, { hanzi: '点', pinyin: 'diǎn' }, { hanzi: '起', pinyin: 'qǐ' }, { hanzi: '床', pinyin: 'chuáng' }, { hanzi: '。', pinyin: '' }] },
    { id: 's2', english: 'He is sick and needs to take medicine and rest.', syllables: [{ hanzi: '他', pinyin: 'tā' }, { hanzi: '生', pinyin: 'shēng' }, { hanzi: '病', pinyin: 'bìng' }, { hanzi: '了', pinyin: 'le' }, { hanzi: '，', pinyin: '' }, { hanzi: '要', pinyin: 'yào' }, { hanzi: '吃', pinyin: 'chī' }, { hanzi: '药', pinyin: 'yào' }, { hanzi: '休', pinyin: 'xiū' }, { hanzi: '息', pinyin: 'xi' }, { hanzi: '。', pinyin: '' }] },
    { id: 's3', english: 'Working out is good for your body.', syllables: [{ hanzi: '锻', pinyin: 'duàn' }, { hanzi: '炼', pinyin: 'liàn' }, { hanzi: '对', pinyin: 'duì' }, { hanzi: '身', pinyin: 'shēn' }, { hanzi: '体', pinyin: 'tǐ' }, { hanzi: '好', pinyin: 'hǎo' }, { hanzi: '。', pinyin: '' }] },
  ],
};

export default hsk2Chapter2;
