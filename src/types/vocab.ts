export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'pronoun'
  | 'number'
  | 'measure'
  | 'adjective'
  | 'particle'
  | 'greeting'
  | 'question';

export interface HskWord {
  id: string;
  hanzi: string;
  pinyin: string;
  english: string;
  partOfSpeech: PartOfSpeech;
  hskLevel: 1;
}
