import type { Chapter } from '../../types/chapter';

/**
 * HSK 1, Chapter 15 — I Came by Plane
 * Travel, social life, transports, and emotions
 */
const chapter15: Chapter = {
  id: 'hsk1-ch15',
  number: 15,
  hskLevel: 1,
  titleEn: 'I Came by Plane',
  titleZh: '我是坐飞机来的',
  descriptionEn: 'Travel, transports (subway/bus/train/plane), emotions, and taxi expressions.',
  descriptionZh: '旅行、交通工具（地铁/公交/火车/飞机）、情感和打车表达。',
  vocabulary: [
    { id: 'renshi', hanzi: '认识', pinyin: 'rènshi', english: 'to know (someone)', syllables: [{ hanzi: '认', pinyin: 'rèn' }, { hanzi: '识', pinyin: 'shi' }], emoji: '🤝' },
    { id: 'daxue', hanzi: '大学', pinyin: 'dàxué', english: 'university', syllables: [{ hanzi: '大', pinyin: 'dà' }, { hanzi: '学', pinyin: 'xué' }], emoji: '🎓' },
    { id: 'fandian', hanzi: '饭店', pinyin: 'fàndiàn', english: 'restaurant, hotel', syllables: [{ hanzi: '饭', pinyin: 'fàn' }, { hanzi: '店', pinyin: 'diàn' }], emoji: '🍽️' },
    { id: 'fanguanr', hanzi: '饭馆儿', pinyin: 'fànguǎnr', english: 'restaurant (colloquial)', syllables: [{ hanzi: '饭', pinyin: 'fàn' }, { hanzi: '馆', pinyin: 'guǎn' }, { hanzi: '儿', pinyin: 'r' }], emoji: '🥢' },
    { id: 'chuzuche', hanzi: '出租车', pinyin: 'chūzūchē', english: 'taxi', syllables: [{ hanzi: '出', pinyin: 'chū' }, { hanzi: '租', pinyin: 'zū' }, { hanzi: '车', pinyin: 'chē' }], emoji: '🚕' },
    { id: 'yiqi', hanzi: '一起', pinyin: 'yìqǐ', english: 'together', syllables: [{ hanzi: '一', pinyin: 'yì' }, { hanzi: '起', pinyin: 'qǐ' }], emoji: '👫' },
    { id: 'gaoxing', hanzi: '高兴', pinyin: 'gāoxìng', english: 'happy, glad', syllables: [{ hanzi: '高', pinyin: 'gāo' }, { hanzi: '兴', pinyin: 'xìng' }], emoji: '😊' },
    { id: 'ting', hanzi: '听', pinyin: 'tīng', english: 'to listen', syllables: [{ hanzi: '听', pinyin: 'tīng' }], emoji: '👂' },
    { id: 'feiji', hanzi: '飞机', pinyin: 'fēijī', english: 'airplane', syllables: [{ hanzi: '飞', pinyin: 'fēi' }, { hanzi: '机', pinyin: 'jī' }], emoji: '✈️' },
    { id: 'kaixin', hanzi: '开心', pinyin: 'kāixīn', english: 'happy', syllables: [{ hanzi: '开', pinyin: 'kāi' }, { hanzi: '心', pinyin: 'xīn' }], emoji: '😄' },
    { id: 'xinqing', hanzi: '心情', pinyin: 'xīnqíng', english: 'mood', syllables: [{ hanzi: '心', pinyin: 'xīn' }, { hanzi: '情', pinyin: 'qíng' }], emoji: '😌' },
    { id: 'yukuai', hanzi: '愉快', pinyin: 'yúkuài', english: 'joyful, pleasant', syllables: [{ hanzi: '愉', pinyin: 'yú' }, { hanzi: '快', pinyin: 'kuài' }], emoji: '🎉' },
    { id: 'ditie', hanzi: '地铁', pinyin: 'dìtiě', english: 'subway', syllables: [{ hanzi: '地', pinyin: 'dì' }, { hanzi: '铁', pinyin: 'tiě' }], emoji: '🚇' },
    { id: 'gongjiaoche', hanzi: '公交车', pinyin: 'gōngjiāochē', english: 'public bus', syllables: [{ hanzi: '公', pinyin: 'gōng' }, { hanzi: '交', pinyin: 'jiāo' }, { hanzi: '车', pinyin: 'chē' }], emoji: '🚌' },
    { id: 'huoche', hanzi: '火车', pinyin: 'huǒchē', english: 'train', syllables: [{ hanzi: '火', pinyin: 'huǒ' }, { hanzi: '车', pinyin: 'chē' }], emoji: '🚂' },
    { id: 'dache', hanzi: '打车', pinyin: 'dǎchē', english: 'to hail a taxi', syllables: [{ hanzi: '打', pinyin: 'dǎ' }, { hanzi: '车', pinyin: 'chē' }], emoji: '🚖' },
    { id: 'dachuzuche', hanzi: '打出租车', pinyin: 'dǎ chūzūchē', english: 'to hail a taxi', syllables: [{ hanzi: '打', pinyin: 'dǎ' }, { hanzi: '出', pinyin: 'chū' }, { hanzi: '租', pinyin: 'zū' }, { hanzi: '车', pinyin: 'chē' }], emoji: '🚕' },
    { id: 'shangche', hanzi: '上车', pinyin: 'shàngchē', english: 'to board (a vehicle)', syllables: [{ hanzi: '上', pinyin: 'shàng' }, { hanzi: '车', pinyin: 'chē' }], emoji: '🚶‍♂️' },
    { id: 'xiache', hanzi: '下车', pinyin: 'xiàchē', english: 'to get off (a vehicle)', syllables: [{ hanzi: '下', pinyin: 'xià' }, { hanzi: '车', pinyin: 'chē' }], emoji: '🚶‍♀️' },
    { id: 'chengzuo', hanzi: '乘坐', pinyin: 'chéngzuò', english: 'to ride, take', syllables: [{ hanzi: '乘', pinyin: 'chéng' }, { hanzi: '坐', pinyin: 'zuò' }], emoji: '🚆' },
    { id: 'zuoditie', hanzi: '坐地铁', pinyin: 'zuò dìtiě', english: 'to take the subway', syllables: [{ hanzi: '坐', pinyin: 'zuò' }, { hanzi: '地', pinyin: 'dì' }, { hanzi: '铁', pinyin: 'tiě' }], emoji: '🚇' },
    { id: 'zuogongjiao', hanzi: '坐公交车', pinyin: 'zuò gōngjiāochē', english: 'to take the bus', syllables: [{ hanzi: '坐', pinyin: 'zuò' }, { hanzi: '公', pinyin: 'gōng' }, { hanzi: '交', pinyin: 'jiāo' }, { hanzi: '车', pinyin: 'chē' }], emoji: '🚌' },
    { id: 'zuohuoche', hanzi: '坐火车', pinyin: 'zuò huǒchē', english: 'to take the train', syllables: [{ hanzi: '坐', pinyin: 'zuò' }, { hanzi: '火', pinyin: 'huǒ' }, { hanzi: '车', pinyin: 'chē' }], emoji: '🚂' },
    { id: 'zuofeiji', hanzi: '坐飞机', pinyin: 'zuò fēijī', english: 'to take a plane', syllables: [{ hanzi: '坐', pinyin: 'zuò' }, { hanzi: '飞', pinyin: 'fēi' }, { hanzi: '机', pinyin: 'jī' }], emoji: '✈️' },
  ],
  sentences: [
    { id: 's1', english: 'I came by plane.', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '是', pinyin: 'shì' }, { hanzi: '坐', pinyin: 'zuò' }, { hanzi: '飞', pinyin: 'fēi' }, { hanzi: '机', pinyin: 'jī' }, { hanzi: '来', pinyin: 'lái' }, { hanzi: '的', pinyin: 'de' }, { hanzi: '。', pinyin: '' }] },
    { id: 's2', english: 'Nice to meet you!', syllables: [{ hanzi: '认', pinyin: 'rèn' }, { hanzi: '识', pinyin: 'shi' }, { hanzi: '你', pinyin: 'nǐ' }, { hanzi: '很', pinyin: 'hěn' }, { hanzi: '高', pinyin: 'gāo' }, { hanzi: '兴', pinyin: 'xìng' }, { hanzi: '！', pinyin: '' }] },
    { id: 's3', english: 'Let\'s take the subway together.', syllables: [{ hanzi: '我', pinyin: 'wǒ' }, { hanzi: '们', pinyin: 'men' }, { hanzi: '一', pinyin: 'yì' }, { hanzi: '起', pinyin: 'qǐ' }, { hanzi: '坐', pinyin: 'zuò' }, { hanzi: '地', pinyin: 'dì' }, { hanzi: '铁', pinyin: 'tiě' }, { hanzi: '吧', pinyin: 'ba' }, { hanzi: '。', pinyin: '' }] },
  ],
};

export default chapter15;
