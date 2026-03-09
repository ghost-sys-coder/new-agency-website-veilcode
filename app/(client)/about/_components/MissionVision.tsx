"use client";

import { motion } from "framer-motion";
import { SectionTag, AccentLine } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { PILLARS, COMMITMENTS } from "@/constants";



export function MissionVision() {
  const [ref, inView] = useReveal();
  const [commitRef, commitInView] = useReveal();

  return (
    <section className="py-32 px-6 md:px-10">
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
            <SectionTag>Mission &amp; Vision</SectionTag>
            <AccentLine />
          </motion.div>
          <motion.h2
            variants={fadeUp(0.1)}
            className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold
              tracking-tight text-ink leading-[1.1] max-w-140"
          >
            Why We{" "}
            <span className="text-brand drop-shadow-[0_0_24px_var(--color-brand-glow)]">
              Exist
            </span>{" "}
            &amp; Where We&apos;re{" "}
            <span className="text-ink">Going
            </span>
          </motion.h2>
        </motion.div>

        {/* Mission / Vision cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
        >
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.label}
              variants={fadeUp(i * 0.12)}
              className={`relative rounded-xl p-10 border overflow-hidden
                bg-surface transition-all duration-300
                hover:bg-surface-hi ${p.border} ${p.glow}`}
            >
              {/* Corner glow */}
              <div
                aria-hidden
                className={`absolute top-0 right-0 w-40 h-40 rounded-bl-full
                  pointer-events-none opacity-60 ${p.bg}`}
              />

              {/* Icon */}
              <span className={`text-3xl leading-none mb-6 block ${p.accent}`} aria-hidden>
                {p.icon}
              </span>

              {/* Label */}
              <span className={`font-mono text-[11px] tracking-[0.12em] uppercase mb-3 block ${p.accent}`}>
                {p.label}
              </span>

              {/* Headline */}
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink
                leading-[1.2] mb-4 max-w-90">
                {p.headline}
              </h3>

              {/* Body */}
              <p className="font-sans text-sm text-ink-muted leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Commitments */}
        <motion.div
          ref={commitRef}
          variants={stagger}
          initial="hidden"
          animate={commitInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp()}>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-faint mb-8">
              What we commit to every client
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-line rounded-xl overflow-hidden">
            {COMMITMENTS.map((c, i) => (
              <motion.div
                key={c.num}
                variants={fadeUp(i * 0.1)}
                className={`p-8 bg-surface hover:bg-surface-hi transition-colors duration-200
                  ${i < COMMITMENTS.length - 1 ? "border-b sm:border-b-0 sm:border-r border-line" : ""}`}
              >
                <span className="font-mono text-[13px] text-brand tracking-wide mb-4 block">
                  {c.num}
                </span>
                <div className="w-8 h-0.5 bg-linear-to-r from-brand to-transparent mb-5" />
                <h4 className="font-display text-[18px] font-bold tracking-tight text-ink mb-2">
                  {c.title}
                </h4>
                <p className="font-sans text-sm text-ink-muted leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}