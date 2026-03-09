"use client";

import { motion } from "framer-motion";
import { SectionTag, AccentLine } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { ValueCard } from "./ValueCard";
import { VALUES } from "@/constants";

export function CoreValues() {
  const [ref, inView] = useReveal();

  return (
    <section className="py-32 px-6 md:px-10 bg-surface border-y border-line">
      <div className="max-w-300 mx-auto">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={fadeUp()}>
            <SectionTag>Core Values</SectionTag>
            <AccentLine />
          </motion.div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <motion.h2
              variants={fadeUp(0.1)}
              className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold
                tracking-tight text-ink leading-[1.1] max-w-120"
            >
              The Principles We{" "}
              <span className="text-brand drop-shadow-[0_0_24px_var(--color-brand-glow)]">
                Refuse to Compromise
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp(0.18)}
              className="font-sans text-[15px] text-ink-muted max-w-90 leading-relaxed"
            >
              These aren&apos;t aspirational statements. They&apos;re operational
              commitments that shape how we hire, how we work, and how we deliver.
            </motion.p>
          </div>
        </motion.div>

        {/* Cards grid — 3 × 2 */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {VALUES.map((v, i) => (
            <ValueCard key={v.number} value={v} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}