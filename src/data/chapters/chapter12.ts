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
    { id: 's1', english: "How was the weather in Beijing yesterday?", syllables: [{ hanzi: '昨', pinyin: 'zuó' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '北', pinyin: 'běi' }, { hanzi: '京', pinyin: 'jīng' }, { hanzi: '的', pinyin: 'de' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '气', pinyin: 'qì' }, { hanzi: '怎', pinyin: 'zěn' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '样', pinyin: 'yàng' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '昨天', pinyin: 'zuótiān' }, { hanzi: '北京', pinyin: 'Běijīng' }, { hanzi: '的', pinyin: 'de' }, { hanzi: '天气', pinyin: 'tiānqì' }, { hanzi: '怎么样', pinyin: 'zěnmeyàng' }], terminator: '？' },
    { id: 's2', english: 'It was too hot.', syllables: [{ hanzi: '太', pinyin: 'tài' }, { hanzi: '热', pinyin: 'rè' }, { hanzi: '了', pinyin: 'le' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '太', pinyin: 'tài' }, { hanzi: '热', pinyin: 'rè' }, { hanzi: '了', pinyin: 'le' }], terminator: '。' },
    { id: 's3', english: "How's the weather tomorrow?", syllables: [{ hanzi: '明', pinyin: 'míng' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '气', pinyin: 'qì' }, { hanzi: '怎', pinyin: 'zěn' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '样', pinyin: 'yàng' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '明天', pinyin: 'míngtiān' }, { hanzi: '天气', pinyin: 'tiānqì' }, { hanzi: '怎么样', pinyin: 'zěnmeyàng' }], terminator: '？' },
    { id: 's4', english: "Tomorrow's weather is very nice.", syllables: [{ hanzi: '明', pinyin: 'míng' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '气', pinyin: 'qì' }, { hanzi: '很', pinyin: 'hěn' }, { hanzi: '好', pinyin: 'hǎo' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '明天', pinyin: 'míngtiān' }, { hanzi: '天气', pinyin: 'tiānqì' }, { hanzi: '很', pinyin: 'hěn' }, { hanzi: '好', pinyin: 'hǎo' }], terminator: '。' },
    { id: 's5', english: 'Neither cold nor hot.', syllables: [{ hanzi: '不', pinyin: 'bù' }, { hanzi: '冷', pinyin: 'lěng' }, { hanzi: '不', pinyin: 'bù' }, { hanzi: '热', pinyin: 'rè' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '不', pinyin: 'bù' }, { hanzi: '冷', pinyin: 'lěng' }, { hanzi: '不', pinyin: 'bù' }, { hanzi: '热', pinyin: 'rè' }], terminator: '。' },
    { id: 's6', english: 'Will it rain today?', syllables: [{ hanzi: '今', pinyin: 'jīn' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '会', pinyin: 'huì' }, { hanzi: '下', pinyin: 'xià' }, { hanzi: '雨', pinyin: 'yǔ' }, { hanzi: '吗', pinyin: 'ma' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '今天', pinyin: 'jīntiān' }, { hanzi: '会', pinyin: 'huì' }, { hanzi: '下雨', pinyin: 'xiàyǔ' }, { hanzi: '吗', pinyin: 'ma' }], terminator: '？' },
    { id: 's7', english: "It won't rain today.", syllables: [{ hanzi: '今', pinyin: 'jīn' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '不', pinyin: 'bù' }, { hanzi: '会', pinyin: 'huì' }, { hanzi: '下', pinyin: 'xià' }, { hanzi: '雨', pinyin: 'yǔ' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '今天', pinyin: 'jīntiān' }, { hanzi: '不', pinyin: 'bù' }, { hanzi: '会', pinyin: 'huì' }, { hanzi: '下雨', pinyin: 'xiàyǔ' }], terminator: '。' },
    { id: 's8', english: 'Will Miss Wang come today?', syllables: [{ hanzi: '王', pinyin: 'wáng' }, { hanzi: '小', pinyin: 'xiǎo' }, { hanzi: '姐', pinyin: 'jiě' }, { hanzi: '今', pinyin: 'jīn' }, { hanzi: '天', pinyin: 'tiān' }, { hanzi: '会', pinyin: 'huì' }, { hanzi: '来', pinyin: 'lái' }, { hanzi: '吗', pinyin: 'ma' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '王小姐', pinyin: 'Wáng xiǎojiě' }, { hanzi: '今天', pinyin: 'jīntiān' }, { hanzi: '会', pinyin: 'huì' }, { hanzi: '来', pinyin: 'lái' }, { hanzi: '吗', pinyin: 'ma' }], terminator: '？' },
    { id: 's9', english: "How's your health?", syllables: [{ hanzi: '你', pinyin: 'nǐ' }, { hanzi: '身', pinyin: 'shēn' }, { hanzi: '体', pinyin: 'tǐ' }, { hanzi: '怎', pinyin: 'zěn' }, { hanzi: '么', pinyin: 'me' }, { hanzi: '样', pinyin: 'yàng' }, { hanzi: '？', pinyin: '' }], tokens: [{ hanzi: '你', pinyin: 'nǐ' }, { hanzi: '身体', pinyin: 'shēntǐ' }, { hanzi: '怎么样', pinyin: 'zěnmeyàng' }], terminator: '？' },
    { id: 's10', english: "I'm not feeling very well.", syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '身', pinyin: 'shēn' }, { hanzi: '体', pinyin: 'tǐ' }, { hanzi: '不', pinyin: 'bù' }, { hanzi: '太', pinyin: 'tài' }, { hanzi: '好', pinyin: 'hǎo' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '身体', pinyin: 'shēntǐ' }, { hanzi: '不', pinyin: 'bù' }, { hanzi: '太', pinyin: 'tài' }, { hanzi: '好', pinyin: 'hǎo' }], terminator: '。' },
    { id: 's11', english: 'The weather is too hot.', syllables: [{ hanzi: '天', pinyin: 'tiān' }, { hanzi: '气', pinyin: 'qì' }, { hanzi: '太', pinyin: 'tài' }, { hanzi: '热', pinyin: 'rè' }, { hanzi: '了', pinyin: 'le' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '天气', pinyin: 'tiānqì' }, { hanzi: '太', pinyin: 'tài' }, { hanzi: '热', pinyin: 'rè' }, { hanzi: '了', pinyin: 'le' }], terminator: '。' },
    { id: 's12', english: 'Eat some more fruit.', syllables: [{ hanzi: '多', pinyin: 'duō' }, { hanzi: '吃', pinyin: 'chī' }, { hanzi: '些', pinyin: 'xiē' }, { hanzi: '水', pinyin: 'shuǐ' }, { hanzi: '果', pinyin: 'guǒ' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '多', pinyin: 'duō' }, { hanzi: '吃', pinyin: 'chī' }, { hanzi: '些', pinyin: 'xiē' }, { hanzi: '水果', pinyin: 'shuǐguǒ' }], terminator: '。' },
    { id: 's13', english: 'Drink more water.', syllables: [{ hanzi: '多', pinyin: 'duō' }, { hanzi: '喝', pinyin: 'hē' }, { hanzi: '水', pinyin: 'shuǐ' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '多', pinyin: 'duō' }, { hanzi: '喝水', pinyin: 'hē shuǐ' }], terminator: '。' },
    { id: 's14', english: 'Thank you, doctor.', syllables: [{ hanzi: '谢', pinyin: 'xiè' }, { hanzi: '谢', pinyin: 'xie' }, { hanzi: '你', pinyin: 'nǐ' }, { hanzi: '，', pinyin: '' }, { hanzi: '医', pinyin: 'yī' }, { hanzi: '生', pinyin: 'shēng' }, { hanzi: '。', pinyin: '' }], tokens: [{ hanzi: '谢谢你', pinyin: 'xièxie nǐ' }, { hanzi: '医生', pinyin: 'yīshēng' }], terminator: '。' },
  ],
};

export default chapter12;
