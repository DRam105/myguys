import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Plan } from "@/lib/plans";
import { cn } from "@/lib/utils";

export function PlanCard({ plan }: { plan: Plan }) {
  const popular = plan.popular;
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all",
        popular
          ? "border-brand-red shadow-xl shadow-brand-red/10 lg:scale-[1.03]"
          : "border-border hover:-translate-y-1 hover:shadow-lg",
      )}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 shadow-md">
          Most Popular
        </Badge>
      )}

      <h3 className="font-display text-2xl font-extrabold uppercase text-ink">
        {plan.name}
      </h3>
      <p className="mt-1 text-sm text-muted">{plan.tagline}</p>

      <div className="mt-5 flex items-end gap-1">
        <span className="text-sm font-medium text-muted">from</span>
        <span className="font-display text-5xl font-extrabold text-ink">
          {plan.priceFrom}
        </span>
        <span className="mb-1.5 text-sm text-muted">{plan.cadence}</span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-ink/80">
            <Check className="mt-0.5 size-4 shrink-0 text-brand-red" />
            {f}
          </li>
        ))}
      </ul>

      <Button
        asChild
        size="lg"
        variant={popular ? "default" : "outline"}
        className="mt-7 w-full"
      >
        <Link href="/quote">{plan.cta}</Link>
      </Button>
    </div>
  );
}
