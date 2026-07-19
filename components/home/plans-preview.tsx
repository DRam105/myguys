import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PlanCard } from "@/components/shared/plan-card";
import { Reveal } from "@/components/shared/reveal";
import { plans } from "@/lib/plans";

export function PlansPreview() {
  return (
    <section className="section bg-white">
      <Container>
        <SectionHeading
          eyebrow="Plans & Pricing"
          title="Protection Plans for Every Home"
          lead="Choose a recurring plan and relax — we handle the pests year-round. Every plan includes our free re-treatment guarantee."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.slug} delay={i * 0.08} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted">
            Pricing is customized to your home&apos;s size and pest pressure.
          </p>
          <Link
            href="/plans"
            className="mt-2 inline-flex items-center gap-1.5 font-semibold text-brand-red hover:underline"
          >
            Compare all plans <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
