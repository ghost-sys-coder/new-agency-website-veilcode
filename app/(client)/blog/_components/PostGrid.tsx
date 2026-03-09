"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stagger } from "@/lib/motion";
import { FilterBar, type FilterState } from "./FilterBar";
import { PostCard } from "./PostCard";
import type { BlogPost } from "@/constants/blog";

/* ─── EMPTY STATE ─────────────────────────────────────────────────────────── */

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      key="empty"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{    opacity: 0, y: 16 }}
      className="col-span-full flex flex-col items-center gap-5 py-24 text-center"
    >
      <div className="size-16 rounded-2xl border border-line bg-surface
        flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
          aria-hidden className="text-ink-faint">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M21 21l-4.35-4.35" stroke="currentColor"
            strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 11h6M11 8v6" stroke="currentColor"
            strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <p className="font-display text-lg font-bold text-ink mb-1">
          No posts match that filter
        </p>
        <p className="font-sans text-sm text-ink-muted">
          Try a different category or clear the tag filter.
        </p>
      </div>
      <button
        onClick={onReset}
        className="font-sans text-sm text-brand border border-brand-border
          bg-brand-dim px-5 py-2.5 rounded-lg cursor-pointer
          hover:bg-brand hover:text-base transition-all duration-200"
      >
        Clear filters
      </button>
    </motion.div>
  );
}

/* ─── POST GRID ───────────────────────────────────────────────────────────── */

interface PostGridProps {
  /** All posts EXCEPT the featured one shown above */
  posts:      BlogPost[];
  categories: string[];
  tags:       string[];
}

export function PostGrid({ posts, categories, tags }: PostGridProps) {
  const [filter, setFilter] = useState<FilterState>({
    category: "All",
    tag:      "",
  });

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const catOk = filter.category === "All" || p.category === filter.category;
      const tagOk = filter.tag === "" || p.tags.includes(filter.tag);
      return catOk && tagOk;
    });
  }, [posts, filter]);

  function reset() {
    setFilter({ category: "All", tag: "" });
  }

  return (
    <section>
      {/* Sticky filter bar */}
      <FilterBar
        categories={categories}
        tags={tags}
        state={filter}
        onChange={setFilter}
        totalCount={posts.length}
        filtered={filtered.length}
      />

      {/* Grid */}
      <div className="max-w-300 mx-auto px-6 md:px-10 py-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filter.category}-${filter.tag}`}
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.length > 0 ? (
              filtered.map((p, i) => (
                <PostCard key={p.slug} post={p} index={i} />
              ))
            ) : (
              <EmptyState onReset={reset} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}