"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stagger, useReveal } from "@/lib/motion";
import { PROJECTS, type FilterKey } from "@/constants/projects";
import { WorkFilters } from "./WorkFilters";
import { FeaturedCard } from "./FeaturedCard";
import { ProjectCard } from "./ProjectCard";

/* ─── EMPTY STATE ─────────────────────────────────────────────────────────── */

function EmptyState({ filter }: { filter: FilterKey }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y:  0 }}
      exit={{    opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="col-span-full flex flex-col items-center justify-center
        py-24 text-center"
    >
      <span className="text-4xl mb-4 text-ink-faint" aria-hidden>◎</span>
      <h4 className="font-display text-xl font-bold text-ink mb-2">
        No projects yet
      </h4>
      <p className="font-sans text-sm text-ink-muted max-w-[320px]">
        We don&apos;t have published case studies for{" "}
        <span className="text-ink capitalize">{filter}</span> yet — but we&apos;re
        working on them. Check back soon.
      </p>
    </motion.div>
  );
}

/* ─── PORTFOLIO GRID ──────────────────────────────────────────────────────── */

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [ref, inView] = useReveal();

  /* Filter logic */
  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.service === activeFilter);

  /* Split: featured first, rest go to grid */
  const featured  = filtered.find((p) => p.featured) ?? filtered[0] ?? null;
  const gridItems = filtered.filter((p) => p !== featured);

  return (
    <>
      {/* Sticky filter bar */}
      <WorkFilters active={activeFilter} onChange={setActiveFilter} />

      {/* Content */}
      <section className="py-16 px-6 md:px-10">
        <div
          ref={ref}
          className="max-w-300 mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{    opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.length === 0 ? (
                <div className="grid">
                  <EmptyState filter={activeFilter} />
                </div>
              ) : (
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="space-y-6"
                >
                  {/* Featured card */}
                  {featured && <FeaturedCard project={featured} />}

                  {/* Grid */}
                  {gridItems.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {gridItems.map((p, i) => (
                        <ProjectCard key={p.slug} project={p} index={i} />
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}