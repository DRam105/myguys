import { NextResponse } from "next/server";
import { quickQuoteSchema } from "@/lib/validations";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = quickQuoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // TODO: connect to email service / CRM (e.g. Resend, HubSpot).
  // For now we just log the validated payload and return success.
  console.log("[quick-quote] new lead:", parsed.data);

  return NextResponse.json({ ok: true });
}
