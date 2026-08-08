import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * The site's primary conversion pair: "Get a Free Quote" + a contact button.
 * Reused across nearly every section so the next step is always obvious.
 * `contact` toggles the second button between tap-to-call and tap-to-text.
 */
export function CtaButtons({
  className,
  onDark = false,
  size = "lg",
  contact = "call",
}: {
  className?: string;
  onDark?: boolean;
  size?: "default" | "lg" | "xl";
  contact?: "call" | "text";
}) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <Button asChild size={size}>
        <Link href="/quote">Get a Free Quote</Link>
      </Button>
      <Button asChild size={size} variant={onDark ? "onDark" : "outline"}>
        {contact === "text" ? (
          <a href={siteConfig.smsHref}>
            <MessageSquare aria-hidden />
            Text Us
          </a>
        ) : (
          <a href={siteConfig.phoneHref}>
            <Phone aria-hidden />
            Call {siteConfig.phone}
          </a>
        )}
      </Button>
    </div>
  );
}
