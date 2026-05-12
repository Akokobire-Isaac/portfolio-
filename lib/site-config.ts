export const site = {
  name: "Ike",
  title: "Ike — Portfolio",
  description: "Premium portfolio — design, engineering, and craft.",
  url: "https://example.com",
} as const

export const heroContent = {
  eyebrow: "Design · Product · Craft",
  titleLead: "Thoughtful digital",
  titleAccent: "experiences",
  subtitle:
    "I shape interfaces and systems with clarity, depth, and quiet confidence — from first impression to final detail.",
  primaryCta: { label: "View work", href: "/#work" },
  secondaryCta: { label: "Start a project", href: "/#contact" },
  availability: "Available for select projects",
} as const

export type NavItem = { label: string; href: string }

/** In-page anchors — match section `id`s on the home page */
export const mainNav: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#tech" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
]

export const footerNav: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#tech" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Stories", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
]
