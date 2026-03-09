"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { TechBadge } from "../extras/TechBadge";

/* ─── DATA ────────────────────────────────────────────────────────────────── */

const STACK = [
  "Next.js", "React", "TypeScript", "React Native", "Expo",
  "Python",  "Node.js", "PostgreSQL", "OpenAI", "LangChain",
  "Tailwind CSS", "Framer Motion", "Vercel", "AWS", "dbt",
  "Power BI", "Figma", "n8n",
] as const;


export function TechStack() {
  const [ref, inView] = useReveal();

  return (
    <section className="py-20 px-6 md:px-10 border-y border-line">
      <div className="max-w-300 mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p
            variants={fadeUp()}
            className="font-mono text-[11px] tracking-[0.14em] uppercase
              text-ink-faint text-center mb-10"
          >
            Our Technology Stack
          </motion.p>

          <motion.div
            variants={stagger}
            className="flex flex-wrap justify-center gap-3"
          >
            {STACK.map((label, i) => (
              <TechBadge key={label} label={label} delay={i * 0.03} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}