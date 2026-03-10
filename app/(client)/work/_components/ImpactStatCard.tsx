import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";


export function ImpactStatCard({
  stat,
  index,
}: {
  stat: WorkImpactStats;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp(index * 0.08)}
      className={`flex flex-col rounded-xl border p-6
        transition-all duration-200 hover:bg-surface-hi
        bg-surface ${stat.border}`}
    >
      <div
        className={`font-display font-extrabold text-[42px] tracking-tight
          leading-none mb-2 drop-shadow-[0_0_20px_currentColor] ${stat.accent}`}
      >
        {stat.metric}
      </div>
      <div className="font-sans text-sm font-medium text-ink mb-0.5">
        {stat.label}
      </div>
      <div className="font-sans text-xs text-ink-faint capitalize">
        {stat.sub}
      </div>
    </motion.div>
  );
}