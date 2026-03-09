"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, useReveal } from "@/lib/motion";
import { PROJECTS, type Project } from "@/constants/projects";

export function NextProject({ project: p }: { project: Project }) {
  const [ref, inView] = useReveal("-40px");
  const [hovered, setHovered] = useState(false);

  const next = p.nextSlug
    ? PROJECTS.find((x) => x.slug === p.nextSlug) ?? null
    : null;

  if (!next) return null;

  const { classes: nc } = next;

  return (
    <section className="border-t border-line bg-surface">
      <motion.div
        ref={ref}
        variants={fadeUp()}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-300 mx-auto"
      >
        <a
          href={`/work/${next.slug}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`group flex flex-col md:flex-row md:items-center
            md:justify-between gap-6 px-6 md:px-10 py-12 no-underline
            transition-colors duration-300 hover:bg-surface-hi`}
        >
          {/* Left */}
          <div>
            <p className="font-mono text-[11px] tracking-widest uppercase
              text-ink-faint mb-3">
              Next Case Study
            </p>
            <h3 className={`font-display text-[clamp(22px,3.5vw,40px)] font-bold
              tracking-tight text-ink group-hover:${nc.accent.replace("text-", "text-")}
              transition-colors duration-300 mb-2`}>
              {next.title}
            </h3>
            <div className="flex items-center gap-3">
              <span className={`font-mono text-[10px] tracking-widest uppercase
                px-2.5 py-1 rounded border ${nc.dimBg} ${nc.border} ${nc.accent}`}>
                {next.serviceLabel}
              </span>
              <span className="font-sans text-sm text-ink-faint">
                {next.client} &middot; {next.year}
              </span>
            </div>
          </div>

          {/* Right — big arrow */}
          <div className={`flex items-center gap-3 font-sans text-lg
            font-medium shrink-0 ${nc.accent}`}>
            <span>View Case Study</span>
            <motion.span
              animate={{ x: hovered ? 8 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-2xl"
              aria-hidden
            >
              →
            </motion.span>
          </div>
        </a>
      </motion.div>
    </section>
  );
}