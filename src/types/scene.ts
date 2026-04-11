import type { DialogueNode } from './dialogue';
import type { HskWord } from './vocab';

export type QuizQuestionType =
  | 'hanzi-to-english'
  | 'pinyin-to-hanzi'
  | 'english-to-hanzi';

export interface QuizQuestion {
  id: string;
  type: QuizQuestionType;
  prompt: string;
  answer: string;
  distractors: string[];
  sourceWordId: string;
}

export interface Scene {
  id: string;
  titleKey: string;
  descriptionKey: string;
  startNodeId: string;
  nodes: Record<string, DialogueNode>;
  vocabulary: HskWord[];
  quiz: QuizQuestion[];
}
