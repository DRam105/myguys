import { Quote } from "lucide-react";
import { StarRating } from "@/components/shared/star-rating";
import type { Review } from "@/lib/reviews";
import { cn } from "@/lib/utils";

export function ReviewCard({
  review,
  className,
}: {
  review: Review;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm",
        className,
      )}
    >
      <div className={cn("flex items-center", review.showStars ? "justify-between" : "justify-end")}>
        {review.showStars && <StarRating rating={review.rating} />}
        <Quote className="size-8 text-brand-red/15" aria-hidden />
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/85">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <span className="flex size-10 items-center justify-center rounded-full brand-gradient text-sm font-bold text-white">
          {review.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-bold text-ink">{review.name}</p>
          <p className="text-xs text-muted">
            {review.location} · {review.service}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
