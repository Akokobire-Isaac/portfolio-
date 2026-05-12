"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { Variants } from "framer-motion"
import { ArrowDownRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/utilities/container"
import {
  easeOutExpo,
  heroActions,
  heroContainer,
  heroEyebrow,
  heroHeadline,
  heroHeadlineAccent,
  heroHeadlineLine,
  heroLine,
  heroSubtitle,
} from "@/lib/motion"
import { siteMedia } from "@/lib/site-media"
import { heroContent } from "@/lib/site-config"

function snapVariants(): Variants {
  return {
    hidden: {
      opacity: 1,
      y: 0,
      scaleX: 1,
      filter: "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleX: 1,
      filter: "blur(0px)",
      transition: { duration: 0 },
    },
  }
}

export function Hero() {
  const reduced = useReducedMotion()

  const container = useMemo<Variants>(() => {
    if (reduced) {
      return {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0, delayChildren: 0 },
        },
      }
    }
    return heroContainer
  }, [reduced])

  const v = useMemo(
    () => ({
      eyebrow: reduced ? snapVariants() : heroEyebrow,
      line: reduced ? snapVariants() : heroLine,
      headline: reduced ? snapVariants() : heroHeadline,
      line1: reduced ? snapVariants() : heroHeadlineLine,
      accent: reduced ? snapVariants() : heroHeadlineAccent,
      subtitle: reduced ? snapVariants() : heroSubtitle,
      actions: reduced ? snapVariants() : heroActions,
    }),
    [reduced]
  )

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100dvh-4rem-env(safe-area-inset-bottom,0px))] scroll-mt-28 items-center overflow-hidden py-[clamp(4.5rem,14vw,7rem)] md:scroll-mt-24 md:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        {/* Bloom layer — large blur for ambient glow */}
        <div className="absolute inset-0 scale-105">
          <Image
            src={siteMedia.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_34%] opacity-50 blur-3xl saturate-[1.08]"
          />
        </div>
        {/* Crisp low-opacity layer for silhouette */}
        <div className="absolute inset-0">
          <Image
            src={siteMedia.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%] opacity-[0.2] contrast-[1.05]"
          />
        </div>
        {!reduced && (
          <motion.div
            className="bg-primary/35 absolute left-1/2 top-[30%] h-[min(72vh,38rem)] w-[min(92vw,48rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] mix-blend-screen"
            animate={{ opacity: [0.28, 0.48, 0.28] }}
            transition={{
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )}
        <div className="from-background via-background/92 absolute inset-0 bg-linear-to-b to-background" />
        <div className="bg-primary/[0.045] absolute inset-0" />
        <div className="bg-primary/[0.07] absolute -top-1/3 left-1/2 aspect-square w-[min(88vw,42rem)] -translate-x-1/2 rounded-full blur-3xl md:w-[min(72vw,52rem)]" />
        <div className="bg-primary/[0.045] absolute top-1/2 right-[-18%] aspect-square w-[min(70vw,28rem)] rounded-full blur-3xl" />
        <div
          className="border-border/[0.35] absolute inset-0 bg-[linear-gradient(to_right,oklch(0.96_0.01_85_/_6%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.96_0.01_85_/_6%)_1px,transparent_1px)] mask-[radial-gradient(ellipse_75%_65%_at_50%_40%,#000_45%,transparent_100%)]"
          style={{ backgroundSize: "4.5rem 4.5rem" }}
        />
      </div>

      {!reduced && (
        <motion.div
          className="pointer-events-none absolute top-24 right-[12%] hidden h-24 w-24 rounded-full border border-primary/25 md:block"
          aria-hidden
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeOutExpo, delay: 0.6 }}
        />
      )}
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute bottom-[18%] left-[8%] hidden h-px w-24 bg-linear-to-r from-transparent via-primary/40 to-transparent md:block"
          aria-hidden
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.1, ease: easeOutExpo, delay: 0.85 }}
          style={{ transformOrigin: "0% 50%" }}
        />
      )}

      <Container className="relative z-10">
        <motion.div
          className="max-w-[40rem] lg:max-w-[42rem]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={v.eyebrow}
            className="text-primary mb-4 text-[0.6875rem] font-semibold tracking-[0.28em] uppercase sm:text-xs"
          >
            {heroContent.eyebrow}
          </motion.p>

          <motion.div
            variants={v.line}
            className="bg-primary/70 mb-8 h-px w-14 origin-left sm:mb-10 sm:w-20"
            style={{ transformOrigin: "0% 50%" }}
          />

          <motion.h1
            id="hero-heading"
            variants={v.headline}
            className="font-heading text-balance text-[clamp(2.25rem,6.5vw,4.25rem)] font-semibold leading-[1.06] tracking-tight sm:leading-[1.05]"
          >
            <motion.span
              variants={v.line1}
              className="text-foreground drop-shadow-[0_1px_24px_rgba(0,0,0,0.35)] block"
            >
              {heroContent.titleLead}
            </motion.span>
            <motion.span
              variants={v.accent}
              className="mt-1 block bg-linear-to-br from-foreground via-foreground to-primary bg-clip-text text-transparent drop-shadow-[0_1px_20px_rgba(0,0,0,0.25)] sm:mt-2"
            >
              {heroContent.titleAccent}
            </motion.span>
          </motion.h1>

          <motion.p
            variants={v.subtitle}
            className="text-muted-foreground mt-8 max-w-xl text-pretty text-[1.0625rem] leading-[1.65] sm:text-lg sm:leading-[1.7] md:mt-10"
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.div
            variants={v.actions}
            className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4"
          >
            <Button
              asChild
              size="lg"
              className="h-11 gap-2 px-6 text-sm shadow-sm transition-[box-shadow,transform,background-color] duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.99]"
            >
              <Link href={heroContent.primaryCta.href} className="inline-flex items-center gap-2">
                {heroContent.primaryCta.label}
                <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover/button:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 border-primary/22 bg-background/45 px-6 text-sm backdrop-blur-md transition-[border-color,background-color,box-shadow,transform] duration-300 hover:border-primary/40 hover:bg-background/70 hover:shadow-md hover:shadow-primary/10 active:scale-[0.99]"
            >
              <Link href={heroContent.secondaryCta.href} className="inline-flex items-center gap-2">
                {heroContent.secondaryCta.label}
                <ArrowDownRight className="size-4 opacity-85 transition-transform duration-300 ease-out group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
              </Link>
            </Button>
          </motion.div>

          {!reduced && (
            <motion.div
              className="text-muted-foreground/90 mt-14 flex items-center gap-3 text-xs font-medium tracking-wide sm:mt-16"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.55, ease: easeOutExpo }}
            >
              <span className="relative flex h-2 w-2">
                <span className="bg-primary/60 absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
                <span className="bg-primary relative inline-flex size-2 rounded-full" />
              </span>
              <span className="uppercase">{heroContent.availability}</span>
            </motion.div>
          )}
          {reduced && (
            <p className="text-muted-foreground/90 mt-14 text-xs font-medium tracking-wide uppercase sm:mt-16">
              {heroContent.availability}
            </p>
          )}
        </motion.div>
      </Container>

      {!reduced && (
        <motion.div
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35, duration: 0.6 }}
        >
          <motion.div
            className="text-muted-foreground flex flex-col items-center gap-2 text-[10px] font-medium tracking-[0.25em] uppercase"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <span>Scroll</span>
            <span className="bg-border relative block h-10 w-px overflow-hidden rounded-full">
              <span className="from-primary/55 absolute inset-0 bg-linear-to-b to-transparent" />
            </span>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
