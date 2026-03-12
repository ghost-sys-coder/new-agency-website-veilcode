"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProgressBar } from "./_components/ProgressBar";
import { SuccessScreen } from "./_components/SuccessComponent";
import { validateStep } from "./_components/ValidateStep";
import { Step1, Step2, Step3, Step4 } from "./_components/Steps";
import { toast } from "sonner";
import axios from "axios";

type SubmitState = "idle" | "loading" | "success" | "error";

const EMPTY: WizardData = {

  service: "",
  budget: "",
  timeline: "",

  name: "",
  email: "",
  company: "",

  message: "",
  goals: [],
};

export const SERVICES = [
  {
    id: "web",
    label: "Web Solutions (Design & Development)",
    sub: "Design & development",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "text-svc-web", dimBg: "bg-svc-web-dim", border: "border-svc-web-border",
    activeBg: "bg-svc-web-dim", activeBorder: "border-svc-web-border", activeText: "text-svc-web",
  },
  {
    id: "Mobile Application Development",
    label: "Mobile Application",
    sub: "iOS & Android",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "text-svc-mobile", dimBg: "bg-svc-mobile-dim", border: "border-svc-mobile-border",
    activeBg: "bg-svc-mobile-dim", activeBorder: "border-svc-mobile-border", activeText: "text-svc-mobile",
  },
  {
    id: "data",
    label: "Data Analytics",
    sub: "Pipelines & dashboards",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "text-svc-data", dimBg: "bg-svc-data-dim", border: "border-svc-data-border",
    activeBg: "bg-svc-data-dim", activeBorder: "border-svc-data-border", activeText: "text-svc-data",
  },
  {
    id: "social",
    label: "Social Media Marketing",
    sub: "Strategy & execution",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    accent: "text-svc-social", dimBg: "bg-svc-social-dim", border: "border-svc-social-border",
    activeBg: "bg-svc-social-dim", activeBorder: "border-svc-social-border", activeText: "text-svc-social",
  },
  {
    id: "ai",
    label: "AI Automation",
    sub: "Agents & workflows",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2a4 4 0 014 4v1h1a2 2 0 012 2v6a2 2 0 01-2 2h-1v1a4 4 0 01-8 0v-1H7a2 2 0 01-2-2V9a2 2 0 012-2h1V6a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12h.01M15 12h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: "text-svc-ai", dimBg: "bg-svc-ai-dim", border: "border-svc-ai-border",
    activeBg: "bg-svc-ai-dim", activeBorder: "border-svc-ai-border", activeText: "text-svc-ai",
  },
  {
    id: "multiple",
    label: "Multiple Services",
    sub: "Let's scope together",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "text-brand", dimBg: "bg-brand-dim", border: "border-brand-border",
    activeBg: "bg-brand-dim", activeBorder: "border-brand-border", activeText: "text-brand",
  },
] as const;




const TOTAL_STEPS = 4;

export default function StartProjectWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<WizardData>(EMPTY);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleNext() {
    const errs = validateStep(step, data);
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    } else {
      // Final submit
      setSubmitState("loading");
      try {
        const { status, data: result } = await axios.post("/api/messages", data);

        if (status === 201 && result?.success) {
          toast.success(result?.message || "Check your email for confirmation");
          setData(EMPTY);
          setSubmitState("success");
        }
      } catch (error) {
        console.log("Something went wrong!", error);
        toast.error((error as Error).message || "Something went wrong!");
        setSubmitState("idle");
      }
    }
  }

  function handleBack() {
    if (step > 1) { setStep(step - 1); setFieldErrors({}); }
  }

  if (submitState === "success") {
    return <SuccessScreen name={data.name || "there"} />;
  }

  const isLoading = submitState === "loading";

  return (
    <div className="max-w-300 mx-auto w-full p-4">
      {/* Progress + step counter */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[11px] tracking-widest uppercase text-ink-faint">
          {step < TOTAL_STEPS + 1 ? `Step ${step} of ${TOTAL_STEPS}` : "Complete"}
        </span>
        <span className="font-mono text-[11px] tracking-widest uppercase text-brand">
          {Math.round((step / TOTAL_STEPS) * 100)}%
        </span>
      </div>
      <ProgressBar step={step} total={TOTAL_STEPS} />

      {/* Step content */}
      <div className="mt-10 min-h-105">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <Step1
              key="s1" data={data} setData={setData}
              error={fieldErrors.service}
            />
          )}
          {step === 2 && (
            <Step2 key="s2" data={data} setData={setData} />
          )}
          {step === 3 && (
            <Step3
              key="s3" data={data} setData={setData}
              errors={{ name: fieldErrors.name, email: fieldErrors.email }}
            />
          )}
          {step === 4 && (
            <Step4
              key="s4" data={data} setData={setData}
              errors={{ description: fieldErrors.description }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4 mt-10 pt-6 border-t border-line">
        {step > 1 && (
          <button
            type="button"
            onClick={handleBack}
            disabled={isLoading}
            className="inline-flex items-center gap-2 font-sans text-sm
              text-ink-muted border border-line bg-surface
              px-5 py-3 rounded-xl cursor-pointer
              hover:border-line-hi hover:text-ink transition-all duration-200
              disabled:opacity-50"
          >
            ← Back
          </button>
        )}

        <button
          type="button"
          onClick={handleNext}
          disabled={isLoading}
          className="ml-auto inline-flex items-center justify-center gap-2
            font-sans text-sm font-medium
            px-8 py-3.5 rounded-xl border border-brand text-brand cursor-pointer
            hover:bg-brand hover:text-base
            hover:shadow-[0_0_28px_var(--color-brand-glow)]
            transition-all duration-200 outline-none
            focus-visible:ring-2 focus-visible:ring-brand
            disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin size-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"
                  strokeDasharray="31.4" strokeDashoffset="10" />
              </svg>
              Submitting…
            </>
          ) : step === TOTAL_STEPS ? (
            "Submit Brief →"
          ) : (
            "Continue →"
          )}
        </button>
      </div>
    </div>
  );
}