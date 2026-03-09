"use client";

import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButton } from "@/components/extras/Primitives";
import { fadeUp, stagger, useReveal } from "@/lib/motion";

/* ─── TYPES ───────────────────────────────────────────────────────────────── */

interface FormData {
  name:       string;
  email:      string;
  company:    string;
  service:    string;
  budget:     string;
  timeline:   string;
  message:    string;
}

interface FormErrors {
  name?:    string;
  email?:   string;
  service?: string;
  message?: string;
}

type SubmitState = "idle" | "loading" | "success" | "error";

/* ─── OPTIONS ─────────────────────────────────────────────────────────────── */

const SERVICES = [
  "Web Solutions (Design & Development)",
  "Mobile Application Development",
  "Data Analytics",
  "Social Media Marketing",
  "AI Automation",
  "Multiple Services",
  "Not Sure Yet",
] as const;

const BUDGETS = [
  "Under $2,500",
  "$2,500 – $8,000",
  "$8,000 – $25,000",
  "$25,000 – $60,000",
  "$60,000+",
  "Let's Discuss",
] as const;

const TIMELINES = [
  "ASAP — urgent project",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring for now",
] as const;

/* ─── INPUT PRIMITIVES ────────────────────────────────────────────────────── */

const inputBase =
  "w-full bg-surface-hi border border-line rounded-lg px-4 py-3.5 \
  font-sans text-sm text-ink placeholder:text-ink-faint \
  outline-none transition-all duration-200 \
  focus:border-brand focus:shadow-[0_0_0_3px_var(--color-brand-dim)] \
  hover:border-line-hi";

const inputError =
  "border-red-500/60 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.12)]";

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-sans text-[13px] font-medium text-ink-muted mb-2"
    >
      {children}
      {required && (
        <span className="text-brand ml-1" aria-hidden>*</span>
      )}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="mt-1.5 font-sans text-[12px] text-red-400"
          role="alert"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

/* ─── PILL SELECTOR ───────────────────────────────────────────────────────── */

function PillSelector<T extends string>({
  id,
  options,
  value,
  onChange,
  error,
}: {
  id:       string;
  options:  readonly T[];
  value:    string;
  onChange: (val: T) => void;
  error?:   string;
}) {
  return (
    <div>
      <div
        id={id}
        role="group"
        className="flex flex-wrap gap-2"
      >
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`font-sans text-[13px] px-3.5 py-2 rounded-lg border
              transition-all duration-150 cursor-pointer outline-none
              focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
              focus-visible:ring-offset-base
              ${
                value === opt
                  ? "bg-brand-dim border-brand-border text-brand"
                  : "bg-surface-hi border-line text-ink-muted hover:border-line-hi hover:text-ink"
              }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <FieldError message={error} />
    </div>
  );
}

/* ─── VALIDATION ──────────────────────────────────────────────────────────── */

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim())         errors.name    = "Your name is required.";
  if (!data.email.trim())        errors.email   = "Your email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
                                 errors.email   = "Please enter a valid email address.";
  if (!data.service)             errors.service = "Please select a service.";
  if (!data.message.trim())      errors.message = "Please tell us a little about your project.";
  else if (data.message.trim().length < 20)
                                 errors.message = "Please provide a bit more detail (20+ characters).";
  return errors;
}

/* ─── SUCCESS STATE ───────────────────────────────────────────────────────── */

function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center text-center py-16 px-8"
    >
      {/* Checkmark */}
      <div className="size-16 rounded-full bg-brand-dim border border-brand-border
        flex items-center justify-center mb-6">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <motion.path
            d="M5 13l4 4L19 7"
            stroke="var(--color-brand)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </svg>
      </div>
      <h3 className="font-display text-2xl font-bold tracking-tight text-ink mb-3">
        Message Received!
      </h3>
      <p className="font-sans text-sm text-ink-muted leading-relaxed max-w-90">
        Thank you for reaching out. We&apos;ve received your message and will get
        back to you within one business day.
      </p>
      <div className="mt-6 font-mono text-[11px] tracking-widest uppercase
        text-brand bg-brand-dim border border-brand-border
        px-4 py-2 rounded-md">
        Check your inbox for a confirmation
      </div>
    </motion.div>
  );
}

/* ─── CONTACT FORM ────────────────────────────────────────────────────────── */

const EMPTY: FormData = {
  name: "", email: "", company: "",
  service: "", budget: "", timeline: "", message: "",
};

export function ContactForm() {
  const [formData,   setFormData]   = useState<FormData>(EMPTY);
  const [errors,     setErrors]     = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [ref, inView] = useReveal();

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleServiceChange(val: string) {
    setFormData((prev) => ({ ...prev, service: val }));
    if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitState("loading");
    // Simulate API call — replace with your real endpoint
    await new Promise((r) => setTimeout(r, 1600));
    setSubmitState("success");
  }

  return (
    <div
      ref={ref}
      className="lg:col-span-7"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="bg-surface border border-line rounded-2xl overflow-hidden"
      >
        {/* Form header */}
        <motion.div
          variants={fadeUp()}
          className="px-8 py-6 border-b border-line flex items-center gap-3"
        >
          <div className="size-2 rounded-full bg-brand shadow-[0_0_8px_var(--color-brand)]" />
          <span className="font-mono text-[11px] tracking-widest uppercase text-ink-muted">
            Project Enquiry Form
          </span>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitState === "success" ? (
            <SuccessMessage key="success" />
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              noValidate
              className="p-8 space-y-7"
            >
              {/* Row 1 — Name + Email */}
              <motion.div
                variants={fadeUp(0.06)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                <div>
                  <Label htmlFor="name" required>Full Name</Label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="David Kabugo"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.name ? inputError : ""}`}
                  />
                  <FieldError message={errors.name} />
                </div>
                <div>
                  <Label htmlFor="email" required>Email Address</Label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.email ? inputError : ""}`}
                  />
                  <FieldError message={errors.email} />
                </div>
              </motion.div>

              {/* Row 2 — Company */}
              <motion.div variants={fadeUp(0.10)}>
                <Label htmlFor="company">Company / Organisation</Label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Acme Corp (optional)"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputBase}
                />
              </motion.div>

              {/* Row 3 — Service */}
              <motion.div variants={fadeUp(0.14)}>
                <Label htmlFor="service-group" required>
                  Which service are you interested in?
                </Label>
                <PillSelector
                  id="service-group"
                  options={SERVICES}
                  value={formData.service}
                  onChange={handleServiceChange}
                  error={errors.service}
                />
              </motion.div>

              {/* Row 4 — Budget */}
              <motion.div variants={fadeUp(0.18)}>
                <Label htmlFor="budget-group">Approximate Budget</Label>
                <PillSelector
                  id="budget-group"
                  options={BUDGETS}
                  value={formData.budget}
                  onChange={(val) =>
                    setFormData((prev) => ({ ...prev, budget: val }))
                  }
                />
              </motion.div>

              {/* Row 5 — Timeline */}
              <motion.div variants={fadeUp(0.22)}>
                <Label htmlFor="timeline-group">Project Timeline</Label>
                <PillSelector
                  id="timeline-group"
                  options={TIMELINES}
                  value={formData.timeline}
                  onChange={(val) =>
                    setFormData((prev) => ({ ...prev, timeline: val }))
                  }
                />
              </motion.div>

              {/* Row 6 — Message */}
              <motion.div variants={fadeUp(0.26)}>
                <Label htmlFor="message" required>Tell Us About Your Project</Label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Give us a sense of what you're building, what problem you're solving, or what outcome you're hoping for. The more context, the better."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputBase} resize-none ${
                    errors.message ? inputError : ""
                  }`}
                />
                <div className="flex items-start justify-between mt-1">
                  <FieldError message={errors.message} />
                  <span className="font-mono text-[10px] text-ink-faint ml-auto">
                    {formData.message.length} chars
                  </span>
                </div>
              </motion.div>

              {/* Submit */}
              <motion.div variants={fadeUp(0.30)}>
                {submitState === "error" && (
                  <p className="mb-4 font-sans text-sm text-red-400 bg-red-500/10
                    border border-red-500/20 rounded-lg px-4 py-3">
                    Something went wrong. Please try again or email us directly at{" "}
                    <a href="mailto:hello@veilcode.io" className="underline">
                      hello@veilcode.io
                    </a>
                  </p>
                )}

                <PrimaryButton
                  type="submit"
                  disabled={submitState === "loading"}
                  className="w-full justify-center py-4! text-[15px]!
                    disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitState === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <circle
                          cx="12" cy="12" r="10"
                          stroke="currentColor" strokeWidth="3"
                          strokeDasharray="31.4" strokeDashoffset="10"
                        />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </PrimaryButton>

                <p className="mt-4 text-center font-sans text-[12px] text-ink-faint">
                  We respond within one business day. No spam, ever.
                </p>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}