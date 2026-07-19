import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { ReviewCard } from "@/components/shared/review-card";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/shared/reveal";
import { reviews } from "@/lib/reviews";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Customer Reviews",
  description:
    "Reviews and testimonials from My Guys Pest Control customers across North County San Diego, Temecula & Murrieta.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What Our Customers Say"
        lead="We're a locally-owned team earning trust one home at a time. Here's what customers have shared about working with My Guys."
        crumbs={[{ label: "Reviews" }]}
      />

      {/* Review widget placeholders */}
      <section className="border-b border-border bg-paper-alt">
        <Container className="flex flex-col items-center justify-center gap-4 py-8 sm:flex-row">
          {/* TODO: embed live Google & Facebook review widgets */}
          <div className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-muted">
            [Google Reviews Widget]
          </div>
          <div className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-muted">
            [Facebook Reviews Widget]
          </div>
        </Container>
      </section>

      {/* Wall */}
      <section className="section bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.name + review.quote} delay={(i % 3) * 0.06}>
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready to Experience the Difference?"
        subtitle="Get your free, no-obligation quote today and see why locals choose My Guys."
      />
    </>
  );
}
