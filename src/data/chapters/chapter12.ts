import type { Chapter } from '../../types/chapter';

/**
 * HSK 1, Chapter 12 — How's the Weather Tomorrow?
 * Weather, temperature, health, fruit, and rise/fall
 */
const chapter12: Chapter = {
  id: 'hsk1-ch12',
  number: 12,
  hskLevel: 1,
  titleEn: "How's the Weather Tomorrow?",
  titleZh: '明天天气怎么样',
  descriptionEn: 'Weather, temperature, health, fruits, and directions (rise/fall).',
  descriptionZh: '天气、温度、健康、水果和动词（升降）。',
  vocabulary: [
    { id: 'tianqi', hanzi: '天气', pinyin: 'tiānqì', english: 'weather', syllables: [{ hanzi: '天', pinyin: 'tiān' }, { hanzi: '气', pinyin: 'qì' }], emoji: '🌤️' },
    { id: 'zenmeyang', hanzi: '怎么样', pinyin: 'zěnmeyàng', english: 'how is it', syllables: [{ hanzi: '怎', pinyin: 'zěn' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '样', pinyin: 'yàng' }], emoji: '❓' },
    { id: 'tai', hanzi: '太', pinyin: 'tài', english: 'too (much)', syllables: [{ hanzi: '太', pinyin: 'tài' }], emoji: '‼️' },
    { id: 're', hanzi: '热', pinyin: 'rè', english: 'hot', syllables: [{ hanzi: '热', pinyin: 'rè' }], emoji: '🔥' },
    { id: 'leng', hanzi: '冷', pinyin: 'lěng', english: 'cold', syllables: [{ hanzi: '冷', pinyin: 'lěng' }], emoji: '🥶' },
    { id: 'nuan', hanzi: '暖', pinyin: 'nuǎn', english: 'warm', syllables: [{ hanzi: '暖', pinyin: 'nuǎn' }], emoji: '🌞' },
    { id: 'nuanhuo', hanzi: '暖和', pinyin: 'nuǎnhuo', english: 'warm (weather)', syllables: [{ hanzi: '暖', pinyin: 'nuǎn' }, { hanzi: '和', pinyin: 'huo' }], emoji: '🌤️' },
    { id: 'xiayu', hanzi: '下雨', pinyin: 'xiàyǔ', english: 'to rain', syllables: [{ hanzi: '下', pinyin: 'xià' }, { hanzi: '雨', pinyin: 'yǔ' }], emoji: '🌧️' },
    { id: 'yu12', hanzi: '雨', pinyin: 'yǔ', english: 'rain', syllables: [{ hanzi: '雨', pinyin: 'yǔ' }], emoji: '💧' },
    { id: 'xiaojie', hanzi: '小姐', pinyin: 'xiǎojiě', english: 'miss, lady', syllables: [{ hanzi: '小', pinyin: 'xiǎo' }, { hanzi: '姐', pinyin: 'jiě' }], emoji: '👩' },
    { id: 'lai', hanzi: '来', pinyin: 'lái', english: 'to come', syllables: [{ hanzi: '来', pinyin: 'lái' }], emoji: '🚶' },
    { id: 'qu12', hanzi: '去', pinyin: 'qù', english: 'to go', syllables: [{ hanzi: '去', pinyin: 'qù' }], emoji: '🏃' },
    { id: 'shenti', hanzi: '身体', pinyin: 'shēntǐ', english: 'body, health', syllables: [{ hanzi: '身', pinyin: 'shēn' }, { hanzi: '体', pinyin: 'tǐ' }], emoji: '💪' },
    { id: 'ai', hanzi: '爱', pinyin: 'ài', english: 'to love', syllables: [{ hanzi: '爱', pinyin: 'ài' }], emoji: '❤️' },
    { id: 'xie12', hanzi: '些', pinyin: 'xiē', english: 'some', syllables: [{ hanzi: '些', pinyin: 'xiē' }], emoji: '🔹' },
    { id: 'yixie', hanzi: '一些', pinyin: 'yìxiē', english: 'some, a few', syllables: [{ hanzi: '一', pinyin: 'yì' }, { hanzi: '些', pinyin: 'xiē' }], emoji: '🔸' },
    { id: 'shuiguo', hanzi: '水果', pinyin: 'shuǐguǒ', english: 'fruit', syllables: [{ hanzi: '水', pinyin: 'shuǐ' }, { hanzi: '果', pinyin: 'guǒ' }], emoji: '🍎' },
    { id: 'shang12', hanzi: '上', pinyin: 'shàng', english: 'to rise, go up', syllables: [{ hanzi: '上', pinyin: 'shàng' }], emoji: '⬆️' },
    { id: 'xia12', hanzi: '下', pinyin: 'xià', english: 'to fall, go down', syllables: [{ hanzi: '下', pinyin: 'xià' }], emoji: '⬇️' },
  ],
  sentences: [
    { id: 's1', english: "How's the weather tomorrow?", syllables: [{ hanzi: '明', pinyin: 'míng' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '气', pinyin: 'qì' }, { hanzi: '怎', pinyin: 'zěn' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '样', pinyin: 'yàng' }, { hanzi: '？', pinyin: '' }] },
    { id: 's2', english: "It's too hot today.", syllables: [{ hanzi: '今', pinyin: 'jīn' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '太', pinyin: 'tài' }, { hanzi: '热', pinyin: 'rè' }, { hanzi: '了', pinyin: 'le' }, { hanzi: '。', pinyin: '' }] },
    { id: 's3', english: 'I love some fruits.', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '爱', pinyin: 'ài' }, { hanzi: '一', pinyin: 'yì' }, { hanzi: '些', pinyin: 'xiē' }, { hanzi: '水', pinyin: 'shuǐ' }, { hanzi: '果', pinyin: 'guǒ' }, { hanzi: '。', pinyin: '' }] },
  ],
};

export default chapter12;
