import type { Transition, Variants } from "framer-motion";

export const easeOutSoft = [0.22, 1, 0.36, 1] as const;

export const spring: Transition = {
  type: "spring",
  stiffness: 140,
  damping: 24,
  mass: 0.6,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export const rise: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export const staggerContainer = (stagger = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const lineGrow = (vertical = false): Variants => ({
  hidden: vertical ? { scaleY: 0 } : { scaleX: 0 },
  visible: {
    scaleY: 1,
    scaleX: 1,
    transition: { duration: 1.1, ease: "easeOut" as const },
  },
});