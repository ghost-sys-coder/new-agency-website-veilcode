"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTag, AccentLine, PrimaryButton, GhostButton } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { MeetingCard } from "./MeetingCard";
import { MEETING_TYPES } from "@/constants";
import Link from "next/link";


export function BookingCTA() {
  const [selected, setSelected] = useState(0);
  const [ref, inView] = useReveal();

  return (
    <section className="py-32 px-6 md:px-10 bg-surface border-t border-line">
      <div className="max-w-300 mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={fadeUp()}>
            <SectionTag>Book a Call</SectionTag>
            <AccentLine />
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20 gap-12">

            {/* Left — copy */}
            <div className="lg:w-100 shrink-0">
              <motion.h2
                variants={fadeUp(0.1)}
                className="font-display text-[clamp(28px,3.5vw,46px)] font-extrabold
                  tracking-tight text-ink leading-[1.1] mb-5"
              >
                Prefer to{" "}
                <span className="text-brand drop-shadow-[0_0_24px_var(--color-brand-glow)]">
                  Talk First?
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp(0.16)}
                className="font-sans text-[15px] text-ink-muted leading-relaxed mb-8"
              >
                Some projects need a conversation before they need a brief.
                Pick the session type that fits your situation — all calls are
                free, focused, and never a sales pitch.
              </motion.p>

              {/* What to expect */}
              <motion.div
                variants={fadeUp(0.22)}
                className="bg-base rounded-xl border border-line p-6"
              >
                <p className="font-mono text-[11px] tracking-widest uppercase
                  text-ink-faint mb-4">
                  What to Expect
                </p>
                <ul className="space-y-3 list-none p-0 m-0">
                  {[
                    "No sales pitch — just honest conversation",
                    "We come prepared with questions",
                    "You get a clear next step by end of call",
                    "Written summary sent within 24 hours",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-sans text-sm text-ink-muted"
                    >
                      <span
                        className="mt-1.25 size-1.5 rounded-full bg-brand shrink-0"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right — meeting type selector + booking */}
            <div className="flex-1">
              {/* Meeting type cards */}
              <motion.div
                variants={stagger}
                className="grid grid-cols-1 gap-4 mb-8"
              >
                {MEETING_TYPES.map((m, i) => (
                  <MeetingCard
                    key={m.title}
                    meeting={m}
                    index={i}
                    selected={selected === i}
                    onSelect={() => setSelected(i)}
                  />
                ))}
              </motion.div>

              {/* Book button */}
              <motion.div
                variants={fadeUp(0.3)}
                className="flex flex-wrap gap-4"
              >
                <PrimaryButton className="text-[15px]! px-8! py-4!">
                  <Link href={"/start"}>Book a {MEETING_TYPES[selected].title} →</Link>
                </PrimaryButton>
                <GhostButton className="text-[15px]! px-8! py-4!">
                  <Link href={"#form-message"}>Send a Message Instead</Link>
                </GhostButton>
              </motion.div>

              <motion.p
                variants={fadeUp(0.34)}
                className="mt-4 font-sans text-xs text-ink-faint"
              >
                Calls are conducted via Google Meet or Zoom. A calendar link will
                be sent to your email after booking.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}