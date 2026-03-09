import { motion } from "framer-motion";
import { PHASES } from "@/constants";
import { fadeUp } from "@/lib/motion";

export function PhaseCard({
  phase,
  index,
}: {
  phase: (typeof PHASES)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp(index * 0.07)}
      className="group relative p-7 rounded-xl bg-base border border-line
        hover:bg-surface-hi hover:border-line-hi
        transition-all duration-200"
    >
      {/* Number + duration */}
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-[13px] tracking-widest text-brand">
          {phase.num}
        </span>
        <span className="font-mono text-[10px] tracking-widest uppercase
          text-ink-faint bg-surface border border-line
          px-2.5 py-1 rounded">
          {phase.dur}
        </span>
      </div>

      {/* Accent bar */}
      <div className="w-8 h-0.5 bg-linear-to-r from-brand to-transparent mb-4
        group-hover:w-12 transition-all duration-300" />

      {/* Icon + title */}
      <div className="flex items-center gap-2.5 mb-3">
        <span className="text-brand text-lg leading-none" aria-hidden>{phase.icon}</span>
        <h3 className="font-display text-[18px] font-bold tracking-tight text-ink">
          {phase.title}
        </h3>
      </div>

      <p className="font-sans text-sm text-ink-muted leading-relaxed">
        {phase.desc}
      </p>
    </motion.div>
  );
}