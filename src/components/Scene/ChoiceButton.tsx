import type { Choice } from '../../types/dialogue';
import { ChineseLine } from './ChineseLine';

interface Props {
  choice: Choice;
  onSelect: (c: Choice) => void;
}

export function ChoiceButton({ choice, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(choice)}
      className="w-full text-left bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 hover:border-amber-400 rounded-xl p-3 transition-colors group"
      title={choice.hint}
    >
      <ChineseLine line={choice.line} variant="choice" />
      {choice.hint && (
        <p className="mt-1 text-[11px] text-stone-500 italic group-hover:text-stone-700">
          {choice.hint}
        </p>
      )}
    </button>
  );
}
