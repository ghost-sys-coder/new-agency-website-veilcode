"use client";

import { motion } from "framer-motion";
import { SectionTag, AccentLine } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { ImpactStatCard } from "./ImpactStatCard";

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
              <ImpactStatCard key={s.metric} stat={s} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}