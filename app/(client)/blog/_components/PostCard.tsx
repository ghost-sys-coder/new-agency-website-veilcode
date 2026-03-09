"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { AnimatedArrow } from "@/components/extras/Primitives";
import { formatDate, type BlogPost } from "@/constants/blog";

/* ─── CARD VISUAL ─────────────────────────────────────────────────────────── */

function CardVisual({ post: p }: { post: BlogPost }) {
  const { classes: c } = p;

  return (
    <div className={`relative h-50 overflow-hidden
      bg-linear-to-br ${c.dimBg} to-surface`}>

      {/* Grid texture */}
      <div aria-hidden className="absolute inset-0 opacity-20
        [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),
        linear-gradient(90deg,var(--color-line)_1px,transparent_1px)]
        bg-size-[28px_28px]" />

      {/* Subtle rings */}
      {[140, 88].map((size) => (
        <div key={size} aria-hidden
          className={`absolute rounded-full border ${c.border} opacity-10
            top-1/2 right-[-20%] -translate-y-1/2`}
          style={{ width: size, height: size }} />
      ))}

      {p.heroSrc ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={p.heroSrc} alt={p.heroAlt}
          className="absolute inset-0 w-full h-full object-cover
            transition-transform duration-500 group-hover:scale-[1.03]" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`size-10 rounded-lg border flex items-center justify-center
            ${c.dimBg} ${c.border} opacity-60`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              aria-hidden className={c.accent}>
              <rect x="3" y="3" width="18" height="18" rx="2"
                stroke="currentColor" strokeWidth="1.5" />
              <circle cx="8.5" cy="8.5" r="1.5"
                stroke="currentColor" strokeWidth="1.5" />
              <path d="M21 15l-5-5L5 21"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      )}

      {/* Category badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className={`font-mono text-[9px] tracking-widest uppercase
          px-2 py-1 rounded border backdrop-blur-sm
          ${c.dimBg} ${c.border} ${c.accent}`}>
          {p.category}
        </span>
      </div>
    </div>
  );
}

/* ─── POST CARD ───────────────────────────────────────────────────────────── */

export function PostCard({
  post: p,
  index = 0,
}: {
  post:  BlogPost;
  index?: number;
}) {
  const [hovered, setHovered] = useState(false);
  const { classes: c } = p;

  return (
    <motion.article
      variants={fadeUp(index * 0.06)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group flex flex-col rounded-xl overflow-hidden border
        border-line bg-surface transition-all duration-300
        hover:bg-surface-hi hover:border-opacity-60
        ${c.border.replace("border-", "hover:shadow-[0_0_32px_var(--color-brand-dim)] hover:border-")}`}
    >
      {/* Top accent bar */}
      <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-500
        bg-linear-to-r from-current to-transparent ${c.accent}`} />

      {/* Visual */}
      <CardVisual post={p} />

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Author + meta */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className={`size-7 rounded-md border flex items-center justify-center
            font-display font-bold text-[10px] tracking-tight shrink-0
            ${p.author.dimBg} ${p.author.border} ${p.author.accent}`}>
            {p.author.initials}
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="font-sans text-xs text-ink-muted truncate">
              {p.author.name}
            </span>
            <span className="text-ink-faint" aria-hidden>·</span>
            <span className="font-sans text-xs text-ink-faint whitespace-nowrap">
              {formatDate(p.publishedAt)}
            </span>
          </div>
        </div>

        <h3 className="font-display text-[17px] font-bold tracking-tight
          text-ink leading-snug mb-2.5 line-clamp-2">
          {p.title}
        </h3>

        <p className="font-sans text-sm text-ink-muted font-light
          leading-relaxed mb-5 flex-1 line-clamp-3">
          {p.excerpt}
        </p>

        {/* Tags — max 2 + overflow */}
        <div className="flex items-center gap-1.5 flex-wrap mb-5">
          {p.tags.slice(0, 3).map((tag) => (
            <span key={tag}
              className="font-mono text-[9px] tracking-widest uppercase
                px-2 py-1 rounded border border-line bg-base text-ink-faint">
              {tag}
            </span>
          ))}
          {p.tags.length > 3 && (
            <span className="font-mono text-[9px] text-ink-faint">
              +{p.tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-line">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px]
            tracking-widest uppercase text-ink-faint">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="10"
                stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 6v6l4 2"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {p.readTime}
          </span>

          <a href={`/blog/${p.slug}`}
            className={`inline-flex items-center gap-1.5 font-sans text-[13px]
              font-medium no-underline transition-colors duration-200 ${c.accent}`}>
            Read
            <AnimatedArrow hovered={hovered} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}