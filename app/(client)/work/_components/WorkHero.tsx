"use client";

import { motion } from "framer-motion";
import {
  GridBg,
  GlowOrb,
  SectionTag,
  AccentLine,
} from "@/components/extras/Primitives";
import { fadeUp, stagger } from "@/lib/motion";
import { PROJECTS } from "@/constants/projects";


const STATS = [
  { value: `${PROJECTS.length}+`, label: "Case Studies"        },
  { value: "5",                   label: "Service Disciplines"  },
  { value: "6",                   label: "Countries Reached"    },
  { value: "2022–24",             label: "Active Portfolio"     },
] as const;

export function WorkHero() {
  return (
    <section className="relative min-h-[68vh] flex items-center overflow-hidden">
      <GridBg />
      <GlowOrb color="rgba(0,229,255,0.10)"   size={520} top="8%"   left="55%" />
      <GlowOrb color="rgba(192,132,252,0.07)" size={380} bottom="0%" left="2%" delay="2s" />

      {/* Scan line */}
      <div
        aria-hidden
        className="absolute inset-x-0 h-px pointer-events-none
          bg-linear-to-r from-transparent via-brand/20 to-transparent
          animate-scan"
      />

      <div className="relative z-10 w-full max-w-300 mx-auto px-6 md:px-10 pt-36 pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-200"
        >
          {/* Tag */}
          <motion.div variants={fadeUp(0)}>
            <SectionTag>Our Work</SectionTag>
            <AccentLine width={56} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp(0.08)}
            className="font-display font-extrabold leading-[1.02] tracking-tight
              text-[clamp(40px,6.5vw,80px)] text-ink mb-6"
          >
            Work That Moves{" "}
            <span className="text-brand drop-shadow-[0_0_28px_var(--color-brand-glow)]">
              the Needle.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp(0.16)}
            className="font-sans font-light text-lg text-ink-muted
              leading-relaxed max-w-145 mb-12"
          >
            Every project in this portfolio was built to solve a real problem and
            deliver a measurable result. Not just something that looks good in a
            screenshot — something that changed a business.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp(0.24)}
            className="flex flex-wrap gap-10"
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span
                  className="font-display font-extrabold text-3xl tracking-tight
                    text-brand drop-shadow-[0_0_14px_var(--color-brand-glow)]"
                >
                  {value}
                </span>
                <span className="font-sans text-xs text-ink-muted tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-28
          bg-linear-to-t from-base to-transparent pointer-events-none"
      />
    </section>
  );
}