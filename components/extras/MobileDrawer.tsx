import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slideInLeft, overlayVariants } from "@/lib/motion";
import Link from "next/link";
import { LogoMark, PrimaryButton, WordMark } from "./Primitives";
import { NAV_LINKS } from "@/constants";

export function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  /* Lock scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 z-40 bg-base/80 backdrop-blur-sm"
            aria-hidden
          />

          {/* Drawer panel */}
          <motion.aside
            key="drawer"
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 z-50 flex flex-col
              h-full w-75 max-w-[85vw]
              bg-surface border-r border-line
              shadow-[4px_0_40px_rgba(0,0,0,0.6)]"
            aria-label="Mobile navigation"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 h-18 border-b border-line shrink-0">
              <Link href="/" className="flex items-center gap-2.5 no-underline" onClick={onClose}>
                <LogoMark size={28} />
                <WordMark />
              </Link>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex items-center justify-center size-8 rounded-md
                  border border-line text-ink-muted
                  hover:border-line-hi hover:text-ink
                  transition-colors duration-200 cursor-pointer
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-brand"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-4 py-6 gap-1 flex-1 overflow-y-auto">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-between px-4 py-3.5 rounded-lg
                    font-sans text-base font-normal text-ink-muted
                    hover:text-ink hover:bg-surface-hi
                    transition-colors duration-150 no-underline group"
                >
                  <span>{label}</span>
                  <span className="text-ink-faint transition-colors duration-150 group-hover:text-brand text-sm">
                    →
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Drawer footer CTA */}
            <div className="px-6 py-6 border-t border-line shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.35 }}
              >
                <PrimaryButton
                  className="w-full justify-center py-3!"
                  onClick={onClose}
                >
                  <Link href={"/start"}>Start a Project →</Link>
                </PrimaryButton>
              </motion.div>
              <p className="text-center font-mono text-[10px] tracking-widest uppercase text-ink-faint mt-4">
                hello@veilcode.io
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}