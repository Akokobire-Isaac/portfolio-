"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"
import { useMemo } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Section } from "@/components/utilities/section"
import { SectionHeader } from "@/components/utilities/section-header"
import { staggerContainer, staggerItem, inViewDefault } from "@/lib/motion"
import { testimonials } from "@/lib/home-content"
import { cn } from "@/lib/utils"

function snap(): Variants {
  return {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0 } },
  }
}

export function TestimonialsSection() {
  const reduced = useReducedMotion()
  const outer = useMemo(
    () => (reduced ? { hidden: {}, visible: { transition: { staggerChildren: 0 } } } : staggerContainer(0.11, 0.04)),
    [reduced]
  )
  const item = reduced ? snap() : staggerItem

  return (
    <Section id="testimonials" size="default" tone="canvas">
      <SectionHeader
        align="center"
        eyebrow="Testimonials"
        title="Trusted by product leaders who care about the craft."
        description="Long-term partnerships, sharp feedback, and outcomes measured in retention — not vanity slides."
      />
      <motion.div
        className="grid gap-7 sm:gap-8 md:grid-cols-3"
        variants={outer}
        initial="hidden"
        whileInView="visible"
        viewport={inViewDefault}
      >
        {testimonials.map((t) => (
          <motion.div key={t.name} variants={item}>
            <Card
              className={cn(
                "group border-border/50 bg-card/40 flex h-full flex-col rounded-2xl backdrop-blur-md",
                "transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                "hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.05]",
                "motion-reduce:hover:translate-y-0 md:hover:-translate-y-1"
              )}
            >
              <CardHeader className="pb-2">
                <Quote
                  className="text-primary/65 size-9 transition-colors duration-300 group-hover:text-primary/85"
                  strokeWidth={1.25}
                  aria-hidden
                />
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-6 pt-0">
                <blockquote className="text-foreground text-[0.9375rem] leading-[1.65] sm:text-base sm:leading-[1.7]">
                  “{t.quote}”
                </blockquote>
                <div className="border-border/50 mt-auto flex items-start gap-3.5 border-t pt-4">
                  <div className="ring-primary/25 relative size-11 shrink-0 overflow-hidden rounded-full ring-2">
                    <Image
                      src={t.avatarSrc}
                      alt={t.avatarAlt}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-foreground text-sm font-medium">{t.name}</p>
                    <CardDescription className="mt-0.5 text-xs sm:text-sm">
                      {t.role}, {t.company}
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
