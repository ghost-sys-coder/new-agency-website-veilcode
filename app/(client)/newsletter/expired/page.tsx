"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay } },
});

export default function NewsletterExpired() {
  return (
    <main className="min-h-screen bg-[#f9f8f6] flex items-center justify-center px-6">
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,0.04) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full max-w-lg text-center">
        {/* Icon */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-8 size-20 rounded-2xl bg-white border border-black/8
            shadow-[0_2px_16px_rgba(0,0,0,0.06)] flex items-center justify-center"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
            {/* Clock face */}
            <circle cx="18" cy="18" r="13" stroke="#1a1a1a" strokeWidth="1.8" fill="none"/>
            {/* Clock hands */}
            <motion.path
              d="M18 10v8l5 3"
              stroke="#1a1a1a"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            />
            {/* Center dot */}
            <circle cx="18" cy="18" r="1.2" fill="#1a1a1a"/>
            {/* Warning badge */}
            <circle cx="27" cy="27" r="7" fill="#f9f8f6" stroke="#f9f8f6" strokeWidth="2"/>
            <circle cx="27" cy="27" r="6" fill="#d97706"/>
            <motion.path
              d="M27 24v3M27 29.5v.5"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            />
          </svg>
        </motion.div>

        {/* Tag */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full
            bg-amber-50 border border-amber-200"
        >
          <span className="size-1.5 rounded-full bg-amber-500 inline-block" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-amber-700">
            Link Expired
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp(0.18)}
          initial="hidden"
          animate="visible"
          className="font-display text-[clamp(28px,4vw,44px)] font-extrabold
            tracking-tight text-[#111] mb-4 leading-[1.1]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          This link has expired.
        </motion.h1>

        <motion.p
          variants={fadeUp(0.26)}
          initial="hidden"
          animate="visible"
          className="text-[15px] text-[#555] leading-relaxed mb-10 max-w-sm mx-auto"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Confirmation links are only valid for 24 hours. Yours has passed its
          window — but it only takes a second to get a new one.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp(0.34)}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/blog/#newsletter"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
              bg-[#111] text-white text-sm font-medium
              hover:bg-[#333] transition-colors duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Re-subscribe →
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
              bg-white border border-black/10 text-[#444] text-sm font-medium
              hover:border-black/20 hover:text-[#111] transition-colors duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ← Back to homepage
          </Link>
        </motion.div>

        {/* Footer note */}
        <motion.p
          variants={fadeUp(0.42)}
          initial="hidden"
          animate="visible"
          className="mt-10 text-[11px] text-[#aaa] tracking-wide"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Need help?{" "}
          <a
            href="mailto:hello@veilcodestudio.com"
            className="underline underline-offset-2 hover:text-[#777] transition-colors"
          >
            Contact us
          </a>
        </motion.p>
      </div>
    </main>
  );
}