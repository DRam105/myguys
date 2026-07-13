import Link from "next/link";
import {
  ArrowRight,
  Bug,
  House,
  Mouse,
  BedDouble,
  Droplet,
  Hexagon,
  Rat,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const treats = [
  { name: "Ants", href: "/services/ants", Icon: Bug },
  { name: "Termites", href: "/services/termite-control", Icon: House },
  { name: "Rodents", href: "/services/rodent-control", Icon: Mouse },
  { name: "Cockroaches", href: "/services/cockroaches", Icon: Rat },
  { name: "Bed Bugs", href: "/services/bed-bugs", Icon: BedDouble },
  { name: "Mosquitoes", href: "/services/mosquito-tick", Icon: Droplet },
  { name: "Spiders", href: "/services/spiders", Icon: Bug },
  { name: "Wasps", href: "/services/wasps-stinging-insects", Icon: Hexagon },
];

export function ServicesGrid() {
  return (
    <section className="section bg-white">
      <Container>
        <SectionHeading
          eyebrow="What We Treat"
          title="One Team for Every Pest"
          lead="From seasonal invaders to structural threats, our licensed technicians handle it all with a targeted, responsible approach."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {treats.map(({ name, href, Icon }, i) => (
            <Reveal key={name} delay={i * 0.05}>
              <Link
                href={href}
                className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-xl"
              >
                <span className="flex size-14 items-center justify-center rounded-xl bg-brand-red-soft text-brand-red transition-colors group-hover:brand-gradient group-hover:text-white">
                  <Icon className="size-7" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{name}</h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand-red opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 font-semibold text-brand-red hover:underline"
          >
            View all services <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
