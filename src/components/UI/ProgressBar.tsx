interface Props {
  value: number;
  max: number;
}

export function ProgressBar({ value, max }: Props) {
  const pct = max === 0 ? 0 : Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="w-full h-2 bg-amber-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-amber-500 transition-all duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
