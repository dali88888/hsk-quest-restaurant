import type { Chapter } from '../../types/chapter';

/**
 * HSK 1, Chapter 2 — Thanks, Farewell & Descriptions
 * Based on HSK Standard Course 1 textbook
 */
const chapter2: Chapter = {
  id: 'hsk1-ch2',
  number: 2,
  hskLevel: 1,
  titleEn: 'Thanks, Farewell & Descriptions',
  titleZh: '感谢、告别与描述',
  descriptionEn:
    'Learn to say thank you, goodbye, and describe size.',
  descriptionZh: '学习感谢、告别用语以及大小描述。',
  vocabulary: [
    {
      id: 'xiexie',
      hanzi: '谢谢',
      pinyin: 'xièxie',
      english: 'thank you',
      syllables: [
        { hanzi: '谢', pinyin: 'xiè' },
        { hanzi: '谢', pinyin: 'xie' },
      ],
      emoji: '🙏',
    },
    {
      id: 'bu',
      hanzi: '不',
      pinyin: 'bù',
      english: 'not, no',
      syllables: [{ hanzi: '不', pinyin: 'bù' }],
      emoji: '🚫',
    },
    {
      id: 'bukeqi',
      hanzi: '不客气',
      pinyin: 'bú kèqi',
      english: "you're welcome",
      syllables: [
        { hanzi: '不', pinyin: 'bú' },
        { hanzi: '客', pinyin: 'kè' },
        { hanzi: '气', pinyin: 'qi' },
      ],
      emoji: '😄',
    },
    {
      id: 'zaijian',
      hanzi: '再见',
      pinyin: 'zàijiàn',
      english: 'goodbye',
      syllables: [
        { hanzi: '再', pinyin: 'zài' },
        { hanzi: '见', pinyin: 'jiàn' },
      ],
      emoji: '👋',
    },
    {
      id: 'shan',
      hanzi: '山',
      pinyin: 'shān',
      english: 'mountain',
      syllables: [{ hanzi: '山', pinyin: 'shān' }],
      emoji: '⛰️',
    },
    {
      id: 'da',
      hanzi: '大',
      pinyin: 'dà',
      english: 'big, large',
      syllables: [{ hanzi: '大', pinyin: 'dà' }],
      emoji: '🔺',
    },
    {
      id: 'xiao',
      hanzi: '小',
      pinyin: 'xiǎo',
      english: 'small, little',
      syllables: [{ hanzi: '小', pinyin: 'xiǎo' }],
      emoji: '🔹',
    },
  ],
  sentences: [
    {
      id: 's1',
      english: "Thank you! — You're welcome.",
      syllables: [
        { hanzi: '谢', pinyin: 'xiè' },
        { hanzi: '谢', pinyin: 'xie' },
        { hanzi: '！', pinyin: '' },
        { hanzi: '不', pinyin: 'bú' },
        { hanzi: '客', pinyin: 'kè' },
        { hanzi: '气', pinyin: 'qi' },
        { hanzi: '。', pinyin: '' },
      ],
    },
    {
      id: 's2',
      english: 'Goodbye!',
      syllables: [
        { hanzi: '再', pinyin: 'zài' },
        { hanzi: '见', pinyin: 'jiàn' },
        { hanzi: '！', pinyin: '' },
      ],
    },
  ],
};

export default chapter2;
