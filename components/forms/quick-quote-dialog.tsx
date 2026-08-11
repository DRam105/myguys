"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertCircle, ArrowRight, Phone } from "lucide-react";
import { quickQuoteSchema, type QuickQuoteValues } from "@/lib/validations";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site-config";
import { submitLead } from "@/lib/submit-lead";
import { SmsConsent } from "@/components/forms/sms-consent";

export function QuickQuoteDialog({
  triggerClassName,
  triggerLabel = "Get a Free Quote",
}: {
  triggerClassName?: string;
  triggerLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuickQuoteValues>({ resolver: zodResolver(quickQuoteSchema) });

  async function onSubmit(values: QuickQuoteValues) {
    setServerError(null);
    try {
      await submitLead({ ...values, form: "quick-quote" });
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please call us or try again.");
    }
  }

  // Reset the form state whenever the dialog is closed.
  function onOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setTimeout(() => {
        setSubmitted(false);
        setServerError(null);
        reset();
      }, 200);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" className={triggerClassName}>
          {triggerLabel} <ArrowRight aria-hidden />
        </Button>
      </DialogTrigger>

      <DialogContent>
        {submitted ? (
          <div className="py-4 text-center">
            <CheckCircle2 className="mx-auto size-12 text-green-600" />
            <h3 className="mt-4 font-display text-2xl font-extrabold uppercase text-ink">
              Request Sent!
            </h3>
            <p className="mt-2 text-sm text-muted">
              Thanks! One of our guys will reach out shortly — usually the same
              business day. Need help now?
            </p>
            <Button asChild className="mt-5">
              <a href={siteConfig.phoneHref}>
                <Phone aria-hidden /> Call {siteConfig.phone}
              </a>
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Request a Free Quote</DialogTitle>
              <DialogDescription>
                Tell us a bit about your pest problem and we&apos;ll get right back
                to you.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
              <Field label="Name" htmlFor="qq-name" error={errors.name?.message}>
                <Input
                  id="qq-name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
              </Field>

              <Field label="Email" htmlFor="qq-email" error={errors.email?.message}>
                <Input
                  id="qq-email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
              </Field>

              <Field label="Cell number" htmlFor="qq-phone" error={errors.phone?.message}>
                <Input
                  id="qq-phone"
                  type="tel"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  {...register("phone")}
                />
              </Field>

              <Field
                label="What pest issue are you having?"
                htmlFor="qq-issue"
                error={errors.issue?.message}
              >
                <Textarea
                  id="qq-issue"
                  rows={3}
                  placeholder="e.g. ants in the kitchen, rats in the garage…"
                  aria-invalid={!!errors.issue}
                  {...register("issue")}
                />
              </Field>

              <SmsConsent {...register("smsConsent")} />

              {serverError && (
                <p className="flex items-center gap-2 text-sm font-medium text-brand-red">
                  <AlertCircle className="size-4" /> {serverError}
                </p>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Sending…
                  </>
                ) : (
                  "Request My Free Quote"
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
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
