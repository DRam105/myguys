"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Direction the element slides in from. */
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  /** Stagger children when they are themselves <Reveal> or motion items. */
  as?: "div" | "section" | "li" | "span";
};

const offset = 24;

/**
 * Fade/slide-in-on-scroll wrapper. Fully respects prefers-reduced-motion
 * (renders instantly with no transform when reduced motion is requested).
 */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const hidden =
    direction === "none"
      ? { opacity: 0 }
      : {
          opacity: 0,
          x: direction === "left" ? offset : direction === "right" ? -offset : 0,
          y: direction === "up" ? offset : direction === "down" ? -offset : 0,
        };

  const variants: Variants = {
    hidden: reduced ? { opacity: 1 } : hidden,
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
