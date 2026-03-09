import { useRef } from "react";
import { useInView } from "framer-motion";
import type { Variants } from "framer-motion";

/* ─── ANIMATION VARIANTS ──────────────────────────────────────────────────── */
export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const fadeUp = (delay = 0): Variants => ({
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const fadeIn = (delay = 0): Variants => ({
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay } },
});

export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const slideInLeft: Variants = {
  hidden:  { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:    { x: "-100%", opacity: 0, transition: { duration: 0.35, ease: [0.64, 0, 0.78, 0] } },
};

export const overlayVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit:    { opacity: 0, transition: { duration: 0.3 } },
};

/* ─── HOOKS ───────────────────────────────────────────────────────────────── */

/** Returns [ref, inView] — triggers once when element enters viewport */
export function useReveal(margin = "-80px") {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: margin as `${number}px` });
  return [ref, inView] as const;
}