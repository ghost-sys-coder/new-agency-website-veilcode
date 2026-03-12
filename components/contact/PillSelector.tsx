// components/contact/PillSelector.tsx
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PillSelectorProps<T extends string> {
  id: string;
  options: readonly T[];
  value: string;
  onChange: (value: T) => void;
  error?: string;
}

export function PillSelector<T extends string>({
  id,
  options,
  value,
  onChange,
  error,
}: PillSelectorProps<T>) {
  return (
    <div>
      <div
        id={id}
        role="group"
        className="flex flex-wrap gap-2.5"
      >
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt as T)}
            className={`font-sans text-sm px-4 py-2.5 rounded-lg border transition-all
              focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
              focus-visible:ring-offset-base outline-none cursor-pointer
              ${value === opt
                ? "bg-brand/10 border-brand text-brand font-medium"
                : "bg-surface-hi border-line text-ink-muted hover:border-line-hi hover:text-ink"
              }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-2 text-xs text-red-400"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}