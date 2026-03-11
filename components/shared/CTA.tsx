"use client";

import { motion } from "framer-motion";
import { SectionTag, AccentLine, PrimaryButton } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import Link from "next/link";

export function CTA() {
  const [ref, inView] = useReveal();

  return (
    <section className="px-6 md:px-10 py-24">
      <div className="max-w-300 mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-[20px]
            bg-surface border border-line
            px-8 md:px-16 py-20 text-center"
        >
          {/* Centre glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none
              bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,var(--color-brand-dim),transparent)]"
          />
          {/* Top-right accent */}
          <div
            aria-hidden
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none
              bg-[radial-gradient(circle_at_top_right,var(--color-brand-dim),transparent)]"
          />
          {/* Bottom-left accent */}
          <div
            aria-hidden
            className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none
              bg-[radial-gradient(circle_at_bottom_left,var(--color-svc-data-dim),transparent)]"
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div variants={fadeUp()} className="flex justify-center">
              <SectionTag>Ready to Build?</SectionTag>
            </motion.div>
            <AccentLine width={32} />

            <motion.h2
              variants={fadeUp(0.1)}
              className="font-display text-[clamp(30px,4vw,58px)] font-extrabold
                tracking-tight text-ink leading-[1.05] mb-5"
            >
              Let&apos;s Build Something{" "}
              <span className="text-brand drop-shadow-[0_0_28px_var(--color-brand-glow)]">
                Extraordinary Together
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp(0.18)}
              className="font-sans text-[16px] text-ink-muted max-w-120
                mx-auto leading-relaxed mb-10"
            >
              Whether you need a full product build, an analytics overhaul, or
              intelligent automation — we&apos;re ready to move fast.
            </motion.p>

            <motion.div
              variants={fadeUp(0.28)}
              className="flex flex-wrap justify-center gap-4"
            >
              <PrimaryButton className="text-[15px]! px-9! py-4!">
                Book a Discovery Call →
              </PrimaryButton>
              <PrimaryButton className="text-[15px]! px-9! py-4!">
                <Link href={"/services/#pricing"}>View Pricing</Link>
              </PrimaryButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}