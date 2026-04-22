import type { Chapter } from '../../types/chapter';

/**
 * HSK 2, Chapter 4 — He Helped Me Find This Job
 * Based on HSK Standard Course 2 textbook
 */
const hsk2Chapter4: Chapter = {
  id: 'hsk2-ch4',
  number: 4,
  hskLevel: 2,
  titleEn: 'He Helped Me Find This Job',
  titleZh: '这个工作是他帮我介绍的',
  descriptionEn: 'Birthdays, social interactions, and helping others.',
  descriptionZh: '生日、社交互动和帮助他人。',
  vocabulary: [
    { id: 'h2c4-shengri', hanzi: '生日', pinyin: 'shēngrì', english: 'birthday', syllables: [{ hanzi: '生', pinyin: 'shēng' }, { hanzi: '日', pinyin: 'rì' }], emoji: '🎂' },
    { id: 'h2c4-kuaile', hanzi: '快乐', pinyin: 'kuàilè', english: 'happy', syllables: [{ hanzi: '快', pinyin: 'kuài' }, { hanzi: '乐', pinyin: 'lè' }], emoji: '😊' },
    { id: 'h2c4-gei', hanzi: '给', pinyin: 'gěi', english: 'to give', syllables: [{ hanzi: '给', pinyin: 'gěi' }], emoji: '🎁' },
    { id: 'h2c4-jie', hanzi: '接', pinyin: 'jiē', english: 'to pick up/answer', syllables: [{ hanzi: '接', pinyin: 'jiē' }], emoji: '🤝' },
    { id: 'h2c4-jiedianhua', hanzi: '接电话', pinyin: 'jiē diànhuà', english: 'to answer the phone', syllables: [{ hanzi: '接', pinyin: 'jiē' }, { hanzi: '电', pinyin: 'diàn' }, { hanzi: '话', pinyin: 'huà' }], emoji: '📞' },
    { id: 'h2c4-feichang', hanzi: '非常', pinyin: 'fēicháng', english: 'very/extremely', syllables: [{ hanzi: '非', pinyin: 'fēi' }, { hanzi: '常', pinyin: 'cháng' }], emoji: '💯' },
    { id: 'h2c4-kaishi', hanzi: '开始', pinyin: 'kāishǐ', english: 'to start', syllables: [{ hanzi: '开', pinyin: 'kāi' }, { hanzi: '始', pinyin: 'shǐ' }], emoji: '▶️' },
    { id: 'h2c4-yijing', hanzi: '已经', pinyin: 'yǐjīng', english: 'already', syllables: [{ hanzi: '已', pinyin: 'yǐ' }, { hanzi: '经', pinyin: 'jīng' }], emoji: '✔️' },
    { id: 'h2c4-chang', hanzi: '长', pinyin: 'cháng', english: 'long', syllables: [{ hanzi: '长', pinyin: 'cháng' }], emoji: '📏' },
    { id: 'h2c4-duan', hanzi: '短', pinyin: 'duǎn', english: 'short', syllables: [{ hanzi: '短', pinyin: 'duǎn' }], emoji: '📐' },
    { id: 'h2c4-liang', hanzi: '两', pinyin: 'liǎng', english: 'two (of something)', syllables: [{ hanzi: '两', pinyin: 'liǎng' }], emoji: '2️⃣' },
    { id: 'h2c4-jieshao', hanzi: '介绍', pinyin: 'jièshào', english: 'to introduce', syllables: [{ hanzi: '介', pinyin: 'jiè' }, { hanzi: '绍', pinyin: 'shào' }], emoji: '🤝' },
    { id: 'h2c4-bangmang', hanzi: '帮忙', pinyin: 'bāngmáng', english: 'to help out', syllables: [{ hanzi: '帮', pinyin: 'bāng' }, { hanzi: '忙', pinyin: 'máng' }], emoji: '🙌' },
    { id: 'h2c4-bangzhu', hanzi: '帮助', pinyin: 'bāngzhù', english: 'to help/assistance', syllables: [{ hanzi: '帮', pinyin: 'bāng' }, { hanzi: '助', pinyin: 'zhù' }], emoji: '🤲' },
    { id: 'h2c4-shengrikuaile', hanzi: '生日快乐', pinyin: 'shēngrì kuàilè', english: 'happy birthday', syllables: [{ hanzi: '生', pinyin: 'shēng' }, { hanzi: '日', pinyin: 'rì' }, { hanzi: '快', pinyin: 'kuài' }, { hanzi: '乐', pinyin: 'lè' }], emoji: '🎂' },
    { id: 'h2c4-xinniankuaile', hanzi: '新年快乐', pinyin: 'xīnnián kuàilè', english: 'happy new year', syllables: [{ hanzi: '新', pinyin: 'xīn' }, { hanzi: '年', pinyin: 'nián' }, { hanzi: '快', pinyin: 'kuài' }, { hanzi: '乐', pinyin: 'lè' }], emoji: '🎆' },
  ],
  sentences: [
    { id: 's1', english: 'He helped me find this job.', syllables: [{ hanzi: '这', pinyin: 'zhè' }, { hanzi: '个', pinyin: 'ge' }, { hanzi: '工', pinyin: 'gōng' }, { hanzi: '作', pinyin: 'zuò' }, { hanzi: '是', pinyin: 'shì' }, { hanzi: '他', pinyin: 'tā' }, { hanzi: '帮', pinyin: 'bāng' }, { hanzi: '我', pinyin: 'wǒ' }, { hanzi: '介', pinyin: 'jiè' }, { hanzi: '绍', pinyin: 'shào' }, { hanzi: '的', pinyin: 'de' }, { hanzi: '。', pinyin: '' }] },
    { id: 's2', english: 'Happy birthday! I want to give you a gift.', syllables: [{ hanzi: '生', pinyin: 'shēng' }, { hanzi: '日', pinyin: 'rì' }, { hanzi: '快', pinyin: 'kuài' }, { hanzi: '乐', pinyin: 'lè' }, { hanzi: '！', pinyin: '' }, { hanzi: '我', pinyin: 'wǒ' }, { hanzi: '要', pinyin: 'yào' }, { hanzi: '给', pinyin: 'gěi' }, { hanzi: '你', pinyin: 'nǐ' }, { hanzi: '一', pinyin: 'yí' }, { hanzi: '个', pinyin: 'ge' }, { hanzi: '礼', pinyin: 'lǐ' }, { hanzi: '物', pinyin: 'wù' }, { hanzi: '。', pinyin: '' }] },
    { id: 's3', english: 'I have already started working.', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '已', pinyin: 'yǐ' }, { hanzi: '经', pinyin: 'jīng' }, { hanzi: '开', pinyin: 'kāi' }, { hanzi: '始', pinyin: 'shǐ' }, { hanzi: '工', pinyin: 'gōng' }, { hanzi: '作', pinyin: 'zuò' }, { hanzi: '了', pinyin: 'le' }, { hanzi: '。', pinyin: '' }] },
  ],
};

export default hsk2Chapter4;
