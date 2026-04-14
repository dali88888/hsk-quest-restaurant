/**
 * Word-drop Tetris logic for HSK1 vocabulary.
 *
 * Board: COLS × ROWS grid. Single hanzi characters fall from the top.
 * When a falling char lands and forms a valid multi-char word horizontally
 * with its neighbors, those cells are cleared and a score is awarded.
 */

// ── word dictionary ────────────────────────────────────────────────
// All multi-character HSK1 words (length ≥ 2). The game uses these
// to check if adjacent characters form a valid match.

export const HSK1_WORDS: string[] = [
  // Ch1
  '你们', '对不起', '没关系',
  // Ch2
  '谢谢', '不客气', '再见',
  // Ch3
  '什么', '名字', '老师', '学生', '中国', '美国',
  // Ch4
  '汉语', '同学', '朋友',
  // Ch5
  '女儿', '去年', '今年', '明年',
  // Ch6
  '妈妈', '好吃', '汉字', '怎么', '英语', '法语', '日语',
  // Ch7
  '今天', '星期', '昨天', '明天', '学校',
  '一月', '二月', '三月', '四月', '五月', '六月',
  '七月', '八月', '九月', '十月', '十一月', '十二月',
  '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天', '星期日',
  // Ch8
  '米饭', '下午', '商店', '杯子', '多少',
  // Ch9
  '椅子', '下面', '工作', '儿子', '医院', '医生', '爸爸',
  // Ch10
  '桌子', '电脑', '没有',
  // Ch11
  '现在', '上午', '中午', '吃饭', '时候', '我们', '电影', '北京',
  // Ch12
  '天气', '怎么样', '下雨', '小姐', '身体', '水果',
  // Ch13
  '学习', '睡觉', '电视', '喜欢', '打电话', '看电视',
  // Ch14
  '东西', '买东西', '卖东西', '苹果', '看见', '先生',
  '回来', '分钟', '衣服', '漂亮', '这些', '那些', '哪些',
  // Ch15
  '认识', '大学', '饭店', '出租车', '一起', '高兴', '飞机',
  // bonus common 2-char combos from single-char vocab
  '你好', '不好', '大小',
];

// Build a Set for fast lookup
const WORD_SET = new Set(HSK1_WORDS);

// Pre-split word list by length for quick access
const WORDS_2 = HSK1_WORDS.filter((w) => w.length === 2);
const WORDS_3 = HSK1_WORDS.filter((w) => w.length === 3);

// Index: char → list of words containing that char (for board-aware feeding)
const charToWords = new Map<string, string[]>();
for (const w of HSK1_WORDS) {
  for (const ch of w) {
    if (!charToWords.has(ch)) charToWords.set(ch, []);
    charToWords.get(ch)!.push(w);
  }
}

// All unique single characters (used only for rare filler)
const allChars: string[] = [...charToWords.keys()];

function randomPoolChar(): string {
  return allChars[Math.floor(Math.random() * allChars.length)];
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Build a queue of characters to drop.
 *
 * Mixes three modes unpredictably so the stream never feels formulaic:
 *   A) Intact word pair — chars of a word in order (easiest to place)
 *   B) Split word — word chars with 1-2 random chars wedged in between
 *   C) Pure random burst — 1-3 random chars (noise / difficulty)
 *
 * Each "slot" in the queue randomly picks one of the three modes,
 * weighted so the player always has a *chance* to form words but must
 * stay alert. Board-aware completion is mixed in occasionally.
 */
export function buildCharQueue(board: Cell[][]): string[] {
  const queue: string[] = [];

  // ── board-aware completion (occasional) ────────────────────────
  if (Math.random() < 0.35) {
    const partner = findBoardCompletionChar(board);
    if (partner) queue.push(partner);
  }

  // ── fill 8-14 chars using a random mix of modes ───────────────
  const targetLen = 8 + Math.floor(Math.random() * 7);
  const used = new Set<string>();

  while (queue.length < targetLen) {
    const roll = Math.random();

    if (roll < 0.40) {
      // ── Mode A (40%): intact word pair ─────────────────────────
      const word = pickUnusedWord(used);
      used.add(word);
      for (const ch of word) queue.push(ch);

    } else if (roll < 0.75) {
      // ── Mode B (35%): split word — insert 1-2 random chars ────
      const word = pickUnusedWord(used);
      used.add(word);
      const chars = [...word];
      // Pick a random split point inside the word
      const splitAt = 1 + Math.floor(Math.random() * (chars.length - 1));
      for (let k = 0; k < chars.length; k++) {
        if (k === splitAt) {
          const noise = 1 + Math.floor(Math.random() * 2); // 1-2
          for (let n = 0; n < noise; n++) queue.push(randomPoolChar());
        }
        queue.push(chars[k]);
      }

    } else {
      // ── Mode C (25%): pure random burst ────────────────────────
      const burst = 1 + Math.floor(Math.random() * 3); // 1-3 chars
      for (let n = 0; n < burst; n++) queue.push(randomPoolChar());
    }
  }

  // Safety: queue should never be empty
  if (queue.length === 0) {
    const w = pickRandom(WORDS_2);
    for (const ch of w) queue.push(ch);
  }

  return queue;
}

/** Pick a random HSK1 word not already used in this queue batch. */
function pickUnusedWord(used: Set<string>): string {
  // 75% 2-char, 25% 3-char
  const pool = Math.random() < 0.75 ? WORDS_2 : WORDS_3;
  const candidates = pool.filter((w) => !used.has(w));
  if (candidates.length > 0) return pickRandom(candidates);
  // fallback: allow repeats
  return pickRandom(pool.length > 0 ? pool : WORDS_2);
}

/**
 * Scan the board for an exposed character that could complete a 2-char word.
 * Returns the partner character, or null.
 */
function findBoardCompletionChar(board: Cell[][]): string | null {
  // Collect top-most char per column
  const exposed: string[] = [];
  for (let col = 0; col < COLS; col++) {
    for (let row = 0; row < ROWS; row++) {
      if (board[row][col]) {
        exposed.push(board[row][col]!);
        break;
      }
    }
  }
  if (exposed.length === 0) return null;

  // Shuffle and try to find a word-completion partner
  const shuffled = [...exposed].sort(() => Math.random() - 0.5);
  for (const ch of shuffled) {
    const words = (charToWords.get(ch) || []).filter((w) => w.length === 2);
    if (words.length === 0) continue;
    const word = pickRandom(words);
    const partner = [...word].find((c) => c !== ch);
    if (partner) return partner;
  }
  return null;
}

/** Pop the next character from the queue, refilling if empty. */
function popQueue(
  queue: string[],
  board: Cell[][]
): { char: string; newQueue: string[] } {
  if (queue.length > 0) {
    return { char: queue[0], newQueue: queue.slice(1) };
  }
  const fresh = buildCharQueue(board);
  return { char: fresh[0], newQueue: fresh.slice(1) };
}

// ── board types ────────────────────────────────────────────────────

export const COLS = 8;
export const ROWS = 12;

export type Cell = string | null; // hanzi or empty

export interface FallingPiece {
  char: string;
  col: number;
  row: number; // can be fractional during animation, integer on logic ticks
}

export interface MatchResult {
  word: string;
  cells: Array<{ row: number; col: number }>;
}

export interface TetrisState {
  board: Cell[][];          // board[row][col]
  piece: FallingPiece | null;
  nextChar: string;
  charQueue: string[];      // upcoming chars (fed in word-groups)
  score: number;
  wordsCleared: number;
  level: number;
  gameOver: boolean;
  paused: boolean;
  matchFlash: MatchResult | null; // currently flashing match
  lastWord: string | null;        // last cleared word for display
}

// ── helpers ────────────────────────────────────────────────────────

export function emptyBoard(): Cell[][] {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
}

export function initState(): TetrisState {
  const board = emptyBoard();
  const queue = buildCharQueue(board);
  const first = queue[0];
  const { char: next, newQueue } = popQueue(queue.slice(1), board);
  return {
    board,
    piece: spawnPiece(first),
    nextChar: next,
    charQueue: newQueue,
    score: 0,
    wordsCleared: 0,
    level: 1,
    gameOver: false,
    paused: false,
    matchFlash: null,
    lastWord: null,
  };
}

function spawnPiece(char: string): FallingPiece {
  return { char, col: Math.floor(COLS / 2), row: 0 };
}

/** Check if a cell is occupied on the board. */
function occupied(board: Cell[][], row: number, col: number): boolean {
  if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return true;
  return board[row][col] !== null;
}

// ── word matching ──────────────────────────────────────────────────

/**
 * Scan the entire board for valid words — both horizontal (left→right)
 * and vertical (top→bottom). Returns the longest match found, or null.
 */
export function findMatch(board: Cell[][]): MatchResult | null {
  let best: MatchResult | null = null;

  // Horizontal scan (left → right)
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (!board[row][col]) continue;
      for (let len = 2; len <= 4 && col + len <= COLS; len++) {
        let word = '';
        const cells: Array<{ row: number; col: number }> = [];
        let valid = true;
        for (let k = 0; k < len; k++) {
          const ch = board[row][col + k];
          if (!ch) { valid = false; break; }
          word += ch;
          cells.push({ row, col: col + k });
        }
        if (valid && WORD_SET.has(word)) {
          if (!best || word.length > best.word.length) {
            best = { word, cells };
          }
        }
      }
    }
  }

  // Vertical scan (top → bottom)
  for (let col = 0; col < COLS; col++) {
    for (let row = 0; row < ROWS; row++) {
      if (!board[row][col]) continue;
      for (let len = 2; len <= 4 && row + len <= ROWS; len++) {
        let word = '';
        const cells: Array<{ row: number; col: number }> = [];
        let valid = true;
        for (let k = 0; k < len; k++) {
          const ch = board[row + k][col];
          if (!ch) { valid = false; break; }
          word += ch;
          cells.push({ row: row + k, col });
        }
        if (valid && WORD_SET.has(word)) {
          if (!best || word.length > best.word.length) {
            best = { word, cells };
          }
        }
      }
    }
  }

  return best;
}

// ── gravity ────────────────────────────────────────────────────────

/** Make all floating characters fall down to fill gaps. */
export function applyGravity(board: Cell[][]): void {
  for (let col = 0; col < COLS; col++) {
    let writeRow = ROWS - 1;
    for (let readRow = ROWS - 1; readRow >= 0; readRow--) {
      if (board[readRow][col] !== null) {
        board[writeRow][col] = board[readRow][col];
        if (writeRow !== readRow) board[readRow][col] = null;
        writeRow--;
      }
    }
    for (let r = writeRow; r >= 0; r--) {
      board[r][col] = null;
    }
  }
}

// ── game actions ───────────────────────────────────────────────────

export function moveLeft(state: TetrisState): TetrisState {
  if (!state.piece || state.gameOver || state.paused || state.matchFlash) return state;
  const { col, row } = state.piece;
  if (!occupied(state.board, Math.floor(row), col - 1)) {
    return { ...state, piece: { ...state.piece, col: col - 1 } };
  }
  return state;
}

export function moveRight(state: TetrisState): TetrisState {
  if (!state.piece || state.gameOver || state.paused || state.matchFlash) return state;
  const { col, row } = state.piece;
  if (!occupied(state.board, Math.floor(row), col + 1)) {
    return { ...state, piece: { ...state.piece, col: col + 1 } };
  }
  return state;
}

/** Lock the current piece into the board. */
function lockPiece(state: TetrisState): TetrisState {
  if (!state.piece) return state;
  const { char, col, row } = state.piece;
  const r = Math.floor(row);
  const newBoard = state.board.map((row) => [...row]);
  newBoard[r][col] = char;

  // Check for word match
  const match = findMatch(newBoard);
  if (match) {
    return {
      ...state,
      board: newBoard,
      piece: null,
      matchFlash: match,
      lastWord: match.word,
    };
  }

  // No match — check game over (top row occupied)
  const isGameOver = newBoard[0].some((c) => c !== null);

  if (isGameOver) {
    return { ...state, board: newBoard, piece: null, gameOver: true };
  }

  const { char: nextNext, newQueue } = popQueue(state.charQueue, newBoard);
  return {
    ...state,
    board: newBoard,
    piece: spawnPiece(state.nextChar),
    nextChar: nextNext,
    charQueue: newQueue,
  };
}

/** Clear the flashed match, apply gravity, check cascades, spawn next piece. */
export function clearMatch(state: TetrisState): TetrisState {
  if (!state.matchFlash) return state;
  const newBoard = state.board.map((row) => [...row]);
  for (const { row, col } of state.matchFlash.cells) {
    newBoard[row][col] = null;
  }
  applyGravity(newBoard);

  const wordLen = state.matchFlash.word.length;
  const points = wordLen * 10 * state.level;
  const newWordsCleared = state.wordsCleared + 1;
  const newLevel = Math.floor(newWordsCleared / 5) + 1;

  // Check for cascade
  const cascade = findMatch(newBoard);
  if (cascade) {
    return {
      ...state,
      board: newBoard,
      score: state.score + points,
      wordsCleared: newWordsCleared,
      level: newLevel,
      matchFlash: cascade,
      lastWord: cascade.word,
    };
  }

  const isGameOver = newBoard[0].some((c) => c !== null);

  if (isGameOver) {
    return {
      ...state,
      board: newBoard,
      score: state.score + points,
      wordsCleared: newWordsCleared,
      level: newLevel,
      matchFlash: null,
      piece: null,
      gameOver: true,
    };
  }

  const { char: nextNext, newQueue } = popQueue(state.charQueue, newBoard);
  return {
    ...state,
    board: newBoard,
    score: state.score + points,
    wordsCleared: newWordsCleared,
    level: newLevel,
    matchFlash: null,
    piece: spawnPiece(state.nextChar),
    nextChar: nextNext,
    charQueue: newQueue,
  };
}

/** Advance the falling piece one row down. Lock if can't move. */
export function tick(state: TetrisState): TetrisState {
  if (!state.piece || state.gameOver || state.paused || state.matchFlash) return state;
  const { col, row } = state.piece;
  const nextRow = row + 1;
  if (occupied(state.board, Math.floor(nextRow), col)) {
    return lockPiece(state);
  }
  return { ...state, piece: { ...state.piece, row: nextRow } };
}

/** Hard drop — instantly drop to lowest available row. */
export function hardDrop(state: TetrisState): TetrisState {
  if (!state.piece || state.gameOver || state.paused || state.matchFlash) return state;
  let r = Math.floor(state.piece.row);
  while (r + 1 < ROWS && !occupied(state.board, r + 1, state.piece.col)) {
    r++;
  }
  return lockPiece({ ...state, piece: { ...state.piece, row: r } });
}

/** Drop speed in ms based on level. */
export function dropInterval(level: number): number {
  return Math.max(200, 800 - (level - 1) * 60);
}
