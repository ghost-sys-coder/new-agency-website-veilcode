"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButton } from "@/components/extras/Primitives";
import { stagger, useReveal } from "@/lib/motion";
import { toast } from "sonner";
import {
  FormData,
  FormErrors,
  SubmitState,
  SERVICES,
  BUDGETS,
  TIMELINES,
} from "./types";
import { FormField } from "./FormField";
import { PillSelector } from "./PillSelector";
import { SuccessMessage } from "./SuccessMessage";
import { FormHeader } from "./FormHeader";

const EMPTY_FORM: FormData = {
  name: "", email: "", company: "",
  service: "", budget: "", timeline: "", message: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Your name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email.";
  if (!data.service) errors.service = "Please select a service.";
  if (!data.message.trim()) errors.message = "Project details are required.";
  else if (data.message.trim().length < 20)
    errors.message = "Please provide more detail (20+ characters).";
  return errors;
}

export function ContactFormVariant() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [ref, inView] = useReveal();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitState("loading");

    // Replace with real API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setSubmitState("success");
      setFormData(EMPTY_FORM); // reset form
    } catch {
      setSubmitState("error");
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div ref={ref} className="lg:col-span-7" id="form-message">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="bg-surface border border-line rounded-2xl overflow-hidden shadow-sm"
      >
        <FormHeader />

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
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="Full Name" htmlFor="name" required error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="David Kabugo"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface-hi border border-line rounded-lg px-4 py-3.5 text-sm
                      focus:border-brand focus:shadow-[0_0_0_3px_var(--color-brand-dim)]"
                  />
                </FormField>

                <FormField label="Email Address" htmlFor="email" required error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface-hi border border-line rounded-lg px-4 py-3.5 text-sm
                      focus:border-brand focus:shadow-[0_0_0_3px_var(--color-brand-dim)]"
                  />
                </FormField>
              </div>

              {/* Company */}
              <FormField label="Company / Organisation" htmlFor="company">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Acme Corp (optional)"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-surface-hi border border-line rounded-lg px-4 py-3.5 text-sm
                    focus:border-brand focus:shadow-[0_0_0_3px_var(--color-brand-dim)]"
                />
              </FormField>

              {/* Service */}
              <FormField label="Which service are you interested in?" htmlFor="service-group" required>
                <PillSelector
                  id="service-group"
                  options={SERVICES}
                  value={formData.service}
                  onChange={(val) => setFormData((p) => ({ ...p, service: val }))}
                  error={errors.service}
                />
              </FormField>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="Approximate Budget" htmlFor="budget-group">
                  <PillSelector
                    id="budget-group"
                    options={BUDGETS}
                    value={formData.budget}
                    onChange={(val) => setFormData((p) => ({ ...p, budget: val }))}
                  />
                </FormField>

                <FormField label="Project Timeline" htmlFor="timeline-group">
                  <PillSelector
                    id="timeline-group"
                    options={TIMELINES}
                    value={formData.timeline}
                    onChange={(val) => setFormData((p) => ({ ...p, timeline: val }))}
                  />
                </FormField>
              </div>

              {/* Message */}
              <FormField label="Tell Us About Your Project" htmlFor="message" required error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Give us a sense of what you're building, what problem you're solving, or what outcome you're hoping for..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-surface-hi border border-line rounded-lg px-4 py-3.5 text-sm resize-none
                    focus:border-brand focus:shadow-[0_0_0_3px_var(--color-brand-dim)]"
                />
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-ink-faint">
                    {formData.message.length} characters
                  </span>
                </div>
              </FormField>

              {/* Submit */}
              <div className="pt-4">
                {submitState === "error" && (
                  <p className="mb-4 text-sm text-red-400 bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                    Something went wrong. Please try again or email us at{" "}
                    <a href="mailto:hello@veilcode.io" className="underline">
                      hello@veilcode.io
                    </a>
                  </p>
                )}

                <PrimaryButton
                  type="submit"
                  disabled={submitState === "loading"}
                  className="w-full py-4 text-base disabled:opacity-60"
                >
                  {submitState === "loading" ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </PrimaryButton>

                <p className="mt-5 text-center text-xs text-ink-faint">
                  We respond within one business day. No spam, ever.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}