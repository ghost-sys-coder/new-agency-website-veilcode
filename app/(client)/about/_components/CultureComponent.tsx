"use client";

import { motion } from "framer-motion";
import { SectionTag, AccentLine, PrimaryButton } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { PERKS, CULTURE_CARDS } from "@/constants";


export function Culture() {
  const [ref, inView] = useReveal();
  const [perksRef, perksInView] = useReveal();

  return (
    <section className="py-32 px-6 md:px-10 bg-surface border-y border-line">
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
            <SectionTag>Culture &amp; Work Style</SectionTag>
            <AccentLine />
          </motion.div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <motion.h2
              variants={fadeUp(0.1)}
              className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold
                tracking-tight text-ink leading-[1.1] max-w-125"
            >
              How We{" "}
              <span className="text-brand drop-shadow-[0_0_24px_var(--color-brand-glow)]">
                Work
              </span>{" "}
              Every Day
            </motion.h2>

            <motion.p
              variants={fadeUp(0.18)}
              className="font-sans text-[15px] text-ink-muted max-w-95 leading-relaxed"
            >
              Culture isn&apos;t a ping-pong table. It&apos;s the system of unspoken norms
              that determines how decisions get made and how people are treated.
            </motion.p>
          </div>
        </motion.div>

        {/* Culture cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-24"
        >
          {CULTURE_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp(i * 0.08)}
              className="group rounded-xl p-8 bg-base border border-line
                transition-all duration-300 hover:bg-surface-hi hover:border-line-hi"
            >
              {/* Icon */}
              <span className={`text-2xl leading-none mb-5 block ${card.accent}`} aria-hidden>
                {card.icon}
              </span>

              {/* Tag */}
              <span
                className={`font-mono text-[10px] tracking-widest uppercase
                  px-2.5 py-1 rounded border mb-4 inline-block
                  ${card.bg} ${card.border} ${card.accent}`}
              >
                {card.title}
              </span>

              {/* Desc */}
              <p className="font-sans text-sm text-ink-muted leading-relaxed mt-3">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Perks */}
        <motion.div
          ref={perksRef}
          variants={stagger}
          initial="hidden"
          animate={perksInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp()}>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-faint mb-8">
              Benefits &amp; Perks
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
          >
            {PERKS.map((perk, i) => (
              <motion.div
                key={perk.label}
                variants={fadeUp(i * 0.05)}
                className="flex items-center gap-3 p-4 rounded-lg border border-line
                  bg-base hover:bg-surface-hi hover:border-line-hi
                  transition-colors duration-200 cursor-default"
              >
                <span className="text-xl leading-none shrink-0" aria-hidden>
                  {perk.icon}
                </span>
                <span className="font-sans text-sm text-ink-muted leading-tight">
                  {perk.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Closing CTA */}
          <motion.div
            variants={fadeUp(0.2)}
            className="relative overflow-hidden rounded-2xl border border-line
              bg-base px-8 md:px-14 py-14 text-center"
          >
            {/* Ambient glow */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none
                bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,var(--color-brand-dim),transparent)]"
            />

            <div className="relative z-10">
              <p className="font-mono text-[11px] tracking-widest uppercase text-brand mb-4">
                We&apos;re hiring
              </p>
              <h3 className="font-display text-[clamp(24px,3vw,40px)] font-extrabold
                tracking-tight text-ink leading-[1.1] mb-4">
                Sound Like Your Kind of Team?
              </h3>
              <p className="font-sans text-[15px] text-ink-muted max-w-110
                mx-auto leading-relaxed mb-8">
                We&apos;re always building our bench. If you&apos;re exceptional at what you
                do and you care about craft, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <PrimaryButton className="text-[15px]! px-8! py-4!">
                  See Open Positions →
                </PrimaryButton>
                <a
                  href="mailto:hello@veilcode.io"
                  className="inline-flex items-center gap-2 font-sans text-sm
                    font-medium text-ink-muted border border-line px-8 py-4
                    rounded-md no-underline hover:text-ink hover:border-line-hi
                    hover:bg-surface-hi transition-all duration-200"
                >
                  Say Hello
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}