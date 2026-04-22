/**
 * Word-drop Tetris logic for HSK vocabulary.
 *
 * Board: COLS × ROWS grid. Single hanzi characters fall from the top.
 * When a falling char lands and forms a valid multi-char word horizontally
 * or vertically with its neighbors, those cells are cleared and a score
 * is awarded.
 *
 * The game supports multiple word sets (HSK1, HSK2, ...). Each state
 * carries its own derived indices so the same logic functions work for
 * any vocabulary.
 */

// ── HSK1 word dictionary ──────────────────────────────────────────
// All multi-character HSK1 words (length ≥ 2).

export const HSK1_WORDS: string[] = [
  // Ch1
  '你们', '我们', '对不起', '没关系',
  // Ch2
  '谢谢', '不客气', '再见', '妈妈', '爸爸', '奶奶', '爷爷',
  // Ch3
  '什么', '名字', '老师', '学生', '中国', '美国',
  // Ch4
  '他们', '她们', '它们', '同学', '学习', '朋友',
  '我的', '你的', '您的', '他的', '她的', '它的',
  '我们的', '你们的', '他们的', '她们的', '它们的',
  '汉语', '语言',
  // Ch5
  '女儿', '儿子', '儿女', '年纪',
  '去年', '今年', '明年',
  '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九',
  '二十', '二十一', '二十二', '二十三', '二十四', '二十五',
  '二十六', '二十七', '二十八', '二十九', '三十',
  '哥哥', '姐姐', '弟弟', '妹妹',
  // Ch6
  '好吃', '好喝', '汉字', '怎么',
  '文字', '中文', '中文名字', '汉语名字',
  '英语', '德语', '法语', '日语', '西语', '西班牙语',
  // Ch7
  '请问', '今天', '星期', '昨天', '明天', '学校',
  '一月', '二月', '三月', '四月', '五月', '六月',
  '七月', '八月', '九月', '十月', '十一月', '十二月',
  '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天', '星期日',
  '周一', '周二', '周三', '周四', '周五', '周六', '周日', '周天', '周末',
  // Ch8
  '米饭', '大米', '小米', '早上', '早晨', '上午', '中午', '下午', '晚上',
  '商店', '杯子', '多少', '这个', '那个', '哪个', '班级',
  // Ch9
  '椅子', '这儿', '那儿', '哪儿', '下面', '上面', '下边', '上边',
  '工作', '医院', '医生',
  // Ch10
  '桌子', '电脑', '没有',
  '左边', '右边', '左面', '右面',
  '前边', '后边', '前面', '后面',
  '里边', '外边', '里面', '外面',
  // Ch11
  '现在', '吃饭', '时候', '什么时候', '电影', '北京',
  '早上好', '上午好', '中午好', '下午好', '晚上好', '晚安',
  // Ch12
  '天气', '怎么样', '下雨', '小姐', '身体', '水果',
  '一些', '暖和',
  // Ch13
  '睡觉', '电视', '喜欢', '打电话', '看电视',
  '手机', '之前', '之后',
  // Ch14
  '一点儿', '东西', '买东西', '卖东西', '苹果', '看见', '先生',
  '回来', '分钟', '衣服', '漂亮', '这些', '那些', '哪些',
  '开车', '书店', '香蕉', '西瓜',
  // Ch15
  '认识', '大学', '饭店', '饭馆儿', '出租车', '一起', '高兴', '飞机',
  '开心', '心情', '愉快',
  '地铁', '公交车', '火车',
  '打车', '打出租车', '上车', '下车', '乘坐',
  '坐地铁', '坐公交车', '坐火车', '坐飞机',
  // bonus common 2-char combos from single-char vocab
  '你好', '不好', '大小',
];

// ── HSK2 word dictionary (additions on top of HSK1) ──────────────
// Multi-character HSK2 words not already covered by HSK1.

const HSK2_EXTRA_WORDS: string[] = [
  // Ch1 — travel, sports, body
  '旅游', '觉得', '为什么', '运动', '踢足球',
  '眼睛', '嘴巴', '鼻子', '跑步',
  '篮球', '打篮球', '网球', '打网球',
  '乒乓球', '打乒乓球', '羽毛', '羽毛球', '打羽毛球', '打球',
  '姥姥', '姥爷',
  // Ch2 — daily life, health
  '生病', '起床', '出院', '厘米', '知道', '休息',
  '锻炼', '体育',
  // Ch3 — home, colors
  '手表', '报纸', '牛奶', '房间', '丈夫', '妻子', '旁边', '颜色',
  '黑色', '白色', '红色', '黄色', '绿色', '蓝色', '粉色',
  // Ch4 — social, celebrations
  '生日', '快乐', '接电话', '非常', '开始', '已经',
  '介绍', '帮忙', '帮助',
  '生日快乐', '新年快乐',
  // Ch5 — shopping, places
  '准备', '可以', '不错', '考试', '意思', '咖啡', '以后',
  '饭馆', '咖啡馆', '体育馆',
  // Ch6 — food, hobbies
  '自行车', '面条', '因为', '所以', '游泳', '健身',
  '经常', '常常', '公斤', '看报纸',
  '羊肉', '牛肉', '猪肉', '鸡肉', '鸭肉', '鱼肉', '想念',
  // Ch7 — locations
  '教室', '机场', '公司', '小时', '走路', '回到',
  // Ch8 — service, prices
  '告诉', '等待', '事情', '服务员', '便宜',
  // Ch9 — study, activities
  '跳舞', '第一', '希望', '问题', '欢迎', '上班', '问问题', '唱歌',
  // Ch10 — food, culture
  '不要', '鸡蛋', '西瓜', '正在', '鸭蛋', '鸟蛋', '文化',
  // Ch11 — people
  '孩子', '说话', '可能', '姓名',
  // Ch12 — clothing, verbs
  '穿着', '穿上', '坐车',
  // Ch13 — body, writing tools
  '胳膊', '铅笔', '微笑', '大笑', '宾馆', '一直', '路口',
  '钢笔', '圆珠笔', '中性笔', '画笔',
  // Ch14 — entertainment, weather
  '电影院', '有意思', '但是', '虽然', '玩儿', '晴天', '阴天',
  // Ch15 — travel, new year
  '新年', '车票', '飞机票', '机票', '车站', '火车站', '大家',
  '新年好',
];

/** Union of HSK1 + HSK2 multi-char words (deduped). */
export const HSK2_WORDS: string[] = Array.from(
  new Set([...HSK1_WORDS, ...HSK2_EXTRA_WORDS])
);

// ── Per-wordset index — lazily built and cached ────────────────────

interface WordIndex {
  words: string[];
  wordSet: Set<string>;
  words2: string[];
  words3: string[];
  allChars: string[];
  charToWords: Map<string, string[]>;
}

function buildIndex(words: string[]): WordIndex {
  const wordSet = new Set(words);
  const words2 = words.filter((w) => w.length === 2);
  const words3 = words.filter((w) => w.length === 3);
  const charToWords = new Map<string, string[]>();
  for (const w of words) {
    for (const ch of w) {
      if (!charToWords.has(ch)) charToWords.set(ch, []);
      charToWords.get(ch)!.push(w);
    }
  }
  const allChars = [...charToWords.keys()];
  return { words, wordSet, words2, words3, allChars, charToWords };
}

const indexCache = new Map<string[], WordIndex>();
function getIndex(words: string[]): WordIndex {
  let idx = indexCache.get(words);
  if (!idx) {
    idx = buildIndex(words);
    indexCache.set(words, idx);
  }
  return idx;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomPoolChar(idx: WordIndex): string {
  return idx.allChars[Math.floor(Math.random() * idx.allChars.length)];
}

/**
 * Build a queue of characters to drop.
 *
 * Mixes three modes unpredictably so the stream never feels formulaic:
 *   A) Intact word pair — chars of a word in order (easiest to place)
 *   B) Split word — word chars with 1-2 random chars wedged in between
 *   C) Pure random burst — 1-3 random chars (noise / difficulty)
 */
export function buildCharQueue(board: Cell[][], words: string[]): string[] {
  const idx = getIndex(words);
  const queue: string[] = [];

  // ── board-aware completion (occasional) ────────────────────────
  if (Math.random() < 0.35) {
    const partner = findBoardCompletionChar(board, idx);
    if (partner) queue.push(partner);
  }

  // ── fill 8-14 chars using a random mix of modes ───────────────
  const targetLen = 8 + Math.floor(Math.random() * 7);
  const used = new Set<string>();

  while (queue.length < targetLen) {
    const roll = Math.random();

    if (roll < 0.40) {
      // ── Mode A (40%): intact word pair ─────────────────────────
      const word = pickUnusedWord(used, idx);
      used.add(word);
      for (const ch of word) queue.push(ch);

    } else if (roll < 0.75) {
      // ── Mode B (35%): split word — insert 1-2 random chars ────
      const word = pickUnusedWord(used, idx);
      used.add(word);
      const chars = [...word];
      const splitAt = 1 + Math.floor(Math.random() * (chars.length - 1));
      for (let k = 0; k < chars.length; k++) {
        if (k === splitAt) {
          const noise = 1 + Math.floor(Math.random() * 2); // 1-2
          for (let n = 0; n < noise; n++) queue.push(randomPoolChar(idx));
        }
        queue.push(chars[k]);
      }

    } else {
      // ── Mode C (25%): pure random burst ────────────────────────
      const burst = 1 + Math.floor(Math.random() * 3); // 1-3 chars
      for (let n = 0; n < burst; n++) queue.push(randomPoolChar(idx));
    }
  }

  // Safety: queue should never be empty
  if (queue.length === 0) {
    const w = pickRandom(idx.words2.length > 0 ? idx.words2 : idx.words);
    for (const ch of w) queue.push(ch);
  }

  return queue;
}

/** Pick a random word not already used in this queue batch. */
function pickUnusedWord(used: Set<string>, idx: WordIndex): string {
  // 75% 2-char, 25% 3-char (fallback to 2-char pool if no 3-char words)
  const preferTwo = Math.random() < 0.75 || idx.words3.length === 0;
  const pool = preferTwo ? idx.words2 : idx.words3;
  const candidates = pool.filter((w) => !used.has(w));
  if (candidates.length > 0) return pickRandom(candidates);
  return pickRandom(pool.length > 0 ? pool : idx.words);
}

/**
 * Scan the board for an exposed character that could complete a 2-char word.
 * Returns the partner character, or null.
 */
function findBoardCompletionChar(
  board: Cell[][],
  idx: WordIndex
): string | null {
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

  const shuffled = [...exposed].sort(() => Math.random() - 0.5);
  for (const ch of shuffled) {
    const words = (idx.charToWords.get(ch) || []).filter((w) => w.length === 2);
    if (words.length === 0) continue;
    const word = pickRandom(words);
    const partner = [...word].find((c) => c !== ch);
    if (partner) return partner;
  }
  return null;
}

/** Pop the next character from the queue, refilling from the state's words if empty. */
function popQueue(
  queue: string[],
  board: Cell[][],
  words: string[]
): { char: string; newQueue: string[] } {
  if (queue.length > 0) {
    return { char: queue[0], newQueue: queue.slice(1) };
  }
  const fresh = buildCharQueue(board, words);
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
  /** Active word dictionary for this game (HSK1 or HSK2). */
  words: string[];
}

// ── helpers ────────────────────────────────────────────────────────

export function emptyBoard(): Cell[][] {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
}

/** Create a fresh game state for the given word set (defaults to HSK1). */
export function initState(words: string[] = HSK1_WORDS): TetrisState {
  const board = emptyBoard();
  const queue = buildCharQueue(board, words);
  const first = queue[0];
  const { char: next, newQueue } = popQueue(queue.slice(1), board, words);
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
    words,
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
export function findMatch(
  board: Cell[][],
  words: string[]
): MatchResult | null {
  const { wordSet } = getIndex(words);
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
        if (valid && wordSet.has(word)) {
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
        if (valid && wordSet.has(word)) {
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
  const match = findMatch(newBoard, state.words);
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

  const { char: nextNext, newQueue } = popQueue(state.charQueue, newBoard, state.words);
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
  const cascade = findMatch(newBoard, state.words);
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

  const { char: nextNext, newQueue } = popQueue(state.charQueue, newBoard, state.words);
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
