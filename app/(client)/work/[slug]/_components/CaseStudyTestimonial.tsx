"use client";

import { motion } from "framer-motion";
import { fadeUp, useReveal } from "@/lib/motion";

export function CaseStudyTestimonial({ project: p }: { project: Project }) {
  const [ref, inView] = useReveal("-40px");
  const { classes: c } = p;
  const t = p.testimonial;
  if (!t) return null;

  return (
    <section className="py-24 px-6 md:px-10">
      <div className="max-w-225 mx-auto">
        <div ref={ref} className="max-w-225 mx-auto">
        <motion.blockquote
          variants={fadeUp()}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`relative rounded-2xl border p-10 md:p-14 overflow-hidden ${c.border} ${c.dimBg}`}
        >
          {/* Background glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none
              bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,var(--color-brand-dim),transparent)]"
          />

          {/* Quote mark */}
          <div
            aria-hidden
            className={`absolute top-6 left-8 font-display font-extrabold
              text-[120px] leading-none select-none pointer-events-none
              opacity-[0.06] ${c.accent}`}
          >
            &ldquo;
          </div>

          <div className="relative z-10">
            {/* Quote text */}
            <p className="font-display text-[clamp(18px,2.5vw,26px)] font-medium
              text-ink leading-[1.55] tracking-tight mb-8">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Divider */}
            <div className={`w-12 h-0.5 mb-6 bg-linear-to-r from-current to-transparent ${c.accent}`} />

            {/* Attribution */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div
                className={`size-12 rounded-xl border flex items-center justify-center
                  font-display font-bold text-[15px] tracking-tight shrink-0
                  ${c.dimBg} ${c.border} ${c.accent}`}
              >
                {t.initials}
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-ink">{t.name}</p>
                <p className="font-sans text-xs text-ink-muted">{t.role}</p>
              </div>
            </div>
          </div>
        </motion.blockquote>
        </div>
      </div>
    </section>
  );
}