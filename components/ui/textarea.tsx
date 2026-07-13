import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-28 w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-base text-ink shadow-sm transition-colors placeholder:text-muted focus-visible:border-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/30 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-brand-red",
        className,
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
