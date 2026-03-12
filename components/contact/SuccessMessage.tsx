// components/contact/SuccessMessage.tsx
import { motion } from "framer-motion";

export function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center text-center py-20 px-8"
    >
      <div className="size-16 rounded-full bg-brand/10 border border-brand/30
        flex items-center justify-center mb-6">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <motion.path
            d="M5 13l4 4L19 7"
            stroke="var(--color-brand)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </svg>
      </div>
      <h3 className="font-display text-2xl font-bold text-ink mb-3">
        Message Received!
      </h3>
      <p className="font-sans text-sm text-ink-muted leading-relaxed max-w-md">
        Thank you for reaching out. We’ve received your message and will get back
        to you within one business day.
      </p>
      <div className="mt-6 font-mono text-xs tracking-widest uppercase
        text-brand bg-brand/10 border border-brand/20 px-5 py-2.5 rounded-md">
        Check your inbox for confirmation
      </div>
    </motion.div>
  );
}