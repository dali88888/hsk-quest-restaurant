export interface DialogueLine {
  hanzi: string;
  pinyin: string;
  english: string;
  /** ids of HskWord entries appearing in this line, used to populate vocab log */
  wordIds: string[];
}

export interface Choice {
  id: string;
  line: DialogueLine;
  nextNodeId: string;
  hint?: string;
}

export type Speaker = 'narrator' | 'npc' | 'player';

export interface DialogueNode {
  id: string;
  speaker: Speaker;
  /** the speaker's lines for this node, shown in order */
  lines: DialogueLine[];
  /** if defined, the player must pick one of these to advance */
  choices?: Choice[];
  /** if `choices` is undefined, advancing goes here */
  nextNodeId?: string;
  /** marks the terminal node of the scene */
  isEnd?: boolean;
}
