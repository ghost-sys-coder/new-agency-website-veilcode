"use client";

import { motion } from "framer-motion";
import {
  GridBg,
  GlowOrb,
  SectionTag,
  AccentLine,
} from "@/components/extras/Primitives";
import { fadeUp, stagger } from "@/lib/motion";

const QUICK_STATS = [
  { value: "< 24h",  label: "Response time"       },
  { value: "100%",   label: "Project ownership"    },
  { value: "Free",   label: "Discovery call"       },
] as const;

export function ContactHero() {
  return (
    <section className="relative min-h-[68vh] flex items-center overflow-hidden">
      <GridBg />
      <GlowOrb color="rgba(0,229,255,0.10)" size={540} top="8%"   left="54%" />
      <GlowOrb color="rgba(16,217,160,0.07)" size={360} bottom="0%" left="0%" delay="2s" />

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
          className="max-w-190"
        >
          {/* Tag */}
          <motion.div variants={fadeUp(0)}>
            <SectionTag>Get In Touch</SectionTag>
            <AccentLine width={56} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp(0.08)}
            className="font-display font-extrabold leading-[1.02] tracking-tight
              text-[clamp(40px,6.5vw,80px)] text-ink mb-6"
          >
            Let&apos;s Build Something{" "}
            <span className="text-brand drop-shadow-[0_0_28px_var(--color-brand-glow)]">
              Worth Talking About.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp(0.16)}
            className="font-sans font-light text-lg text-ink-muted
              leading-relaxed max-w-140 mb-12"
          >
            Whether you have a fully scoped brief or just an idea on a napkin —
            we&apos;re happy to have the conversation. Tell us about your project and
            we&apos;ll come back to you within one business day.
          </motion.p>

          {/* Quick stats row */}
          <motion.div
            variants={fadeUp(0.24)}
            className="flex flex-wrap gap-8"
          >
            {QUICK_STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="font-display font-extrabold text-3xl tracking-tight
                  text-brand drop-shadow-[0_0_16px_var(--color-brand-glow)]">
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