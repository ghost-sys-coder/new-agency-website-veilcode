import { motion } from "framer-motion";
import { PrimaryButton, GhostButton } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import Link from "next/link";


export function ServiceDeepDiveCard({
  data,
  flipped,
}: {
  data: ServiceDeepDiveData;
  flipped: boolean;
}) {
  const [ref, inView] = useReveal();
  const { classes: c } = data;

  return (
    <section
      id={data.id}
      className={`py-28 px-6 md:px-10 border-t border-line
        ${flipped ? "bg-surface" : "bg-base"}`}
    >
      <div className="max-w-300 mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section label row */}
          <motion.div
            variants={fadeUp()}
            className="flex items-center gap-4 mb-12"
          >
            <span className={`font-mono text-[13px] tracking-widest ${c.accent}`}>
              {data.number}
            </span>
            <div className={`h-px w-12 bg-current ${c.accent}`} />
            <span
              className={`font-mono text-[10px] tracking-widest uppercase
                px-2.5 py-1 rounded border ${c.dimBg} ${c.border} ${c.accent}`}
            >
              {data.tagline}
            </span>
          </motion.div>

          {/* Headline row */}
          <motion.div
            variants={fadeUp(0.08)}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
          >
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] font-extrabold
              tracking-tight text-ink leading-none">
              <span className={`${c.accent} drop-shadow-[0_0_24px_currentColor]`}>
                {data.icon}
              </span>{" "}
              {data.title}
            </h2>

            {/* Stat callout */}
            <div className={`shrink-0 px-7 py-5 rounded-xl border ${c.border} ${c.dimBg}`}>
              <div className={`font-display font-extrabold text-[42px] tracking-tight
                leading-none mb-1 ${c.metricText}`}>
                {data.metric}
              </div>
              <div className="font-sans text-sm font-medium text-ink">
                {data.metricLabel}
              </div>
              <div className="font-sans text-xs text-ink-muted mt-0.5">
                {data.metricSub}
              </div>
            </div>
          </motion.div>

          {/* Two-column body */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 mb-16">

            {/* Left — intro, challenge, approach */}
            <motion.div variants={fadeUp(0.12)} className="space-y-8">
              <p className="font-sans text-[17px] font-light text-ink leading-[1.8]">
                {data.intro}
              </p>

              <div>
                <h4 className="font-display text-[15px] font-bold text-ink mb-2 tracking-wide">
                  The Challenge
                </h4>
                <div className={`w-8 h-0.5 mb-4 ${c.divider}`} />
                <p className="font-sans text-sm text-ink-muted leading-relaxed">
                  {data.challenge}
                </p>
              </div>

              <div>
                <h4 className="font-display text-[15px] font-bold text-ink mb-2 tracking-wide">
                  Our Approach
                </h4>
                <div className={`w-8 h-0.5 mb-4 ${c.divider}`} />
                <p className="font-sans text-sm text-ink-muted leading-relaxed">
                  {data.approach}
                </p>
              </div>
            </motion.div>

            {/* Right — deliverables */}
            <motion.div variants={fadeUp(0.18)}>
              <h4 className="font-mono text-[11px] tracking-widest uppercase text-ink-faint mb-5">
                What You Get
              </h4>
              <ul className="space-y-0 list-none p-0 m-0 border border-line rounded-xl overflow-hidden">
                {data.deliverables.map((d, i) => (
                  <li
                    key={d.title}
                    className={`p-5 transition-colors duration-200 hover:bg-surface-hi
                      ${i < data.deliverables.length - 1 ? "border-b border-line" : ""}
                      ${flipped ? "bg-base" : "bg-surface"}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`mt-1 size-1.5 rounded-full shrink-0 bg-current ${c.accent}`} aria-hidden />
                      <div>
                        <p className="font-sans text-sm font-medium text-ink mb-0.5">
                          {d.title}
                        </p>
                        <p className="font-sans text-xs text-ink-muted leading-relaxed">
                          {d.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Tech stack */}
          <motion.div variants={fadeUp(0.22)}>
            <p className="font-mono text-[11px] tracking-widest uppercase text-ink-faint mb-4">
              Technologies & Tools
            </p>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {data.stack.map((tech) => (
                <span
                  key={tech}
                  className={`font-mono text-[11px] tracking-wide uppercase
                    px-3 py-1.5 rounded border
                    ${c.stackBg} ${c.stackBorder} ${c.accent}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA row */}
          <motion.div
            variants={fadeUp(0.28)}
            className="flex flex-wrap items-center gap-4"
          >
            <PrimaryButton className="text-[14px]! px-7! py-3.5!">
              <Link href="/start">Start a {data.title} Project →</Link>
            </PrimaryButton>
            <GhostButton className="text-[14px]! px-7! py-3.5!">
              <Link href={"/work"}>See Related Work</Link>
            </GhostButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}