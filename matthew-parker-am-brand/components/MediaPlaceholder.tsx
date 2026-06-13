type MediaPlaceholderProps = {
  label: string;
  aspect?: "wide" | "portrait" | "square";
  className?: string;
};

const aspectMap = {
  wide: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
  square: "aspect-square"
};

export function MediaPlaceholder({
  label,
  aspect = "wide",
  className = ""
}: MediaPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-carbon shadow-panel ${aspectMap[aspect]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 panel-grid" />
      <div className="absolute inset-x-0 top-0 h-px metal-line" />
      <div className="relative flex h-full flex-col justify-end p-6">
        <div className="max-w-md border border-signal/20 bg-void/78 p-5 backdrop-blur">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-signal">
            Approved media required
          </p>
          <p className="mt-3 text-lg font-semibold text-frost">{label}</p>
        </div>
      </div>
    </div>
  );
}
