"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            delay
        }
    },
});

export default function NewsletterInvalid() {
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
            {/* Broken link / invalid icon */}
            <rect x="4" y="8" width="28" height="20" rx="3" stroke="#1a1a1a" strokeWidth="1.8" fill="none"/>
            <path d="M4 11l14 10 14-10" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            {/* X badge */}
            <circle cx="27" cy="26" r="7" fill="#f9f8f6" stroke="#f9f8f6" strokeWidth="2"/>
            <circle cx="27" cy="26" r="6" fill="#c0392b"/>
            <motion.path
              d="M24.5 23.5l5 5M29.5 23.5l-5 5"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.45, delay: 0.5, ease: "easeOut" }}
            />
          </svg>
        </motion.div>

        {/* Tag */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full
            bg-red-50 border border-red-200"
        >
          <span className="size-1.5 rounded-full bg-red-500 inline-block" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-red-700">
            Invalid Link
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
          This link isn&apos;t valid.
        </motion.h1>

        <motion.p
          variants={fadeUp(0.26)}
          initial="hidden"
          animate="visible"
          className="text-[15px] text-[#555] leading-relaxed mb-10 max-w-sm mx-auto"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          The confirmation link you used is malformed or doesn&apos;t exist.
          This can happen if the link was copied incorrectly. Try subscribing
          again and we&apos;ll send you a fresh one.
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