import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Punchy red gradient — primary CTA
        default:
          "brand-gradient text-white shadow-sm hover:shadow-lg hover:shadow-brand-red/25 hover:-translate-y-0.5",
        // Charcoal button for dark accents
        dark: "bg-ink text-white hover:bg-ink-soft shadow-sm hover:-translate-y-0.5",
        // Outline that fills red on hover
        outline:
          "border-2 border-ink/15 bg-transparent text-ink hover:border-brand-red hover:text-brand-red",
        // White outline for use on dark backgrounds
        onDark:
          "border-2 border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white hover:text-ink",
        // Solid white button (red text) for use on red/dark bands
        light:
          "bg-white text-brand-red shadow-sm hover:bg-white/90 hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-border/60",
        ghost: "text-ink hover:bg-paper-alt",
        link: "text-brand-red underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm [&_svg]:size-4",
        default: "h-11 px-5 text-sm [&_svg]:size-4",
        lg: "h-13 px-7 text-base [&_svg]:size-5",
        xl: "h-14 px-8 text-base sm:text-lg [&_svg]:size-5",
        icon: "size-11 [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
