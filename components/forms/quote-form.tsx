"use client";

import { useState } from "react";
import { useForm, Controller, type Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Loader2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Home,
  Building2,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { quoteSchema, type QuoteValues, pestProblemOptions } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { siteConfig } from "@/lib/site-config";
import { submitLead } from "@/lib/submit-lead";
import { cn } from "@/lib/utils";

const steps: { title: string; fields: Path<QuoteValues>[] }[] = [
  { title: "Your Pest Problem", fields: ["pestProblem", "propertyType"] },
  { title: "Property & Timing", fields: ["address", "zip", "preferredTime"] },
  { title: "Contact Details", fields: ["name", "email", "phone"] },
];

const timeOptions = [
  { value: "morning", label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "evening", label: "Evening" },
  { value: "any", label: "Any time" },
] as const;

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    control,
    formState: { errors, isSubmitting },
  } = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
    mode: "onTouched",
    defaultValues: {
      pestProblem: "",
      address: "",
      zip: "",
      name: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  const progress = ((step + 1) / steps.length) * 100;

  async function next() {
    const valid = await trigger(steps[step].fields, { shouldFocus: true });
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  async function onSubmit(values: QuoteValues) {
    setServerError(null);
    try {
      await submitLead({ ...values, form: "quote" });
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please call us or try again.");
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto size-14 text-green-600" />
        <h3 className="mt-4 font-display text-3xl font-extrabold uppercase text-ink">
          Request Received!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Thanks! One of our licensed technicians will reach out shortly to
          confirm your free inspection. Need help sooner?
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={siteConfig.phoneHref}>
              <Phone aria-hidden /> Call {siteConfig.phone}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm font-semibold">
          <span className="text-brand-red">
            Step {step + 1} of {steps.length}
          </span>
          <span className="text-muted">{steps[step].title}</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-paper-alt">
          <div
            className="h-full rounded-full brand-gradient transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Step 1 */}
        {step === 0 && (
          <div className="space-y-6">
            <Field label="What pest problem are you dealing with?" error={errors.pestProblem?.message} htmlFor="pestProblem">
              <Controller
                control={control}
                name="pestProblem"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="pestProblem" aria-invalid={!!errors.pestProblem}>
                      <SelectValue placeholder="Select a pest problem" />
                    </SelectTrigger>
                    <SelectContent>
                      {pestProblemOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>

            <Field label="Property type" error={errors.propertyType?.message}>
              <Controller
                control={control}
                name="propertyType"
                render={({ field }) => (
                  <div className="grid grid-cols-2 gap-3">
                    <TypeCard
                      icon={<Home className="size-6" />}
                      label="Residential"
                      selected={field.value === "residential"}
                      onClick={() => field.onChange("residential")}
                    />
                    <TypeCard
                      icon={<Building2 className="size-6" />}
                      label="Commercial"
                      selected={field.value === "commercial"}
                      onClick={() => field.onChange("commercial")}
                    />
                  </div>
                )}
              />
            </Field>
          </div>
        )}

        {/* Step 2 */}
        {step === 1 && (
          <div className="space-y-5">
            <Field label="Street address" error={errors.address?.message} htmlFor="address">
              <Input id="address" autoComplete="street-address" aria-invalid={!!errors.address} {...register("address")} />
            </Field>
            <Field label="ZIP code" error={errors.zip?.message} htmlFor="zip">
              <Input id="zip" inputMode="numeric" maxLength={5} autoComplete="postal-code" aria-invalid={!!errors.zip} {...register("zip")} />
            </Field>
            <Field label="Preferred time" error={errors.preferredTime?.message}>
              <Controller
                control={control}
                name="preferredTime"
                render={({ field }) => (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {timeOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => field.onChange(opt.value)}
                        className={cn(
                          "rounded-lg border-2 px-3 py-2.5 text-sm font-semibold transition-colors",
                          field.value === opt.value
                            ? "border-brand-red bg-brand-red-soft text-brand-red"
                            : "border-border text-ink hover:border-brand-red/40",
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              />
            </Field>
          </div>
        )}

        {/* Step 3 */}
        {step === 2 && (
          <div className="space-y-5">
            <Field label="Full name" error={errors.name?.message} htmlFor="name">
              <Input id="name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Email" error={errors.email?.message} htmlFor="email">
                <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
              </Field>
              <Field label="Phone" error={errors.phone?.message} htmlFor="phone">
                <Input id="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} {...register("phone")} />
              </Field>
            </div>
            <Field label="Anything else we should know? (optional)" htmlFor="notes">
              <Textarea id="notes" rows={3} placeholder="Gate code, pets, severity, etc." {...register("notes")} />
            </Field>
          </div>
        )}

        {serverError && (
          <p className="mt-5 flex items-center gap-2 text-sm font-medium text-brand-red">
            <AlertCircle className="size-4" /> {serverError}
          </p>
        )}

        {/* Nav */}
        <div className="mt-8 flex items-center justify-between gap-3">
          {step > 0 ? (
            <Button type="button" variant="ghost" onClick={() => setStep((s) => s - 1)}>
              <ArrowLeft aria-hidden /> Back
            </Button>
          ) : (
            <span />
          )}

          {step < steps.length - 1 ? (
            <Button type="button" size="lg" onClick={next}>
              Continue <ArrowRight aria-hidden />
            </Button>
          ) : (
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Submitting…
                </>
              ) : (
                "Get My Free Quote"
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

function TypeCard({
  icon,
  label,
  selected,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-2 rounded-xl border-2 px-4 py-5 font-semibold transition-colors",
        selected
          ? "border-brand-red bg-brand-red-soft text-brand-red"
          : "border-border text-ink hover:border-brand-red/40",
      )}
    >
      {icon}
      {label}
    </button>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-sm text-brand-red">
          <AlertCircle className="size-3.5" /> {error}
        </p>
      )}
    </div>
  );
}
