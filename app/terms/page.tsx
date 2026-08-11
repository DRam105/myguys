import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/lib/site-config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms & Conditions",
  description: "The terms and conditions governing use of the My Guys Pest Control website and communications.",
  path: "/terms",
});

const EFFECTIVE_DATE = "August 10, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" crumbs={[{ label: "Terms & Conditions" }]} />
      <Container className="max-w-3xl py-14">
        <div className="space-y-8 text-ink/80">
          <p className="text-sm text-muted">Effective Date: {EFFECTIVE_DATE}</p>

          <p className="leading-relaxed">
            Welcome to the {siteConfig.name} website. These Terms &amp; Conditions
            govern your use of our website and communications with {siteConfig.name}.
          </p>
          <p className="leading-relaxed">
            By using this website, you agree to these Terms &amp; Conditions.
          </p>

          <Section title="Website Use">
            <p>The information provided on this website is intended to provide general information about {siteConfig.name} and the pest control services we offer.</p>
            <p>Information on the website should not be considered a guarantee that a particular pest problem can be eliminated or that a particular treatment is appropriate for every property.</p>
            <p>Actual pest control recommendations and services may vary depending on inspection findings, property conditions, pest activity, service agreements, and other factors.</p>
          </Section>

          <Section title="Pest Control Services">
            <p>Specific pest control services may be subject to separate service agreements, estimates, warranties, treatment plans, or other terms provided at the time services are requested or performed.</p>
            <p>If there is a conflict between these website Terms &amp; Conditions and a written pest control service agreement, the applicable service agreement will control with respect to those services.</p>
          </Section>

          <Section title="SMS/Text Messaging Terms">
            <SubHeading>{siteConfig.name} SMS Program</SubHeading>
            <p>When you provide your mobile telephone number and expressly consent to receive SMS communications from {siteConfig.name}, you may receive text messages relating to your pest control services and interactions with us.</p>
            <p>Messages may include:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Appointment confirmations</li>
              <li>Appointment reminders</li>
              <li>Service notifications</li>
              <li>Technician or scheduling updates</li>
              <li>Responses to customer inquiries</li>
              <li>Follow-up communications</li>
              <li>Account or service-related information</li>
              <li>Other communications you have consented to receive</li>
            </ul>
            <p>Message frequency varies. Message and data rates may apply. Consent to receive SMS messages is not a condition of purchasing any goods or services.</p>

            <SubHeading>Opting Out</SubHeading>
            <p>You may cancel SMS messages at any time by replying <strong>STOP</strong>.</p>
            <p>After you send STOP, you may receive a final confirmation message notifying you that you have been unsubscribed. After that, you will no longer receive SMS messages from that messaging program unless you opt in again.</p>

            <SubHeading>Getting Help</SubHeading>
            <p>
              For assistance, reply <strong>HELP</strong> to any SMS message or contact{" "}
              {siteConfig.name} directly at{" "}
              <a href={siteConfig.phoneHref} className="font-semibold text-brand-red">
                {siteConfig.phone}
              </a>{" "}
              or{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-red">
                {siteConfig.email}
              </a>
              .
            </p>
            <p>Wireless carriers are not liable for delayed or undelivered messages.</p>
            <p>Message delivery is subject to the effective transmission of messages by your wireless carrier and other service providers.</p>
            <p>
              Your use of SMS communications is also subject to our{" "}
              <Link href="/privacy" className="font-semibold text-brand-red">
                Privacy Policy
              </Link>
              .
            </p>
          </Section>

          <Section title="Privacy">
            <p>
              Your use of this website and participation in our SMS program are
              subject to our{" "}
              <Link href="/privacy" className="font-semibold text-brand-red">
                Privacy Policy
              </Link>
              .
            </p>
            <p>Mobile information and SMS consent are handled according to the Privacy Policy.</p>
          </Section>

          <Section title="Intellectual Property">
            <p>Unless otherwise indicated, website content including text, graphics, logos, images, branding, and other materials is owned by or licensed to {siteConfig.name} and may not be reproduced or distributed without permission except as permitted by law.</p>
          </Section>

          <Section title="Third-Party Services">
            <p>Our website may use or link to third-party services. {siteConfig.name} is not responsible for the content, availability, security, or privacy practices of third-party websites or services.</p>
          </Section>

          <Section title="Disclaimer">
            <p>We make reasonable efforts to provide accurate information on our website, but we do not guarantee that all website information will always be complete, current, or error-free.</p>
            <p>Pest control results can vary depending on pest type, environmental conditions, property conditions, customer cooperation, treatment methods, and other circumstances.</p>
          </Section>

          <Section title="Limitation of Liability">
            <p>To the fullest extent permitted by applicable law, {siteConfig.name} will not be liable for indirect, incidental, special, or consequential damages resulting solely from the use or inability to use this website.</p>
            <p>Nothing in these Terms &amp; Conditions is intended to limit rights or remedies that cannot legally be limited under applicable law.</p>
          </Section>

          <Section title="Changes to These Terms">
            <p>We may update these Terms &amp; Conditions periodically. Any changes will be posted on this page with an updated effective date.</p>
          </Section>

          <Section title="Contact Us">
            <p>Questions regarding these Terms &amp; Conditions may be directed to:</p>
            <p>
              {siteConfig.name}
              <br />
              Email:{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-red">
                {siteConfig.email}
              </a>
              <br />
              Phone:{" "}
              <a href={siteConfig.phoneHref} className="font-semibold text-brand-red">
                {siteConfig.phone}
              </a>
              <br />
              Website: {siteConfig.url.replace(/^https?:\/\//, "")}
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="pt-1 text-base font-bold text-ink">{children}</h3>;
}
