"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedArrow } from "@/components/extras/Primitives";
import { fadeUp } from "@/lib/motion";
import type { Project } from "@/constants/projects";

interface Props {
  project: Project;
}

/* ─── VISUAL PANEL ────────────────────────────────────────────────────────── */

function FeaturedVisual({ project: p }: { project: Project }) {
  const { classes: c } = p;
  const heroShot = p.screenshots?.[0];
  const hasImage = !!heroShot?.src;

  return (
    <div
      className={`relative min-h-80 lg:min-h-115 flex items-center
        justify-center overflow-hidden
        bg-linear-to-br ${c.gradFrom} to-surface`}
    >
      {hasImage ? (
        <>
          {/* Screenshot fills the panel, scales gently on hover */}
          <Image
            src={heroShot!.src!}
            alt={heroShot!.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-top
              transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {/* Bottom-to-mid scrim — keeps the year watermark and badge readable */}
          <div
            aria-hidden
            className="absolute inset-0
              bg-linear-to-t from-surface/70 via-surface/20 to-transparent"
          />
        </>
      ) : (
        <>
          {/* Fallback — grid texture + animated metric rings */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-20
              bg-[linear-gradient(var(--color-line)_1px,transparent_1px),
              linear-gradient(90deg,var(--color-line)_1px,transparent_1px)]
              bg-size-[40px_40px]"
          />

          <div className="relative flex items-center justify-center" aria-hidden>
            {[160, 120, 80].map((size, i) => (
              <div
                key={size}
                className={`absolute rounded-full border ${c.border}
                  animate-[float_${4 + i}s_ease-in-out_infinite]`}
                style={{
                  width:  size,
                  height: size,
                  opacity: 0.3 - i * 0.07,
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            ))}

            <div className="relative z-10 text-center">
              <div
                className={`font-display font-extrabold tracking-tight leading-none
                  text-[clamp(48px,6vw,72px)] ${c.accent}
                  drop-shadow-[0_0_32px_currentColor]`}
              >
                {p.metric}
              </div>
              <div className="font-mono text-[11px] tracking-widest uppercase
                text-ink-muted mt-2">
                {p.metricLabel}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Year watermark — always shown */}
      <span
        aria-hidden
        className={`absolute bottom-5 left-6 font-display font-extrabold
          text-[80px] leading-none tracking-tight select-none
          opacity-[0.04] ${c.accent}`}
      >
        {p.year}
      </span>

      {/* Featured badge — always shown */}
      <div className="absolute top-5 left-5 z-10">
        <span className="font-mono text-[10px] tracking-widest uppercase
          text-brand bg-brand-dim border border-brand-border
          px-3 py-1.5 rounded backdrop-blur-sm">
          Featured Project
        </span>
      </div>
    </div>
  );
}

/* ─── FEATURED CARD ───────────────────────────────────────────────────────── */

export function FeaturedCard({ project: p }: Props) {
  const [hovered, setHovered] = useState(false);
  const { classes: c } = p;

  return (
    <motion.article
      variants={fadeUp(0)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative rounded-2xl overflow-hidden border border-line
        bg-surface transition-all duration-350 cursor-pointer
        ${c.hoverBorder} ${c.hoverShadow}`}
    >
      {/* Top accent bar */}
      <div
        className={`h-0.75 w-0 group-hover:w-full transition-all duration-500
          bg-linear-to-r from-current to-transparent ${c.accent}`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px]">

        {/* Visual panel */}
        <FeaturedVisual project={p} />

        {/* ── Right: Content Panel ───────────────────────────────────────── */}
        <div className="flex flex-col justify-between p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-line">
          {/* Top content */}
          <div>
            {/* Service + year */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className={`font-mono text-[10px] tracking-widest uppercase
                  px-2.5 py-1 rounded border ${c.dimBg} ${c.border} ${c.accent}`}
              >
                {p.serviceLabel}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-ink-faint">
                {p.year}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-display text-[clamp(22px,3vw,32px)] font-bold
                tracking-tight text-ink mb-2 leading-[1.15]"
            >
              {p.title}
            </h3>

            {/* Client + industry */}
            <p className="font-sans text-sm text-ink-faint mb-5">
              {p.client} &middot; {p.industry}
            </p>

            {/* Summary */}
            <p className="font-sans text-sm text-ink-muted leading-relaxed mb-6">
              {p.summary}
            </p>

            {/* Outcome */}
            <div className={`rounded-lg p-4 border ${c.dimBg} ${c.border} mb-6`}>
              <p className={`font-mono text-[10px] tracking-widest uppercase
                mb-1.5 ${c.accent}`}>
                Outcome
              </p>
              <p className="font-sans text-sm text-ink-muted leading-relaxed">
                {p.outcome}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-wide uppercase
                    px-2.5 py-1 rounded border border-line bg-surface-hi text-ink-faint"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={`/work/${p.slug}`}
            className={`inline-flex items-center gap-2 font-sans text-sm
              font-medium no-underline transition-colors duration-200 ${c.accent}`}
          >
            Read Case Study
            <AnimatedArrow hovered={hovered} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}