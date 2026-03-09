"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, useReveal } from "@/lib/motion";

/* ─── DATA ────────────────────────────────────────────────────────────────── */

const TRUST_ITEMS = [
  { value: "120+",  label: "Projects delivered" },
  { value: "98%",   label: "Client satisfaction" },
  { value: "6",     label: "Countries served" },
  { value: "< 24h", label: "Avg. response time" },
  { value: "5 yrs", label: "In operation" },
] as const;

export function TrustStrip() {
  const [ref, inView] = useReveal();

  return (
    <div
      ref={ref}
      className="border-y border-line bg-surface py-8 px-6 md:px-10 overflow-hidden"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-300 mx-auto
          flex flex-wrap justify-center md:justify-between items-center gap-8"
      >
        {TRUST_ITEMS.map(({ value, label }, i) => (
          <motion.div
            key={label}
            variants={fadeUp(i * 0.06)}
            className="flex flex-col items-center gap-1 text-center"
          >
            <span className="font-display font-extrabold text-2xl tracking-tight
              text-brand drop-shadow-[0_0_14px_var(--color-brand-glow)]">
              {value}
            </span>
            <span className="font-sans text-xs text-ink-muted tracking-wide capitalize">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}