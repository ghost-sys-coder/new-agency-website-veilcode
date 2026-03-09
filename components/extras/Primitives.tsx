"use client";

import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

/* ─── LOGO MARK ───────────────────────────────────────────────────────────── */

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <div
      className="rounded-md flex items-center justify-center shrink-0
        bg-linear-to-br from-brand to-brand/25 shadow-[0_0_16px_var(--color-brand-glow)]"
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.5}
        height={size * 0.5}
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
      >
        <path
          d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z"
          stroke="var(--color-base)"
          strokeWidth="1.5"
        />
        <path d="M8 5L11 6.75V10.25L8 12L5 10.25V6.75L8 5Z" fill="var(--color-base)" />
      </svg>
    </div>
  );
}

export function WordMark() {
  return (
    <span className="font-display text-xl font-bold text-ink tracking-tight">
      veil<span className="text-brand">code</span>
    </span>
  );
}

/* ─── ACCENT LINE ─────────────────────────────────────────────────────────── */

export function AccentLine({ width = 48 }: { width?: number }) {
  return (
    <div className="flex items-center gap-2 mb-4" aria-hidden>
      <div
        className="h-0.5 bg-linear-to-r from-brand to-transparent"
        style={{ width }}
      />
      <div className="size-1 rounded-full bg-brand shadow-[0_0_8px_var(--color-brand)]" />
    </div>
  );
}

/* ─── SECTION TAG ─────────────────────────────────────────────────────────── */

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block font-mono text-[11px] tracking-[0.12em] uppercase
        text-brand bg-brand-dim border border-brand-border
        px-3 py-1 rounded-lg mb-5 rounded-lg"
    >
      {children}
    </span>
  );
}

/* ─── BUTTONS ─────────────────────────────────────────────────────────────── */

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function PrimaryButton({ children, className = "", ...props }: BtnProps) {
  return (
    <button
      {...props}
      className={`group inline-flex items-center gap-2 px-7 py-3.5 rounded-md
        font-sans text-sm font-medium tracking-wide cursor-pointer
        border border-brand text-brand bg-transparent
        transition-all duration-200 outline-none
        hover:bg-brand hover:text-base hover:shadow-[0_0_24px_var(--color-brand-glow)]
        focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
        focus-visible:ring-offset-base
        ${className}`}
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, className = "", ...props }: BtnProps) {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-md
        font-sans text-sm font-medium cursor-pointer
        border border-line text-ink-muted bg-transparent
        transition-all duration-200 outline-none
        hover:border-line-hi hover:text-ink hover:bg-surface-hi
        focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
        focus-visible:ring-offset-base
        ${className}`}
    >
      {children}
    </button>
  );
}

/* ─── ANIMATED ARROW ──────────────────────────────────────────────────────── */

export function AnimatedArrow({ hovered }: { hovered: boolean }) {
  return (
    <motion.span
      animate={{ x: hovered ? 4 : 0 }}
      transition={{ duration: 0.2 }}
      aria-hidden
    >
      →
    </motion.span>
  );
}

/* ─── GRID BACKGROUND ─────────────────────────────────────────────────────── */

export function GridBg({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-40
        bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)]
        bg-size-[60px_60px]
        ${className}`}
    />
  );
}

/* ─── GLOW ORB ────────────────────────────────────────────────────────────── */

export function GlowOrb({
  color,
  size = 500,
  top,
  left,
  right,
  bottom,
  delay = "0s",
}: {
  color: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: string;
}) {
  const pos: Record<string, string | undefined> = { top, left, right, bottom };
  const posStyle = Object.fromEntries(
    Object.entries(pos).filter(([, v]) => v !== undefined)
  );

  return (
    <div
      aria-hidden
      className="absolute rounded-full pointer-events-none animate-pulse-glow"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        animationDelay: delay,
        ...posStyle,
      }}
    />
  );
}