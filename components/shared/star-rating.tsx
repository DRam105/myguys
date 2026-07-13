import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/** Row of 5 stars with the given rating filled. */
export function StarRating({
  rating,
  className,
  size = 18,
}: {
  rating: number;
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={cn(
            i < Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-transparent text-border",
          )}
          aria-hidden
        />
      ))}
    </div>
  );
}
