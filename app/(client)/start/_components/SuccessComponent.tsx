import Link from "next/link";
import { motion } from "framer-motion";


export function SuccessScreen({ name }: { name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center py-12 px-4"
    >
      {/* Animated check */}
      <div className="relative size-20 mb-8">
        <div className="absolute inset-0 rounded-full bg-brand-dim border border-brand-border
          animate-[pulse-glow_2s_ease-in-out_infinite]" />
        <div className="relative size-20 rounded-full bg-brand-dim border border-brand-border
          flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
            <motion.path d="M5 13l4 4L19 7"
              stroke="var(--color-brand)" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </svg>
        </div>
      </div>

      <h2 className="font-display text-[clamp(26px,4vw,44px)] font-extrabold
        tracking-tight text-ink mb-4">
        We&apos;ve got it,{" "}
        <span className="text-brand drop-shadow-[0_0_20px_var(--color-brand-glow)]">
          {name.split(" ")[0]}!
        </span>
      </h2>
      <p className="font-sans text-[16px] text-ink-muted leading-relaxed
        max-w-115 mb-10">
        Your project brief is with us. Expect a reply within one business day
        — usually the same afternoon.
      </p>

      {/* What happens next */}
      <div className="w-full max-w-110 rounded-2xl border border-line
        bg-surface text-left overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-line flex items-center gap-2">
          <div className="size-2 rounded-full bg-brand
            shadow-[0_0_8px_var(--color-brand)]" />
          <span className="font-mono text-[11px] tracking-widest uppercase text-ink-muted">
            What happens next
          </span>
        </div>
        {[
          { step: "01", title: "Review",   desc: "We read your brief and scope the engagement." },
          { step: "02", title: "Proposal", desc: "You receive a tailored proposal within 24 hours." },
          { step: "03", title: "Call",     desc: "We jump on a 30-min discovery call to align." },
          { step: "04", title: "Build",    desc: "We start — on time and on scope." },
        ].map(({ step, title, desc }) => (
          <div key={step} className="flex items-start gap-4 px-6 py-4
            border-b border-line last:border-0 hover:bg-surface-hi
            transition-colors duration-150">
            <span className="font-mono text-[11px] text-brand shrink-0 mt-0.5">
              {step}
            </span>
            <div>
              <p className="font-sans text-[13px] font-medium text-ink">{title}</p>
              <p className="font-sans text-xs text-ink-muted">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/"
          className="font-sans text-sm text-ink-muted border border-line
            bg-surface px-6 py-3 rounded-xl no-underline
            hover:border-line-hi hover:text-ink transition-all duration-200">
          ← Back to Home
        </Link>
        <a href="/work"
          className="font-sans text-sm text-brand border border-brand-border
            bg-brand-dim px-6 py-3 rounded-xl no-underline
            hover:bg-brand hover:text-base transition-all duration-200">
          See Our Work →
        </a>
      </div>
    </motion.div>
  );
}
