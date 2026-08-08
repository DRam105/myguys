import type { Metadata } from "next";
import { CheckCircle2, Phone } from "lucide-react";
import { Container } from "@/components/shared/container";
import { QuoteForm } from "@/components/forms/quote-form";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMeta({
  title: "Get a Free Quote",
  description:
    "Request your free, no-obligation pest control quote and inspection. Fast local service across North County San Diego, Temecula & Murrieta.",
  path: "/quote",
});

const perks = [
  "100% free, no-obligation inspection",
  "Fast, often same-day response",
  "Licensed & insured technicians",
  "Family- & pet-conscious treatments",
];

export default function QuotePage() {
  return (
    <div className="bg-paper-alt">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        {/* Left: value prop */}
        <div className="lg:pr-6">
          <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-red">
            <span className="brand-rule" aria-hidden />
            Free Quote
          </div>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.02] text-ink sm:text-5xl">
            Get Your Free Pest Inspection
          </h1>
          <p className="mt-4 max-w-md text-lg text-muted">
            Tell us about your pest problem and we&apos;ll build a custom plan for
            your home or business. It only takes a minute.
          </p>

          <ul className="mt-8 space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 font-medium text-ink">
                <CheckCircle2 className="size-5 shrink-0 text-brand-red" />
                {perk}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-border bg-white p-5">
            <p className="text-sm text-muted">Prefer to talk to someone now?</p>
            <a
              href={siteConfig.phoneHref}
              className="mt-1 flex items-center gap-2 font-display text-2xl font-extrabold text-ink hover:text-brand-red"
            >
              <Phone className="size-6 text-brand-red" />
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div>
          <QuoteForm />
        </div>
      </Container>
    </div>
  );
}
