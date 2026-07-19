import { MapPin } from "lucide-react";
import { Container } from "@/components/shared/container";
import { ZipChecker } from "@/components/shared/zip-checker";
import { MapEmbed } from "@/components/shared/map-embed";
import { servedCities } from "@/lib/zips";
import { siteConfig } from "@/lib/site-config";

export function ServiceAreaTeaser() {
  return (
    <section className="section bg-paper-alt">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-red">
              <span className="brand-rule" aria-hidden />
              Service Area
            </div>
            <h2 className="font-display text-3xl font-extrabold uppercase text-ink sm:text-4xl">
              Proudly Serving {siteConfig.region}
            </h2>
            <p className="mt-4 max-w-lg text-lg text-muted">
              Fast, local response across the region. Enter your ZIP code to see
              if we service your neighborhood — most quotes take under a minute.
            </p>

            <div className="mt-6">
              <ZipChecker />
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {servedCities.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm font-medium text-ink/80"
                >
                  <MapPin className="size-3.5 text-brand-red" />
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage-area map */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <MapEmbed
              src={siteConfig.mapEmbedSrc}
              title={`${siteConfig.name} service area map`}
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
