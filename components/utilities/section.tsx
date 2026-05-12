import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

import { Container } from "./container"

type SectionTone = "canvas" | "muted" | "elevated"

type SectionProps = ComponentProps<"section"> & {
  contained?: boolean
  /** Vertical rhythm preset */
  size?: "default" | "sm" | "lg"
  /** Surface treatment for alternating rhythm */
  tone?: SectionTone
}

const sizeClasses = {
  sm: "py-14 sm:py-16 md:py-24",
  default: "py-[clamp(3.75rem,10vw,5rem)] md:py-[clamp(4.75rem,11vw,7rem)] lg:py-32",
  lg: "py-20 md:py-28 lg:py-36",
} as const

const toneClasses: Record<SectionTone, string> = {
  canvas: "bg-background",
  muted: "bg-card/[0.11]",
  elevated: "bg-card/[0.18]",
}

export function Section({
  className,
  contained = true,
  size = "default",
  tone = "canvas",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "border-border/40 relative scroll-mt-28 border-t md:scroll-mt-24",
        toneClasses[tone],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  )
}
