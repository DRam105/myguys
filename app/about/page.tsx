import type { Metadata } from "next";
import { Users, ShieldCheck, Leaf, Heart, Award, BadgeCheck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBand } from "@/components/shared/cta-band";
import { StatCounter } from "@/components/shared/stat-counter";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Us",
  description:
    "My Guys Pest Control is a local, family-owned team protecting homes and businesses across North County San Diego, Temecula & Murrieta with responsible, guaranteed service.",
  path: "/about",
});

const values = [
  { icon: Users, title: "Local & Family-Owned", body: "We live and work in the same communities we protect. Your neighbors are our customers." },
  { icon: ShieldCheck, title: "Integrity First", body: "Honest recommendations, upfront pricing, and no upselling you things you don't need." },
  { icon: Leaf, title: "Responsible Treatments", body: "Integrated Pest Management that targets pests precisely while protecting your family and pets." },
  { icon: Heart, title: "Customer Obsessed", body: "We treat every home like our own and stand behind our work with a satisfaction guarantee." },
];

const team = [
  { name: "[Owner Name]", role: "Founder & Lead Technician" },
  { name: "[Team Member]", role: "Service Manager" },
  { name: "[Team Member]", role: "Senior Technician" },
  { name: "[Team Member]", role: "Customer Care" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About My Guys"
        title="The Guys Your Neighbors Trust"
        lead={`We started My Guys Pest Control with a simple idea: give ${siteConfig.region} a pest control company that shows up fast, does the job right, and treats people like neighbors — because they are.`}
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="section bg-white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Built on Hard Work & Trust"
              className="lg:mx-0"
            />
            <div className="mt-6 space-y-4 text-muted">
              <p>
                What began as a one-truck, family-run operation has grown into one
                of the most trusted pest control teams in the region — but our
                values haven&apos;t changed a bit.
              </p>
              <p>
                We&apos;re licensed, insured, and obsessive about doing things the
                right way: careful inspections, targeted treatments, and honest
                advice. No scare tactics, no cookie-cutter spraying — just real
                solutions that keep pests out for good.
              </p>
              <p>
                Every home we protect is backed by our free re-treatment
                guarantee, because we don&apos;t consider the job done until
                you&apos;re pest-free.
              </p>
            </div>
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: siteConfig.yearsInBusiness, suffix: "+", label: "Years in Business" },
              { value: siteConfig.treatments, suffix: "+", label: "Treatments" },
              { value: 2, suffix: "hr", label: "Response Time" },
              { value: 100, suffix: "%", label: "Satisfaction Guarantee" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-paper-alt p-6 text-center">
                <p className="font-display text-4xl font-extrabold text-ink">
                  <StatCounter value={s.value} />
                  <span className="text-brand-red">{s.suffix}</span>
                </p>
                <p className="mt-1 text-sm font-medium text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section bg-paper-alt">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            lead="The principles behind every inspection, treatment, and follow-up."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-ink text-white">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Licensing / certifications */}
      <section className="section bg-white">
        <Container>
          <SectionHeading
            eyebrow="Licensed & Certified"
            title="Credentials You Can Count On"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: ShieldCheck, label: "Licensed & Insured", sub: siteConfig.licenseNumber },
              { icon: Award, label: "[BBB Accredited]", sub: "A+ Rating" },
              { icon: BadgeCheck, label: "[EPA-Registered]", sub: "Products" },
              { icon: Leaf, label: "[QualityPro]", sub: "Certified" },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-paper-alt p-6 text-center"
              >
                <Icon className="size-9 text-brand-red" />
                <p className="font-bold text-ink">{label}</p>
                <p className="text-xs text-muted">{sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="section bg-paper-alt">
        <Container>
          <SectionHeading
            eyebrow="Meet the Team"
            title="The Guys Behind My Guys"
            lead="Friendly, professional, and local. (Add real team photos and bios here.)"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.role} className="text-center">
                <div className="mx-auto flex aspect-square w-full max-w-[200px] items-center justify-center rounded-2xl bg-ink text-white">
                  <Users className="size-12 text-white/30" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{member.name}</h3>
                <p className="text-sm text-brand-red">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Community */}
      <section className="section bg-white">
        <Container>
          <div className="rounded-3xl brand-gradient p-8 text-center text-white sm:p-12">
            <Heart className="mx-auto size-10" />
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase">
              Proud to Give Back
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/85">
              We believe in supporting the communities that support us — from
              sponsoring local youth sports to [community program placeholder].
              When you choose My Guys, you&apos;re supporting a local business that
              invests right back into the neighborhood.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand title="Ready to Work With My Guys?" />
    </>
  );
}
