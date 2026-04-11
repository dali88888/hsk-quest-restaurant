import { useEffect } from 'react';
import type { HskWord } from '../../types/vocab';

interface Props {
  word: HskWord;
  onClose: () => void;
}

export function VocabPopover({ word, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl border-2 border-amber-300 p-6 max-w-sm mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-amber-700 font-bold">
            HSK {word.hskLevel} · {word.partOfSpeech}
          </p>
          <p className="text-5xl font-semibold text-stone-900 my-3">
            {word.hanzi}
          </p>
          <p className="text-lg italic text-amber-700">{word.pinyin}</p>
          <p className="text-base text-stone-600 mt-2">{word.english}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-medium transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
