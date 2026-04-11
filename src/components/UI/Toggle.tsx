interface Props {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}

export function Toggle({ label, checked, onChange }: Props) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none text-sm">
      <span className="text-stone-700">{label}</span>
      <span
        className={`relative inline-block h-5 w-9 rounded-full transition-colors ${
          checked ? 'bg-amber-600' : 'bg-stone-300'
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
            checked ? 'left-[1.125rem]' : 'left-0.5'
          }`}
        />
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );
}
