import Link from "next/link";
import type { InputHTMLAttributes } from "react";
import { siteConfig } from "@/lib/site-config";

/**
 * SMS opt-in checkbox with carrier/TCPA-compliant consent language.
 * Spread a react-hook-form `register("smsConsent")` onto it. Optional by
 * design — consent to texts must not be required to submit or purchase.
 *
 * The wording covers all four A2P-required disclosures right next to the
 * checkbox: message type, frequency, rates, and how to opt out.
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
        I agree to receive text messages — such as appointment confirmations,
        reminders, and service updates — from {siteConfig.name}{" "}
        at the phone number I provide. Msg &amp; data rates may apply. Message frequency
        varies. Reply STOP to cancel, HELP for help. Consent is not a condition
        of purchase. We never sell or share your information with third parties
        for marketing. See our{" "}
        <Link href="/terms" className="font-semibold text-brand-red underline">
          Terms
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="font-semibold text-brand-red underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
