"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { AnimatedArrow } from "./Primitives";
import Image from "next/image";
import Link from "next/link";


export function ProjectCard({
  project,
  index,
}: {
  project: SampleProjects;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const { classes: c } = project;

  // Randomly select one screenshot (only once when component mounts)
  const [randomScreenshot] = useState(() => {
    if (!project.screenShots || project.screenShots.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * project.screenShots.length);
    return project.screenShots[randomIndex];
  });

  // Fallback image if no screenshots exist
  const fallbackImage = "/assets/placeholder/project-fallback.jpg"; // ← add your own fallback

  return (
    <motion.article
      variants={fadeUp(index * 0.12)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-xl overflow-hidden bg-surface border border-line
        transition-all duration-300 cursor-pointer group relative
        ${c.hoverBorder} ${c.hoverShadow}`}
    >
      {/* Visual / Image Panel */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <Image
          src={randomScreenshot?.src || fallbackImage}
          alt={randomScreenshot?.alt || `${project.title} preview`}
          fill
          className="object-cover object-center transition-transform duration-700
            group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3} // faster load for first 3 cards
        />

        {/* Subtle overlay gradient for better text/icon contrast */}
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />

        {/* Tag (always visible) */}
        <div className="absolute top-5 left-5 z-20">
          <span
            className={`font-mono text-[10px] tracking-widest uppercase
              px-3 py-1.5 rounded border ${c.tag}`}
          >
            {project.tag}
          </span>
        </div>

        {/* Optional: small metric badge in corner */}
        {project.metric && (
          <div className="absolute bottom-5 right-5 z-20 text-right">
            <div
              className={`font-display font-extrabold text-3xl tracking-tight leading-none ${c.metric}`}
            >
              {project.metric}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/80 mt-0.5 drop-shadow-md">
              {project.metricLabel}
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-7">
        <h3 className="font-display text-[20px] font-bold tracking-tight text-ink mb-2.5">
          {project.title}
        </h3>
        <p className="font-sans text-sm text-ink-muted leading-relaxed mb-5">
          {project.desc}
        </p>
        <Link
          href={`/work/${project.slug}`}
          className={`flex items-center gap-1.5 text-[13px] font-medium font-sans ${c.link}`}
        >
          <span>Case Study</span>
          <AnimatedArrow hovered={hovered} />
        </Link>
      </div>
    </motion.article>
  );
}