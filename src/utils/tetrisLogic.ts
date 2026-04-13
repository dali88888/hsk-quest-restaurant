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

// All unique single characters that make up the words
const charPool: string[] = (() => {
  const charCount = new Map<string, number>();
  for (const w of HSK1_WORDS) {
    for (const ch of w) {
      charCount.set(ch, (charCount.get(ch) || 0) + 1);
    }
  }
  // Weight characters by frequency (appear in more words → more likely to drop)
  const pool: string[] = [];
  for (const [ch, count] of charCount) {
    const weight = Math.min(count, 4); // cap at 4
    for (let i = 0; i < weight; i++) pool.push(ch);
  }
  return pool;
})();

export function randomChar(): string {
  return charPool[Math.floor(Math.random() * charPool.length)];
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
  return {
    board: emptyBoard(),
    piece: spawnPiece(randomChar()),
    nextChar: randomChar(),
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
 * Scan the entire board for valid horizontal words.
 * Returns the longest/best match found, or null.
 */
export function findMatch(board: Cell[][]): MatchResult | null {
  let best: MatchResult | null = null;

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (!board[row][col]) continue;
      // Try lengths 2, 3, 4 starting from this col
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

  return {
    ...state,
    board: newBoard,
    piece: isGameOver ? null : spawnPiece(state.nextChar),
    nextChar: isGameOver ? state.nextChar : randomChar(),
    gameOver: isGameOver,
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

  return {
    ...state,
    board: newBoard,
    score: state.score + points,
    wordsCleared: newWordsCleared,
    level: newLevel,
    matchFlash: null,
    piece: isGameOver ? null : spawnPiece(state.nextChar),
    nextChar: isGameOver ? state.nextChar : randomChar(),
    gameOver: isGameOver,
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
