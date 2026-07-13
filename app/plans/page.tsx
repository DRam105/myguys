import type { Metadata } from "next";
import { Check, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { PlanCard } from "@/components/shared/plan-card";
import { CtaBand } from "@/components/shared/cta-band";
import { FaqSection } from "@/components/shared/faq-section";
import { Reveal } from "@/components/shared/reveal";
import { plans, planComparison } from "@/lib/plans";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Plans & Pricing",
  description:
    "Flexible recurring pest control plans for every home — Basic, Home Shield, and Premium. Every plan includes our free re-treatment guarantee. Get exact pricing today.",
  path: "/plans",
});

const planFaqs = [
  {
    question: "How is pricing determined?",
    answer:
      "Final pricing depends on your home's size, the pests involved, and the level of pressure. The prices shown are starting points — we'll give you an exact, no-obligation quote after a quick inspection.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "Our recurring plans are month-to-month with no long lock-in. We earn your business every visit, backed by our satisfaction guarantee.",
  },
  {
    question: "What does the free re-treatment guarantee cover?",
    answer:
      "If covered pests return between your scheduled visits, we'll come back and re-treat at no additional charge. Just give us a call.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. You can upgrade or adjust your plan at any time as your needs change — just let us know.",
  },
];

export default function PlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Plans & Pricing"
        title="Simple Plans, Serious Protection"
        lead="Choose the level of coverage that fits your home. Every plan is customized to your property and backed by our free re-treatment guarantee."
        crumbs={[{ label: "Plans" }]}
      />

      {/* Cards */}
      <section className="section bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
            {plans.map((plan, i) => (
              <Reveal key={plan.slug} delay={i * 0.08} className="h-full">
                <PlanCard plan={plan} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Prices are starting points and customized to your home.{" "}
            <Link href="/quote" className="font-semibold text-brand-red hover:underline">
              Get exact pricing →
            </Link>
          </p>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="section bg-paper-alt">
        <Container>
          <SectionHeading
            eyebrow="Compare"
            title="Plan Comparison"
            lead="See exactly what's included at each level of protection."
          />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white text-left shadow-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-5 text-sm font-bold uppercase tracking-wide text-muted">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.slug}
                      className={
                        "p-5 text-center font-display text-lg font-extrabold uppercase " +
                        (p.popular ? "text-brand-red" : "text-ink")
                      }
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planComparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 1 ? "bg-paper-alt/60" : ""}
                  >
                    <td className="p-4 text-sm font-medium text-ink">{row.feature}</td>
                    {[row.basic, row.homeShield, row.premium].map((val, j) => (
                      <td key={j} className="p-4 text-center">
                        {typeof val === "boolean" ? (
                          val ? (
                            <Check className="mx-auto size-5 text-brand-red" />
                          ) : (
                            <Minus className="mx-auto size-5 text-border" />
                          )
                        ) : (
                          <span className="text-sm font-semibold text-ink">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-border">
                  <td className="p-4" />
                  {plans.map((p) => (
                    <td key={p.slug} className="p-4 text-center">
                      <Link
                        href="/quote"
                        className="inline-flex items-center gap-1 text-sm font-bold text-brand-red hover:underline"
                      >
                        Choose {p.name} <ArrowRight className="size-3.5" />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <FaqSection faqs={planFaqs} title="Pricing Questions" eyebrow="FAQ" />

      <CtaBand
        title="Not Sure Which Plan Fits?"
        subtitle="Tell us about your home and we'll recommend the right level of protection — with exact pricing."
      />
    </>
  );
}
