"use client";

import { motion } from "framer-motion";
import {
  SectionTag,
  AccentLine,
} from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { TIERS } from "@/constants";
import { PricingCard } from "./PricingCard";


export function PricingTiers() {
  const [ref, inView] = useReveal();

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
            <SectionTag>Pricing</SectionTag>
            <AccentLine />
          </motion.div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <motion.h2
              variants={fadeUp(0.1)}
              className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold
                tracking-tight text-ink leading-[1.1] max-w-120"
            >
              Transparent Pricing.{" "}
              <span className="text-brand drop-shadow-[0_0_24px_var(--color-brand-glow)]">
                No Surprises.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp(0.18)}
              className="font-sans text-[15px] text-ink-muted max-w-90 leading-relaxed"
            >
              Fixed-price projects. No hourly billing. No scope creep surprises.
              You know what you&apos;re investing before we start.
            </motion.p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
        >
          {TIERS.map((t, i) => (
            <PricingCard key={t.name} tier={t} index={i} />
          ))}
        </motion.div>

        {/* Fine print */}
        <motion.p
          variants={fadeUp(0.3)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 text-center font-sans text-sm text-ink-faint"
        >
          All prices are indicative starting points. Final investment is scoped
          per project. VAT/taxes not included.{" "}
          <a href="#" className="text-brand hover:underline transition-colors duration-150">
            Book a free discovery call
          </a>{" "}
          for an exact quote.
        </motion.p>
      </div>
    </section>
  );
}