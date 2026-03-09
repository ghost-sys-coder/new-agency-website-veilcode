"use client";

import { motion } from "framer-motion";
import { SectionTag, AccentLine } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";

/* ─── DATA ────────────────────────────────────────────────────────────────── */

const IMPACT_STATS = [
  {
    metric: "+312%",
    label:  "Highest conversion lift",
    sub:    "e-commerce rebuild",
    accent: "text-svc-web",
    bg:     "bg-svc-web-dim",
    border: "border-svc-web-border",
  },
  {
    metric: "50M+",
    label:  "Events processed daily",
    sub:    "data pipeline project",
    accent: "text-svc-data",
    bg:     "bg-svc-data-dim",
    border: "border-svc-data-border",
  },
  {
    metric: "80%",
    label:  "Workflows automated",
    sub:    "AI agent deployment",
    accent: "text-svc-ai",
    bg:     "bg-svc-ai-dim",
    border: "border-svc-ai-border",
  },
  {
    metric: "4.7★",
    label:  "App Store rating",
    sub:    "mobile app launch",
    accent: "text-svc-mobile",
    bg:     "bg-svc-mobile-dim",
    border: "border-svc-mobile-border",
  },
  {
    metric: "6.8×",
    label:  "ROAS on paid social",
    sub:    "brand launch campaign",
    accent: "text-svc-social",
    bg:     "bg-svc-social-dim",
    border: "border-svc-social-border",
  },
] as const;

/* ─── STAT CARD ───────────────────────────────────────────────────────────── */

function ImpactStat({
  stat,
  index,
}: {
  stat: (typeof IMPACT_STATS)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp(index * 0.08)}
      className={`flex flex-col rounded-xl border p-6
        transition-all duration-200 hover:bg-surface-hi
        bg-surface ${stat.border}`}
    >
      <div
        className={`font-display font-extrabold text-[42px] tracking-tight
          leading-none mb-2 drop-shadow-[0_0_20px_currentColor] ${stat.accent}`}
      >
        {stat.metric}
      </div>
      <div className="font-sans text-sm font-medium text-ink mb-0.5">
        {stat.label}
      </div>
      <div className="font-sans text-xs text-ink-faint capitalize">
        {stat.sub}
      </div>
    </motion.div>
  );
}

/* ─── IMPACT SECTION ──────────────────────────────────────────────────────── */

export function WorkImpact() {
  const [ref, inView] = useReveal();

  return (
    <section className="py-28 px-6 md:px-10 bg-surface border-y border-line">
      <div className="max-w-300 mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={fadeUp()}>
            <SectionTag>Impact by Numbers</SectionTag>
            <AccentLine />
          </motion.div>

          <motion.div
            variants={fadeUp(0.1)}
            className="flex flex-col md:flex-row md:justify-between
              md:items-end gap-6 mb-14"
          >
            <h2
              className="font-display text-[clamp(26px,3.5vw,44px)] font-extrabold
                tracking-tight text-ink leading-[1.1] max-w-120"
            >
              Results Across Every{" "}
              <span className="text-brand drop-shadow-[0_0_24px_var(--color-brand-glow)]">
                Service Discipline
              </span>
            </h2>
            <p className="font-sans text-[15px] text-ink-muted
              max-w-90 leading-relaxed">
              These aren&apos;t projections — they&apos;re numbers taken directly from
              live projects we&apos;ve shipped and measured.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {IMPACT_STATS.map((s, i) => (
              <ImpactStat key={s.metric} stat={s} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}