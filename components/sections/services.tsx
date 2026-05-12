"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Check } from "lucide-react"
import { useMemo } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Section } from "@/components/utilities/section"
import { SectionHeader } from "@/components/utilities/section-header"
import { staggerContainer, staggerItem, inViewDefault } from "@/lib/motion"
import { services } from "@/lib/home-content"
import { cn } from "@/lib/utils"

function snap(): Variants {
  return {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0 } },
  }
}

export function ServicesSection() {
  const reduced = useReducedMotion()
  const outer = useMemo(
    () => (reduced ? { hidden: {}, visible: { transition: { staggerChildren: 0 } } } : staggerContainer(0.11, 0.02)),
    [reduced]
  )
  const item = reduced ? snap() : staggerItem

  return (
    <Section id="services" size="default" tone="muted">
      <SectionHeader
        eyebrow="Services"
        title="How I plug in — flexible engagement, one bar for quality."
        description="Engagements are scoped collaboratively: embedded with your team or leading a focused workstream from brief to handoff."
      />
      <motion.div
        className="flex flex-col gap-7 sm:gap-8"
        variants={outer}
        initial="hidden"
        whileInView="visible"
        viewport={inViewDefault}
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={item}>
            <Card
              className={cn(
                "border-border/50 bg-background/55 overflow-hidden rounded-2xl backdrop-blur-md",
                "transition-[border-color,box-shadow,transform,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                "hover:border-primary/22 hover:bg-card/35 hover:shadow-lg hover:shadow-primary/[0.04]",
                "motion-reduce:hover:translate-y-0 md:hover:-translate-y-0.5"
              )}
            >
              <div className="flex flex-col gap-6 p-6 sm:p-7 md:flex-row md:items-start md:gap-12 md:p-9">
                <span className="font-heading text-primary/50 text-5xl font-semibold tracking-tight md:text-6xl">
                  {service.number}
                </span>
                <div className="min-w-0 flex-1 space-y-4">
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-semibold tracking-tight sm:text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-[0.9375rem] leading-[1.65] sm:text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="text-muted-foreground space-y-2.5 text-sm">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex gap-2.5">
                          <Check className="text-primary mt-0.5 size-4 shrink-0" aria-hidden />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
