import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedArrow } from "./Primitives";
import { fadeUp, useReveal } from "@/lib/motion";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useReveal();

  const { classes: c } = service;

  return (
    <motion.article
      ref={ref}
      variants={fadeUp(index * 0.08)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-xl p-9 cursor-pointer overflow-hidden
        bg-surface border border-line
        transition-all duration-300
        hover:bg-surface-hi
        ${c.hoverBorder}
        ${c.hoverShadow}`}
    >
      {/* Corner glow — always rendered, opacity on hover */}
      <div
        aria-hidden
        className={`absolute top-0 right-0 pointer-events-none
          transition-all duration-400 rounded-bl-full
          ${c.glow}
          ${hovered ? "w-36 h-36 opacity-100" : "w-16 h-16 opacity-0"}`}
      />

      {/* Icon */}
      <div className={`text-[28px] leading-none mb-5 ${c.icon}`} aria-hidden>
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="font-display text-[22px] font-bold tracking-tight text-ink mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-sans text-sm text-ink-muted leading-relaxed mb-6">
        {service.desc}
      </p>

      {/* Tags */}
      <ul className="flex flex-wrap gap-2 mb-8 list-none p-0 m-0" aria-label="Technologies">
        {service.tags.map((tag) => (
          <li
            key={tag}
            className={`font-mono text-[10px] tracking-widest uppercase
              px-2.5 py-1 rounded border
              ${c.tag}`}
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* Link */}
      <div className={`flex items-center gap-1.5 text-[13px] font-medium font-sans ${c.link}`}>
        <span>Explore service</span>
        <AnimatedArrow hovered={hovered} />
      </div>
    </motion.article>
  );
}