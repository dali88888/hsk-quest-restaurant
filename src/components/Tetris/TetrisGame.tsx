import { useCallback, useEffect, useReducer, useRef } from 'react';
import { useGameStore } from '../../store/gameStore';
import { useI18n } from '../../i18n/I18nProvider';
import {
  COLS,
  ROWS,
  initState,
  tick,
  moveLeft,
  moveRight,
  hardDrop,
  clearMatch,
  dropInterval,
  type TetrisState,
} from '../../utils/tetrisLogic';

// ── reducer ────────────────────────────────────────────────────────

type Action =
  | { type: 'TICK' }
  | { type: 'LEFT' }
  | { type: 'RIGHT' }
  | { type: 'DROP' }
  | { type: 'CLEAR_MATCH' }
  | { type: 'PAUSE' }
  | { type: 'RESTART' };

function reducer(state: TetrisState, action: Action): TetrisState {
  switch (action.type) {
    case 'TICK':
      return tick(state);
    case 'LEFT':
      return moveLeft(state);
    case 'RIGHT':
      return moveRight(state);
    case 'DROP':
      return hardDrop(state);
    case 'CLEAR_MATCH':
      return clearMatch(state);
    case 'PAUSE':
      return { ...state, paused: !state.paused };
    case 'RESTART':
      return initState();
    default:
      return state;
  }
}

// ── component ──────────────────────────────────────────────────────

export function TetrisGame() {
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const goHome = useGameStore((s) => s.goHome);
  const showPinyin = useGameStore((s) => s.progress.showPinyin);
  const { t } = useI18n();
  const boardRef = useRef<HTMLDivElement>(null);

  // Auto-focus for keyboard
  useEffect(() => {
    boardRef.current?.focus();
  }, []);

  // Keyboard controls
  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (state.gameOver) return;
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          dispatch({ type: 'LEFT' });
          break;
        case 'ArrowRight':
          e.preventDefault();
          dispatch({ type: 'RIGHT' });
          break;
        case 'ArrowDown':
          e.preventDefault();
          dispatch({ type: 'TICK' });
          break;
        case ' ':
          e.preventDefault();
          dispatch({ type: 'DROP' });
          break;
        case 'p':
        case 'P':
          dispatch({ type: 'PAUSE' });
          break;
      }
    },
    [state.gameOver]
  );

  // Game tick timer
  useEffect(() => {
    if (state.gameOver || state.paused) return;
    if (state.matchFlash) {
      const t = setTimeout(() => dispatch({ type: 'CLEAR_MATCH' }), 500);
      return () => clearTimeout(t);
    }
    const interval = dropInterval(state.level);
    const t = setTimeout(() => dispatch({ type: 'TICK' }), interval);
    return () => clearTimeout(t);
  }, [state.gameOver, state.paused, state.matchFlash, state.level, state.piece?.row]);

  // Flash cells set
  const flashCells = new Set(
    state.matchFlash?.cells.map((c) => `${c.row},${c.col}`) ?? []
  );

  // Ghost position (where piece would land)
  let ghostRow = -1;
  if (state.piece && !state.matchFlash) {
    ghostRow = Math.floor(state.piece.row);
    while (
      ghostRow + 1 < ROWS &&
      state.board[ghostRow + 1][state.piece.col] === null
    ) {
      ghostRow++;
    }
  }

  return (
    <div className="fade-in flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-md mb-4">
        <button
          type="button"
          onClick={goHome}
          className="text-sm text-amber-700 hover:text-amber-900 font-medium"
        >
          &larr; {t('chapter.back')}
        </button>
      </div>

      <h2 className="text-2xl font-bold text-amber-900 mb-1">
        HSK Word Drop
      </h2>
      <p className="text-sm text-stone-500 mb-4">
        {t('common.tetrisHint')}
      </p>

      {/* HUD */}
      <div className="flex gap-6 mb-3 text-sm font-bold">
        <div className="text-center">
          <p className="text-stone-400 text-xs uppercase">{t('game.score')}</p>
          <p className="text-xl text-amber-800">{state.score}</p>
        </div>
        <div className="text-center">
          <p className="text-stone-400 text-xs uppercase">Level</p>
          <p className="text-xl text-amber-800">{state.level}</p>
        </div>
        <div className="text-center">
          <p className="text-stone-400 text-xs uppercase">{t('common.words')}</p>
          <p className="text-xl text-amber-800">{state.wordsCleared}</p>
        </div>
        <div className="text-center">
          <p className="text-stone-400 text-xs uppercase">{t('common.next')}</p>
          <p className="text-2xl">{state.nextChar}</p>
        </div>
      </div>

      {/* Last word cleared */}
      {state.lastWord && (
        <div className="mb-2 text-amber-700 font-bold text-lg animate-bounce">
          {state.lastWord}
        </div>
      )}

      {/* Board */}
      <div
        ref={boardRef}
        tabIndex={0}
        onKeyDown={handleKey}
        className="relative outline-none rounded-lg border-2 border-amber-300 bg-amber-50 p-0.5"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gap: '1px',
          width: `min(100%, ${COLS * 48 + 8}px)`,
        }}
      >
        {Array.from({ length: ROWS * COLS }, (_, i) => {
          const row = Math.floor(i / COLS);
          const col = i % COLS;
          const boardChar = state.board[row][col];
          const isPiece =
            state.piece &&
            !state.matchFlash &&
            Math.floor(state.piece.row) === row &&
            state.piece.col === col;
          const isGhost =
            !isPiece &&
            state.piece &&
            !state.matchFlash &&
            ghostRow === row &&
            state.piece.col === col &&
            !boardChar;
          const isFlash = flashCells.has(`${row},${col}`);
          const char = isPiece ? state.piece!.char : boardChar;

          let bg = 'bg-white';
          if (isFlash) bg = 'bg-green-300 animate-pulse';
          else if (isPiece) bg = 'bg-amber-200';
          else if (isGhost) bg = 'bg-amber-100';
          else if (boardChar) bg = 'bg-stone-100';

          return (
            <div
              key={i}
              className={`${bg} rounded-sm flex flex-col items-center justify-center transition-colors aspect-square`}
              style={{ minWidth: 0 }}
            >
              {char && (
                <>
                  {showPinyin && (
                    <span className="text-[8px] leading-none text-amber-600">
                      &nbsp;
                    </span>
                  )}
                  <span
                    className={`text-base sm:text-lg font-bold leading-none ${
                      isFlash ? 'text-green-800' : isPiece ? 'text-amber-800' : 'text-stone-800'
                    }`}
                  >
                    {char}
                  </span>
                </>
              )}
              {isGhost && !char && (
                <span className="text-base sm:text-lg font-bold leading-none text-amber-300 opacity-50">
                  {state.piece!.char}
                </span>
              )}
            </div>
          );
        })}

        {/* Game Over / Pause overlay */}
        {(state.gameOver || state.paused) && (
          <div className="absolute inset-0 bg-black/50 rounded-lg flex flex-col items-center justify-center z-10">
            <p className="text-2xl font-bold text-white mb-2">
              {state.gameOver ? 'Game Over' : 'Paused'}
            </p>
            {state.gameOver && (
              <p className="text-amber-300 font-bold mb-3">
                {t('game.score')}: {state.score}
              </p>
            )}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => dispatch({ type: 'RESTART' })}
                className="px-4 py-2 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700"
              >
                {state.gameOver ? t('result.playAgain') : 'Restart'}
              </button>
              <button
                type="button"
                onClick={goHome}
                className="px-4 py-2 bg-stone-600 text-white rounded-lg font-bold hover:bg-stone-700"
              >
                {t('result.backHome')}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Rules panel */}
      <div className="mt-4 w-full max-w-md bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-stone-600 space-y-1">
        <p className="font-bold text-amber-800 text-sm mb-1">{t('tetris.ruleTitle')}</p>
        <p>• {t('tetris.rule1')}</p>
        <p>• {t('tetris.rule2')}</p>
        <p>• {t('tetris.rule3')}</p>
        <p>• {t('tetris.rule4')}</p>
      </div>

      {/* Mobile controls */}
      <div className="mt-4 flex gap-3 sm:hidden">
        <button
          type="button"
          onPointerDown={() => dispatch({ type: 'LEFT' })}
          className="w-14 h-14 bg-amber-100 rounded-xl text-2xl active:bg-amber-200"
        >
          ←
        </button>
        <button
          type="button"
          onPointerDown={() => dispatch({ type: 'DROP' })}
          className="w-14 h-14 bg-amber-100 rounded-xl text-2xl active:bg-amber-200"
        >
          ↓
        </button>
        <button
          type="button"
          onPointerDown={() => dispatch({ type: 'RIGHT' })}
          className="w-14 h-14 bg-amber-100 rounded-xl text-2xl active:bg-amber-200"
        >
          →
        </button>
      </div>
    </div>
  );
}
