"use client";

import { motion } from "framer-motion";
import { SectionTag, AccentLine } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { OVERVIEW_CARDS } from "@/constants";
import { OverviewCard } from "./OverviewCard";


export function ServicesOverview() {
  const [ref, inView] = useReveal();

  return (
    <section className="py-24 px-6 md:px-10">
      <div className="max-w-300 mx-auto">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-14"
        >
          <motion.div variants={fadeUp()}>
            <SectionTag>Service Overview</SectionTag>
            <AccentLine />
          </motion.div>
          <motion.h2
            variants={fadeUp(0.1)}
            className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold
              tracking-tight text-ink leading-[1.1] max-w-140"
          >
            Five Practices.{" "}
            <span className="text-brand drop-shadow-[0_0_24px_var(--color-brand-glow)]">
              One Unified Partner.
            </span>
          </motion.h2>
        </motion.div>

        {/* Grid — 3 top, 2 bottom centred */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {OVERVIEW_CARDS.slice(0, 3).map((c, i) => (
              <OverviewCard key={c.id} card={c} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-205 mx-auto">
            {OVERVIEW_CARDS.slice(3).map((c, i) => (
              <OverviewCard key={c.id} card={c} index={i + 3} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}