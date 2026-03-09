import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/constants";
import { fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp(index * 0.05)}
      className={`border-b border-line last:border-b-0`}
    >
      <Button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-6
          py-6 text-left cursor-pointer bg-transparent border-none
          outline-none group focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-brand
          focus-visible:ring-offset-2 focus-visible:ring-offset-surface
          rounded-sm overflow-hidden"
      >
        <span className={`w-[90%] md:flex-1 text-wrap font-sans text-[15px] font-medium leading-snug
          transition-colors wrap-break-words duration-200
          ${isOpen ? "text-brand" : "text-ink group-hover:text-ink"}`}>
          {faq.q}
        </span>

        {/* +/− icon */}
        <span
          className={`shrink-0 size-7 rounded-md border flex items-center justify-center
            transition-all duration-200 font-mono text-lg leading-none
            ${isOpen
              ? "border-brand-border bg-brand-dim text-brand"
              : "border-line bg-surface-hi text-ink-faint group-hover:border-line-hi group-hover:text-ink-muted"
            }`}
          aria-hidden
        >
          {isOpen ? "−" : "+"}
        </span>
      </Button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm text-ink-muted leading-relaxed pb-6 pr-12">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}