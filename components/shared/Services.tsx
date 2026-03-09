"use client";

import { motion } from "framer-motion";
import {
  SectionTag,
  AccentLine,
  GhostButton,
} from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { ServiceCard } from "../extras/ServiceCard";
import { SERVICES } from "@/constants";



export function Services() {
  const [ref, inView] = useReveal();

  return (
    <section id="services" className="py-32 px-6 md:px-10">
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
            <SectionTag>What We Do</SectionTag>
            <AccentLine />
          </motion.div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <motion.h2
              variants={fadeUp(0.1)}
              className="font-display text-[clamp(30px,4vw,52px)] font-extrabold
                tracking-tight text-ink leading-[1.1] max-w-120"
            >
              Full-Stack Digital{" "}
              <span className="text-brand drop-shadow-[0_0_24px_var(--color-brand-glow)]">
                Capabilities
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp(0.18)}
              className="font-sans text-[15px] text-ink-muted max-w-90 leading-relaxed"
            >
              From concept to deployment — we cover every dimension of your
              digital presence with precision and craft.
            </motion.p>
          </div>
        </motion.div>

        {/* Grid: 3-col top row, 2-col centred bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {SERVICES.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-205 mx-auto">
          {SERVICES.slice(3).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i + 3} />
          ))}
        </div>

        {/* CTA row */}
        <div className="flex justify-center mt-12">
          <GhostButton>View All Services →</GhostButton>
        </div>
      </div>
    </section>
  );
}