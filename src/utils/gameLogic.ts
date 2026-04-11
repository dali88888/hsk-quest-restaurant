import type { VocabItem } from '../types/chapter';
import { shuffle } from './shuffle';

export interface GameQuestion {
  id: number;
  prompt: VocabItem;
  options: VocabItem[];
}

/** Game tunables — change these to rebalance difficulty. */
export const GAME_CONFIG = {
  /** total game length in seconds */
  duration: 60,
  /** initial lives */
  startingLives: 3,
  /** points per correct answer (before combo multiplier) */
  basePoints: 10,
  /** combo multiplier increment every N correct in a row */
  comboStep: 5,
  /** multiplier added per comboStep */
  comboBonus: 0.5,
  /** every N combo, grant time bonus */
  timeBonusInterval: 10,
  /** seconds added on time bonus */
  timeBonusAmount: 5,
  /** number of answer choices per question */
  optionsPerQuestion: 4,
} as const;

/**
 * Build a single question. Picks one prompt from `vocab` and chooses
 * (optionsPerQuestion - 1) distractors. Avoids repeating the immediately
 * previous prompt to keep the game feeling fresh.
 */
export function makeQuestion(
  vocab: VocabItem[],
  questionNumber: number,
  previousPromptId?: string
): GameQuestion {
  if (vocab.length === 0) {
    throw new Error('Cannot generate a question from empty vocabulary');
  }

  // Pick the prompt — avoid back-to-back repeats if vocab is large enough
  const eligible =
    vocab.length > 1 && previousPromptId
      ? vocab.filter((v) => v.id !== previousPromptId)
      : vocab;
  const prompt = eligible[Math.floor(Math.random() * eligible.length)];

  // Build distractors (other vocab items, shuffled)
  const distractors = vocab.filter((v) => v.id !== prompt.id);
  const optionCount = Math.min(GAME_CONFIG.optionsPerQuestion, vocab.length);
  const pickedDistractors = shuffle(distractors).slice(0, optionCount - 1);
  const options = shuffle([prompt, ...pickedDistractors]);

  return { id: questionNumber, prompt, options };
}

/** Multiplier for the next correct answer given current combo length. */
export function comboMultiplier(combo: number): number {
  const steps = Math.floor(combo / GAME_CONFIG.comboStep);
  return 1 + steps * GAME_CONFIG.comboBonus;
}

/** Score awarded for a correct answer at the given combo. */
export function scoreForAnswer(comboBeforeAnswer: number): number {
  return Math.round(
    GAME_CONFIG.basePoints * comboMultiplier(comboBeforeAnswer)
  );
}

/** Returns time bonus (seconds) earned at this new combo length, or 0. */
export function timeBonusFor(newCombo: number): number {
  if (newCombo > 0 && newCombo % GAME_CONFIG.timeBonusInterval === 0) {
    return GAME_CONFIG.timeBonusAmount;
  }
  return 0;
}
