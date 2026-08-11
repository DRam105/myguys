import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/lib/site-config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms & Conditions",
  description: "The terms and conditions governing use of the My Guys Pest Control website and services.",
  path: "/terms",
});

const EFFECTIVE_DATE = "August 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" crumbs={[{ label: "Terms & Conditions" }]} />
      <Container className="max-w-3xl py-14">
        <div className="space-y-8 text-ink/80">
          <p className="text-sm text-muted">Effective date: {EFFECTIVE_DATE}</p>

          <p className="leading-relaxed">
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of{" "}
            {siteConfig.url} and the services provided by {siteConfig.name} (&ldquo;
            {siteConfig.shortName},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;). By accessing our website or using our services, you
            agree to these Terms and our Privacy Policy. If you do not agree, please
            do not use our website or services.
          </p>

          <Section title="Our Services">
            <p>{siteConfig.name} provides residential and commercial pest control services in {siteConfig.region} and surrounding areas. Service availability, scope, scheduling, and pricing are subject to inspection and confirmation, and specific terms may be set out in your individual service agreement.</p>
          </Section>

          <Section title="Estimates, Quotes & Scheduling">
            <p>Quotes provided online, by phone, or by text are estimates based on the information you provide and may be adjusted after an in-person inspection. Submitting a quote request or contact form does not create a binding service agreement; service begins only after we confirm scheduling with you.</p>
          </Section>

          <Section title="Recurring Service Plans & Cancellation">
            <p>Recurring plans continue on the schedule described in your service agreement until canceled. You may cancel in accordance with the terms of that agreement. Prices for recurring services may change with reasonable advance notice.</p>
          </Section>

          <Section title="Payment">
            <p>Payment terms, amounts, and billing frequency are set out in your service agreement or invoice. You agree to pay all charges for services rendered. Late or unpaid balances may be subject to fees or suspension of service as permitted by law.</p>
          </Section>

          <Section title="Service Guarantee">
            <p>Any guarantee or re-service commitment applies only as expressly stated in your written service agreement and only to covered pests on active plans. Results can vary based on property conditions, access, and cooperation, and no specific outcome is guaranteed except as set out in your agreement.</p>
          </Section>

          <Section title="Customer Responsibilities">
            <p>To perform services effectively and safely, you agree to provide reasonable access to the property, disclose known conditions or hazards, follow any preparation and post-treatment instructions we provide, and keep people and pets away from treated areas as directed.</p>
          </Section>

          <Section title="Text Messaging Terms">
            <p>By providing your mobile number and opting in, you consent to receive service-related and, where applicable, promotional text messages from us. Message frequency varies, and message and data rates may apply. Reply <strong>STOP</strong> to opt out or <strong>HELP</strong> for help. Consent to receive texts is not a condition of purchasing any service. See our Privacy Policy for details.</p>
          </Section>

          <Section title="Website Use & Intellectual Property">
            <p>The content on this website — including text, graphics, logos, and images — is owned by or licensed to {siteConfig.name} and is protected by applicable laws. You may not copy, reproduce, or use our content without permission. You agree not to use the website unlawfully or in any way that could damage or impair it.</p>
          </Section>

          <Section title="Disclaimers">
            <p>The website and its content are provided &ldquo;as is&rdquo; without warranties of any kind, express or implied, to the fullest extent permitted by law. We do not warrant that the website will be uninterrupted, error-free, or free of harmful components.</p>
          </Section>

          <Section title="Limitation of Liability">
            <p>To the fullest extent permitted by law, {siteConfig.name} and its owners, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website or our services. Nothing in these Terms limits liability that cannot be limited under applicable law.</p>
          </Section>

          <Section title="Indemnification">
            <p>You agree to indemnify and hold harmless {siteConfig.name} from claims, damages, and expenses arising out of your misuse of the website or your breach of these Terms.</p>
          </Section>

          <Section title="Governing Law">
            <p>These Terms are governed by the laws of the State of California, without regard to its conflict-of-laws rules. Any dispute will be resolved in the state or federal courts located in California, and you consent to their jurisdiction.</p>
          </Section>

          <Section title="Changes to These Terms">
            <p>We may update these Terms from time to time. Changes are effective when posted, and the &ldquo;Effective date&rdquo; above will be updated accordingly. Your continued use of the website or services means you accept the updated Terms.</p>
          </Section>

          <Section title="Contact Us">
            <p>
              Questions about these Terms? Reach us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-red">
                {siteConfig.email}
              </a>
              , {siteConfig.phone}, or {siteConfig.address.street},{" "}
              {siteConfig.address.city}, {siteConfig.address.state}{" "}
              {siteConfig.address.zip}.
            </p>
          </Section>
        </div>
      </Container>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold uppercase text-ink">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}
