import { useEffect, useMemo, useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { useI18n } from '../../i18n/I18nProvider';
import { getChapter } from '../../data/chapters';
import type { ExampleSentence, SentenceToken } from '../../types/chapter';
import { shuffle } from '../../utils/shuffle';

/**
 * Sentence Builder — players reconstruct a Mandarin sentence by tapping
 * shuffled word/phrase tiles into ordered slots, with the English
 * translation as their guide.
 *
 * Each chapter contributes the sentences that have an authored
 * `tokens` array. Sentences are presented in order; finishing all
 * sentences marks the round complete.
 */

/** Each tile carries its original index in the correct sequence so we
 *  can validate placement, plus a stable React key independent of the
 *  shuffled order. */
interface Tile {
  /** original index in the correct token order — also the answer key */
  correctIndex: number;
  /** stable identity for React keys */
  uid: string;
  token: SentenceToken;
}

function buildTiles(tokens: SentenceToken[]): Tile[] {
  return tokens.map((t, i) => ({
    correctIndex: i,
    uid: `${i}-${t.hanzi}`,
    token: t,
  }));
}

export function SentenceBuilder() {
  const activeChapterId = useGameStore((s) => s.activeChapterId);
  const goHome = useGameStore((s) => s.goHome);
  const showPinyin = useGameStore((s) => s.progress.showPinyin);
  const { t, language } = useI18n();

  const chapter = activeChapterId ? getChapter(activeChapterId) : null;
  const sentences = useMemo<ExampleSentence[]>(
    () => (chapter?.sentences ?? []).filter((s) => s.tokens && s.tokens.length > 0),
    [chapter]
  );

  const [idx, setIdx] = useState(0);
  /** tiles available in the bank (not yet placed) */
  const [bank, setBank] = useState<Tile[]>([]);
  /** tiles in the answer slots, in placement order */
  const [placed, setPlaced] = useState<Tile[]>([]);
  /** 'idle' | 'correct' | 'wrong' — for visual feedback */
  const [state, setState] = useState<'idle' | 'correct' | 'wrong'>('idle');
  /** number of sentences successfully completed in this run */
  const [completed, setCompleted] = useState(0);

  const current = sentences[idx];

  // Initialize tiles when current sentence changes
  useEffect(() => {
    if (!current?.tokens) return;
    const tiles = buildTiles(current.tokens);
    // Shuffle, but ensure not in correct order if there are 2+ tokens
    let shuffled = shuffle(tiles);
    if (tiles.length >= 2) {
      // re-shuffle up to 5 times if accidentally already correct
      let attempts = 0;
      while (
        attempts < 5 &&
        shuffled.every((tile, i) => tile.correctIndex === i)
      ) {
        shuffled = shuffle(tiles);
        attempts++;
      }
    }
    setBank(shuffled);
    setPlaced([]);
    setState('idle');
  }, [current]);

  if (!chapter) return null;

  if (sentences.length === 0) {
    return (
      <div className="fade-in flex flex-col items-center text-center py-12">
        <p className="text-5xl mb-3">📝</p>
        <p className="text-lg text-stone-600 mb-4">
          {t('sentence.noContent')}
        </p>
        <button
          type="button"
          onClick={goHome}
          className="text-amber-700 hover:text-amber-900 underline"
        >
          ← {t('common.backHome')}
        </button>
      </div>
    );
  }

  // ── round-complete view ────────────────────────────────────────
  if (idx >= sentences.length) {
    const title = language === 'zh' ? chapter.titleZh : chapter.titleEn;
    return (
      <div className="fade-in flex flex-col items-center text-center py-12">
        <p className="text-6xl mb-3">🎉</p>
        <h2 className="text-2xl font-bold text-amber-900 mb-2">
          {t('sentence.allDone')}
        </h2>
        <p className="text-stone-600 mb-1">{title}</p>
        <p className="text-amber-700 font-medium mb-6">
          {t('sentence.completedScore', {
            done: completed,
            total: sentences.length,
          })}
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              setIdx(0);
              setCompleted(0);
            }}
            className="px-5 py-2 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700"
          >
            {t('sentence.playAgain')}
          </button>
          <button
            type="button"
            onClick={goHome}
            className="px-5 py-2 bg-stone-600 text-white rounded-lg font-bold hover:bg-stone-700"
          >
            {t('result.backHome')}
          </button>
        </div>
      </div>
    );
  }

  if (!current?.tokens) return null;

  const totalSlots = current.tokens.length;
  const allPlaced = placed.length === totalSlots;

  // ── handlers ───────────────────────────────────────────────────

  const placeTile = (tile: Tile) => {
    if (state !== 'idle' || allPlaced) return;
    setBank((b) => b.filter((x) => x.uid !== tile.uid));
    setPlaced((p) => [...p, tile]);
  };

  const unplaceTile = (tile: Tile) => {
    if (state !== 'idle') return;
    setPlaced((p) => p.filter((x) => x.uid !== tile.uid));
    setBank((b) => [...b, tile]);
  };

  const checkAnswer = () => {
    if (!allPlaced || state !== 'idle') return;
    const isCorrect = placed.every((tile, i) => tile.correctIndex === i);
    if (isCorrect) {
      setState('correct');
      setCompleted((c) => c + 1);
      // advance after a short flash
      window.setTimeout(() => {
        setIdx((i) => i + 1);
      }, 1100);
    } else {
      setState('wrong');
      // shake + auto-clear back to idle after a moment so the player
      // can rearrange without re-clicking a button
      window.setTimeout(() => {
        setState('idle');
      }, 700);
    }
  };

  const resetRow = () => {
    if (state !== 'idle') return;
    setBank((b) => [...b, ...placed]);
    setPlaced([]);
  };

  const skipSentence = () => {
    setIdx((i) => i + 1);
  };

  // Auto-check when last slot fills
  // (we still keep the button for explicit confirmation on slow taps)
  const slotBoxClasses = (i: number) => {
    const base =
      'min-w-[3.5rem] h-16 sm:h-20 px-2 rounded-xl border-2 flex flex-col items-center justify-center transition-all';
    const filled = i < placed.length;
    if (state === 'correct' && filled) {
      return `${base} border-green-400 bg-green-100`;
    }
    if (state === 'wrong' && filled) {
      return `${base} border-red-400 bg-red-100 animate-pulse`;
    }
    return filled
      ? `${base} border-amber-300 bg-white shadow-sm cursor-pointer hover:border-amber-400`
      : `${base} border-dashed border-amber-300 bg-amber-50/40`;
  };

  // ── render ─────────────────────────────────────────────────────

  return (
    <div className={`fade-in ${state === 'wrong' ? 'shake-wrong' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={goHome}
          className="text-sm text-amber-700 hover:text-amber-900 font-medium"
        >
          ← {t('common.backHome')}
        </button>
        <span className="text-sm font-bold text-stone-500">
          {idx + 1} / {sentences.length}
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-amber-900 mb-1 text-center">
        {t('sentence.title')}
      </h2>
      <p className="text-sm text-stone-500 mb-5 text-center">
        {t('sentence.subtitle')}
      </p>

      {/* English prompt */}
      <div className="bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-200 rounded-2xl p-5 mb-6 text-center">
        <p className="text-[10px] uppercase tracking-widest text-amber-700 font-bold mb-1">
          {t('sentence.englishPrompt')}
        </p>
        <p className="text-lg sm:text-xl text-stone-800 font-medium">
          {current.english}
        </p>
      </div>

      {/* Slot row — grid that auto-wraps for long sentences */}
      <div className="mb-4">
        <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2 text-center">
          {t('sentence.yourAnswer')}
        </p>
        <div className="flex flex-wrap items-end justify-center gap-2 min-h-[5rem]">
          {Array.from({ length: totalSlots }, (_, i) => {
            const tile = placed[i];
            return (
              <button
                key={`slot-${i}`}
                type="button"
                onClick={() => tile && unplaceTile(tile)}
                disabled={!tile || state !== 'idle'}
                className={slotBoxClasses(i)}
              >
                {tile && (
                  <>
                    {showPinyin && (
                      <span className="text-[10px] text-amber-600 leading-none mb-0.5">
                        {tile.token.pinyin}
                      </span>
                    )}
                    <span className="text-lg sm:text-xl font-bold text-stone-800 leading-none">
                      {tile.token.hanzi}
                    </span>
                  </>
                )}
              </button>
            );
          })}
          {/* terminator pinned at the end */}
          <span className="text-2xl sm:text-3xl text-stone-700 self-center pl-1">
            {current.terminator ?? '。'}
          </span>
        </div>
      </div>

      {/* Token bank */}
      <div className="mb-6">
        <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2 text-center">
          {t('sentence.tapToPlace')}
        </p>
        <div className="flex flex-wrap items-end justify-center gap-2 min-h-[5rem] bg-stone-50 border border-stone-200 rounded-xl p-3">
          {bank.length === 0 ? (
            <p className="text-stone-400 text-sm py-4">{t('sentence.bankEmpty')}</p>
          ) : (
            bank.map((tile) => (
              <button
                key={tile.uid}
                type="button"
                onClick={() => placeTile(tile)}
                disabled={state !== 'idle'}
                className="min-w-[3.5rem] h-16 sm:h-20 px-2 rounded-xl bg-white border-2 border-amber-300 shadow-sm flex flex-col items-center justify-center hover:border-amber-500 hover:shadow-md active:scale-95 transition-all"
              >
                {showPinyin && (
                  <span className="text-[10px] text-amber-600 leading-none mb-0.5">
                    {tile.token.pinyin}
                  </span>
                )}
                <span className="text-lg sm:text-xl font-bold text-stone-800 leading-none">
                  {tile.token.hanzi}
                </span>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={resetRow}
          disabled={placed.length === 0 || state !== 'idle'}
          className="px-4 py-2 text-sm bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('sentence.reset')}
        </button>
        <button
          type="button"
          onClick={checkAnswer}
          disabled={!allPlaced || state !== 'idle'}
          className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('sentence.check')}
        </button>
        <button
          type="button"
          onClick={skipSentence}
          disabled={state !== 'idle'}
          className="px-4 py-2 text-sm text-stone-500 hover:text-stone-700 underline disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('sentence.skip')}
        </button>
      </div>

      {/* Feedback banner */}
      {state === 'correct' && (
        <p className="text-center mt-4 text-green-600 font-bold text-lg animate-bounce">
          ✓ {t('sentence.correct')}
        </p>
      )}
      {state === 'wrong' && (
        <p className="text-center mt-4 text-red-500 font-bold">
          ✗ {t('sentence.wrong')}
        </p>
      )}
    </div>
  );
}
