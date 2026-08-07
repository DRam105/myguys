import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const treats = [
  { name: "Ants", href: "/services/ants", img: "ant" },
  { name: "Termites", href: "/services/termite-control", img: "termite" },
  { name: "Rodents", href: "/services/rodent-control", img: "rodent" },
  { name: "Cockroaches", href: "/services/cockroaches", img: "cockroach" },
  { name: "Bed Bugs", href: "/services/bed-bugs", img: "bedbug" },
  { name: "Mosquitoes", href: "/services/mosquito-tick", img: "mosquito" },
  { name: "Spiders", href: "/services/spiders", img: "spider" },
  { name: "Wasps", href: "/services/wasps-stinging-insects", img: "wasp" },
  { name: "Bees", href: "/services/wasps-stinging-insects", img: "bee" },
  { name: "Fleas", href: "/services/general-pest-control", img: "flea" },
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

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {treats.map(({ name, href, img }, i) => (
            <Reveal key={name} delay={i * 0.05}>
              <Link
                href={href}
                className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-xl"
              >
                <div className="relative size-16 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-red/40 ring-offset-2 ring-offset-white transition-all group-hover:ring-brand-red">
                  <Image
                    src={`/pest-photos/${img}.jpg`}
                    alt={name}
                    fill
                    sizes="64px"
                    className="object-cover grayscale transition duration-300 group-hover:scale-110 group-hover:grayscale-0"
                  />
                </div>
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
