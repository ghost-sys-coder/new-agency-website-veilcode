"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { ContactDetailRow } from "./ContactDetailRow";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { MapPinIcon } from "@/components/icons/MapPinIcon";
import { ClockIcon } from "@/components/icons/ClockIcon";


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
    value: "+256 750 242 627",
    href: "tel:+256750242627",
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
  { label: "Facebook",   icon: <FacebookIcon />, href: "https://facebook.com/veilcode" },
  { label: "Instagram", icon: <InstagramIcon />, href: "https://www.instagram.com/veilcodestudio" },
] as const;



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