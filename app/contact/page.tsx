import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { MapEmbed } from "@/components/shared/map-embed";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMeta({
  title: "Contact Us",
  description:
    "Get in touch with My Guys Pest Control. Call, email, or send us a message — fast local service across North County San Diego, Temecula & Murrieta.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Solve Your Pest Problem"
        lead="Questions, scheduling, or an urgent pest issue? Reach out and one of our guys will get right back to you."
        crumbs={[{ label: "Contact" }]}
      />

      <Container className="grid gap-10 py-14 lg:grid-cols-[1fr_1.2fr] lg:py-20">
        {/* Contact info */}
        <div className="space-y-6">
          <ContactRow icon={<Phone />} label="Call or text">
            <a href={siteConfig.phoneHref} className="hover:text-brand-red">
              {siteConfig.phone}
            </a>
          </ContactRow>
          <ContactRow icon={<Mail />} label="Email">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-red">
              {siteConfig.email}
            </a>
          </ContactRow>
          <ContactRow icon={<MapPin />} label="Office">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
          </ContactRow>
          <ContactRow icon={<Clock />} label="Hours">
            {siteConfig.hours.map((h) => (
              <span key={h.day} className="block text-sm">
                <span className="font-semibold text-ink">{h.day}:</span> {h.time}
              </span>
            ))}
          </ContactRow>

          {/* Office location map */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-paper-alt">
            <MapEmbed zoom={14} className="absolute inset-0 h-full w-full border-0" />
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-2xl font-extrabold uppercase text-ink">
            Send Us a Message
          </h2>
          <p className="mt-1 text-sm text-muted">
            We typically respond the same business day.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-red-soft text-brand-red [&_svg]:size-5">
        {icon}
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-muted">{label}</p>
        <div className="mt-0.5 font-medium text-ink">{children}</div>
      </div>
    </div>
  );
}
