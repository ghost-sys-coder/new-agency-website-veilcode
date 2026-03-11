"use client";

import { useState, type SyntheticEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, useReveal } from "@/lib/motion";
import { toast } from "sonner";
import axios from "axios";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [ref, inView] = useReveal("-40px");

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");

    try {
      const { data, status } = await axios.post("/api/newsletter", { email });

      if (status === 201 && data?.success) {
        setStatus("success");
        setEmail("");
      }
    } catch (error: unknown) {
      console.log("Something went wrong:route- api/newsletter", error);

      let message = "Something went wrong. Try again!";

      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 409 || error?.response?.data?.message?.includes("Already subscribed!")) {
          message = "This email is subscribed!"
        } else if (status === 429) {
          message = "Too many requests. Try again later!";
        } else if (status === 400 || status === 400) {
          message = error?.response?.data?.message || "Invalid request";
        }
      }

      setErrorMsg(message);
      toast(message);
    } finally {
      if (status !== "success") {
        setTimeout(() => setStatus("idle"), 5000)
      }
    }
  }

  return (
    <section className="py-20 px-6 md:px-10 border-t border-line bg-surface" id="newsletter">
      <div className="max-w-300 mx-auto">
        <motion.div
          ref={ref}
          variants={fadeUp()}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-2xl border border-line
            bg-base px-8 md:px-16 py-14 max-w-180 mx-auto text-center"
        >
          {/* Ambient glow */}
          <div aria-hidden
            className="absolute inset-0 pointer-events-none
              bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,var(--color-brand-dim),transparent)]" />

          <div className="relative z-10">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="size-2 rounded-full bg-brand
                shadow-[0_0_8px_var(--color-brand)]
                animate-[pulse-glow_2s_ease-in-out_infinite]" />
              <span className="font-mono text-[11px] tracking-widest uppercase text-brand">
                VeilCode Newsletter
              </span>
            </div>

            <h3 className="font-display text-[clamp(22px,3vw,36px)] font-extrabold
              tracking-tight text-ink mb-3">
              Stay Sharp on What Matters
            </h3>
            <p className="font-sans text-[15px] text-ink-muted leading-relaxed mb-8 max-w-110 mx-auto">
              Engineering deep-dives, design thinking, and practical AI — written for
              builders who care about craft. No fluff. No spray.
            </p>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3 relative"
                >
                  <motion.button
                    onClick={() => setStatus("idle")}
                    className="text-xs text-ink-faint hover:text-ink mt-2 absolute right-4 top-2 bg-amber-600 p-2 text-white rounded-2xl cursor-pointer z-20"
                  >
                    Got it
                  </motion.button>
                  <div className="size-12 rounded-full bg-brand-dim border border-brand-border
                    flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <motion.path d="M5 13l4 4L19 7"
                        stroke="var(--color-brand)" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }} />
                    </svg>
                  </div>
                  <p className="font-sans text-sm font-medium text-ink">You&apos;re subscribed!</p>
                  <p className="font-sans text-xs text-ink-muted">
                    Check your inbox for a confirmation email.
                  </p>
                </motion.div>
              ) : (
                <>
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col sm:flex-row gap-3 max-w-105 mx-auto"
                  >
                    <div className="flex-1">
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setErrorMsg(""); }}
                        className="w-full bg-surface-hi border border-line rounded-lg
                        px-4 py-3 font-sans text-sm text-ink placeholder:text-ink-faint
                        outline-none transition-all duration-200
                        focus:border-brand focus:shadow-[0_0_0_3px_var(--color-brand-dim)]
                        hover:border-line-hi"
                        aria-label="Email address"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="shrink-0 inline-flex items-center justify-center gap-2
                      px-6 py-3 rounded-lg border border-brand text-brand
                      font-sans text-sm font-medium cursor-pointer
                      hover:bg-brand hover:text-base
                      hover:shadow-[0_0_24px_var(--color-brand-glow)]
                      transition-all duration-200 outline-none
                      focus-visible:ring-2 focus-visible:ring-brand
                      disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <svg className="animate-spin size-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <circle cx="12" cy="12" r="10"
                            stroke="currentColor" strokeWidth="3"
                            strokeDasharray="31.4" strokeDashoffset="10" />
                        </svg>
                      ) : "Subscribe →"}
                    </button>
                    </motion.form>
                    <AnimatePresence>
                      {errorMsg && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y:  0 }}
                          exit={{    opacity: 0, y: -4 }}
                          className="mt-1.5 font-sans text-[12px] text-red-400 text-center"
                          role="alert"
                        >
                          {errorMsg}
                        </motion.p>
                      )}
                    </AnimatePresence>
                </>
              )}
            </AnimatePresence>

            <p className="mt-4 font-sans text-[11px] text-ink-faint">
              No spam. Unsubscribe any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}