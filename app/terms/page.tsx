import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/lib/site-config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description: "The terms and conditions governing use of the My Guys Pest Control website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" crumbs={[{ label: "Terms of Service" }]} />
      <Container className="max-w-3xl py-14">
        <div className="space-y-6 text-ink/80">
          <p className="text-sm text-muted">
            Last updated: [Date]. This is placeholder content — replace with terms
            reviewed by your legal counsel.
          </p>

          <Section title="Acceptance of Terms">
            By accessing or using this website and our services, you agree to be
            bound by these Terms of Service and our Privacy Policy.
          </Section>
          <Section title="Services">
            My Guys Pest Control provides residential and commercial pest control
            services. Service availability, scheduling, and pricing are subject to
            inspection and confirmation.
          </Section>
          <Section title="Estimates & Guarantees">
            Quotes provided online or by phone are estimates and may be adjusted
            after an in-person inspection. Our re-treatment guarantee applies to
            covered pests on active recurring plans, per the terms of your service
            agreement.
          </Section>
          <Section title="Payment">
            Payment terms are outlined in your service agreement. Recurring plans
            continue until canceled in accordance with that agreement.
          </Section>
          <Section title="Limitation of Liability">
            To the fullest extent permitted by law, My Guys Pest Control is not
            liable for indirect or incidental damages arising from use of this
            website or our services.
          </Section>
          <Section title="Contact Us">
            Questions about these terms? Reach us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-red">
              {siteConfig.email}
            </a>{" "}
            or {siteConfig.phone}.
          </Section>
        </div>
      </Container>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold uppercase text-ink">{title}</h2>
      <p className="mt-2 leading-relaxed">{children}</p>
    </div>
  );
}
