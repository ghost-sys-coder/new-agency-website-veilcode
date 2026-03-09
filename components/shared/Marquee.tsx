const ITEMS = [
  "Web Solutions",
  "·",
  "Mobile Applications",
  "·",
  "Data Analytics",
  "·",
  "Social Media Marketing",
  "·",
  "AI Automation",
  "·",
  "UI/UX Design",
  "·",
  "Cloud Infrastructure",
  "·",
] as const;

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden
      className="border-y border-line bg-surface overflow-hidden py-4"
    >
      <div className="flex w-max gap-12 animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-mono text-[11px] tracking-[0.12em] uppercase whitespace-nowrap
              ${item === "·" ? "text-brand" : "text-ink-muted"}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}