import type { Chapter } from '../../types/chapter';

/**
 * HSK 1, Chapter 2 — Thanks, Farewell & Family
 * Based on HSK Standard Course 1 textbook
 */
const chapter2: Chapter = {
  id: 'hsk1-ch2',
  number: 2,
  hskLevel: 1,
  titleEn: 'Thank You',
  titleZh: '谢谢你',
  descriptionEn: 'Thank you, goodbye, family members, and basic descriptions.',
  descriptionZh: '感谢、告别、家庭成员和基本描述。',
  vocabulary: [
    { id: 'xiexie', hanzi: '谢谢', pinyin: 'xièxie', english: 'thank you', syllables: [{ hanzi: '谢', pinyin: 'xiè' }, { hanzi: '谢', pinyin: 'xie' }], emoji: '🙏' },
    { id: 'bu', hanzi: '不', pinyin: 'bù', english: 'not, no', syllables: [{ hanzi: '不', pinyin: 'bù' }], emoji: '🚫' },
    { id: 'bukeqi', hanzi: '不客气', pinyin: 'bú kèqi', english: "you're welcome", syllables: [{ hanzi: '不', pinyin: 'bú' }, { hanzi: '客', pinyin: 'kè' }, { hanzi: '气', pinyin: 'qi' }], emoji: '😄' },
    { id: 'zaijian', hanzi: '再见', pinyin: 'zàijiàn', english: 'goodbye', syllables: [{ hanzi: '再', pinyin: 'zài' }, { hanzi: '见', pinyin: 'jiàn' }], emoji: '👋' },
    { id: 'zai', hanzi: '再', pinyin: 'zài', english: 'again', syllables: [{ hanzi: '再', pinyin: 'zài' }], emoji: '🔁' },
    { id: 'jian', hanzi: '见', pinyin: 'jiàn', english: 'to see, meet', syllables: [{ hanzi: '见', pinyin: 'jiàn' }], emoji: '👁️' },
    { id: 'shan', hanzi: '山', pinyin: 'shān', english: 'mountain', syllables: [{ hanzi: '山', pinyin: 'shān' }], emoji: '⛰️' },
    { id: 'da2', hanzi: '大', pinyin: 'dà', english: 'big, large', syllables: [{ hanzi: '大', pinyin: 'dà' }], emoji: '🔺' },
    { id: 'xiao2', hanzi: '小', pinyin: 'xiǎo', english: 'small, little', syllables: [{ hanzi: '小', pinyin: 'xiǎo' }], emoji: '🔹' },
    { id: 'ling', hanzi: '零', pinyin: 'líng', english: 'zero', syllables: [{ hanzi: '零', pinyin: 'líng' }], emoji: '0️⃣' },
    { id: 'kou2', hanzi: '口', pinyin: 'kǒu', english: 'mouth, (measure for people)', syllables: [{ hanzi: '口', pinyin: 'kǒu' }], emoji: '👄' },
    { id: 'mama', hanzi: '妈妈', pinyin: 'māma', english: 'mom', syllables: [{ hanzi: '妈', pinyin: 'mā' }, { hanzi: '妈', pinyin: 'ma' }], emoji: '👩' },
    { id: 'baba', hanzi: '爸爸', pinyin: 'bàba', english: 'dad', syllables: [{ hanzi: '爸', pinyin: 'bà' }, { hanzi: '爸', pinyin: 'ba' }], emoji: '👨' },
    { id: 'nainai', hanzi: '奶奶', pinyin: 'nǎinai', english: 'grandma (paternal)', syllables: [{ hanzi: '奶', pinyin: 'nǎi' }, { hanzi: '奶', pinyin: 'nai' }], emoji: '👵' },
    { id: 'yeye', hanzi: '爷爷', pinyin: 'yéye', english: 'grandpa (paternal)', syllables: [{ hanzi: '爷', pinyin: 'yé' }, { hanzi: '爷', pinyin: 'ye' }], emoji: '👴' },
  ],
  sentences: [
    {
      id: 's1',
      english: 'Thank you!',
      syllables: [
        { hanzi: '谢', pinyin: 'xiè' },
        { hanzi: '谢', pinyin: 'xie' },
        { hanzi: '！', pinyin: '' },
      ],
      tokens: [{ hanzi: '谢谢', pinyin: 'xièxie' }],
      terminator: '！',
    },
    {
      id: 's2',
      english: "Don't mention it!",
      syllables: [
        { hanzi: '不', pinyin: 'bú' },
        { hanzi: '谢', pinyin: 'xiè' },
        { hanzi: '！', pinyin: '' },
      ],
      tokens: [{ hanzi: '不谢', pinyin: 'bú xiè' }],
      terminator: '！',
    },
    {
      id: 's3',
      english: 'Thank you!',
      syllables: [
        { hanzi: '谢', pinyin: 'xiè' },
        { hanzi: '谢', pinyin: 'xie' },
        { hanzi: '你', pinyin: 'nǐ' },
        { hanzi: '！', pinyin: '' },
      ],
      tokens: [
        { hanzi: '谢谢', pinyin: 'xièxie' },
        { hanzi: '你', pinyin: 'nǐ' },
      ],
      terminator: '！',
    },
    {
      id: 's4',
      english: "You're welcome!",
      syllables: [
        { hanzi: '不', pinyin: 'bú' },
        { hanzi: '用', pinyin: 'yòng' },
        { hanzi: '谢', pinyin: 'xiè' },
        { hanzi: '！', pinyin: '' },
      ],
      tokens: [
        { hanzi: '不用', pinyin: 'búyòng' },
        { hanzi: '谢', pinyin: 'xiè' },
      ],
      terminator: '！',
    },
    {
      id: 's5',
      english: "You're welcome!",
      syllables: [
        { hanzi: '不', pinyin: 'bú' },
        { hanzi: '客', pinyin: 'kè' },
        { hanzi: '气', pinyin: 'qi' },
        { hanzi: '！', pinyin: '' },
      ],
      tokens: [{ hanzi: '不客气', pinyin: 'bú kèqi' }],
      terminator: '！',
    },
    {
      id: 's6',
      english: 'Goodbye!',
      syllables: [
        { hanzi: '再', pinyin: 'zài' },
        { hanzi: '见', pinyin: 'jiàn' },
        { hanzi: '！', pinyin: '' },
      ],
      tokens: [{ hanzi: '再见', pinyin: 'zàijiàn' }],
      terminator: '！',
    },
  ],
};

export default chapter2;
