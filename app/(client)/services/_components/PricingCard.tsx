import { motion } from "framer-motion";

import {
  PrimaryButton,
  GhostButton,
} from "@/components/extras/Primitives";
import { fadeUp } from "@/lib/motion";

export function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {

  return (
    <motion.div
      variants={fadeUp(index * 0.1)}
      className={`relative flex flex-col rounded-xl overflow-hidden
        transition-all duration-300
        ${
          tier.featured
            ? "bg-surface border-2 border-brand shadow-[0_0_48px_var(--color-brand-dim)] scale-[1.02]"
            : "bg-surface border border-line hover:border-line-hi hover:bg-surface-hi"
        }`}
    >
      {/* Featured top bar */}
      {tier.featured && (
        <div className="h-0.75 w-full bg-linear-to-r from-brand via-brand/60 to-transparent" />
      )}

      {/* Badge */}
      {tier.badge && (
        <div className="absolute top-5 right-5">
          <span className="font-mono text-[10px] tracking-widest uppercase
            text-brand bg-brand-dim border border-brand-border
            px-2.5 py-1 rounded">
            {tier.badge}
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        {/* Tier name */}
        <h3 className="font-display text-[18px] font-bold tracking-tight text-ink mb-1">
          {tier.name}
        </h3>

        {/* Price */}
        <div className="mb-4">
          <span className={`font-display font-extrabold text-[36px] tracking-tight leading-none
            ${tier.featured ? "text-brand drop-shadow-[0_0_20px_var(--color-brand-glow)]" : "text-ink"}`}>
            {tier.price}
          </span>
          <span className="font-sans text-sm text-ink-faint ml-2">/ {tier.priceSub}</span>
        </div>

        {/* Divider */}
        <div className={`w-full h-px mb-5
          ${tier.featured ? "bg-brand/20" : "bg-line"}`}
        />

        {/* Desc */}
        <p className="font-sans text-sm text-ink-muted leading-relaxed mb-7">
          {tier.desc}
        </p>

        {/* Features */}
        <ul className="space-y-3 flex-1 mb-8 list-none p-0 m-0">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-3 font-sans text-sm text-ink-muted">
              <span
                className={`mt-1.25 size-1.5 rounded-full shrink-0
                  ${tier.featured ? "bg-brand" : "bg-ink-faint"}`}
                aria-hidden
              />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        {tier.featured ? (
          <PrimaryButton className="w-full justify-center py-3.5!">
            {tier.cta} →
          </PrimaryButton>
        ) : (
          <GhostButton className="w-full justify-center py-3.5!">
            {tier.cta} →
          </GhostButton>
        )}
      </div>
    </motion.div>
  );
}