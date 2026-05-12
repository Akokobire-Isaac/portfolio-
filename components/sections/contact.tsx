"use client"

import { Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { FormEvent } from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Section } from "@/components/utilities/section"
import { SectionHeader } from "@/components/utilities/section-header"
import { contactContent } from "@/lib/home-content"
import { siteMedia } from "@/lib/site-media"
import { navLinkClassName } from "@/lib/ui-constants"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get("name") ?? "").trim()
    const email = String(fd.get("email") ?? "").trim()
    const message = String(fd.get("message") ?? "").trim()
    if (!name || !email || !message) return

    const subject = encodeURIComponent(
      `${contactContent.emailSubject} — ${name}`
    )
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`
    )
    setSubmitted(true)
    window.location.href = `mailto:${contactContent.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact" size="default" tone="elevated">
      <div className="grid gap-12 sm:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
        <div>
          <SectionHeader
            eyebrow={contactContent.eyebrow}
            title={contactContent.title}
            description={contactContent.description}
          />
          <div className="text-muted-foreground mt-10 space-y-5 text-sm sm:mt-12">
            <a
              href={`mailto:${contactContent.email}`}
              className={cn(
                navLinkClassName,
                "text-foreground hover:text-primary inline-flex items-center gap-2.5 text-base font-medium"
              )}
            >
              <Mail className="text-primary size-4 shrink-0" aria-hidden />
              {contactContent.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="text-primary mt-0.5 size-4 shrink-0" aria-hidden />
              <span>Remote-first · selective on-site workshops</span>
            </p>
          </div>
        </div>

        <div className="border-border/45 bg-background/60 relative overflow-hidden rounded-2xl border shadow-sm ring-1 ring-foreground/[0.04] backdrop-blur-md transition-[box-shadow,border-color] duration-300 focus-within:border-primary/25 focus-within:shadow-md focus-within:shadow-primary/[0.06] sm:rounded-3xl">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <Image
              src={siteMedia.portrait}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="scale-125 object-cover object-[center_25%] opacity-[0.12] blur-3xl saturate-[1.1]"
            />
            <div className="from-primary/15 absolute inset-0 bg-linear-to-br via-transparent to-transparent" />
          </div>
          <div className="relative z-10 p-6 sm:p-9">
            <form className="space-y-6" onSubmit={onSubmit} noValidate>
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-foreground/90 text-sm font-medium tracking-tight">
                Name
              </label>
              <Input
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                placeholder="Alex Morgan"
                className="h-10 md:h-9"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-foreground/90 text-sm font-medium tracking-tight">
                Email
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="h-10 md:h-9"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-foreground/90 text-sm font-medium tracking-tight">
                Message
              </label>
              <Textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Project goals, timeline, links to briefs…"
                className="min-h-32 resize-y"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-11 w-full transition-[box-shadow,transform] duration-300 hover:shadow-lg hover:shadow-primary/15 active:scale-[0.99] sm:w-auto"
            >
              Send message
            </Button>
            {submitted ? (
              <p className="text-muted-foreground text-xs" role="status">
                If your mail client did not open, email{" "}
                <Link
                  href={`mailto:${contactContent.email}`}
                  className="text-primary underline-offset-2 hover:underline"
                >
                  {contactContent.email}
                </Link>{" "}
                directly.
              </p>
            ) : null}
            </form>
          </div>
        </div>
      </div>
    </Section>
  )
}
