"use client";

import { useEffect, useRef, useState } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

/** Count-up number that animates once when scrolled into view. */
export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1600, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    if (reduced) return;
    const unsub = spring.on("change", (latest) => setDisplay(Math.round(latest)));
    return () => unsub();
  }, [spring, reduced]);

  // When reduced motion is preferred, render the final value directly.
  const shown = reduced ? value : display;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown.toLocaleString()}
      {suffix}
    </span>
  );
}
