import { motion } from "framer-motion";
export function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = Math.round((step / total) * 100);
  return (
    <div className="w-full h-0.75 bg-line rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-brand rounded-full
          shadow-[0_0_8px_var(--color-brand-glow)]"
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}