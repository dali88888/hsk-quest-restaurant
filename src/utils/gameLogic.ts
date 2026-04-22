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

/** Normalize an English gloss so synonyms can be detected. */
function normalizeEnglish(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, ' ');
}

/**
 * Build a single question.
 *
 * Selection rules:
 *  - The prompt is picked from the set of vocab items that have NOT yet
 *    been asked in this session (`seenIds`). If every word has been
 *    asked at least once, the pool wraps around and any item is eligible
 *    (but we still avoid the immediately previous prompt).
 *  - Distractors exclude any item whose English translation matches the
 *    prompt's (e.g. 右边 vs 右面 both = "right side"). This prevents
 *    ambiguous options where both would technically be correct.
 */
export function makeQuestion(
  vocab: VocabItem[],
  questionNumber: number,
  seenIds: ReadonlySet<string>,
  previousPromptId?: string
): GameQuestion {
  if (vocab.length === 0) {
    throw new Error('Cannot generate a question from empty vocabulary');
  }

  // Prompt pool — prefer unseen words; only fall back to the full pool
  // once every item has been asked at least once.
  const unseen = vocab.filter((v) => !seenIds.has(v.id));
  let promptPool: VocabItem[];
  if (unseen.length > 0) {
    promptPool = unseen;
  } else {
    // full cycle completed — allow repeats, but still try to avoid
    // immediate back-to-back repeats of the previous prompt.
    promptPool =
      vocab.length > 1 && previousPromptId
        ? vocab.filter((v) => v.id !== previousPromptId)
        : vocab;
  }

  const prompt = promptPool[Math.floor(Math.random() * promptPool.length)];
  const promptEn = normalizeEnglish(prompt.english);

  const optionCount = Math.min(GAME_CONFIG.optionsPerQuestion, vocab.length);
  const needed = optionCount - 1;

  // Pool of potential distractors: any vocab item that isn't the prompt
  // itself AND whose English doesn't match the prompt's (to avoid a
  // distractor that's just as correct as the right answer).
  const strictPool = shuffle(
    vocab.filter(
      (v) => v.id !== prompt.id && normalizeEnglish(v.english) !== promptEn
    )
  );

  // Pick distractors one by one, ensuring no two picked options share
  // the same English translation. This prevents confusing cases where
  // two displayed options have identical English glosses (e.g. 里 and
  // 里边 both "inside").
  const usedEnglish = new Set<string>([promptEn]);
  const pickedDistractors: VocabItem[] = [];
  for (const cand of strictPool) {
    if (pickedDistractors.length >= needed) break;
    const en = normalizeEnglish(cand.english);
    if (usedEnglish.has(en)) continue;
    pickedDistractors.push(cand);
    usedEnglish.add(en);
  }

  // If strict english-unique filtering leaves too few distractors,
  // backfill with remaining items so the player still sees 4 choices.
  if (pickedDistractors.length < needed) {
    const backfillPool = shuffle(
      vocab.filter(
        (v) => v.id !== prompt.id && !pickedDistractors.includes(v)
      )
    );
    for (const cand of backfillPool) {
      if (pickedDistractors.length >= needed) break;
      pickedDistractors.push(cand);
    }
  }

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
