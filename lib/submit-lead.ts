import { siteConfig } from "@/lib/site-config";

/**
 * Sends a lead (from any site form) to the configured webhook.
 *
 * Static-site friendly: posts directly from the browser to
 * `siteConfig.leadWebhookUrl` (e.g. a GoHighLevel inbound webhook).
 * While that URL is empty, it resolves successfully without sending —
 * so forms work during build-out and go live the moment you add the URL.
 */
export async function submitLead(payload: Record<string, unknown>) {
  const url = siteConfig.leadWebhookUrl;

  if (!url) {
    // TODO: set siteConfig.leadWebhookUrl to your GoHighLevel webhook.
    if (typeof console !== "undefined") {
      console.log("[lead] no webhook configured — not sent:", payload);
    }
    return;
  }

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, source: siteConfig.url }),
  });
}
