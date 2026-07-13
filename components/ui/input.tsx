import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-lg border border-input bg-white px-3.5 py-2 text-base text-ink shadow-sm transition-colors placeholder:text-muted focus-visible:border-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/30 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-brand-red aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-brand-red/20",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
