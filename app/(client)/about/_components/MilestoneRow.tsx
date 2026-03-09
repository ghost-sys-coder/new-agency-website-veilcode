import React from "react";
import { motion } from "framer-motion";
import { MILESTONES } from "@/constants";
import { fadeUp } from "@/lib/motion";


export function MilestoneRow({
  milestone,
  index,
  isLast,
}: {
  milestone: (typeof MILESTONES)[number];
  index: number;
  isLast: boolean;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeUp(index * 0.07)}
      className="relative grid grid-cols-[1fr_48px_1fr] md:grid-cols-[1fr_64px_1fr] items-start gap-0"
    >
      {/* Left content — only on even rows (desktop), always on mobile */}
      <div className={`pb-10 pr-6 md:pr-10 ${isEven ? "block" : "invisible hidden md:block"}`}>
        {isEven && (
          <div className="text-right">
            <span className="font-mono text-[11px] tracking-widest uppercase text-brand mb-2 block">
              {milestone.year}
            </span>
            <h3 className="font-display text-xl font-bold tracking-tight text-ink mb-2">
              {milestone.title}
            </h3>
            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              {milestone.desc}
            </p>
          </div>
        )}
      </div>

      {/* Centre spine */}
      <div className="flex flex-col items-center">
        {/* Node */}
        <div className="relative z-10 size-3 rounded-full bg-brand mt-1.5
          shadow-[0_0_12px_var(--color-brand)] shrink-0" />
        {/* Line segment */}
        {!isLast && (
          <div className="w-px flex-1 min-h-12
            bg-linear-to-b from-brand/40 to-line" />
        )}
      </div>

      {/* Right content — only on odd rows (desktop), always on mobile */}
      <div className={`pb-10 pl-6 md:pl-10 ${!isEven ? "block" : "invisible hidden md:block"}`}>
        {!isEven && (
          <>
            <span className="font-mono text-[11px] tracking-widest uppercase text-brand mb-2 block">
              {milestone.year}
            </span>
            <h3 className="font-display text-xl font-bold tracking-tight text-ink mb-2">
              {milestone.title}
            </h3>
            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              {milestone.desc}
            </p>
          </>
        )}
      </div>

      {/* Mobile: full-width content below spine (always left-aligned) */}
      <div className="col-span-3 md:hidden pl-12 -mt-8 pb-8">
        <span className="font-mono text-[11px] tracking-widest uppercase text-brand mb-1.5 block">
          {milestone.year}
        </span>
        <h3 className="font-display text-xl font-bold tracking-tight text-ink mb-2">
          {milestone.title}
        </h3>
        <p className="font-sans text-sm text-ink-muted leading-relaxed">
          {milestone.desc}
        </p>
      </div>
    </motion.div>
  );
}