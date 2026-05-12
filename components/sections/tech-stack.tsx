"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { Variants } from "framer-motion"
import { useMemo } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Section } from "@/components/utilities/section"
import { SectionHeader } from "@/components/utilities/section-header"
import { staggerContainer, staggerItem, inViewDefault } from "@/lib/motion"
import { techCategories } from "@/lib/home-content"
import { cn } from "@/lib/utils"

function snap(): Variants {
  return {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0 } },
  }
}

export function TechStackSection() {
  const reduced = useReducedMotion()
  const outer = useMemo(
    () => (reduced ? { hidden: {}, visible: { transition: { staggerChildren: 0 } } } : staggerContainer(0.12, 0.04)),
    [reduced]
  )
  const card = reduced ? snap() : staggerItem

  return (
    <Section id="tech" size="default" tone="muted">
      <SectionHeader
        eyebrow="Tech stack"
        title="Tools I reach for to ship with confidence."
        description="A focused kit for premium interfaces — fast iteration without sacrificing structure or accessibility."
      />
      <motion.div
        className="grid gap-7 sm:gap-8 md:grid-cols-3"
        variants={outer}
        initial="hidden"
        whileInView="visible"
        viewport={inViewDefault}
      >
        {techCategories.map((cat) => (
          <motion.div key={cat.name} variants={card}>
            <Card
              className={cn(
                "border-border/50 bg-background/55 h-full rounded-2xl backdrop-blur-md",
                "transition-[border-color,box-shadow,transform,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                "hover:border-primary/20 hover:bg-card/40 hover:shadow-lg hover:shadow-primary/[0.05]",
                "motion-reduce:hover:translate-y-0 md:hover:-translate-y-1"
              )}
            >
              <CardHeader className="border-border/35 border-b pb-4">
                <CardTitle className="text-foreground text-base font-semibold tracking-tight">
                  {cat.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 pt-4">
                {cat.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="border-primary/18 font-normal transition-colors duration-200 hover:border-primary/35 hover:bg-primary/5"
                  >
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
