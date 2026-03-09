import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { AnimatedArrow } from "./Primitives";


export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const { classes: c } = project;

  return (
    <motion.article
      variants={fadeUp(index * 0.12)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-xl overflow-hidden bg-surface border border-line
        transition-all duration-300 cursor-pointer
        ${c.hoverBorder} ${c.hoverShadow}`}
    >
      {/* Visual panel */}
      <div className="relative h-50 flex items-center justify-center
        bg-linear-to-br from-surface-hi to-surface overflow-hidden">

        {/* Floating orb */}
        <div className={`size-28 rounded-full border flex items-center justify-center
          animate-float ${c.orb}`}>
          <div className={`size-14 rounded-full border ${c.innerOrb}`} />
        </div>

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className={`font-mono text-[10px] tracking-widest uppercase
            px-2.5 py-1 rounded border ${c.tag}`}>
            {project.tag}
          </span>
        </div>

        {/* Metric */}
        <div className="absolute bottom-4 right-4 text-right">
          <div className={`font-display font-extrabold text-[32px] tracking-tight leading-none ${c.metric}`}>
            {project.metric}
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-ink-muted mt-0.5">
            {project.metricLabel}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-7">
        <h3 className="font-display text-[20px] font-bold tracking-tight text-ink mb-2.5">
          {project.title}
        </h3>
        <p className="font-sans text-sm text-ink-muted leading-relaxed mb-5">
          {project.desc}
        </p>
        <div className={`flex items-center gap-1.5 text-[13px] font-medium font-sans ${c.link}`}>
          <span>Case Study</span>
          <AnimatedArrow hovered={hovered} />
        </div>
      </div>
    </motion.article>
  );
}