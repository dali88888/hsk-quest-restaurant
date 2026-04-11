import type { Scene } from '../../types/scene';
import { HSK1_WORDS } from '../hsk1';

/**
 * Scene: 在餐厅点餐 (Ordering at a Restaurant)
 *
 * 6 dialogue nodes, 4 player choice points.
 * Path: start → greeting → menu → drink → quantity → checkout → farewell
 */
export const RESTAURANT_SCENE: Scene = {
  id: 'restaurant',
  titleKey: 'scene.restaurant.title',
  descriptionKey: 'scene.restaurant.description',
  startNodeId: 'start',
  vocabulary: HSK1_WORDS,
  nodes: {
    start: {
      id: 'start',
      speaker: 'narrator',
      lines: [
        {
          hanzi: '你走进一家饭店。一位服务员走过来。',
          pinyin: 'nǐ zǒu jìn yī jiā fàndiàn. yī wèi fúwùyuán zǒu guò lái.',
          english: 'You walk into a restaurant. A waiter approaches.',
          wordIds: ['ni', 'yi', 'fandian'],
        },
      ],
      nextNodeId: 'greeting',
    },

    greeting: {
      id: 'greeting',
      speaker: 'npc',
      lines: [
        {
          hanzi: '你好！欢迎！',
          pinyin: 'nǐ hǎo! huānyíng!',
          english: 'Hello! Welcome!',
          wordIds: ['nihao', 'huanying'],
        },
      ],
      choices: [
        {
          id: 'g_hello',
          line: {
            hanzi: '你好！',
            pinyin: 'nǐ hǎo!',
            english: 'Hello!',
            wordIds: ['nihao'],
          },
          nextNodeId: 'menu',
          hint: 'A polite Chinese greeting.',
        },
        {
          id: 'g_thanks',
          line: {
            hanzi: '谢谢。',
            pinyin: 'xièxie.',
            english: 'Thank you.',
            wordIds: ['xiexie'],
          },
          nextNodeId: 'menu',
          hint: '"Thanks" — friendly but unusual as a greeting.',
        },
        {
          id: 'g_sorry',
          line: {
            hanzi: '对不起。',
            pinyin: 'duìbuqǐ.',
            english: 'Sorry.',
            wordIds: ['duibuqi'],
          },
          nextNodeId: 'menu',
          hint: '"Sorry" — apologizing for nothing in particular.',
        },
      ],
    },

    menu: {
      id: 'menu',
      speaker: 'npc',
      lines: [
        {
          hanzi: '请坐。你要吃什么？',
          pinyin: 'qǐng zuò. nǐ yào chī shénme?',
          english: 'Please sit. What do you want to eat?',
          wordIds: ['qing', 'ni', 'yao', 'chi', 'shenme'],
        },
      ],
      choices: [
        {
          id: 'm_rice',
          line: {
            hanzi: '我要米饭。',
            pinyin: 'wǒ yào mǐfàn.',
            english: 'I want rice.',
            wordIds: ['wo', 'yao', 'mifan'],
          },
          nextNodeId: 'drink',
        },
        {
          id: 'm_dish',
          line: {
            hanzi: '我要菜。',
            pinyin: 'wǒ yào cài.',
            english: 'I want a dish.',
            wordIds: ['wo', 'yao', 'cai'],
          },
          nextNodeId: 'drink',
        },
        {
          id: 'm_what',
          line: {
            hanzi: '什么好吃？',
            pinyin: 'shénme hǎo chī?',
            english: "What's good?",
            wordIds: ['shenme', 'hao', 'chi'],
          },
          nextNodeId: 'menu_suggest',
          hint: 'Ask the waiter for a recommendation.',
        },
      ],
    },

    menu_suggest: {
      id: 'menu_suggest',
      speaker: 'npc',
      lines: [
        {
          hanzi: '米饭和菜都好吃。',
          pinyin: 'mǐfàn hé cài dōu hǎo chī.',
          english: 'Both rice and the dish are good.',
          wordIds: ['mifan', 'he_and', 'cai', 'hao', 'chi'],
        },
      ],
      nextNodeId: 'drink',
    },

    drink: {
      id: 'drink',
      speaker: 'npc',
      lines: [
        {
          hanzi: '你喝茶吗？',
          pinyin: 'nǐ hē chá ma?',
          english: 'Do you want to drink tea?',
          wordIds: ['ni', 'he', 'cha', 'ma'],
        },
      ],
      choices: [
        {
          id: 'd_tea',
          line: {
            hanzi: '我要茶。',
            pinyin: 'wǒ yào chá.',
            english: 'I want tea.',
            wordIds: ['wo', 'yao', 'cha'],
          },
          nextNodeId: 'quantity',
        },
        {
          id: 'd_water',
          line: {
            hanzi: '我要水。',
            pinyin: 'wǒ yào shuǐ.',
            english: 'I want water.',
            wordIds: ['wo', 'yao', 'shui'],
          },
          nextNodeId: 'quantity',
        },
        {
          id: 'd_no',
          line: {
            hanzi: '不，谢谢。',
            pinyin: 'bù, xièxie.',
            english: 'No, thank you.',
            wordIds: ['bu', 'xiexie'],
          },
          nextNodeId: 'quantity',
        },
      ],
    },

    quantity: {
      id: 'quantity',
      speaker: 'npc',
      lines: [
        {
          hanzi: '几个？',
          pinyin: 'jǐ gè?',
          english: 'How many?',
          wordIds: ['ji', 'ge'],
        },
      ],
      choices: [
        {
          id: 'q_one',
          line: {
            hanzi: '一个。',
            pinyin: 'yī gè.',
            english: 'One.',
            wordIds: ['yi', 'ge'],
          },
          nextNodeId: 'checkout',
        },
        {
          id: 'q_two',
          line: {
            hanzi: '二个。',
            pinyin: 'èr gè.',
            english: 'Two.',
            wordIds: ['er', 'ge'],
          },
          nextNodeId: 'checkout',
        },
        {
          id: 'q_three',
          line: {
            hanzi: '三个。',
            pinyin: 'sān gè.',
            english: 'Three.',
            wordIds: ['san', 'ge'],
          },
          nextNodeId: 'checkout',
        },
      ],
    },

    checkout: {
      id: 'checkout',
      speaker: 'npc',
      lines: [
        {
          hanzi: '好的，谢谢！',
          pinyin: 'hǎo de, xièxie!',
          english: 'Okay, thank you!',
          wordIds: ['haode', 'xiexie'],
        },
      ],
      choices: [
        {
          id: 'c_howmuch',
          line: {
            hanzi: '多少钱？',
            pinyin: 'duōshǎo qián?',
            english: 'How much money?',
            wordIds: ['duoshao', 'qian'],
          },
          nextNodeId: 'farewell',
        },
        {
          id: 'c_bye',
          line: {
            hanzi: '再见！',
            pinyin: 'zàijiàn!',
            english: 'Goodbye!',
            wordIds: ['zaijian'],
          },
          nextNodeId: 'farewell',
        },
      ],
    },

    farewell: {
      id: 'farewell',
      speaker: 'npc',
      lines: [
        {
          hanzi: '不客气！再见！',
          pinyin: 'bú kèqi! zàijiàn!',
          english: "You're welcome! Goodbye!",
          wordIds: ['bukeqi', 'zaijian'],
        },
      ],
      isEnd: true,
    },
  },

  // 7-question quiz drawn from the scene's vocabulary
  quiz: [
    {
      id: 'q1',
      type: 'hanzi-to-english',
      prompt: '你好',
      answer: 'hello',
      distractors: ['goodbye', 'thank you', 'sorry'],
      sourceWordId: 'nihao',
    },
    {
      id: 'q2',
      type: 'hanzi-to-english',
      prompt: '米饭',
      answer: 'cooked rice',
      distractors: ['tea', 'water', 'apple'],
      sourceWordId: 'mifan',
    },
    {
      id: 'q3',
      type: 'hanzi-to-english',
      prompt: '要',
      answer: 'want',
      distractors: ['to eat', 'to drink', 'to like'],
      sourceWordId: 'yao',
    },
    {
      id: 'q4',
      type: 'hanzi-to-english',
      prompt: '多少',
      answer: 'how much',
      distractors: ['what', 'how many', 'and'],
      sourceWordId: 'duoshao',
    },
    {
      id: 'q5',
      type: 'pinyin-to-hanzi',
      prompt: 'xièxie',
      answer: '谢谢',
      distractors: ['再见', '对不起', '不客气'],
      sourceWordId: 'xiexie',
    },
    {
      id: 'q6',
      type: 'pinyin-to-hanzi',
      prompt: 'chá',
      answer: '茶',
      distractors: ['水', '菜', '苹果'],
      sourceWordId: 'cha',
    },
    {
      id: 'q7',
      type: 'pinyin-to-hanzi',
      prompt: 'wǒ',
      answer: '我',
      distractors: ['你', '他', '个'],
      sourceWordId: 'wo',
    },
  ],
};
