import React, {type ReactNode} from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SERVICES } from "../page";
import { FieldError } from "./FieldError";
import { BUDGETS, GOALS, TIMELINES } from "@/constants/start";

const inputCls =
  "w-full bg-surface-hi border border-line rounded-xl px-4 py-3.5 " +
  "font-sans text-sm text-ink placeholder:text-ink-faint " +
  "outline-none transition-all duration-200 " +
  "focus:border-brand focus:shadow-[0_0_0_3px_var(--color-brand-dim)] " +
  "hover:border-line-hi";

const inputErrCls =
  "border-red-500/60 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.12)]";

const stepVariants = {
  enter:  { opacity: 0, x: 32,  filter: "blur(4px)" },
  center: { opacity: 1, x: 0,   filter: "blur(0px)" },
  exit:   { opacity: 0, x: -32, filter: "blur(4px)" },
};


function StepWrap({ children, stepKey }: { children: ReactNode; stepKey: number }) {
  return (
    <motion.div
      key={stepKey}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function StepHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-[11px] tracking-widest uppercase text-brand mb-2">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-extrabold
        tracking-tight text-ink leading-[1.1] mb-3">
        {title}
      </h2>
      <p className="font-sans text-[15px] text-ink-muted leading-relaxed">
        {sub}
      </p>
    </div>
  );
}

export function Step1({
  data,
  setData,
  error,
}: {
  data: WizardData;
  setData: (d: WizardData) => void;
  error?: string;
}) {
  return (
    <StepWrap stepKey={1}>
      <StepHeading
        eyebrow="Step 1 of 4"
        title="What are you building?"
        sub="Choose the service that best describes what you need. You can always add more later."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SERVICES.map((s) => {
          const active = data.service === s.id;
          return (
            <Button
              key={s.id}
              type="button"
              onClick={() => setData({ ...data, service: s.id })}
              className={`h-30 group relative flex items-center justify-center gap-4 p-5 rounded-xl border
                text-left cursor-pointer outline-none transition-all duration-200
                focus-visible:ring-2 focus-visible:ring-brand
                ${active
                  ? `${s.activeBg} ${s.activeBorder}`
                  : "border-line bg-surface hover:border-line-hi hover:bg-surface-hi"
                }`}
              aria-pressed={active}
            >
              {/* Accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-xl
                transition-all duration-300
                ${active ? `bg-current ${s.activeText}` : "bg-transparent"}`} />

              <div className={`size-10 rounded-lg border flex items-center
                justify-center shrink-0 transition-colors duration-200
                ${active ? `${s.dimBg} ${s.border} ${s.accent}` : "border-line bg-surface-hi text-ink-muted"}`}>
                {s.icon}
              </div>
              <div className="min-w-0">
                <p className={`font-sans text-[14px] font-medium leading-none mb-1
                  ${active ? s.activeText : "text-ink"}`}>
                  {s.label}
                </p>
                <p className="font-sans text-xs text-ink-faint">{s.sub}</p>
              </div>

              {/* Check */}
              {active && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`absolute top-3 right-3 size-5 rounded-full
                    flex items-center justify-center ${s.dimBg} ${s.border}`}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden
                    className={s.activeText}>
                    <path d="M1.5 5l2.5 2.5 4.5-5"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              )}
            </Button>
          );
        })}
      </div>
      <FieldError msg={error} />
    </StepWrap>
  );
}


export function Step2({
  data,
  setData,
}: {
  data: WizardData;
  setData: (d: WizardData) => void;
}) {
  return (
    <StepWrap stepKey={2}>
      <StepHeading
        eyebrow="Step 2 of 4"
        title="Scope & Timeline"
        sub="No commitment — this just helps us prepare the right proposal for you."
      />

      {/* Budget */}
      <div className="mb-10">
        <p className="font-sans text-[13px] font-medium text-ink-muted mb-4">
          What is your approximate budget?
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {BUDGETS.map((b) => {
            const active = data.budget === b.label;
            return (
              <Button key={b.label} type="button"
                onClick={() => setData({ ...data, budget: b.label })}
                aria-pressed={active}
                className={`h-25 relative flex flex-col gap-1 p-4 rounded-xl border
                  text-left cursor-pointer outline-none transition-all duration-200
                  focus-visible:ring-2 focus-visible:ring-brand
                  ${active
                    ? "bg-brand-dim border-brand-border"
                    : "border-line bg-surface hover:border-line-hi hover:bg-surface-hi"
                  }`}
              >
                <span className={`font-sans text-[13px] font-semibold
                  ${active ? "text-brand" : "text-ink"}`}>
                  {b.label}
                </span>
                <span className="font-sans text-[11px] text-ink-faint">{b.sub}</span>
                {active && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="absolute top-2.5 right-2.5 size-4 rounded-full
                      bg-brand-dim border border-brand-border flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden className="text-brand">
                      <path d="M1.5 5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                )}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <p className="font-sans text-[13px] font-medium text-ink-muted mb-4">
          When do you need this delivered?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {TIMELINES.map((t) => {
            const active = data.timeline === t.label;
            return (
              <Button key={t.label} type="button"
                onClick={() => setData({ ...data, timeline: t.label })}
                aria-pressed={active}
                className={`h-25 relative flex flex-col gap-1 p-4 rounded-xl border
                  text-left cursor-pointer outline-none transition-all duration-200
                  focus-visible:ring-2 focus-visible:ring-brand
                  ${active
                    ? "bg-brand-dim border-brand-border"
                    : "border-line bg-surface hover:border-line-hi hover:bg-surface-hi"
                  }`}
              >
                <span className={`font-sans text-[13px] font-semibold
                  ${active ? "text-brand" : "text-ink"}`}>
                  {t.label}
                </span>
                <span className="font-sans text-[11px] text-ink-faint">{t.sub}</span>
                {active && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="absolute top-2.5 right-2.5 size-4 rounded-full
                      bg-brand-dim border border-brand-border flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden className="text-brand">
                      <path d="M1.5 5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </StepWrap>
  );
}

interface Step3Errors { name?: string; email?: string }

export function Step3({
  data,
  setData,
  errors,
}: {
  data: WizardData;
  setData: (d: WizardData) => void;
  errors: Step3Errors;
}) {
  return (
    <StepWrap stepKey={3}>
      <StepHeading
        eyebrow="Step 3 of 4"
        title="Who are we talking to?"
        sub="We'll use this to send you a tailored proposal and get the conversation started."
      />
      <div className="space-y-5 max-w-140">
        {/* Name */}
        <div>
          <label htmlFor="w-name"
            className="block font-sans text-[13px] font-medium text-ink-muted mb-2">
            Full Name <span className="text-brand" aria-hidden>*</span>
          </label>
          <input id="w-name" type="text" autoComplete="name"
            placeholder="John Doe"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className={`${inputCls} ${errors.name ? inputErrCls : ""}`}
          />
          <FieldError msg={errors.name} />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="w-email"
            className="block font-sans text-[13px] font-medium text-ink-muted mb-2">
            Email Address <span className="text-brand" aria-hidden>*</span>
          </label>
          <input id="w-email" type="email" autoComplete="email"
            placeholder="you@company.com"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className={`${inputCls} ${errors.email ? inputErrCls : ""}`}
          />
          <FieldError msg={errors.email} />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="w-company"
            className="block font-sans text-[13px] font-medium text-ink-muted mb-2">
            Company / Organisation
            <span className="ml-2 font-mono text-[10px] tracking-widest
              uppercase text-ink-faint normal-case">
              optional
            </span>
          </label>
          <input id="w-company" type="text" autoComplete="organization"
            placeholder="Acme Corp"
            value={data.company}
            onChange={(e) => setData({ ...data, company: e.target.value })}
            className={inputCls}
          />
        </div>
      </div>
    </StepWrap>
  );
}

interface Step4Errors { description?: string }

export function Step4({
  data,
  setData,
  errors,
}: {
  data: WizardData;
  setData: (d: WizardData) => void;
  errors: Step4Errors;
}) {
  function toggleGoal(goal: string) {
    const next = data.goals.includes(goal)
      ? data.goals.filter((g) => g !== goal)
      : [...data.goals, goal];
    setData({ ...data, goals: next });
  }

  return (
    <StepWrap stepKey={4}>
      <StepHeading
        eyebrow="Step 4 of 4"
        title="Tell us about your project"
        sub="The more detail you give us, the more useful our first call will be."
      />
      <div className="space-y-8">
        {/* Description */}
        <div>
          <label htmlFor="w-desc"
            className="block font-sans text-[13px] font-medium text-ink-muted mb-2">
            What are you trying to build or solve?{" "}
            <span className="text-brand" aria-hidden>*</span>
          </label>
          <textarea id="w-desc" rows={5}
            placeholder="E.g. We have an existing platform that's too slow on mobile. We're losing customers at checkout and need to rebuild the storefront with better performance..."
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            className={`${inputCls} resize-none ${errors.description ? inputErrCls : ""}`}
          />
          <div className="flex items-start justify-between mt-1">
            <FieldError msg={errors.description} />
            <span className="font-mono text-[10px] text-ink-faint ml-auto">
              {data.message.length} chars
            </span>
          </div>
        </div>

        {/* Goals */}
        <div>
          <p className="font-sans text-[13px] font-medium text-ink-muted mb-3">
            What are your primary goals?{" "}
            <span className="font-mono text-[10px] tracking-widest uppercase
              text-ink-faint normal-case ml-1">
              select all that apply
            </span>
          </p>
          <div className="flex flex-wrap gap-2">
            {GOALS.map((goal) => {
              const active = data.goals.includes(goal);
              return (
                <Button key={goal} type="button"
                  onClick={() => toggleGoal(goal)}
                  aria-pressed={active}
                  className={`font-sans text-[13px] px-4 py-2 rounded-lg border
                    cursor-pointer outline-none transition-all duration-150
                    focus-visible:ring-2 focus-visible:ring-brand
                    ${active
                      ? "bg-brand-dim border-brand-border text-brand"
                      : "border-line bg-surface text-ink-muted hover:border-line-hi hover:text-ink"
                    }`}
                >
                  {active && "✓ "}{goal}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </StepWrap>
  );
}
