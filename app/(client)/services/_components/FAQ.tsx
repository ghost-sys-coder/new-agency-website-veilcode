"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTag, AccentLine } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { FaqItem } from "./FAQItem";
import { FAQS } from "@/constants";


export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
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
            <SectionTag>FAQ</SectionTag>
            <AccentLine />
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:gap-24 gap-12">
            {/* Left label column */}
            <div className="lg:w-[320px] shrink-0">
              <motion.h2
                variants={fadeUp(0.1)}
                className="font-display text-[clamp(26px,3vw,42px)] font-extrabold
                  tracking-tight text-ink leading-[1.1] mb-4"
              >
                Questions We{" "}
                <span className="text-brand drop-shadow-[0_0_24px_var(--color-brand-glow)]">
                  Get Asked
                </span>{" "}
                a Lot
              </motion.h2>
              <motion.p
                variants={fadeUp(0.18)}
                className="font-sans text-sm text-ink-muted leading-relaxed mb-6"
              >
                Can&apos;t find your answer here?{" "}
                <a
                  href="/contact"
                  className="text-brand hover:underline transition-colors duration-150"
                >
                  Send us a message
                </a>{" "}
                and we&apos;ll reply within one business day.
              </motion.p>

              {/* Decorative stat */}
              <motion.div
                variants={fadeUp(0.24)}
                className="hidden lg:block p-6 rounded-xl border border-line bg-base"
              >
                <div className="font-display font-extrabold text-[40px] tracking-tight
                  text-brand leading-none mb-1 drop-shadow-[0_0_16px_var(--color-brand-glow)]">
                  &lt; 24h
                </div>
                <div className="font-sans text-sm font-medium text-ink mb-0.5">
                  Average response time
                </div>
                <div className="font-sans text-xs text-ink-muted">
                  to all new project enquiries
                </div>
              </motion.div>
            </div>

            {/* Right accordion */}
            <motion.div
              variants={stagger}
              className="flex-1 bg-base rounded-xl border border-line px-6 divide-y-0"
            >
              {FAQS.map((faq, i) => (
                <FaqItem
                  key={i}
                  faq={faq}
                  index={i}
                  isOpen={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}