"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedArrow } from "@/components/extras/Primitives";
import { fadeUp } from "@/lib/motion";
import type { Project } from "@/constants/projects";
import Link from "next/link";

interface Props {
    project: Project;
    index: number;
}

export function ProjectCard({ project: p, index }: Props) {
    const [hovered, setHovered] = useState(false);
    const { classes: c } = p;

    return (
        <motion.article
            variants={fadeUp(index * 0.08)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`group relative flex flex-col rounded-xl overflow-hidden
        border border-line bg-surface cursor-pointer
        transition-all duration-300 hover:bg-surface-hi
        ${c.hoverBorder} ${c.hoverShadow}`}
        >
            {/* Top accent bar */}
            <div
                className={`h-0.5 w-0 group-hover:w-full transition-all duration-500
          bg-linear-to-r from-current to-transparent ${c.accent}`}
            />

            {/* Visual panel */}
            <div
                className={`relative h-45 flex items-center justify-center
          overflow-hidden bg-linear-to-br ${c.gradFrom} to-surface`}
            >
                {/* Subtle grid */}
                <div
                    aria-hidden
                    className="absolute inset-0 opacity-15
                            bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)]
                            bg-[lenght:32px_32px]
                            "
                />

                {/* Floating ring + metric */}
                <div className="relative z-10 flex items-center justify-center" aria-hidden>
                    <div
                        className={`absolute size-24 rounded-full border ${c.border}
              opacity-30 animate-float`}
                    />
                    <div
                        className={`absolute size-14 rounded-full border ${c.border}
              opacity-20 animate-[float_5s_ease-in-out_infinite_0.5s]`}
                    />
                    <div className="relative text-center z-10">
                        <div
                            className={`font-display font-extrabold text-[34px] tracking-tight
                leading-none ${c.accent} drop-shadow-[0_0_20px_currentColor]`}
                        >
                            {p.metric}
                        </div>
                        <div className="font-mono text-[9px] tracking-widest uppercase
              text-ink-faint mt-1">
                            {p.metricLabel}
                        </div>
                    </div>
                </div>

                {/* Service tag */}
                <div className="absolute top-3 left-3">
                    <span
                        className={`font-mono text-[9px] tracking-widest uppercase
              px-2 py-1 rounded border ${c.dimBg} ${c.border} ${c.accent}`}
                    >
                        {p.serviceLabel}
                    </span>
                </div>

                {/* Year */}
                <span className="absolute bottom-3 right-3 font-mono text-[10px]
          tracking-widest text-ink-faint">
                    {p.year}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
                {/* Title */}
                <h3
                    className="font-display text-[18px] font-bold tracking-tight
            text-ink mb-1.5 leading-snug"
                >
                    {p.title}
                </h3>

                {/* Client */}
                <p className="font-sans text-xs text-ink-faint mb-3">
                    {p.client} &middot; {p.industry}
                </p>

                {/* Summary */}
                <p className="font-sans text-sm text-ink-muted leading-relaxed mb-5 flex-1">
                    {p.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="font-mono text-[9px] tracking-wide uppercase
                px-2 py-1 rounded border border-line bg-surface-hi text-ink-faint"
                        >
                            {tag}
                        </span>
                    ))}
                    {p.tags.length > 3 && (
                        <span className="font-mono text-[9px] tracking-wide
              text-ink-faint px-2 py-1">
                            +{p.tags.length - 3}
                        </span>
                    )}
                </div>

                {/* CTA */}
                <Link
                    href={`/work/${p.slug}`}
                    className={`inline-flex items-center gap-1.5 font-sans text-[13px]
                        font-medium no-underline transition-colors duration-200 ${c.accent}`}
                >
                    Case Study
                    <AnimatedArrow hovered={hovered} />
                </Link>
            </div>
        </motion.article>
    );
}