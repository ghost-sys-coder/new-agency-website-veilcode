"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export type FilterState = {
  category: string; // "All" or a category name
  tag:      string; // "" or a tag name
};

/* ─── CATEGORY STYLES ─────────────────────────────────────────────────────── */
// Cycles through service accent tokens so each category gets a distinct colour

const CATEGORY_ACCENTS: Record<string, { active: string; dot: string }> = {
  "All":           { active: "bg-brand-dim border-brand-border text-brand",             dot: "bg-brand"        },
  "Engineering":   { active: "bg-svc-web-dim border-svc-web-border text-svc-web",       dot: "bg-svc-web"      },
  "AI & Automation": { active: "bg-svc-data-dim border-svc-data-border text-svc-data",  dot: "bg-svc-data"     },
  "Design":        { active: "bg-svc-mobile-dim border-svc-mobile-border text-svc-mobile", dot: "bg-svc-mobile" },
};

function accentFor(cat: string) {
  return CATEGORY_ACCENTS[cat] ?? CATEGORY_ACCENTS["Engineering"];
}

/* ─── FILTER BAR ──────────────────────────────────────────────────────────── */

interface FilterBarProps {
  categories: string[];
  tags:       string[];
  state:      FilterState;
  onChange:   (next: FilterState) => void;
  totalCount: number;
  filtered:   number;
}

export function FilterBar({
  categories,
  tags,
  state,
  onChange,
  totalCount,
  filtered,
}: FilterBarProps) {
  const allCats = ["All", ...categories];

  function setCategory(cat: string) {
    onChange({ category: cat, tag: "" });
  }

  function toggleTag(tag: string) {
    onChange({ ...state, tag: state.tag === tag ? "" : tag });
  }

  return (
    <div className="sticky top-18 z-20 border-b border-line bg-base/90 backdrop-blur-md">
      <div className="max-w-300 mx-auto px-6 md:px-10 py-4 space-y-3">

        {/* ── Category row ─────────────────────────────────────────────── */}
        <div className="flex items-center gap-2 flex-wrap"
          aria-label="Filter by category">
          {allCats.map((cat) => {
            const isActive = state.category === cat;
            const styles   = accentFor(cat);
            return (
              <Button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setCategory(cat)}
                className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-lg
                  font-sans text-[13px] font-medium border cursor-pointer
                  transition-all duration-200 outline-none
                  focus-visible:ring-2 focus-visible:ring-brand
                  ${isActive
                    ? styles.active
                    : "border-line bg-surface text-ink-faint hover:border-line-hi hover:text-ink-muted"
                  }`}
              >
                {/* Active dot */}
                {isActive && (
                  <motion.span
                    layoutId="blog-filter-dot"
                    className={`size-1.5 rounded-full ${styles.dot}`}
                    aria-hidden
                  />
                )}
                {cat}
                {/* Count badge */}
                {cat === "All" && (
                  <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded
                    ${isActive ? "bg-white/10" : "bg-surface-hi"}`}>
                    {totalCount}
                  </span>
                )}
              </Button>
            );
          })}

          {/* Result count — right side */}
          <div className="ml-auto font-mono text-[11px] tracking-widest uppercase
            text-ink-faint hidden sm:block">
            {filtered} {filtered === 1 ? "post" : "posts"}
          </div>
        </div>

        {/* ── Tag row ──────────────────────────────────────────────────── */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-mono text-[10px] tracking-widest uppercase
            text-ink-faint mr-1">
            Tags
          </span>
          {tags.map((tag) => {
            const isActive = state.tag === tag;
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`font-mono text-[10px] tracking-widest uppercase
                  px-2.5 py-1 rounded border cursor-pointer
                  transition-all duration-150 outline-none
                  focus-visible:ring-2 focus-visible:ring-brand
                  ${isActive
                    ? "bg-brand-dim border-brand-border text-brand"
                    : "border-line bg-surface text-ink-faint hover:border-line-hi hover:text-ink-muted"
                  }`}
              >
                {isActive && "× "}{tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}