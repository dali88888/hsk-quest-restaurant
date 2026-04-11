import type { HskWord } from '../types/vocab';

/**
 * HSK 1 vocabulary subset used by the restaurant scene.
 * Words are official HSK 1 entries; the full HSK 1 list contains ~150 words.
 * Expand this dictionary as more scenes are added.
 */
export const HSK1_WORDS: HskWord[] = [
  // greetings & politeness
  { id: 'nihao',     hanzi: '你好',   pinyin: 'nǐ hǎo',    english: 'hello',         partOfSpeech: 'greeting', hskLevel: 1 },
  { id: 'xiexie',    hanzi: '谢谢',   pinyin: 'xièxie',    english: 'thank you',     partOfSpeech: 'greeting', hskLevel: 1 },
  { id: 'bukeqi',    hanzi: '不客气', pinyin: 'bú kèqi',   english: "you're welcome",partOfSpeech: 'greeting', hskLevel: 1 },
  { id: 'qing',      hanzi: '请',     pinyin: 'qǐng',      english: 'please',        partOfSpeech: 'verb',     hskLevel: 1 },
  { id: 'duibuqi',   hanzi: '对不起', pinyin: 'duìbuqǐ',   english: 'sorry',         partOfSpeech: 'greeting', hskLevel: 1 },
  { id: 'zaijian',   hanzi: '再见',   pinyin: 'zàijiàn',   english: 'goodbye',       partOfSpeech: 'greeting', hskLevel: 1 },
  { id: 'huanying',  hanzi: '欢迎',   pinyin: 'huānyíng',  english: 'welcome',       partOfSpeech: 'verb',     hskLevel: 1 },
  { id: 'haode',     hanzi: '好的',   pinyin: 'hǎo de',    english: 'OK / good',     partOfSpeech: 'adjective',hskLevel: 1 },
  { id: 'hao',       hanzi: '好',     pinyin: 'hǎo',       english: 'good',          partOfSpeech: 'adjective',hskLevel: 1 },
  { id: 'bu',        hanzi: '不',     pinyin: 'bù',        english: 'not / no',      partOfSpeech: 'particle', hskLevel: 1 },

  // pronouns
  { id: 'wo',        hanzi: '我',     pinyin: 'wǒ',        english: 'I / me',        partOfSpeech: 'pronoun',  hskLevel: 1 },
  { id: 'ni',        hanzi: '你',     pinyin: 'nǐ',        english: 'you',           partOfSpeech: 'pronoun',  hskLevel: 1 },
  { id: 'ta',        hanzi: '他',     pinyin: 'tā',        english: 'he / him',      partOfSpeech: 'pronoun',  hskLevel: 1 },

  // numbers & measure
  { id: 'yi',        hanzi: '一',     pinyin: 'yī',        english: 'one',           partOfSpeech: 'number',   hskLevel: 1 },
  { id: 'er',        hanzi: '二',     pinyin: 'èr',        english: 'two',           partOfSpeech: 'number',   hskLevel: 1 },
  { id: 'san',       hanzi: '三',     pinyin: 'sān',       english: 'three',         partOfSpeech: 'number',   hskLevel: 1 },
  { id: 'ge',        hanzi: '个',     pinyin: 'gè',        english: '(measure word)',partOfSpeech: 'measure',  hskLevel: 1 },

  // verbs
  { id: 'yao',       hanzi: '要',     pinyin: 'yào',       english: 'want',          partOfSpeech: 'verb',     hskLevel: 1 },
  { id: 'chi',       hanzi: '吃',     pinyin: 'chī',       english: 'to eat',        partOfSpeech: 'verb',     hskLevel: 1 },
  { id: 'he',        hanzi: '喝',     pinyin: 'hē',        english: 'to drink',      partOfSpeech: 'verb',     hskLevel: 1 },
  { id: 'you',       hanzi: '有',     pinyin: 'yǒu',       english: 'to have',       partOfSpeech: 'verb',     hskLevel: 1 },
  { id: 'xihuan',    hanzi: '喜欢',   pinyin: 'xǐhuān',    english: 'to like',       partOfSpeech: 'verb',     hskLevel: 1 },

  // food & nouns
  { id: 'cai',       hanzi: '菜',     pinyin: 'cài',       english: 'dish / food',   partOfSpeech: 'noun',     hskLevel: 1 },
  { id: 'mifan',     hanzi: '米饭',   pinyin: 'mǐfàn',     english: 'cooked rice',   partOfSpeech: 'noun',     hskLevel: 1 },
  { id: 'cha',       hanzi: '茶',     pinyin: 'chá',       english: 'tea',           partOfSpeech: 'noun',     hskLevel: 1 },
  { id: 'shui',      hanzi: '水',     pinyin: 'shuǐ',      english: 'water',         partOfSpeech: 'noun',     hskLevel: 1 },
  { id: 'pingguo',   hanzi: '苹果',   pinyin: 'píngguǒ',   english: 'apple',         partOfSpeech: 'noun',     hskLevel: 1 },
  { id: 'fandian',   hanzi: '饭店',   pinyin: 'fàndiàn',   english: 'restaurant',    partOfSpeech: 'noun',     hskLevel: 1 },
  { id: 'qian',      hanzi: '钱',     pinyin: 'qián',      english: 'money',         partOfSpeech: 'noun',     hskLevel: 1 },

  // questions & particles
  { id: 'shenme',    hanzi: '什么',   pinyin: 'shénme',    english: 'what',          partOfSpeech: 'question', hskLevel: 1 },
  { id: 'duoshao',   hanzi: '多少',   pinyin: 'duōshǎo',   english: 'how much',      partOfSpeech: 'question', hskLevel: 1 },
  { id: 'ji',        hanzi: '几',     pinyin: 'jǐ',        english: 'how many',      partOfSpeech: 'question', hskLevel: 1 },
  { id: 'ma',        hanzi: '吗',     pinyin: 'ma',        english: '(question particle)', partOfSpeech: 'particle', hskLevel: 1 },
  { id: 'he_and',    hanzi: '和',     pinyin: 'hé',        english: 'and',           partOfSpeech: 'particle', hskLevel: 1 },
];

const BY_ID = new Map<string, HskWord>(HSK1_WORDS.map((w) => [w.id, w]));

export function getWord(id: string): HskWord | undefined {
  return BY_ID.get(id);
}

export function getWords(ids: string[]): HskWord[] {
  return ids.map(getWord).filter((w): w is HskWord => Boolean(w));
}
