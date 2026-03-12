export function validateStep(step: number, data: WizardData) {
  if (step === 1) {
    if (!data.service) return { service: "Please choose a service to continue." };
  }
  if (step === 3) {
    const errs: Record<string, string> = {};
    if (!data.name.trim())  errs.name  = "Your name is required.";
    if (!data.email.trim()) errs.email = "Your email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = "Please enter a valid email address.";
    return errs;
  }
  if (step === 4) {
    if (!data.message.trim() || data.message.trim().length < 20)
      return { description: "Please describe your project (at least 20 characters)." };
  }
  return {};
}