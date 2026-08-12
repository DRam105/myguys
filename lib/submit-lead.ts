import { siteConfig } from "@/lib/site-config";

/**
 * The exact consent language the user agrees to when checking the SMS
 * opt-in box. Kept here (and recorded with the lead) so you have an audit
 * trail of what was consented to. Keep in sync with the visible text in
 * `components/forms/sms-consent.tsx`.
 */
export const SMS_CONSENT_TEXT = `I agree to receive text messages from ${siteConfig.name} about my request. Msg & data rates may apply, message frequency varies. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase. See our Terms (${siteConfig.url}/terms) and Privacy Policy (${siteConfig.url}/privacy). We never sell or share your information with third parties for marketing.`;

/**
 * Sends a lead (from any site form) to the server-side relay at /api/lead,
 * which forwards it to your configured webhook (LEAD_WEBHOOK_URL). Enriches
 * the payload with a submission timestamp, the page URL, and — when the SMS
 * box is checked — a consent timestamp and the exact consent language.
 */
export async function submitLead(payload: Record<string, unknown>) {
  const now = new Date().toISOString();
  const consented = payload.smsConsent === true;

  const enriched = {
    ...payload,
    source: siteConfig.url,
    pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
    submittedAt: now,
    ...(consented ? { smsConsentAt: now, smsConsentText: SMS_CONSENT_TEXT } : {}),
  };

  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enriched),
  });

  if (!res.ok) throw new Error("Lead submission failed");
}
