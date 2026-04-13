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
  descriptionEn:
    'Daily routines, health, body descriptions, and time.',
  descriptionZh: '日常作息、健康、身体描述和时间。',
  vocabulary: [
    {
      id: 'shengbing',
      hanzi: '生病',
      pinyin: 'shēngbìng',
      english: 'to be sick',
      syllables: [
        { hanzi: '生', pinyin: 'shēng' },
        { hanzi: '病', pinyin: 'bìng' },
      ],
      emoji: '🤒',
    },
    {
      id: 'mei',
      hanzi: '每',
      pinyin: 'měi',
      english: 'every',
      syllables: [{ hanzi: '每', pinyin: 'měi' }],
      emoji: '🔄',
    },
    {
      id: 'zaoshang',
      hanzi: '早上',
      pinyin: 'zǎoshang',
      english: 'morning',
      syllables: [
        { hanzi: '早', pinyin: 'zǎo' },
        { hanzi: '上', pinyin: 'shang' },
      ],
      emoji: '🌅',
    },
    {
      id: 'qichuang',
      hanzi: '起床',
      pinyin: 'qǐchuáng',
      english: 'to get up',
      syllables: [
        { hanzi: '起', pinyin: 'qǐ' },
        { hanzi: '床', pinyin: 'chuáng' },
      ],
      emoji: '🛏️',
    },
    {
      id: 'yao2',
      hanzi: '药',
      pinyin: 'yào',
      english: 'medicine',
      syllables: [{ hanzi: '药', pinyin: 'yào' }],
      emoji: '💊',
    },
    {
      id: 'shenti',
      hanzi: '身体',
      pinyin: 'shēntǐ',
      english: 'body/health',
      syllables: [
        { hanzi: '身', pinyin: 'shēn' },
        { hanzi: '体', pinyin: 'tǐ' },
      ],
      emoji: '💪',
    },
    {
      id: 'chuyuan',
      hanzi: '出院',
      pinyin: 'chūyuàn',
      english: 'to leave hospital',
      syllables: [
        { hanzi: '出', pinyin: 'chū' },
        { hanzi: '院', pinyin: 'yuàn' },
      ],
      emoji: '🏥',
    },
    {
      id: 'gao',
      hanzi: '高',
      pinyin: 'gāo',
      english: 'tall',
      syllables: [{ hanzi: '高', pinyin: 'gāo' }],
      emoji: '📏',
    },
    {
      id: 'ai',
      hanzi: '矮',
      pinyin: 'ǎi',
      english: 'short (height)',
      syllables: [{ hanzi: '矮', pinyin: 'ǎi' }],
      emoji: '📐',
    },
    {
      id: 'pang',
      hanzi: '胖',
      pinyin: 'pàng',
      english: 'fat',
      syllables: [{ hanzi: '胖', pinyin: 'pàng' }],
      emoji: '🐷',
    },
    {
      id: 'shou',
      hanzi: '瘦',
      pinyin: 'shòu',
      english: 'thin',
      syllables: [{ hanzi: '瘦', pinyin: 'shòu' }],
      emoji: '🦴',
    },
    {
      id: 'mi',
      hanzi: '米',
      pinyin: 'mǐ',
      english: 'meter',
      syllables: [{ hanzi: '米', pinyin: 'mǐ' }],
      emoji: '📏',
    },
    {
      id: 'limi',
      hanzi: '厘米',
      pinyin: 'límǐ',
      english: 'centimeter',
      syllables: [
        { hanzi: '厘', pinyin: 'lí' },
        { hanzi: '米', pinyin: 'mǐ' },
      ],
      emoji: '📐',
    },
    {
      id: 'zhidao',
      hanzi: '知道',
      pinyin: 'zhīdào',
      english: 'to know (a fact)',
      syllables: [
        { hanzi: '知', pinyin: 'zhī' },
        { hanzi: '道', pinyin: 'dào' },
      ],
      emoji: '💡',
    },
    {
      id: 'xiuxi',
      hanzi: '休息',
      pinyin: 'xiūxi',
      english: 'to rest',
      syllables: [
        { hanzi: '休', pinyin: 'xiū' },
        { hanzi: '息', pinyin: 'xi' },
      ],
      emoji: '😴',
    },
    {
      id: 'mang',
      hanzi: '忙',
      pinyin: 'máng',
      english: 'busy',
      syllables: [{ hanzi: '忙', pinyin: 'máng' }],
      emoji: '🏃‍♂️',
    },
    {
      id: 'shijian',
      hanzi: '时间',
      pinyin: 'shíjiān',
      english: 'time',
      syllables: [
        { hanzi: '时', pinyin: 'shí' },
        { hanzi: '间', pinyin: 'jiān' },
      ],
      emoji: '⏰',
    },
  ],
  sentences: [
    {
      id: 's1',
      english: 'I get up at six every morning.',
      syllables: [
        { hanzi: '我', pinyin: 'wǒ' },
        { hanzi: '每', pinyin: 'měi' },
        { hanzi: '天', pinyin: 'tiān' },
        { hanzi: '早', pinyin: 'zǎo' },
        { hanzi: '上', pinyin: 'shang' },
        { hanzi: '六', pinyin: 'liù' },
        { hanzi: '点', pinyin: 'diǎn' },
        { hanzi: '起', pinyin: 'qǐ' },
        { hanzi: '床', pinyin: 'chuáng' },
        { hanzi: '。', pinyin: '' },
      ],
    },
    {
      id: 's2',
      english: 'He is sick and needs to take medicine and rest.',
      syllables: [
        { hanzi: '他', pinyin: 'tā' },
        { hanzi: '生', pinyin: 'shēng' },
        { hanzi: '病', pinyin: 'bìng' },
        { hanzi: '了', pinyin: 'le' },
        { hanzi: '，', pinyin: '' },
        { hanzi: '要', pinyin: 'yào' },
        { hanzi: '吃', pinyin: 'chī' },
        { hanzi: '药', pinyin: 'yào' },
        { hanzi: '休', pinyin: 'xiū' },
        { hanzi: '息', pinyin: 'xi' },
        { hanzi: '。', pinyin: '' },
      ],
    },
  ],
};

export default hsk2Chapter2;
