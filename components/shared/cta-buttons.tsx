import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * The site's primary conversion pair: "Get a Free Quote" + "Call Now".
 * Reused across nearly every section so the next step is always obvious.
 */
export function CtaButtons({
  className,
  onDark = false,
  size = "lg",
}: {
  className?: string;
  onDark?: boolean;
  size?: "default" | "lg" | "xl";
}) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <Button asChild size={size}>
        <Link href="/quote">Get a Free Quote</Link>
      </Button>
      <Button asChild size={size} variant={onDark ? "onDark" : "outline"}>
        <a href={siteConfig.phoneHref}>
          <Phone aria-hidden />
          Call {siteConfig.phone}
        </a>
      </Button>
    </div>
  );
}
