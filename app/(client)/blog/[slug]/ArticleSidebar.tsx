"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { BlogPost } from "@/constants/blog";

/* ─── TABLE OF CONTENTS ───────────────────────────────────────────────────── */

function TableOfContents({ post: p }: { post: BlogPost }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = p.toc.map(({ id }) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        /* Find the topmost visible heading */
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [p.toc]);

  return (
    <nav aria-label="Table of contents">
      <p className="font-mono text-[10px] tracking-widest uppercase
        text-ink-faint mb-4">
        Contents
      </p>
      <ol className="list-none p-0 m-0 space-y-0.5">
        {p.toc.map(({ id, level, text }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`group flex items-start gap-2.5 py-1.5 no-underline
                  transition-colors duration-150 rounded-md
                  ${level === 3 ? "pl-4" : "pl-0"}
                  ${isActive ? "text-brand" : "text-ink-faint hover:text-ink-muted"}`}
              >
                {/* Active indicator */}
                <span
                  className={`mt-1.75 size-1.5 rounded-full shrink-0 transition-all duration-200
                    ${isActive ? "bg-brand shadow-[0_0_6px_var(--color-brand)]" : "bg-line-hi group-hover:bg-ink-faint"}`}
                  aria-hidden
                />
                <span className={`font-sans leading-snug
                  ${level === 3 ? "text-[12px]" : "text-[13px]"}`}>
                  {text}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* ─── AUTHOR BIO ──────────────────────────────────────────────────────────── */

function AuthorBio({ post: p }: { post: BlogPost }) {
  const a = p.author;

  return (
    <div className="rounded-xl border border-line bg-surface overflow-hidden">
      {/* Accent top bar */}
      <div className={`h-0.5 w-full bg-linear-to-r from-current
        to-transparent ${a.accent}`} />

      <div className="p-5">
        <p className="font-mono text-[10px] tracking-widest uppercase
          text-ink-faint mb-4">
          Written by
        </p>

        {/* Avatar + name */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`size-11 rounded-xl border flex items-center
            justify-center font-display font-bold text-[14px] tracking-tight shrink-0
            ${a.dimBg} ${a.border} ${a.accent}`}>
            {a.initials}
          </div>
          <div>
            <p className="font-sans text-sm font-medium text-ink leading-none mb-1">
              {a.name}
            </p>
            <p className={`font-mono text-[10px] tracking-widest uppercase ${a.accent}`}>
              {a.role}
            </p>
          </div>
        </div>

        <p className="font-sans text-xs text-ink-muted leading-relaxed mb-4">
          {a.bio}
        </p>

        {/* Social links */}
        <div className="flex gap-2">
          {[
            { href: a.linkedin, label: `${a.name} on LinkedIn`, icon: (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )},
            { href: a.twitter, label: `${a.name} on Twitter`, icon: (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )},
          ].map(({ href, label, icon }) => (
            <a key={label} href={href} aria-label={label}
              target="_blank" rel="noopener noreferrer"
              className="size-8 flex items-center justify-center rounded-lg
                border border-line text-ink-faint no-underline
                hover:border-brand-border hover:text-brand hover:bg-brand-dim
                transition-all duration-150">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── SIDEBAR ─────────────────────────────────────────────────────────────── */

export function ArticleSidebar({ post }: { post: BlogPost }) {
  return (
    <motion.aside
      variants={fadeUp(0.12)}
      initial="hidden"
      animate="visible"
      className="hidden lg:flex flex-col gap-6 sticky top-28 self-start"
    >
      {/* TOC card */}
      <div className="rounded-xl border border-line bg-surface p-5">
        <TableOfContents post={post} />
      </div>

      {/* Author card */}
      <AuthorBio post={post} />
    </motion.aside>
  );
}