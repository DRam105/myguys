import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { ServicesGrid } from "@/components/home/services-grid";
import { WhyChoose } from "@/components/home/why-choose";
import { HowItWorks } from "@/components/home/how-it-works";
import { PlansPreview } from "@/components/home/plans-preview";
import { OfferBanner } from "@/components/home/offer-banner";
import { Testimonials } from "@/components/home/testimonials";
import { ServiceAreaTeaser } from "@/components/home/service-area-teaser";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <HowItWorks />
      <PlansPreview />
      <WhyChoose />
      <OfferBanner />
      <Testimonials />
      <ServiceAreaTeaser />
      <FinalCta />
    </>
  );
}
