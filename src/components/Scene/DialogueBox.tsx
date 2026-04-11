import type { DialogueNode } from '../../types/dialogue';
import type { HskWord } from '../../types/vocab';
import { ChineseLine } from './ChineseLine';

interface Props {
  node: DialogueNode;
  speakerLabel: string;
  onWordClick: (w: HskWord) => void;
}

export function DialogueBox({ node, speakerLabel, onWordClick }: Props) {
  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-lg border-2 border-amber-200 p-5 fade-in">
      <p className="text-xs uppercase tracking-wider text-amber-700 font-bold mb-2">
        {speakerLabel}
      </p>
      <div className="space-y-3">
        {node.lines.map((line, i) => (
          <ChineseLine key={i} line={line} onWordClick={onWordClick} />
        ))}
      </div>
    </div>
  );
}
