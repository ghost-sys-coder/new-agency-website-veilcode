import React, { useState } from "react";
import { motion } from "framer-motion";
import { VALUES } from "@/constants";
import { fadeUp } from "@/lib/motion";


export function ValueCard({
  value,
  index,
}: {
  value: (typeof VALUES)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp(index * 0.07)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative rounded-xl p-8 bg-surface border border-line
        overflow-hidden cursor-default transition-all duration-300
        hover:bg-surface-hi ${value.hoverBorder} ${value.hoverGlow}`}
    >
      {/* Number watermark */}
      <span
        aria-hidden
        className={`absolute top-5 right-6 font-display font-extrabold text-[56px]
          leading-none tracking-tight select-none pointer-events-none
          transition-opacity duration-300 opacity-5 group-hover:opacity-10
          ${value.accent}`}
      >
        {value.number}
      </span>

      {/* Icon + tag */}
      <div className="flex items-center gap-3 mb-5">
        <span className={`text-2xl leading-none ${value.accent}`} aria-hidden>
          {value.icon}
        </span>
        <span
          className={`font-mono text-[10px] tracking-widest uppercase
            px-2.5 py-1 rounded border ${value.tagBg} ${value.tagBorder} ${value.accent}`}
        >
          {value.short}
        </span>
      </div>

      {/* Accent bar */}
      <div
        className={`w-8 h-0.5 mb-4 rounded-full transition-all duration-300
          ${hovered ? "w-12" : "w-8"}
          bg-linear-to-r from-current to-transparent ${value.accent}`}
      />

      {/* Title */}
      <h3 className="font-display text-xl font-bold tracking-tight text-ink mb-3">
        {value.title}
      </h3>

      {/* Desc */}
      <p className="font-sans text-sm text-ink-muted leading-relaxed">
        {value.desc}
      </p>
    </motion.div>
  );
}