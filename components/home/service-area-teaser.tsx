import { MapPin } from "lucide-react";
import { Container } from "@/components/shared/container";
import { ZipChecker } from "@/components/shared/zip-checker";
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

          {/* Map placeholder */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="absolute inset-0 hero-grid opacity-100 [background-color:#eef0f2]" aria-hidden />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
              <MapPin className="size-10 text-brand-red" />
              <p className="font-semibold text-ink">[Embedded Map Placeholder]</p>
              <p className="max-w-xs px-6 text-sm text-muted">
                {/* TODO: embed Google Maps iframe of your service area here */}
                Drop in a Google Maps embed of your coverage area.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
