import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/shared/reveal";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMeta({
  title: "Emergency & Add-On Services",
  description:
    "Same-day emergency pest services: mosquito control, bee hive & wasp nest removal, rodent cleanout & exclusion, tick and flea service, bird nest removal, and termite tenting.",
  path: "/services/emergency",
});

const services = [
  {
    name: "Mosquito Control",
    body: "Knock down biting mosquitoes and treat the standing-water sites around your yard where they breed.",
  },
  {
    name: "Bee Hive Removal",
    body: "Safe removal or relocation of established hives — protecting your family while sparing the pollinators when we can.",
  },
  {
    name: "Wasp Nest Removal",
    body: "Fast, safe removal of wasp, hornet, and yellow-jacket nests from eaves, shrubs, and wall voids.",
  },
  {
    name: "Rodent Cleanout & Exclusion",
    body: "Trap and remove rodents, sanitize the affected area, and seal the entry points that let them in.",
  },
  {
    name: "Tick Service",
    body: "Targeted yard treatment to knock down ticks and reduce the risk of tick-borne illness.",
  },
  {
    name: "Flea Service",
    body: "Interior and exterior treatment that breaks the flea life cycle and clears the infestation.",
  },
  {
    name: "Bird Nest Removal",
    body: "Remove nuisance bird nests and add deterrents to discourage re-nesting.",
  },
  {
    name: "Termite Tenting",
    body: "Whole-structure fumigation (tenting) for severe, established termite infestations.",
  },
];

export default function EmergencyServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Emergency & Add-On Services"
        title="Fast Help When Pests Can't Wait"
        lead="Got an urgent problem? These add-on services layer onto any plan — many available same-day. Call or text and we'll get you on the schedule fast."
        crumbs={[{ label: "Services", href: "/services" }, { label: "Emergency Services" }]}
      />

      <section className="section bg-white">
        <Container>
          <SectionHeading
            eyebrow="What We Handle"
            title="Add-On Emergency Services"
            lead="Targeted, responsible treatments for the situations that need attention right now."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={(i % 2) * 0.06}>
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-red-soft text-brand-red">
                    <Check className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{s.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            Need something not listed?{" "}
            <a
              href={siteConfig.phoneHref}
              className="font-semibold text-brand-red hover:underline"
            >
              Call {siteConfig.phone}
            </a>{" "}
            — we&apos;ll help.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Got a Pest Emergency?"
        subtitle="Call or text and we'll get you on the schedule — same-day service is available."
      />
    </>
  );
}
