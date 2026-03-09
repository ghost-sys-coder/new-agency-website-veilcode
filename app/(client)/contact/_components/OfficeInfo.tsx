"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { ContactDetailRow } from "./ContactDetailRow";

/* ─── ICONS ───────────────────────────────────────────────────────────────── */

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.5 11.5 0 003.6.6 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 012 5a1 1 0 011-1h3.5a1 1 0 011 1 11.5 11.5 0 00.6 3.6 1 1 0 01-.25 1L6.6 10.8z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        stroke="currentColor" strokeWidth="1.5"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 4l16 16M4 20L20 4"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.912.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── DATA ────────────────────────────────────────────────────────────────── */

export const CONTACT_DETAILS = [
  {
    icon: <EmailIcon />,
    label: "Email Us",
    value: "hello@veilcode.io",
    href: "mailto:hello@veilcode.io",
    sub: "For project enquiries & partnerships",
  },
  {
    icon: <PhoneIcon />,
    label: "Call Us",
    value: "+256 700 000 000",
    href: "tel:+256700000000",
    sub: "Mon–Fri, 9am–6pm EAT",
  },
  {
    icon: <MapPinIcon />,
    label: "Our Studio",
    value: "Kampala, Uganda",
    href: "https://maps.google.com",
    sub: "Plot 12, Kololo Hill Drive",
  },
  {
    icon: <ClockIcon />,
    label: "Office Hours",
    value: "Mon – Fri, 9am – 6pm",
    href: null,
    sub: "East Africa Time (UTC+3)",
  },
] as const;

const SOCIALS = [
  { label: "LinkedIn",   icon: <LinkedInIcon />, href: "#" },
  { label: "Twitter / X", icon: <TwitterIcon />, href: "#" },
  { label: "GitHub",     icon: <GitHubIcon />,   href: "#" },
] as const;




/* ─── OFFICE INFO ─────────────────────────────────────────────────────────── */

export function OfficeInfo() {
  const [ref, inView] = useReveal();

  return (
    <motion.aside
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="lg:col-span-5 flex flex-col gap-6"
    >
      {/* Header */}
      <motion.div variants={fadeUp()}>
        <p className="font-mono text-[11px] tracking-widest uppercase text-ink-faint mb-4">
          Contact Details
        </p>
        <div className="flex flex-col gap-3">
          {CONTACT_DETAILS.map((d) => (
            <ContactDetailRow key={d.label} detail={d} />
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={fadeUp(0.1)}
        className="h-px bg-line"
      />

      {/* Social links */}
      <motion.div variants={fadeUp(0.14)}>
        <p className="font-mono text-[11px] tracking-widest uppercase text-ink-faint mb-4">
          Follow Our Work
        </p>
        <div className="flex gap-2.5">
          {SOCIALS.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg
                border border-line bg-surface-hi text-ink-muted
                hover:border-brand-border hover:bg-brand-dim hover:text-brand
                transition-all duration-200 no-underline font-sans text-sm"
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={fadeUp(0.18)}
        className="h-px bg-line"
      />

      {/* Response promise */}
      <motion.div
        variants={fadeUp(0.22)}
        className="relative overflow-hidden rounded-xl border border-line bg-surface p-6"
      >
        {/* Corner glow */}
        <div
          aria-hidden
          className="absolute top-0 right-0 w-32 h-32 pointer-events-none
            bg-[radial-gradient(circle_at_top_right,var(--color-brand-dim),transparent)]"
        />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="size-2 rounded-full bg-brand
              shadow-[0_0_8px_var(--color-brand)]
              animate-[pulse-glow_2s_ease-in-out_infinite]" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-brand">
              Our Promise
            </span>
          </div>
          <p className="font-sans text-sm text-ink-muted leading-relaxed">
            Every enquiry gets a real, considered response — not a template.
            We&apos;ll tell you honestly whether we&apos;re the right fit and, if we&apos;re not,
            point you somewhere that is.
          </p>
        </div>
      </motion.div>
    </motion.aside>
  );
}