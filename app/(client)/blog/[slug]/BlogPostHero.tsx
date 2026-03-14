"use client";

import { motion } from "framer-motion";
import { GridBg, GlowOrb, SectionTag, AccentLine } from "@/components/extras/Primitives";
import { fadeUp, stagger } from "@/lib/motion";
import { formatDate, type BlogPost } from "@/constants/blog";
import Image from "next/image";
import Link from "next/link";

/* ─── HERO IMAGE PLACEHOLDER ──────────────────────────────────────────────── */

function HeroImagePlaceholder({ post: p }: { post: BlogPost }) {
  const { classes: c } = p;
  return (
    <div
      className={`relative w-full h-80 md:h-120 rounded-2xl overflow-hidden
        border ${c.border} bg-linear-to-br ${c.dimBg} to-surface-hi`}
      role="img"
      aria-label={p.heroAlt}
    >
      {/* Grid */}
      <div aria-hidden className="absolute inset-0 opacity-20
        bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)]
        bg-size-[40px_40px]" />

      {/* Corner brackets */}
      {[
        "top-4 left-4 border-t-2 border-l-2 rounded-tl",
        "top-4 right-4 border-t-2 border-r-2 rounded-tr",
        "bottom-4 left-4 border-b-2 border-l-2 rounded-bl",
        "bottom-4 right-4 border-b-2 border-r-2 rounded-br",
      ].map((pos) => (
        <div key={pos} aria-hidden
          className={`absolute size-6 opacity-30 ${pos} ${c.border}`} />
      ))}

      {/* Centre content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className={`size-14 rounded-xl border flex items-center justify-center
          ${c.dimBg} ${c.border}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            aria-hidden className={c.accent ?? "text-brand"}>
            <rect x="3" y="3" width="18" height="18" rx="2"
              stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5"
              stroke="currentColor" strokeWidth="1.5" />
            <path d="M21 15l-5-5L5 21"
              stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-mono text-[11px] tracking-widest uppercase text-ink-faint">
          Hero image placeholder
        </p>
        <p className="font-mono text-[10px] text-ink-faint opacity-60">
          /public/blog/{p.slug}/hero.jpg
        </p>
      </div>
    </div>
  );
}

/* ─── BLOG HERO ───────────────────────────────────────────────────────────── */

export function BlogPostHero({ post: p }: { post: BlogPost }) {
  const { classes: c } = p;

  return (
    <section className="relative overflow-hidden">
      <GridBg />
      <GlowOrb color="rgba(0,229,255,0.08)" size={480} top="0%" left="55%" />

      {/* Scan line */}
      <div aria-hidden className="absolute inset-x-0 h-px pointer-events-none
        bg-linear-to-r from-transparent via-brand/20 to-transparent
        animate-scan" />

      <div className="relative z-10 max-w-300 mx-auto px-6 md:px-10 pt-36 pb-16">
        <motion.div variants={stagger} initial="hidden" animate="visible">

          {/* Breadcrumb */}
          <motion.div variants={fadeUp(0)} className="flex items-center gap-2 mb-8">
            <Link href="/blog"
              className="font-mono text-[11px] tracking-widest uppercase
                text-ink-faint hover:text-ink transition-colors duration-200 no-underline">
              Blog
            </Link>
            <span className="text-ink-faint" aria-hidden>/</span>
            <span className={`font-mono text-[11px] tracking-widest uppercase ${c.accent}`}>
              {p.category}
            </span>
          </motion.div>

          {/* Category tag */}
          <motion.div variants={fadeUp(0.04)}>
            <SectionTag>{p.category}</SectionTag>
            <AccentLine width={48} />
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp(0.08)}
            className="font-display font-extrabold leading-[1.05] tracking-tight
              text-[clamp(32px,5vw,64px)] text-ink mb-6 max-w-225"
          >
            {p.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            variants={fadeUp(0.14)}
            className="font-sans font-light text-lg text-ink-muted
              leading-relaxed max-w-160 mb-8"
          >
            {p.excerpt}
          </motion.p>

          {/* Meta row */}
          <motion.div
            variants={fadeUp(0.18)}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10"
          >
            {/* Author mini-card */}
            <div className="flex items-center gap-3">
              <div className={`size-9 rounded-lg border flex items-center justify-center
                font-display font-bold text-[13px] tracking-tight shrink-0
                ${p.author.dimBg} ${p.author.border} ${p.author.accent}`}>
                {p.author.initials}
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-ink leading-none mb-0.5">
                  {p.author.name}
                </p>
                <p className="font-sans text-xs text-ink-faint leading-none">
                  {p.author.role}
                </p>
              </div>
            </div>

            <span className="h-4 w-px bg-line hidden sm:block" aria-hidden />

            {/* Date */}
            <span className="font-sans text-sm text-ink-muted">
              {formatDate(p.publishedAt)}
            </span>

            <span className="h-4 w-px bg-line hidden sm:block" aria-hidden />

            {/* Read time */}
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px]
              tracking-widest uppercase text-ink-faint">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {p.readTime}
            </span>
          </motion.div>

          {/* Tags */}
          <motion.div variants={fadeUp(0.22)} className="flex flex-wrap gap-2 mb-12">
            {p.tags.map((tag) => (
              <span key={tag}
                className="font-mono text-[10px] tracking-widest uppercase
                  px-3 py-1.5 rounded border border-line bg-surface text-ink-faint
                  hover:border-line-hi hover:text-ink-muted transition-colors duration-150">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Hero image */}
          <motion.div variants={fadeUp(0.28)}>
            {p.heroSrc ? (
              <Image src={p.heroSrc} alt={p.heroAlt} fill
                className="w-full h-80 md:h-120 object-cover rounded-2xl border border-line" />
            ) : (
              <HeroImagePlaceholder post={p} />
            )}
          </motion.div>
        </motion.div>
      </div>

      <div aria-hidden className="absolute bottom-0 inset-x-0 h-24
        bg-linear-to-t from-base to-transparent pointer-events-none" />
    </section>
  );
}