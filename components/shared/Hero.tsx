"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PrimaryButton, GhostButton, GridBg, GlowOrb, AccentLine } from "@/components/extras/Primitives";
import { fadeUp, stagger } from "@/lib/motion";
import { StatItem } from "../extras/StatItem";
import { STATS, TYPEWRITER_WORDS } from "@/constants";


function useTypewriter(words: readonly string[]) {
  const [text,     setText]     = useState("");
  const [wordIdx,  setWordIdx]  = useState(0);
  const [charIdx,  setCharIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const id = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1800);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setText(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setWordIdx((i) => (i + 1) % words.length);
            setCharIdx(0);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? 38 : 78
    );
    return () => clearTimeout(id);
  }, [charIdx, deleting, wordIdx, words]);

  return text;
}




/* ─── HERO ────────────────────────────────────────────────────────────────── */

export function Hero() {
  const typedText = useTypewriter(TYPEWRITER_WORDS);

  const { scrollY } = useScroll();
  const y       = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 380], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Grid */}
      <GridBg />

      {/* Orbs */}
      <GlowOrb color="rgba(0,229,255,0.12)" size={600} top="12%" left="55%" />
      <GlowOrb color="rgba(16,217,160,0.08)" size={400} bottom="8%" left="4%" delay="2.5s" />

      {/* Horizontal scan line */}
      <div
        aria-hidden
        className="absolute inset-x-0 h-px pointer-events-none
          bg-linear-to-r from-transparent via-brand/20 to-transparent
          animate-scan"
      />

      {/* Parallax wrapper */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-300 mx-auto px-6 md:px-10 pt-36 pb-24"
      >
        {/* Available badge */}
        <motion.div variants={fadeUp(0)} initial="hidden" animate="visible">
          <div className="inline-flex items-center gap-2.5
            bg-brand-dim border border-brand-border
            rounded-full px-4 py-1.5 mb-10">
            <span className="size-1.5 rounded-full bg-brand
              shadow-[0_0_8px_var(--color-brand)]
              animate-[pulse-glow_2s_ease-in-out_infinite]" />
            <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-brand">
              Available for new projects · 2025
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
          className="font-display font-extrabold leading-none tracking-tight
            text-[clamp(42px,7vw,86px)] text-ink mb-2 max-w-225"
        >
          We Build
        </motion.h1>

        {/* Typewriter line */}
        <motion.div
          variants={fadeUp(0.18)}
          initial="hidden"
          animate="visible"
          className="font-display font-extrabold leading-none tracking-tight
            text-[clamp(42px,7vw,86px)] mb-4"
        >
          <span className="text-brand drop-shadow-[0_0_28px_var(--color-brand-glow)]">
            {typedText}
          </span>
          <span className="text-brand animate-blink">|</span>
        </motion.div>

        <motion.h2
          variants={fadeUp(0.24)}
          initial="hidden"
          animate="visible"
          className="font-display font-extrabold leading-none tracking-tight
            text-[clamp(42px,7vw,86px)] text-ink-faint mb-10"
        >
          That Scale.
        </motion.h2>

        {/* Sub copy */}
        <motion.p
          variants={fadeUp(0.32)}
          initial="hidden"
          animate="visible"
          className="font-sans text-lg font-light text-ink-muted
            max-w-140 leading-relaxed mb-12"
        >
          VeilCode is a premium digital agency crafting high-performance web &amp;
          mobile solutions, intelligent automation, and data-driven strategies
          for ambitious brands.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp(0.40)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-4 mb-20"
        >
          <PrimaryButton className="text-[15px]! px-8! py-4!">
            Start a Project →
          </PrimaryButton>
          <GhostButton className="text-[15px]! px-8! py-4!">
            View Our Work
          </GhostButton>
        </motion.div>

        {/* Stats */}
        <AccentLine width={60} />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-10 md:gap-16"
        >
          {STATS.map((s) => (
            <StatItem key={s.val} {...s} />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-faint">
          Scroll
        </span>
        <div className="w-px h-10 bg-linear-to-b from-brand to-transparent" />
      </motion.div>
    </section>
  );
}