"use client";

import { motion } from "framer-motion";
import {
  GridBg,
  GlowOrb,
  SectionTag,
  AccentLine,
} from "@/components/extras/Primitives";
import { fadeUp, stagger } from "@/lib/motion";

const SERVICE_PILLS = [
  { label: "Web Solutions",          accent: "text-svc-web    bg-svc-web-dim    border-svc-web-border"    },
  { label: "Mobile Applications",    accent: "text-svc-mobile bg-svc-mobile-dim border-svc-mobile-border" },
  { label: "Data Analytics",         accent: "text-svc-data   bg-svc-data-dim   border-svc-data-border"   },
  { label: "Social Media Marketing", accent: "text-svc-social bg-svc-social-dim border-svc-social-border" },
  { label: "AI Automation",          accent: "text-svc-ai     bg-svc-ai-dim     border-svc-ai-border"     },
] as const;

export function ServicesHero() {
  return (
    <section className="relative min-h-[72vh] flex items-center overflow-hidden">
      <GridBg />
      <GlowOrb color="rgba(0,229,255,0.10)" size={560} top="5%"  left="58%" />
      <GlowOrb color="rgba(192,132,252,0.07)" size={400} bottom="0%" left="0%" delay="2s" />

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
          className="max-w-205"
        >
          <motion.div variants={fadeUp(0)}>
            <SectionTag>Our Services</SectionTag>
            <AccentLine width={56} />
          </motion.div>

          <motion.h1
            variants={fadeUp(0.08)}
            className="font-display font-extrabold leading-[1.02] tracking-tight
              text-[clamp(40px,6.5vw,80px)] text-ink mb-6"
          >
            Every Tool You Need
            <br className="hidden sm:block" />
            to{" "}
            <span className="text-brand drop-shadow-[0_0_28px_var(--color-brand-glow)]">
              Win Digitally.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.16)}
            className="font-sans font-light text-lg text-ink-muted
              leading-relaxed max-w-145 mb-10"
          >
            From the first pixel to the last pipeline — VeilCode delivers five
            integrated service practices that cover the full spectrum of modern
            digital business. Built to work independently or as a unified stack.
          </motion.p>

          {/* Service pills */}
          <motion.div
            variants={fadeUp(0.24)}
            className="flex flex-wrap gap-2.5"
          >
            {SERVICE_PILLS.map(({ label, accent }) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`font-mono text-[11px] tracking-widest uppercase
                  px-3.5 py-1.5 rounded border no-underline
                  transition-all duration-200 hover:opacity-80
                  ${accent}`}
              >
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-32
          bg-linear-to-t from-base to-transparent pointer-events-none"
      />
    </section>
  );
}