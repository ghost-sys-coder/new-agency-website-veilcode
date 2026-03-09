import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";


export function TechBadge({ label, delay }: { label: string; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      variants={fadeUp(delay)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`font-mono text-[11px] tracking-widest uppercase
        px-4.5 py-2.5 rounded-md border cursor-default
        transition-all duration-200
        ${
          hovered
            ? "bg-brand-dim border-brand-border text-brand shadow-[0_0_14px_var(--color-brand-dim)]"
            : "bg-surface border-line text-ink-muted"
        }`}
    >
      {label}
    </motion.span>
  );
}
