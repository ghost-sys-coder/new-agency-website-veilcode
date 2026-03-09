"use client";

import { motion } from "framer-motion";
import { GridBg, GlowOrb, SectionTag, AccentLine, PrimaryButton } from "@/components/extras/Primitives";
import { fadeUp, stagger } from "@/lib/motion";

export function AboutHeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Backgrounds */}
      <GridBg />
      <GlowOrb color="rgba(0,229,255,0.10)" size={560} top="10%" left="55%" />
      <GlowOrb color="rgba(16,217,160,0.07)" size={360} bottom="5%" left="2%" delay="2s" />

      {/* Scan line */}
      <div
        aria-hidden
        className="absolute inset-x-0 h-px pointer-events-none
          bg-linear-to-r from-transparent via-brand/20 to-transparent
          animate-scan"
      />

      <div className="relative z-10 w-full max-w-300 mx-auto px-6 md:px-10 pt-36 pb-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-195"
        >
          {/* Tag */}
          <motion.div variants={fadeUp(0)}>
            <SectionTag>About VeilCode</SectionTag>
            <AccentLine width={56} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp(0.08)}
            className="font-display font-extrabold leading-[1.02] tracking-tight
              text-[clamp(40px,6.5vw,80px)] text-ink mb-6"
          >
            We Don&apos;t Just Build{" "}
            <br className="hidden sm:block" />
            <span className="text-brand drop-shadow-[0_0_28px_var(--color-brand-glow)]">
              Products.
            </span>{" "}
            We Build{" "}
            <span className="relative inline-block">
              <span className="text-ink">Futures.</span>
              {/* Underline accent */}
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-0.75 w-full
                  bg-linear-to-r from-brand via-brand/60 to-transparent
                  rounded-full"
              />
            </span>
          </motion.h1>

          {/* Sub copy */}
          <motion.p
            variants={fadeUp(0.16)}
            className="font-sans font-light text-lg text-ink-muted
              leading-relaxed max-w-150 mb-10"
          >
            VeilCode is a team of engineers, designers, and strategists who believe
            that exceptional digital craft is the highest leverage a business has.
            We partner with founders and teams who refuse to settle for ordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(0.24)}
            className="flex flex-wrap items-center gap-4"
          >
            <PrimaryButton className="text-[15px]! px-8! py-4!">
              Work With Us →
            </PrimaryButton>
            <a
              href="#story"
              className="font-sans text-sm text-ink-muted hover:text-ink
                transition-colors duration-200 flex items-center gap-2 group"
            >
              Our Story
              <span className="text-brand transition-transform duration-200 group-hover:translate-x-1">
                ↓
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-32
          bg-linear-to-t from-base to-transparent pointer-events-none"
      />
    </section>
  );
}