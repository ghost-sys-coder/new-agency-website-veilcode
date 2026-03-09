import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Link from "next/link";

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="size-8 flex items-center justify-center rounded-md
        border border-line text-ink-faint
        hover:border-brand-border hover:text-brand
        transition-all duration-200 no-underline"
    >
      {children}
    </Link>
  );
}

/* LinkedIn icon */
function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/* Twitter / X icon */
function TwitterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 4l16 16M4 20L20 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}



export function TeamCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {

  return (
    <motion.article
      variants={fadeUp(index * 0.1)}
      className="group relative rounded-xl bg-surface border border-line
        overflow-hidden transition-all duration-300
        hover:bg-surface-hi hover:border-line-hi
        hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
    >
      {/* Top bar — accent colour on hover */}
      <div
        aria-hidden
        className={`h-0.5 w-0 group-hover:w-full transition-all duration-500
          bg-linear-to-r from-current to-transparent ${member.accentClass}`}
      />

      <div className="p-8">
        {/* Avatar + socials row */}
        <div className="flex items-start justify-between mb-6">
          {/* Avatar */}
          <div
            className={`size-16 rounded-xl border flex items-center justify-center
              bg-linear-to-br font-display font-bold text-xl tracking-tight
              transition-transform duration-300 group-hover:scale-105
              ${member.accentClass} ${member.avatarBg}`}
          >
            {member.initials}
          </div>

          {/* Social links */}
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <SocialLink href={member.linkedin} label={`${member.name} on LinkedIn`}>
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href={member.twitter} label={`${member.name} on Twitter`}>
              <TwitterIcon />
            </SocialLink>
          </div>
        </div>

        {/* Name + role */}
        <h3 className="font-display text-xl font-bold tracking-tight text-ink mb-1">
          {member.name}
        </h3>
        <p className={`font-mono text-[11px] tracking-widest uppercase mb-4 ${member.accentClass}`}>
          {member.role}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-line mb-5" />

        {/* Bio */}
        <p className="font-sans text-sm text-ink-muted leading-relaxed mb-6">
          {member.bio}
        </p>

        {/* Skill tags */}
        <ul className="flex flex-wrap gap-2 list-none p-0 m-0" aria-label="Skills">
          {member.skills.map((skill) => (
            <li
              key={skill}
              className="font-mono text-[10px] tracking-wide uppercase
                px-2.5 py-1 rounded border border-line bg-surface-hi text-ink-faint"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}