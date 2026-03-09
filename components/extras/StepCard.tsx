import React from "react";
import { motion } from "framer-motion";
import { STEPS } from "@/constants";
import { fadeUp } from "@/lib/motion";

export function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof STEPS)[number];
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp(index * 0.1)}
      className={`py-8 pr-8 ${!isLast ? "border-r border-line" : ""}`}
    >
      {/* Step number */}
      <span className="font-mono text-[13px] tracking-widest text-brand mb-4 block">
        {step.num}
      </span>

      {/* Accent bar */}
      <div className="w-10 h-0.5 bg-linear-to-r from-brand to-transparent mb-5" />

      {/* Title */}
      <h3 className="font-display text-[22px] font-bold tracking-tight text-ink mb-3">
        {step.title}
      </h3>

      {/* Desc */}
      <p className="font-sans text-sm text-ink-muted leading-relaxed">
        {step.desc}
      </p>
    </motion.div>
  );
}