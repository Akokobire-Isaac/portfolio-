"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { Variants } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Section } from "@/components/utilities/section"
import { SectionHeader } from "@/components/utilities/section-header"
import { staggerContainer, staggerItem, inViewDefault } from "@/lib/motion"
import { projects } from "@/lib/home-content"
import { cn } from "@/lib/utils"

function snap(): Variants {
  return {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0 } },
  }
}

export function ProjectsSection() {
  const reduced = useReducedMotion()
  const outer = useMemo(
    () => (reduced ? { hidden: {}, visible: { transition: { staggerChildren: 0 } } } : staggerContainer(0.1, 0.03)),
    [reduced]
  )
  const item = reduced ? snap() : staggerItem

  return (
    <Section id="work" size="default" tone="canvas">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work — depth, detail, and durable craft."
        description="Representative engagements; names anonymized where required. Each build pairs narrative UI with pragmatic engineering."
      />
      <motion.div
        className="grid gap-7 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={outer}
        initial="hidden"
        whileInView="visible"
        viewport={inViewDefault}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={item}>
            <Card
              className={cn(
                "border-border/50 group/card bg-card/45 flex h-full flex-col overflow-hidden rounded-2xl backdrop-blur-md",
                "transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                "hover:border-primary/28 hover:shadow-xl hover:shadow-primary/[0.06]",
                "motion-reduce:hover:translate-y-0 md:hover:-translate-y-1.5"
              )}
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={project.coverSrc}
                  alt={project.coverAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover/card:scale-[1.04]"
                />
                <div
                  className="from-card via-card/20 absolute inset-0 bg-linear-to-t to-transparent"
                  aria-hidden
                />
                <div
                  className="from-primary/20 pointer-events-none absolute inset-0 bg-linear-to-br to-transparent opacity-80 mix-blend-soft-light"
                  aria-hidden
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold tracking-tight">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-[0.9375rem] leading-[1.6]">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="font-normal transition-colors duration-200 hover:bg-secondary/90"
                  >
                    {t}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="mt-auto border-t border-border/45 bg-muted/25">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1.5 px-0 text-primary transition-colors duration-200 hover:bg-transparent hover:text-primary/90"
                  asChild
                >
                  <Link href={project.href} className="group/link">
                    View case study
                    <ArrowUpRight className="size-4 opacity-80 transition-transform duration-300 ease-out group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
