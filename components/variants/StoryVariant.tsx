"use client";

import { motion } from "framer-motion";
import { SectionTag, AccentLine } from "@/components/extras/Primitives";
import { fadeUp, staggerChildren, useReveal } from "@/lib/motion";
import { MILESTONES } from "@/constants";
import { MilestoneRow } from "./MilestoneRowVariant";

export function StoryVariant() {
  const [ref, inView] = useReveal("-100px"); // trigger a bit earlier

  return (
    <section
      id="story"
      className="relative py-28 md:py-40 px-5 sm:px-8 lg:px-12 bg-surface border-y border-line overflow-hidden"
    >
      {/* Optional subtle background glow — comment out if not wanted */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-40 top-20 w-150 h-150 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={staggerChildren}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 md:mb-24"
        >
          <motion.div variants={fadeUp()}>
            <SectionTag>Our Story</SectionTag>
            <AccentLine width={64} />
          </motion.div>

          <div className="mt-8 flex flex-col md:flex-row md:items-end gap-6 lg:gap-12">
            <motion.h2
              variants={fadeUp(0.08)}
              className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold tracking-tight leading-[1.05] text-ink max-w-3xl"
            >
              Five Years of{" "}
              <span className="text-brand drop-shadow-[0_0_20px_var(--color-brand-glow)]">
                Relentless
              </span>{" "}
              Craft
            </motion.h2>

            <motion.p
              variants={fadeUp(0.16)}
              className="font-sans text-base md:text-lg text-ink-muted leading-relaxed max-w-xl lg:max-w-md"
            >
              From a two-person freelance studio in Kampala to a premium digital partner trusted by ambitious brands across East Africa and beyond.
            </motion.p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto space-y-16 md:space-y-24 pt-4"
        >
          {/* Optional vertical timeline line (only visible on desktop) */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-linear-to-b from-brand/30 via-brand/10 to-transparent -translate-x-1/2 pointer-events-none" />

          {MILESTONES.map((milestone, index) => (
            <MilestoneRow
              key={milestone.year}
              milestone={milestone}
              index={index}
              total={MILESTONES.length}
              isLast={index === MILESTONES.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}