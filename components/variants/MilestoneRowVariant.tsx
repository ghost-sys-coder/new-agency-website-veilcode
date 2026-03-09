"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { MILESTONES } from "@/constants";

type Milestone = typeof MILESTONES[number];

interface MilestoneRowProps {
  milestone: Milestone;
  index: number;
  total?: number;
  isLast: boolean;
}

export function MilestoneRow({ milestone, index, isLast }: MilestoneRowProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeUp(0.1 * index)}
      className={`relative flex flex-col md:flex-row md:items-start gap-6 md:gap-12 
        ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Year circle + connector */}
      <div className="flex md:flex-col items-center gap-4 md:gap-3 shrink-0 md:w-28 lg:w-32 md:pt-1.5">
        <div className="relative z-10">
          <div className="size-14 md:size-16 rounded-full bg-surface border-2 border-brand flex items-center justify-center shadow-[0_0_20px_var(--color-brand-glow)/0.3]">
            <span className="font-display font-bold text-xl md:text-2xl text-brand">
              {milestone.year}
            </span>
          </div>
        </div>

        {/* Vertical connector line (mobile only) */}
        {!isLast && (
          <div className="md:hidden w-px h-16 bg-linear-to-b from-brand/40 to-transparent flex-1" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 bg-surface-hi/40 backdrop-blur-sm border border-line rounded-xl p-6 md:p-8 shadow-sm">
        <h3 className="font-display text-xl md:text-2xl font-semibold text-ink mb-3">
          {milestone.title}
        </h3>
        <p className="text-ink-muted leading-relaxed text-[15px] md:text-gray-400">
          {milestone.desc}
        </p>
      </div>

      {/* Desktop connector line placeholder */}
      {!isLast && <div className="hidden md:block w-px flex-1" />}
    </motion.div>
  );
}