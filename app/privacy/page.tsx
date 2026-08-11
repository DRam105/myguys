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

const EFFECTIVE_DATE = "August 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
      <Container className="max-w-3xl py-14">
        <div className="space-y-8 text-ink/80">
          <p className="text-sm text-muted">Effective date: {EFFECTIVE_DATE}</p>

          <p className="leading-relaxed">
            This Privacy Policy explains how {siteConfig.name} (&ldquo;
            {siteConfig.shortName},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) collects, uses, and shares information about you when
            you visit {siteConfig.url}, request a quote, contact us, or use our pest
            control services. By using our website or services, you agree to the
            practices described in this policy.
          </p>

          <Section title="Information We Collect">
            <p><strong>Information you provide.</strong> When you request a quote, contact us, book service, subscribe to updates, or communicate with us by phone, text, or email, we may collect your name, phone number, email address, service address, property details, and information about your pest concern.</p>
            <p><strong>Information collected automatically.</strong> When you visit our website, we may automatically collect device and usage information such as your IP address, browser type, pages viewed, referring pages, and interactions, using cookies and similar technologies.</p>
            <p><strong>Payment information.</strong> If you make a payment, it is processed by our third-party payment provider; we do not store full card numbers on our systems.</p>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Provide, schedule, and manage pest control services;</li>
              <li>Respond to your inquiries and prepare quotes;</li>
              <li>Send appointment confirmations, service reminders, and account or billing communications;</li>
              <li>Send promotions and updates where you have opted in;</li>
              <li>Operate, maintain, and improve our website and business; and</li>
              <li>Comply with legal obligations and enforce our agreements.</li>
            </ul>
          </Section>

          <Section title="Text Messaging (SMS)">
            <p>If you provide your mobile number and opt in, we may send you text messages related to your service (such as appointment confirmations, reminders, and follow-ups) and, where you consent, promotional offers. Message frequency varies. Message and data rates may apply.</p>
            <p>You can opt out of text messages at any time by replying <strong>STOP</strong>, and reply <strong>HELP</strong> for help. Opting out of texts will not affect our ability to contact you by phone or email about your service. We do not sell or share mobile opt-in information or consent with third parties for their own marketing.</p>
          </Section>

          <Section title="Cookies & Analytics">
            <p>We use cookies and analytics tools to understand how visitors use our site and to improve performance. This may include privacy-friendly web analytics and, if enabled, tools such as Google Analytics. You can control or disable cookies through your browser settings; some site features may not function properly if cookies are disabled.</p>
          </Section>

          <Section title="How We Share Information">
            <p>We do not sell your personal information. We share information only:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>With service providers who help us operate our business (for example, scheduling and CRM, communications, hosting, analytics, and payment providers), under obligations to protect your information;</li>
              <li>When required by law, legal process, or to protect our rights, safety, or property; and</li>
              <li>In connection with a business transaction such as a merger, acquisition, or sale of assets.</li>
            </ul>
          </Section>

          <Section title="Data Retention">
            <p>We retain personal information for as long as needed to provide our services, maintain business records, and comply with legal obligations, after which we take reasonable steps to delete or de-identify it.</p>
          </Section>

          <Section title="Data Security">
            <p>We use reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
          </Section>

          <Section title="Your Choices & California Privacy Rights">
            <p>You may opt out of marketing communications at any time using the unsubscribe link in our emails, replying STOP to texts, or contacting us directly.</p>
            <p>If you are a California resident, you may have rights under the California Consumer Privacy Act (as amended), including the right to know what personal information we collect, the right to request access or deletion, and the right to opt out of the sale or sharing of personal information (we do not sell your personal information). To exercise these rights, contact us using the details below. We will not discriminate against you for exercising your rights.</p>
          </Section>

          <Section title="Children's Privacy">
            <p>Our website and services are not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>
          </Section>

          <Section title="Third-Party Links">
            <p>Our website may link to third-party sites we do not control. We are not responsible for the privacy practices of those sites; please review their policies.</p>
          </Section>

          <Section title="Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. Changes are effective when posted, and the &ldquo;Effective date&rdquo; above will be updated accordingly.</p>
          </Section>

          <Section title="Contact Us">
            <p>
              Questions about this policy? Reach us at{" "}
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
