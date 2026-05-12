"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { HTMLMotionProps, Variants } from "framer-motion"
import type { ReactNode } from "react"

import { inViewDefault, transitions } from "@/lib/motion"
import { cn } from "@/lib/utils"

type FadeInProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: ReactNode
  variant?: "fadeInUp" | "fadeIn"
  delay?: number
}

function buildVariants(
  variant: FadeInProps["variant"],
  delay: number
): Variants {
  const baseTransition = { ...transitions.smooth, delay }
  if (variant === "fadeIn") {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: baseTransition },
    }
  }
  return {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: baseTransition,
    },
  }
}

export function FadeIn({
  className,
  variant = "fadeInUp",
  delay = 0,
  children,
  ...props
}: FadeInProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={inViewDefault}
      variants={buildVariants(variant, delay)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
