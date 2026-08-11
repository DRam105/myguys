import Link from "next/link";
import type { InputHTMLAttributes } from "react";
import { siteConfig } from "@/lib/site-config";

/**
 * SMS opt-in checkbox with carrier/TCPA-compliant consent language.
 * Spread a react-hook-form `register("smsConsent")` onto it. Optional by
 * design — consent to texts must not be required to submit or purchase.
 */
export function SmsConsent(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex items-start gap-2.5">
      <input
        type="checkbox"
        aria-label="I agree to receive text messages"
        className="mt-0.5 size-4 shrink-0 accent-brand-red"
        {...props}
      />
      <p className="text-xs leading-relaxed text-muted">
        I agree to receive text messages from {siteConfig.name}{" "}
        about my request. Msg &amp; data rates may apply, message frequency varies. Reply STOP to opt
        out, HELP for help. Consent is not a condition of purchase. See our{" "}
        <Link href="/terms" className="font-semibold text-brand-red underline">
          Terms
        </Link>{" "}
        &amp;{" "}
        <Link href="/privacy" className="font-semibold text-brand-red underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
