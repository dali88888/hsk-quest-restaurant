import type { Chapter } from '../../types/chapter';

/**
 * HSK 2, Chapter 11 — He Is Three Years Older Than Me
 * Based on HSK Standard Course 2 textbook
 */
const hsk2Chapter11: Chapter = {
  id: 'hsk2-ch11',
  number: 11,
  hskLevel: 2,
  titleEn: 'He Is Three Years Older Than Me',
  titleZh: '他比我大三岁',
  descriptionEn: 'Comparisons, people, and descriptions.',
  descriptionZh: '比较、人物和描述。',
  vocabulary: [
    {
      id: 'changge',
      hanzi: '唱歌',
      pinyin: 'chànggē',
      english: 'to sing',
      syllables: [
        { hanzi: '唱', pinyin: 'chàng' },
        { hanzi: '歌', pinyin: 'gē' },
      ],
      emoji: '🎤',
    },
    {
      id: 'nan',
      hanzi: '男',
      pinyin: 'nán',
      english: 'male',
      syllables: [{ hanzi: '男', pinyin: 'nán' }],
      emoji: '👨',
    },
    {
      id: 'nv',
      hanzi: '女',
      pinyin: 'nǚ',
      english: 'female',
      syllables: [{ hanzi: '女', pinyin: 'nǚ' }],
      emoji: '👩',
    },
    {
      id: 'haizi',
      hanzi: '孩子',
      pinyin: 'háizi',
      english: 'child',
      syllables: [
        { hanzi: '孩', pinyin: 'hái' },
        { hanzi: '子', pinyin: 'zi' },
      ],
      emoji: '👧',
    },
    {
      id: 'bi',
      hanzi: '比',
      pinyin: 'bǐ',
      english: 'than/compared to',
      syllables: [{ hanzi: '比', pinyin: 'bǐ' }],
      emoji: '⚖️',
    },
    {
      id: 'shuohua',
      hanzi: '说话',
      pinyin: 'shuōhuà',
      english: 'to speak/talk',
      syllables: [
        { hanzi: '说', pinyin: 'shuō' },
        { hanzi: '话', pinyin: 'huà' },
      ],
      emoji: '🗣️',
    },
    {
      id: 'keneng',
      hanzi: '可能',
      pinyin: 'kěnéng',
      english: 'maybe/possibly',
      syllables: [
        { hanzi: '可', pinyin: 'kě' },
        { hanzi: '能', pinyin: 'néng' },
      ],
      emoji: '🤷',
    },
    {
      id: 'xing',
      hanzi: '姓',
      pinyin: 'xìng',
      english: 'surname',
      syllables: [{ hanzi: '姓', pinyin: 'xìng' }],
      emoji: '📛',
    },
    {
      id: 'bing',
      hanzi: '冰',
      pinyin: 'bīng',
      english: 'ice',
      syllables: [{ hanzi: '冰', pinyin: 'bīng' }],
      emoji: '🧊',
    },
  ],
  sentences: [
    {
      id: 's1',
      english: 'He is three years older than me.',
      syllables: [
        { hanzi: '他', pinyin: 'tā' },
        { hanzi: '比', pinyin: 'bǐ' },
        { hanzi: '我', pinyin: 'wǒ' },
        { hanzi: '大', pinyin: 'dà' },
        { hanzi: '三', pinyin: 'sān' },
        { hanzi: '岁', pinyin: 'suì' },
        { hanzi: '。', pinyin: '' },
      ],
    },
    {
      id: 's2',
      english: 'That child possibly likes to sing.',
      syllables: [
        { hanzi: '那', pinyin: 'nà' },
        { hanzi: '个', pinyin: 'ge' },
        { hanzi: '孩', pinyin: 'hái' },
        { hanzi: '子', pinyin: 'zi' },
        { hanzi: '可', pinyin: 'kě' },
        { hanzi: '能', pinyin: 'néng' },
        { hanzi: '喜', pinyin: 'xǐ' },
        { hanzi: '欢', pinyin: 'huan' },
        { hanzi: '唱', pinyin: 'chàng' },
        { hanzi: '歌', pinyin: 'gē' },
        { hanzi: '。', pinyin: '' },
      ],
    },
  ],
};

export default hsk2Chapter11;
