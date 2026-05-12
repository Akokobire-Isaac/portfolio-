import type { Transition, Variants } from "framer-motion"

/** Shared easing — calm, premium deceleration */
export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const transitions = {
  smooth: { duration: 0.58, ease: easeOutExpo } satisfies Transition,
  snappy: { duration: 0.38, ease: easeOutExpo } satisfies Transition,
  micro: { duration: 0.22, ease: easeOutExpo } satisfies Transition,
  /** Longer ease for cards / panels */
  luxe: { duration: 0.68, ease: easeOutExpo } satisfies Transition,
} as const

/** Default scroll-reveal bounds — triggers slightly before entering view */
export const inViewDefault = {
  once: true,
  margin: "-7% 0px",
  amount: 0.15 as const,
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.smooth,
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.smooth,
  },
}

export function staggerContainer(
  staggerChildren = 0.07,
  delayChildren = 0.04
): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  }
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.46, ease: easeOutExpo },
  },
}

/** Hero (above the fold) — staggered entrance */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
}

export const heroEyebrow: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...transitions.snappy, delay: 0 },
  },
}

export const heroHeadline: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0 },
  },
}

export const heroHeadlineLine: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: easeOutExpo },
  },
}

export const heroHeadlineAccent: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.78, ease: easeOutExpo },
  },
}

export const heroSubtitle: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
}

export const heroActions: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.snappy,
  },
}

export const heroLine: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: easeOutExpo, delay: 0.15 },
  },
}
