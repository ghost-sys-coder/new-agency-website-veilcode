"use client";

import { motion } from "framer-motion";
import { SectionTag, AccentLine } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { PHASES } from "@/constants";
import { PhaseCard } from "./PhaseCard";



export function DeliveryProcess() {
  const [ref, inView] = useReveal();

  return (
    <section className="py-32 px-6 md:px-10 bg-surface border-y border-line">
      <div className="max-w-300 mx-auto">

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={fadeUp()}>
            <SectionTag>How We Deliver</SectionTag>
            <AccentLine />
          </motion.div>

          <motion.div
            variants={fadeUp(0.1)}
            className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16"
          >
            <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold
              tracking-tight text-ink leading-[1.1] max-w-120">
              A Delivery Model Built on{" "}
              <span className="text-brand drop-shadow-[0_0_24px_var(--color-brand-glow)]">
                Zero Surprises
              </span>
            </h2>
            <p className="font-sans text-[15px] text-ink-muted max-w-90 leading-relaxed">
              Every engagement follows the same structured process — regardless
              of size or service. Predictable, transparent, and repeatable.
            </p>
          </motion.div>

          {/* Phase grid */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {PHASES.map((p, i) => (
              <PhaseCard key={p.num} phase={p} index={i} />
            ))}
          </motion.div>

          {/* Bottom note */}
          <motion.p
            variants={fadeUp(0.3)}
            className="mt-10 text-center font-sans text-sm text-ink-faint max-w-140 mx-auto"
          >
            Timeline varies by project scope. All projects include a fixed-price
            proposal — no hourly billing, no surprise invoices.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}