import { Users, ShieldCheck, Leaf, Zap } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const values = [
  {
    icon: Users,
    title: "Local & Family-Owned",
    body: "We live where we work. You're not a ticket number — you're a neighbor, and we treat your home like our own.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Results",
    body: "If pests return between scheduled visits, so do we — with free re-treatments and a satisfaction guarantee.",
  },
  {
    icon: Leaf,
    title: "Family- & Pet-Conscious",
    body: "Our Integrated Pest Management approach targets pests precisely, using responsible products applied by licensed pros.",
  },
  {
    icon: Zap,
    title: "Fast Same-Day Response",
    body: "Wasp nest by the door? Ants overnight? We offer same-day and emergency service to solve urgent problems fast.",
  },
];

export function WhyChoose() {
  return (
    <section className="section bg-paper-alt">
      <Container>
        <SectionHeading
          eyebrow="Why My Guys"
          title="The Guys You Actually Want to Call"
          lead="We combine big-brand capability with the care and accountability of a local, family-owned team — powered by responsible Integrated Pest Management."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-ink text-white transition-colors group-hover:brand-gradient">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
