import { ShieldCheck, ThumbsUp } from "lucide-react";
import { Container } from "@/components/shared/container";
import { StatCounter } from "@/components/shared/stat-counter";
import { siteConfig } from "@/lib/site-config";

export function TrustBar() {
  const stats = [
    { value: siteConfig.yearsInBusiness, suffix: "+", label: "Years in Business" },
    { value: siteConfig.treatments, suffix: "+", label: "Treatments" },
    { value: 2, suffix: "hr", label: "Response Time" },
    { value: 24, suffix: "hr", label: "Dispatch Time" },
  ];

  const badges = [
    { icon: ShieldCheck, label: "Licensed & Insured" },
    { icon: ThumbsUp, label: "Satisfaction Guaranteed" },
  ];

  return (
    <section className="border-y border-border bg-white">
      <Container className="py-10">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                {s.decimal ? (
                  <>
                    {s.value}
                    <span className="text-brand-red">{s.suffix}</span>
                  </>
                ) : (
                  <>
                    <StatCounter value={s.value} />
                    <span className="text-brand-red">{s.suffix}</span>
                  </>
                )}
              </p>
              <p className="mt-1 text-sm font-medium text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border pt-8">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm font-semibold text-ink/70"
            >
              <Icon className="size-5 text-brand-red" />
              {label}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
