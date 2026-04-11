import type { VocabItem } from '../../types/chapter';
import { ChineseLine } from '../Common/ChineseLine';

interface Props {
  vocab: VocabItem;
  onClick: (id: string) => void;
  /** which feedback state to render: idle / correct / wrong / shouldHaveBeen */
  state: 'idle' | 'correct' | 'wrong' | 'reveal' | 'dim';
  disabled?: boolean;
}

const stateClasses: Record<Props['state'], string> = {
  idle: 'bg-white border-amber-200 hover:bg-amber-50 hover:border-amber-400 hover:scale-[1.02]',
  correct: 'bg-green-100 border-green-500 pulse-correct',
  wrong: 'bg-red-100 border-red-500 shake-wrong',
  reveal: 'bg-green-50 border-green-400',
  dim: 'bg-stone-50 border-stone-200 opacity-60',
};

export function AnswerCard({ vocab, onClick, state, disabled }: Props) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onClick(vocab.id)}
      className={`rounded-2xl border-2 p-4 sm:p-5 transition-all min-h-[80px] flex items-center justify-center select-none ${stateClasses[state]} disabled:cursor-not-allowed`}
    >
      <ChineseLine syllables={vocab.syllables} size="lg" centered />
    </button>
  );
}
