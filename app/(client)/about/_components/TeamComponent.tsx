"use client";

import { motion } from "framer-motion";
import { SectionTag, AccentLine } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { TeamCard } from "./TeamCard";


const TEAM: TeamMember[] = [
  {
    initials:  "TF",
    name:      "Tamale Frank",
    role:      "Founder & Lead Engineer",
    bio:       "Full-stack engineer with a decade of experience building products that scale. Former engineer at two YC-backed startups. Believes the best code is the code users never have to think about.",
    skills:    ["Next.js", "TypeScript", "System Design", "AWS"],
    linkedin:  "#",
    twitter:   "#",
    accentClass: "text-brand",
    avatarBg:    "from-brand/30 to-brand/5 border-brand-border",
  },
  {
    initials:  "AN",
    name:      "Aisha Nakato",
    role:      "Creative Director",
    bio:       "Designer who codes. Aisha brings a rare fluency across brand identity, product design, and frontend implementation — making sure VeilCode's work looks as good as it performs.",
    skills:    ["Figma", "UI/UX", "Design Systems", "Framer"],
    linkedin:  "#",
    twitter:   "#",
    accentClass: "text-svc-mobile",
    avatarBg:    "from-svc-mobile/30 to-svc-mobile/5 border-svc-mobile-border",
  },
  {
    initials:  "RM",
    name:      "Ronald Mugisha",
    role:      "Head of Data & AI",
    bio:       "Data engineer and ML practitioner who has built pipelines processing billions of rows. Ronald leads our analytics and AI Automation practice — turning data from a liability into a strategic asset.",
    skills:    ["Python", "LangChain", "BigQuery", "dbt"],
    linkedin:  "#",
    twitter:   "#",
    accentClass: "text-svc-data",
    avatarBg:    "from-svc-data/30 to-svc-data/5 border-svc-data-border",
  },
  {
    initials:  "FK",
    name:      "Faith Kyomuhendo",
    role:      "Growth & Marketing Lead",
    bio:       "Performance marketer and strategist with a track record of scaling brands from zero to regional recognition. Faith leads client growth strategy and makes sure our clients' audiences actually find them.",
    skills:    ["Meta Ads", "SEO", "Content Strategy", "Analytics"],
    linkedin:  "#",
    twitter:   "#",
    accentClass: "text-svc-social",
    avatarBg:    "from-svc-social/30 to-svc-social/5 border-svc-social-border",
  },
] as const;



export function Team() {
  const [ref, inView] = useReveal();

  return (
    <section id="team" className="py-32 px-6 md:px-10">
      <div className="max-w-300 mx-auto">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={fadeUp()}>
            <SectionTag>The Team</SectionTag>
            <AccentLine />
          </motion.div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <motion.h2
              variants={fadeUp(0.1)}
              className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold
                tracking-tight text-ink leading-[1.1] max-w-120"
            >
              The Minds Behind{" "}
              <span className="text-brand drop-shadow-[0_0_24px_var(--color-brand-glow)]">
                the Work
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp(0.18)}
              className="font-sans text-[15px] text-ink-muted max-w-90 leading-relaxed"
            >
              A small, senior team. No account managers in the middle — you work
              directly with the people building your product.
            </motion.p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </motion.div>

        {/* Join the team nudge */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center
            gap-4 py-8 px-10 rounded-xl border border-line bg-surface
            text-center sm:text-left"
        >
          <div>
            <p className="font-sans text-sm font-medium text-ink mb-0.5">
              Want to join this team?
            </p>
            <p className="font-sans text-sm text-ink-muted">
              We&apos;re always looking for exceptional people who care about craft.
            </p>
          </div>
          <a
            href="/careers"
            className="shrink-0 inline-flex items-center gap-2 font-sans text-sm
              font-medium text-brand border border-brand-border
              px-5 py-2.5 rounded-md no-underline
              hover:bg-brand-dim transition-all duration-200"
          >
            View Open Roles →
          </a>
        </motion.div>
      </div>
    </section>
  );
}