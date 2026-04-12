import type { Chapter } from '../../types/chapter';

const chapter7: Chapter = {
  id: 'hsk1-ch7',
  number: 7,
  hskLevel: 1,
  titleEn: "What's the Date Today?",
  titleZh: '今天几号',
  descriptionEn: 'Dates, days of the week, and months.',
  descriptionZh: '日期、星期和月份。',
  vocabulary: [
    { id: 'qing', hanzi: '请', pinyin: 'qǐng', english: 'please', syllables: [{ hanzi: '请', pinyin: 'qǐng' }], emoji: '🙏' },
    { id: 'wen', hanzi: '问', pinyin: 'wèn', english: 'to ask', syllables: [{ hanzi: '问', pinyin: 'wèn' }], emoji: '🙋' },
    { id: 'jintian', hanzi: '今天', pinyin: 'jīntiān', english: 'today', syllables: [{ hanzi: '今', pinyin: 'jīn' }, { hanzi: '天', pinyin: 'tiān' }], emoji: '📅' },
    { id: 'hao7', hanzi: '号', pinyin: 'hào', english: 'date (of month)', syllables: [{ hanzi: '号', pinyin: 'hào' }], emoji: '📆' },
    { id: 'yue7', hanzi: '月', pinyin: 'yuè', english: 'month', syllables: [{ hanzi: '月', pinyin: 'yuè' }], emoji: '🌙' },
    { id: 'xingqi', hanzi: '星期', pinyin: 'xīngqī', english: 'week', syllables: [{ hanzi: '星', pinyin: 'xīng' }, { hanzi: '期', pinyin: 'qī' }], emoji: '🗓️' },
    { id: 'zuotian', hanzi: '昨天', pinyin: 'zuótiān', english: 'yesterday', syllables: [{ hanzi: '昨', pinyin: 'zuó' }, { hanzi: '天', pinyin: 'tiān' }], emoji: '⏪' },
    { id: 'mingtian', hanzi: '明天', pinyin: 'míngtiān', english: 'tomorrow', syllables: [{ hanzi: '明', pinyin: 'míng' }, { hanzi: '天', pinyin: 'tiān' }], emoji: '⏩' },
    { id: 'qu', hanzi: '去', pinyin: 'qù', english: 'to go', syllables: [{ hanzi: '去', pinyin: 'qù' }], emoji: '🚶' },
    { id: 'xuexiao', hanzi: '学校', pinyin: 'xuéxiào', english: 'school', syllables: [{ hanzi: '学', pinyin: 'xué' }, { hanzi: '校', pinyin: 'xiào' }], emoji: '🏫' },
    { id: 'kan', hanzi: '看', pinyin: 'kàn', english: 'to look, read', syllables: [{ hanzi: '看', pinyin: 'kàn' }], emoji: '👀' },
    { id: 'shu', hanzi: '书', pinyin: 'shū', english: 'book', syllables: [{ hanzi: '书', pinyin: 'shū' }], emoji: '📚' },
    // Months
    { id: 'yiyue', hanzi: '一月', pinyin: 'yīyuè', english: 'January', syllables: [{ hanzi: '一', pinyin: 'yī' }, { hanzi: '月', pinyin: 'yuè' }], emoji: '1️⃣' },
    { id: 'eryue', hanzi: '二月', pinyin: 'èryuè', english: 'February', syllables: [{ hanzi: '二', pinyin: 'èr' }, { hanzi: '月', pinyin: 'yuè' }], emoji: '2️⃣' },
    { id: 'sanyue', hanzi: '三月', pinyin: 'sānyuè', english: 'March', syllables: [{ hanzi: '三', pinyin: 'sān' }, { hanzi: '月', pinyin: 'yuè' }], emoji: '3️⃣' },
    { id: 'siyue', hanzi: '四月', pinyin: 'sìyuè', english: 'April', syllables: [{ hanzi: '四', pinyin: 'sì' }, { hanzi: '月', pinyin: 'yuè' }], emoji: '4️⃣' },
    { id: 'wuyue', hanzi: '五月', pinyin: 'wǔyuè', english: 'May', syllables: [{ hanzi: '五', pinyin: 'wǔ' }, { hanzi: '月', pinyin: 'yuè' }], emoji: '5️⃣' },
    { id: 'liuyue', hanzi: '六月', pinyin: 'liùyuè', english: 'June', syllables: [{ hanzi: '六', pinyin: 'liù' }, { hanzi: '月', pinyin: 'yuè' }], emoji: '6️⃣' },
    { id: 'qiyue', hanzi: '七月', pinyin: 'qīyuè', english: 'July', syllables: [{ hanzi: '七', pinyin: 'qī' }, { hanzi: '月', pinyin: 'yuè' }], emoji: '7️⃣' },
    { id: 'bayue', hanzi: '八月', pinyin: 'bāyuè', english: 'August', syllables: [{ hanzi: '八', pinyin: 'bā' }, { hanzi: '月', pinyin: 'yuè' }], emoji: '8️⃣' },
    { id: 'jiuyue', hanzi: '九月', pinyin: 'jiǔyuè', english: 'September', syllables: [{ hanzi: '九', pinyin: 'jiǔ' }, { hanzi: '月', pinyin: 'yuè' }], emoji: '9️⃣' },
    { id: 'shiyue', hanzi: '十月', pinyin: 'shíyuè', english: 'October', syllables: [{ hanzi: '十', pinyin: 'shí' }, { hanzi: '月', pinyin: 'yuè' }], emoji: '🔟' },
    { id: 'shiyiyue', hanzi: '十一月', pinyin: 'shíyīyuè', english: 'November', syllables: [{ hanzi: '十', pinyin: 'shí' }, { hanzi: '一', pinyin: 'yī' }, { hanzi: '月', pinyin: 'yuè' }] },
    { id: 'shieryue', hanzi: '十二月', pinyin: 'shíèryuè', english: 'December', syllables: [{ hanzi: '十', pinyin: 'shí' }, { hanzi: '二', pinyin: 'èr' }, { hanzi: '月', pinyin: 'yuè' }] },
    // Days of the week
    { id: 'xq1', hanzi: '星期一', pinyin: 'xīngqīyī', english: 'Monday', syllables: [{ hanzi: '星', pinyin: 'xīng' }, { hanzi: '期', pinyin: 'qī' }, { hanzi: '一', pinyin: 'yī' }] },
    { id: 'xq2', hanzi: '星期二', pinyin: 'xīngqīèr', english: 'Tuesday', syllables: [{ hanzi: '星', pinyin: 'xīng' }, { hanzi: '期', pinyin: 'qī' }, { hanzi: '二', pinyin: 'èr' }] },
    { id: 'xq3', hanzi: '星期三', pinyin: 'xīngqīsān', english: 'Wednesday', syllables: [{ hanzi: '星', pinyin: 'xīng' }, { hanzi: '期', pinyin: 'qī' }, { hanzi: '三', pinyin: 'sān' }] },
    { id: 'xq4', hanzi: '星期四', pinyin: 'xīngqīsì', english: 'Thursday', syllables: [{ hanzi: '星', pinyin: 'xīng' }, { hanzi: '期', pinyin: 'qī' }, { hanzi: '四', pinyin: 'sì' }] },
    { id: 'xq5', hanzi: '星期五', pinyin: 'xīngqīwǔ', english: 'Friday', syllables: [{ hanzi: '星', pinyin: 'xīng' }, { hanzi: '期', pinyin: 'qī' }, { hanzi: '五', pinyin: 'wǔ' }] },
    { id: 'xq6', hanzi: '星期六', pinyin: 'xīngqīliù', english: 'Saturday', syllables: [{ hanzi: '星', pinyin: 'xīng' }, { hanzi: '期', pinyin: 'qī' }, { hanzi: '六', pinyin: 'liù' }] },
    { id: 'xqtian', hanzi: '星期天', pinyin: 'xīngqītiān', english: 'Sunday', syllables: [{ hanzi: '星', pinyin: 'xīng' }, { hanzi: '期', pinyin: 'qī' }, { hanzi: '天', pinyin: 'tiān' }] },
    { id: 'xqri', hanzi: '星期日', pinyin: 'xīngqīrì', english: 'Sunday', syllables: [{ hanzi: '星', pinyin: 'xīng' }, { hanzi: '期', pinyin: 'qī' }, { hanzi: '日', pinyin: 'rì' }] },
  ],
  sentences: [
    { id: 's1', english: "What's the date today?", syllables: [{ hanzi: '今', pinyin: 'jīn' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '几', pinyin: 'jǐ' }, { hanzi: '号', pinyin: 'hào' }, { hanzi: '？', pinyin: '' }] },
    { id: 's2', english: 'I go to school tomorrow.', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '明', pinyin: 'míng' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '去', pinyin: 'qù' }, { hanzi: '学', pinyin: 'xué' }, { hanzi: '校', pinyin: 'xiào' }, { hanzi: '。', pinyin: '' }] },
  ],
};

export default chapter7;
