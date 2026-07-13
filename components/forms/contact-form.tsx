"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { contactSchema, type ContactValues } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactValues) {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please call us or try again.");
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-green-600" />
        <h3 className="mt-4 text-2xl font-bold text-ink">Message sent!</h3>
        <p className="mt-2 text-muted">
          Thanks for reaching out. One of our guys will get back to you shortly —
          usually the same business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message} htmlFor="name">
          <Input id="name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
        </Field>
        <Field label="Phone" error={errors.phone?.message} htmlFor="phone">
          <Input id="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} {...register("phone")} />
        </Field>
      </div>

      <Field label="Email" error={errors.email?.message} htmlFor="email">
        <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
      </Field>

      <Field label="How can we help?" error={errors.message?.message} htmlFor="message">
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your pest problem…"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      {serverError && (
        <p className="flex items-center gap-2 text-sm font-medium text-brand-red">
          <AlertCircle className="size-4" /> {serverError}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
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
