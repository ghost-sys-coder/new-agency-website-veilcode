"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { AnimatedArrow } from "@/components/extras/Primitives";
import { formatDate, type BlogPost } from "@/constants/blog";

/* ─── RELATED CARD ────────────────────────────────────────────────────────── */

function RelatedCard({ post: p, index }: { post: BlogPost; index: number }) {
  const [hovered, setHovered] = useState(false);
  const { classes: c } = p;

  return (
    <motion.article
      variants={fadeUp(index * 0.1)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex flex-col rounded-xl overflow-hidden
        border border-line bg-surface transition-all duration-300
        hover:bg-surface-hi ${c.border.replace("border-", "hover:border-")}`}
    >
      {/* Top accent bar */}
      <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-500
        bg-linear-to-r from-current to-transparent ${c.accent}`} />

      {/* Hero placeholder */}
      <div className={`relative h-40 overflow-hidden
        bg-linear-to-br ${c.dimBg} to-surface`}>
        <div aria-hidden className="absolute inset-0 opacity-20
          linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)
          bg-size-[28px_28px]" />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className={`font-mono text-[9px] tracking-widest uppercase
            px-2 py-1 rounded border ${c.dimBg} ${c.border} ${c.accent}`}>
            {p.category}
          </span>
        </div>
        {/* Author avatar */}
        <div className="absolute bottom-3 right-3">
          <div className={`size-8 rounded-lg border flex items-center justify-center
            font-display font-bold text-[11px] tracking-tight
            ${p.author.dimBg} ${p.author.border} ${p.author.accent}`}>
            {p.author.initials}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-[17px] font-bold tracking-tight
          text-ink mb-2 leading-snug">
          {p.title}
        </h3>
        <p className="font-sans text-sm text-ink-muted leading-relaxed mb-5 flex-1 line-clamp-2">
          {p.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-sans text-xs text-ink-faint">
            {formatDate(p.publishedAt)}
          </span>
          <span className="font-mono text-[10px] tracking-widest uppercase text-ink-faint">
            {p.readTime}
          </span>
        </div>

        {/* CTA */}
        <a href={`/blog/${p.slug}`}
          className={`inline-flex items-center gap-1.5 font-sans text-[13px]
            font-medium no-underline transition-colors duration-200 ${c.accent}`}>
          Read Article
          <AnimatedArrow hovered={hovered} />
        </a>
      </div>
    </motion.article>
  );
}

/* ─── RELATED POSTS ───────────────────────────────────────────────────────── */

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  const [ref, inView] = useReveal("-40px");
  if (posts.length === 0) return null;

  return (
    <section className="py-24 px-6 md:px-10 border-t border-line">
      <div className="max-w-300 mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp()} className="mb-10">
            <p className="font-mono text-[11px] tracking-widest uppercase
              text-ink-faint mb-2">
              Continue Reading
            </p>
            <h2 className="font-display text-[clamp(22px,3vw,36px)] font-extrabold
              tracking-tight text-ink">
              Related{" "}
              <span className="text-brand drop-shadow-[0_0_20px_var(--color-brand-glow)]">
                Articles
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {posts.map((p, i) => (
              <RelatedCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}