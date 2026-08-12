import { NextResponse } from "next/server";

/**
 * Server-side lead relay.
 *
 * Receives lead submissions from the site's forms, enriches them with the
 * visitor's IP and a received timestamp, and forwards them to the webhook
 * configured in the LEAD_WEBHOOK_URL environment variable (e.g. a
 * GoHighLevel inbound webhook). Keeping the webhook URL in an env var keeps
 * it out of the client bundle, and forwarding server-side avoids CORS.
 *
 * While LEAD_WEBHOOK_URL is unset, submissions succeed without forwarding so
 * the forms work during build-out.
 */
export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    undefined;

  const enriched = {
    ...payload,
    ip,
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    console.log("[lead] LEAD_WEBHOOK_URL not set — not forwarded:", enriched);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enriched),
    });
    if (!res.ok) {
      console.error("[lead] webhook responded", res.status);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } catch (err) {
    console.error("[lead] webhook error", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
