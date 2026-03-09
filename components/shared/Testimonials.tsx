"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTag } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { Button } from "../ui/button";
import { TESTIMONIALS } from "@/constants";
import { TestimonialCard } from "../extras/TestimonialCard";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useReveal();

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % TESTIMONIALS.length),
      5200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-32 px-6 md:px-10 bg-surface border-y border-line">
      <div className="max-w-205 mx-auto text-center">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Tag */}
          <motion.div variants={fadeUp()} className="flex justify-center">
            <SectionTag>Client Stories</SectionTag>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp(0.1)}
            className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold
              tracking-tight text-ink leading-[1.1] mb-16"
          >
            Trusted by Builders{" "}
            <span className="text-brand drop-shadow-[0_0_24px_var(--color-brand-glow)]">
              &amp; Visionaries
            </span>
          </motion.h2>

          {/* Carousel */}
          <motion.div variants={fadeUp(0.2)}>
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={TESTIMONIALS[active].name}
                item={TESTIMONIALS[active]}
              />
            </AnimatePresence>

            {/* Dot indicators */}
            <div
              className="flex justify-center gap-2 mt-8"
              // role="tablist"
              aria-label="Testimonials"
            >
              {TESTIMONIALS.map((t, i) => (
                <Button
                  key={t.name}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Show testimonial from ${t.name}`}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full border-none cursor-pointer p-0
                    transition-all duration-300 outline-none
                    focus-visible:ring-2 focus-visible:ring-brand
                    ${i === active ? "w-6 bg-brand" : "w-2 bg-line hover:bg-line-hi"}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}