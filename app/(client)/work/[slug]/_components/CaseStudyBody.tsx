"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, useReveal } from "@/lib/motion";


export function CaseStudyBody({ project: p }: { project: Project }) {
  const [ref, inView] = useReveal("-40px");
  const { classes: c } = p;

  return (
    <section className="py-24 px-6 md:px-10 border-t border-line">
      <div className="max-w-300 mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16"
        >
          {/* ── Left — narrative ──────────────────────────────────────────── */}
          <div className="space-y-14">

            {/* Challenge */}
            <motion.div variants={fadeUp(0)}>
              <div className="flex items-center gap-3 mb-5">
                <span className={`font-mono text-[13px] tracking-widest ${c.accent}`}>01</span>
                <div className={`h-px w-10 bg-current ${c.accent}`} />
                <h2 className="font-display text-[22px] font-bold tracking-tight text-ink">
                  The Challenge
                </h2>
              </div>
              <p className="font-sans text-[16px] font-light text-ink-muted leading-[1.85]">
                {p.challenge}
              </p>
            </motion.div>

            {/* Approach */}
            <motion.div variants={fadeUp(0.08)}>
              <div className="flex items-center gap-3 mb-5">
                <span className={`font-mono text-[13px] tracking-widest ${c.accent}`}>02</span>
                <div className={`h-px w-10 bg-current ${c.accent}`} />
                <h2 className="font-display text-[22px] font-bold tracking-tight text-ink">
                  Our Approach
                </h2>
              </div>
              <p className="font-sans text-[16px] font-light text-ink-muted leading-[1.85]">
                {p.approach}
              </p>
            </motion.div>

            {/* Outcome */}
            <motion.div variants={fadeUp(0.16)}>
              <div className="flex items-center gap-3 mb-5">
                <span className={`font-mono text-[13px] tracking-widest ${c.accent}`}>03</span>
                <div className={`h-px w-10 bg-current ${c.accent}`} />
                <h2 className="font-display text-[22px] font-bold tracking-tight text-ink">
                  The Outcome
                </h2>
              </div>
              <div className={`rounded-xl border p-6 mb-6 ${c.dimBg} ${c.border}`}>
                <p className="font-sans text-[16px] text-ink leading-relaxed">
                  {p.outcome}
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Right — deliverables sidebar ──────────────────────────────── */}
          <motion.aside
            variants={fadeUp(0.1)}
            className="lg:sticky lg:top-28 self-start"
          >
            <div className="rounded-2xl border border-line bg-surface overflow-hidden">
              {/* Header */}
              <div className={`px-6 py-4 border-b ${c.border} ${c.dimBg}
                flex items-center gap-2`}>
                <div className={`size-2 rounded-full ${c.accent.replace("text-", "bg-")}`} />
                <span className="font-mono text-[11px] tracking-widest uppercase text-ink-muted">
                  Deliverables
                </span>
              </div>

              {/* List */}
              <ul className="divide-y divide-line list-none p-0 m-0">
                {p.deliverables.map((d, i) => (
                  <li key={i} className="px-6 py-4 hover:bg-surface-hi transition-colors duration-150">
                    <div className="flex items-start gap-3">
                      <span className={`mt-1.25 size-1.5 rounded-full shrink-0
                        ${c.accent.replace("text-", "bg-")}`} aria-hidden />
                      <div>
                        <p className="font-sans text-[13px] font-medium text-ink mb-0.5">
                          {d.title}
                        </p>
                        <p className="font-sans text-xs text-ink-muted leading-relaxed">
                          {d.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Tech stack footer */}
              <div className="px-6 py-4 border-t border-line bg-base">
                <p className="font-mono text-[10px] tracking-widest uppercase
                  text-ink-faint mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag}
                      className={`font-mono text-[10px] tracking-wide uppercase
                        px-2.5 py-1 rounded border ${c.dimBg} ${c.border} ${c.accent}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}