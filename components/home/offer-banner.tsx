import Link from "next/link";
import { Phone, Tag } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function OfferBanner() {
  return (
    <section className="relative overflow-hidden brand-gradient">
      {/* Diagonal texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden
      />
      <Container className="relative flex flex-col items-center gap-6 py-12 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-4">
          <span className="hidden size-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white sm:flex">
            <Tag className="size-7" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/80">
              Limited-Time Offer · {siteConfig.offer.expires}
            </p>
            <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
              {siteConfig.offer.headline}
            </h2>
            <p className="mt-1 text-sm text-white/80">{siteConfig.offer.subtext}</p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="dark">
            <Link href="/quote">Claim Offer</Link>
          </Button>
          <Button asChild size="lg" variant="light">
            <a href={siteConfig.phoneHref}>
              <Phone aria-hidden /> Call Now
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
