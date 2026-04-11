import type { HskWord } from '../../types/vocab';
import { useGameStore } from '../../store/gameStore';

interface Props {
  word: HskWord;
}

export function VocabEntry({ word }: Props) {
  const showPinyin = useGameStore((s) => s.progress.showPinyin);
  const showEnglish = useGameStore((s) => s.progress.showEnglish);
  return (
    <li className="py-2 px-2 hover:bg-amber-50 rounded transition-colors">
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-semibold text-stone-900">
          {word.hanzi}
        </span>
        {showPinyin && (
          <span className="text-xs text-amber-700 italic">{word.pinyin}</span>
        )}
      </div>
      {showEnglish && (
        <p className="text-xs text-stone-600">{word.english}</p>
      )}
    </li>
  );
}
