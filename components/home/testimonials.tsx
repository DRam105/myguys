"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ReviewCard } from "@/components/shared/review-card";
import { reviews } from "@/lib/reviews";

export function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="section bg-white">
      <Container>
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Reviews"
            title="Loved by Homeowners Like You"
            className="md:mx-0"
          />
          <div className="flex items-center gap-4">
            <div className="hidden gap-2 md:flex">
              <button
                onClick={() => scroll(-1)}
                aria-label="Previous reviews"
                className="flex size-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-brand-red hover:text-brand-red"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Next reviews"
                className="flex size-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-brand-red hover:text-brand-red"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((review) => (
            <div
              key={review.name + review.quote}
              className="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/reviews" className="font-semibold text-brand-red hover:underline">
            Read all reviews →
          </Link>
        </div>
      </Container>
    </section>
  );
}
