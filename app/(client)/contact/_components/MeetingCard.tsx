import { motion } from "framer-motion";
import { MEETING_TYPES } from "@/constants";
import { fadeUp } from "@/lib/motion";


export function MeetingCard({
  meeting,
  index,
  selected,
  onSelect,
}: {
  meeting: (typeof MEETING_TYPES)[number];
  index: number;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      variants={fadeUp(index * 0.1)}
      onClick={onSelect}
      type="button"
      className={`w-full text-left rounded-xl p-6 border cursor-pointer
        outline-none transition-all duration-200
        focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
        focus-visible:ring-offset-base
        ${selected
          ? `${meeting.bg} ${meeting.border} ${meeting.hoverShadow}`
          : `bg-surface border-line hover:bg-surface-hi ${meeting.hoverBorder} ${meeting.hoverShadow}`
        }`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <span className={`text-xl leading-none ${meeting.accent}`} aria-hidden>
            {meeting.icon}
          </span>
          <h4 className="font-display text-[16px] font-bold tracking-tight text-ink">
            {meeting.title}
          </h4>
        </div>
        {/* Duration badge */}
        <span className={`shrink-0 font-mono text-[10px] tracking-widest uppercase
          px-2.5 py-1 rounded border ${meeting.bg} ${meeting.border} ${meeting.accent}`}>
          {meeting.dur}
        </span>
      </div>

      <p className="font-sans text-sm text-ink-muted leading-relaxed">
        {meeting.desc}
      </p>

      {/* Selected indicator */}
      {selected && (
        <div className={`mt-4 flex items-center gap-2 font-sans text-[13px]
          font-medium ${meeting.accent}`}>
          <span className={`size-1.5 rounded-full bg-current`} aria-hidden />
          Selected
        </div>
      )}
    </motion.button>
  );
}
