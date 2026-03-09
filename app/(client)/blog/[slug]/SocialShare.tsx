"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/constants/blog";

/* ─── SHARE ICONS ─────────────────────────────────────────────────────────── */

function TwitterShareIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 4l16 16M4 20L20 4"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function LinkedInShareIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function CopyLinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 13l4 4L19 7"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── SHARE BUTTON ────────────────────────────────────────────────────────── */

function ShareBtn({
  label,
  onClick,
  active,
  children,
}: {
  label:    string;
  onClick:  () => void;
  active?:  boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`group size-10 flex items-center justify-center rounded-xl
        border cursor-pointer outline-none transition-all duration-200
        focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
        focus-visible:ring-offset-base
        ${active
          ? "border-svc-data-border bg-svc-data-dim text-svc-data"
          : "border-line bg-surface text-ink-faint hover:border-brand-border hover:bg-brand-dim hover:text-brand"
        }`}
    >
      {children}
    </button>
  );
}

/* ─── SOCIAL SHARE ────────────────────────────────────────────────────────── */

export function SocialShare({ post }: { post: BlogPost }) {
  const [copied, setCopied]     = useState(false);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    
  function shareTwitter() {
    const text = encodeURIComponent(`${post.title} — VeilCode Blog`);
    const url  = encodeURIComponent(pageUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  }

  function shareLinkedIn() {
    const url = encodeURIComponent(pageUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback: do nothing */
    }
  }

  return (
    <>
      {/* ── Desktop: floating left rail ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="hidden xl:flex flex-col items-center gap-3
          fixed left-6 top-1/2 -translate-y-1/2 z-20"
      >
        <div className="h-12 w-px bg-linear-to-b from-transparent to-line" />
        <ShareBtn label="Share on Twitter / X" onClick={shareTwitter}>
          <TwitterShareIcon />
        </ShareBtn>
        <ShareBtn label="Share on LinkedIn" onClick={shareLinkedIn}>
          <LinkedInShareIcon />
        </ShareBtn>
        <ShareBtn label={copied ? "Copied!" : "Copy link"} onClick={copyLink} active={copied}>
          {copied ? <CheckIcon /> : <CopyLinkIcon />}
        </ShareBtn>
        <div className="h-12 w-px bg-linear-to-t from-transparent to-line" />
      </motion.div>

      {/* ── Mobile / tablet: inline strip below hero ────────────────────── */}
      <div className="xl:hidden flex items-center gap-3 mb-8">
        <span className="font-mono text-[10px] tracking-widest uppercase text-ink-faint">
          Share
        </span>
        <div className="flex gap-2">
          <ShareBtn label="Share on Twitter / X" onClick={shareTwitter}>
            <TwitterShareIcon />
          </ShareBtn>
          <ShareBtn label="Share on LinkedIn" onClick={shareLinkedIn}>
            <LinkedInShareIcon />
          </ShareBtn>
          <ShareBtn label={copied ? "Copied!" : "Copy link"} onClick={copyLink} active={copied}>
            {copied ? <CheckIcon /> : <CopyLinkIcon />}
          </ShareBtn>
        </div>
      </div>
    </>
  );
}