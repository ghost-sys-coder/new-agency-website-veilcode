"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LogoMark, WordMark } from "@/components/extras/Primitives";
import Link from "next/link";
import { Button } from "../ui/button";
import { MobileDrawer } from "../extras/MobileDrawer";
import { NAV_LINKS } from "@/constants";


function DesktopNavLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="relative group font-sans text-sm font-normal tracking-wide
        text-ink-muted transition-colors duration-200
        hover:text-ink no-underline"
    >
      {label}
      <span
        className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand
          transition-all duration-250 group-hover:w-full"
      />
    </a>
  );
}

/* ─── HAMBURGER BUTTON ────────────────────────────────────────────────────── */

function HamburgerButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="relative flex flex-col justify-center items-center
        size-10 rounded-md border border-line bg-transparent
        cursor-pointer transition-colors duration-200
        hover:border-line-hi hover:bg-surface-hi
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-brand focus-visible:ring-offset-2
        focus-visible:ring-offset-base"
    >
      <span
        className={`block h-[1.5px] w-5 bg-ink-muted rounded-full
          transition-all duration-300 origin-center
          ${open ? "translate-y-0.75 rotate-45" : "-translate-y-0.75"}`}
      />
      <span
        className={`block h-[1.5px] w-5 bg-ink-muted rounded-full
          transition-all duration-300
          ${open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`}
      />
      <span
        className={`block h-[1.5px] w-5 bg-ink-muted rounded-full
          transition-all duration-300 origin-center
          ${open ? "-translate-y-0.75 -rotate-45" : "translate-y-0.75"}`}
      />
    </Button>
  );
}





export function Nav() {
  const pathname = usePathname();

  const [scrolled,  setScrolled]  = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  if (pathname === "/start" || pathname.includes("/newsletter")) return null;
  
  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-40 flex items-center justify-between
          h-18 px-6 md:px-10 transition-all duration-400
          ${
            scrolled
              ? "bg-base/90 backdrop-blur-xl border-b border-line"
              : "bg-transparent"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline shrink-0">
          <LogoMark size={32} />
          <WordMark />
        </Link>

        {/* Desktop links — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
          {NAV_LINKS.map(({ label, href }) => (
            <DesktopNavLink key={label} label={label} href={href} />
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <Link href="/start"
            className="hidden md:inline-flex items-center gap-1.5
              font-sans text-[13px] font-medium px-5 py-2.5 rounded-lg
              border border-brand text-brand no-underline
              hover:bg-brand hover:text-base
              hover:shadow-[0_0_20px_var(--color-brand-glow)]
              transition-all duration-200">
            Start a Project →
          </Link>

          {/* Hamburger — visible on mobile only */}
          <div className="md:hidden">
            <HamburgerButton
              open={drawerOpen}
              onClick={() => setDrawerOpen((v) => !v)}
            />
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}