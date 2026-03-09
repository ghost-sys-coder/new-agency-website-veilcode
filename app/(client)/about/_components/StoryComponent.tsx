"use client";

import { motion } from "framer-motion";
import { SectionTag, AccentLine } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { MILESTONES } from "@/constants";
import { MilestoneRow } from "./MilestoneRow";


export function Story() {
  const [ref, inView] = useReveal();

  return (
    <section id="story" className="py-32 px-6 md:px-10 bg-surface border-y border-line">
      <div className="max-w-300 mx-auto">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={fadeUp()}>
            <SectionTag>Our Story</SectionTag>
            <AccentLine />
          </motion.div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <motion.h2
              variants={fadeUp(0.1)}
              className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold
                tracking-tight text-ink leading-[1.1] max-w-125"
            >
              Five Years of{" "}
              <span className="text-brand drop-shadow-[0_0_24px_var(--color-brand-glow)]">
                Relentless
              </span>{" "}
              Craft
            </motion.h2>

            <motion.p
              variants={fadeUp(0.18)}
              className="font-sans text-[15px] text-ink-muted
                max-w-100 leading-relaxed"
            >
              From a small freelance studio in Kampala to a full-service digital
              agency trusted by brands across East Africa and beyond.
            </motion.p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-215 mx-auto"
        >
          {MILESTONES.map((m, i) => (
            <MilestoneRow
              key={m.year}
              milestone={m}
              index={i}
              isLast={i === MILESTONES.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}