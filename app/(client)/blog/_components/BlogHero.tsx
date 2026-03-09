"use client";

import { motion } from "framer-motion";
import {
  GridBg,
  GlowOrb,
  SectionTag,
  AccentLine,
} from "@/components/extras/Primitives";
import { fadeUp, stagger } from "@/lib/motion";
import { POSTS } from "@/constants/blog";

const STATS = [
  { value: `${POSTS.length}`,          label: "Articles published" },
  { value: "3",                         label: "Disciplines covered" },
  { value: `${POSTS.length * 9} min+`,  label: "Of reading material" },
] as const;

export function BlogHero() {
  return (
    <section className="relative min-h-[62vh] flex items-center overflow-hidden">
      <GridBg />
      <GlowOrb color="rgba(0,229,255,0.10)"   size={500} top="5%"   left="56%" />
      <GlowOrb color="rgba(129,140,248,0.07)" size={360} bottom="0%" left="2%" delay="2s" />

      {/* Scan line */}
      <div aria-hidden
        className="absolute inset-x-0 h-px pointer-events-none
          bg-linear-to-r from-transparent via-brand/20 to-transparent
          animate-scan" />

      <div className="relative z-10 w-full max-w-300 mx-auto px-6 md:px-10 pt-36 pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-190"
        >
          <motion.div variants={fadeUp(0)}>
            <SectionTag>The VeilCode Blog</SectionTag>
            <AccentLine width={56} />
          </motion.div>

          <motion.h1
            variants={fadeUp(0.08)}
            className="font-display font-extrabold leading-[1.02] tracking-tight
              text-[clamp(40px,6.5vw,80px)] text-ink mb-6"
          >
            Ideas Worth{" "}
            <span className="text-brand drop-shadow-[0_0_28px_var(--color-brand-glow)]">
              Building On.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.16)}
            className="font-sans font-light text-lg text-ink-muted
              leading-relaxed max-w-140 mb-12"
          >
            Engineering deep-dives, design thinking, and practical AI — written
            by the team that builds VeilCode&apos;s products. No content marketing.
            Just things we genuinely wanted to write.
          </motion.p>

          {/* Stats */}
          <motion.div variants={fadeUp(0.24)} className="flex flex-wrap gap-10">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="font-display font-extrabold text-3xl tracking-tight
                  text-brand drop-shadow-[0_0_14px_var(--color-brand-glow)]">
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

      <div aria-hidden
        className="absolute bottom-0 inset-x-0 h-28
          bg-linear-to-t from-base to-transparent pointer-events-none" />
    </section>
  );
}