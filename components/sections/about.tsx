"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { Variants } from "framer-motion"
import Image from "next/image"
import { useMemo } from "react"

import { Section } from "@/components/utilities/section"
import { SectionHeader } from "@/components/utilities/section-header"
import { staggerContainer, staggerItem, inViewDefault } from "@/lib/motion"
import { aboutContent } from "@/lib/home-content"
import { siteMedia } from "@/lib/site-media"
import { cn } from "@/lib/utils"

function snap(): Variants {
  return {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0 } },
  }
}

export function AboutSection() {
  const reduced = useReducedMotion()
  const grid = useMemo(
    () => (reduced ? { hidden: {}, visible: { transition: { staggerChildren: 0 } } } : staggerContainer(0.1, 0.04)),
    [reduced]
  )
  const item = reduced ? snap() : staggerItem

  return (
    <Section id="about" size="default" tone="canvas">
      <SectionHeader
        eyebrow={aboutContent.eyebrow}
        title={aboutContent.title}
      />
      <div className="grid items-start gap-12 sm:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewDefault}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className={cn(
              "ring-border/60 relative aspect-[4/5] max-h-[28rem] w-full overflow-hidden rounded-2xl ring-1",
              "shadow-[0_0_0_1px_oklch(0.96_0.01_85_/_0.06),0_28px_80px_-20px_rgba(0,0,0,0.55)]"
            )}
          >
            <Image
              src={siteMedia.portrait}
              alt={aboutContent.portraitAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-[center_18%] transition-transform duration-700 ease-out motion-safe:hover:scale-[1.02]"
            />
            <div
              className="from-background/70 via-transparent to-primary/15 pointer-events-none absolute inset-0 bg-linear-to-t"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 left-1/2 h-44 w-[92%] max-w-md -translate-x-1/2 rounded-full bg-primary/35 opacity-70 blur-3xl"
              aria-hidden
            />
          </div>
          <div className="border-primary/25 absolute -right-4 -bottom-4 hidden h-24 w-24 rounded-full border md:block" />
        </motion.div>

        <div className="space-y-7 sm:space-y-8">
          <motion.p
            className="text-muted-foreground text-[1.0625rem] leading-[1.65] sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewDefault}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {aboutContent.lead}
          </motion.p>
          <motion.p
            className="text-muted-foreground text-[0.9375rem] leading-[1.65] sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewDefault}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {aboutContent.body}
          </motion.p>

          <motion.div
            className="grid grid-cols-3 gap-4 pt-4 sm:gap-6"
            variants={grid}
            initial="hidden"
            whileInView="visible"
            viewport={inViewDefault}
          >
            {aboutContent.stats.map((s) => (
              <motion.div
                key={s.label}
                variants={item}
                className={cn(
                  "border-border/60 bg-card/40 rounded-xl border px-3 py-4 ring-1 ring-foreground/[0.04] transition-[border-color,background-color,box-shadow] duration-300 sm:px-4 sm:py-5",
                  "hover:border-primary/25 hover:bg-card/55 hover:shadow-md hover:shadow-primary/[0.04]"
                )}
              >
                <p className="font-heading text-primary text-2xl font-semibold tracking-tight sm:text-3xl">
                  {s.value}
                </p>
                <p className="text-muted-foreground mt-1 text-xs font-medium tracking-wide uppercase sm:text-[0.7rem]">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
