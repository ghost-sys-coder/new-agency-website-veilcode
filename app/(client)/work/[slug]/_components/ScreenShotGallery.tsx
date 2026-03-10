"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTag, AccentLine } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";
import { ScreenshotPlaceholder } from "./CaseStudyHero";


function Shot({
  shot,
  accent,
  dimBg,
  border,
}: {
  shot:   ProjectScreenshot;
  accent: string;
  dimBg:  string;
  border: string;
}) {
  if (shot.src) {
    return (
      <figure className="w-full">
        <div className="relative w-full overflow-hidden rounded-xl border border-line
          bg-surface-hi min-h-60 max-w-5xl mx-auto">
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="object-contain object-fill"
          />
        </div>
        <figcaption className="mt-2.5 font-sans text-xs text-ink-faint text-center">
          {shot.caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <ScreenshotPlaceholder
      alt={shot.alt}
      caption={shot.caption}
      accent={accent}
      dimBg={dimBg}
      border={border}
    />
  );
}

// screenshot gallery

export function ScreenshotGallery({ project: p }: { project: Project }) {
  const [ref, inView] = useReveal("-40px");
  const { classes: c } = p;

  // Skip hero shot (index 0) — already rendered in CaseStudyHero
  const shots = p.screenshots.slice(1);
  if (shots.length === 0) return null;

  // Group consecutive "half" shots into pairs; wide shots stand alone
  type Group =
    | { type: "wide"; shot: ProjectScreenshot }
    | { type: "pair"; shots: [ProjectScreenshot, ProjectScreenshot] };

  const groups: Group[] = [];
  let i = 0;
  while (i < shots.length) {
    if (
      shots[i].size === "half" &&
      i + 1 < shots.length &&
      shots[i + 1].size === "half"
    ) {
      groups.push({ type: "pair", shots: [shots[i], shots[i + 1]] });
      i += 2;
    } else {
      groups.push({ type: "wide", shot: shots[i] });
      i += 1;
    }
  }

  return (
    <section className="py-24 px-6 md:px-10 bg-surface border-y border-line">
      <div className="max-w-300 mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={fadeUp()}>
            <SectionTag>Project Screenshots</SectionTag>
            <AccentLine />
          </motion.div>

          {/* Gallery */}
          <div className="space-y-6">
            {groups.map((group, gi) =>
              group.type === "wide" ? (
                <motion.div key={gi} variants={fadeUp(gi * 0.07)}>
                  <Shot
                    shot={group.shot}
                    accent={c.accent}
                    dimBg={c.dimBg}
                    border={c.border}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={gi}
                  variants={fadeUp(gi * 0.07)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto"
                >
                  {group.shots.map((shot, si) => (
                    <Shot
                      key={si}
                      shot={shot}
                      accent={c.accent}
                      dimBg={c.dimBg}
                      border={c.border}
                    />
                  ))}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}