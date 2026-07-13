import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/lib/site-config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: "How My Guys Pest Control collects, uses, and protects your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
      <Container className="max-w-3xl py-14">
        <div className="prose-legal space-y-6 text-ink/80">
          <p className="text-sm text-muted">
            Last updated: [Date]. This is placeholder content — replace with a
            policy reviewed by your legal counsel.
          </p>

          <Section title="Information We Collect">
            When you request a quote, contact us, or subscribe to updates, we may
            collect your name, phone number, email address, service address, and
            details about your pest concern.
          </Section>
          <Section title="How We Use Your Information">
            We use your information to schedule and provide services, respond to
            inquiries, send service reminders and offers, and improve our
            business. We do not sell your personal information.
          </Section>
          <Section title="Cookies & Analytics">
            Our website may use cookies and third-party analytics tools (e.g.,
            Google Analytics) to understand how visitors use the site. You can
            control cookies through your browser settings.
          </Section>
          <Section title="Data Sharing">
            We share information only with service providers who help us operate
            our business (such as scheduling, payment, or email providers), and
            when required by law.
          </Section>
          <Section title="Your Choices">
            You may opt out of marketing communications at any time by using the
            unsubscribe link in our emails or contacting us directly.
          </Section>
          <Section title="Contact Us">
            Questions about this policy? Reach us at{" "}
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
