"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { Variants } from "framer-motion"
import { useMemo } from "react"

import { staggerContainer, staggerItem, transitions, inViewDefault } from "@/lib/motion"
import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

function snap(): Variants {
  return {
    hidden: { opacity: 1, y: 0, scaleX: 1 },
    visible: { opacity: 1, y: 0, scaleX: 1, transition: { duration: 0 } },
  }
}

const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { ...transitions.smooth, delay: 0.04 },
  },
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const reduced = useReducedMotion()
  const container = useMemo(() => {
    if (reduced) {
      return {
        hidden: {},
        visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
      } satisfies Variants
    }
    return staggerContainer(0.085, 0.035)
  }, [reduced])

  const item = reduced ? snap() : staggerItem
  const line = reduced ? snap() : lineVariants

  return (
    <motion.div
      className={cn(
        "mb-14 max-w-[42rem] md:mb-20",
        align === "center" && "mx-auto text-center",
        className
      )}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={inViewDefault}
    >
      <motion.p
        variants={item}
        className="text-primary mb-3.5 text-[0.6875rem] font-semibold tracking-[0.26em] uppercase sm:text-xs"
      >
        {eyebrow}
      </motion.p>
      <motion.div
        variants={line}
        className={cn(
          "bg-primary/70 mb-7 h-[2px] w-14 origin-left sm:mb-9 sm:w-[4.25rem]",
          align === "center" && "mx-auto origin-center"
        )}
        style={{
          transformOrigin: align === "center" ? "50% 50%" : "0% 50%",
        }}
      />
      <motion.h2
        variants={item}
        className="font-heading text-foreground text-balance text-[clamp(1.75rem,4.5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.75rem] lg:text-[2.95rem]"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={item}
          className={cn(
            "text-muted-foreground mt-6 max-w-xl text-pretty text-[0.9375rem] leading-[1.65] sm:mt-7 sm:text-lg sm:leading-[1.7]",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  )
}
