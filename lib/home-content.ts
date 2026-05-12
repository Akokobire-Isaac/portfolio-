export const aboutContent = {
  eyebrow: "About",
  title: "Design systems, interfaces, and the space between.",
  portraitAlt: "Portrait — design and engineering lead",
  lead:
    "I partner with teams who care about craft — translating strategy into tactile UI, resilient components, and motion that feels intentional rather than loud.",
  body: "Whether launching a product or refining an existing surface, I bring editorial clarity, technical depth, and a calm process that keeps stakeholders aligned and shippable quality on track.",
  stats: [
    { value: "10+", label: "Years shipping" },
    { value: "40+", label: "Products & platforms" },
    { value: "12", label: "Industries" },
  ],
} as const

export type TechCategory = {
  name: string
  items: readonly string[]
}

export const techCategories: readonly TechCategory[] = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend & data",
    items: ["Node.js", "PostgreSQL", "REST & GraphQL", "Edge runtimes"],
  },
  {
    name: "Design & tooling",
    items: ["Figma", "Design tokens", "Storybook", "CI / CD", "Vercel"],
  },
] as const

export type ProjectItem = {
  title: string
  description: string
  tags: readonly string[]
  href: string
  /** Case-study cover — mood imagery */
  coverSrc: string
  coverAlt: string
}

export const projects: readonly ProjectItem[] = [
  {
    title: "Meridian Analytics",
    description:
      "Enterprise dashboard with role-aware navigation, live cohort charts, and a token-driven dark UI.",
    tags: ["Next.js", "Design system", "Data viz"],
    href: "#",
    coverSrc: "/images/hero-image.jpeg",
    coverAlt: "Atmospheric lighting and workspace — Meridian case study mood",
  },
  {
    title: "Northwind Commerce",
    description:
      "Composable storefront with edge-cached PDPs, optimistic cart, and checkout tuned for conversion.",
    tags: ["E-commerce", "Performance", "A/B"],
    href: "#",
    coverSrc: "/images/portfolio-picture2.jpeg",
    coverAlt: "Northwind commerce — brand and product storytelling",
  },
  {
    title: "Atelier Mobile",
    description:
      "Cross-platform client app with offline-first flows, haptic micro-interactions, and shared design language.",
    tags: ["Mobile", "UX", "Motion"],
    href: "#",
    coverSrc: "/images/hero-image.jpeg",
    coverAlt: "Product craft and interface detail — Atelier mobile",
  },
] as const

export type ServiceItem = {
  number: string
  title: string
  description: string
  deliverables: readonly string[]
}

export const services: readonly ServiceItem[] = [
  {
    number: "01",
    title: "Product UI & UX",
    description:
      "From discovery workshops to high-fidelity UI — flows, states, and responsive layouts that your engineers can implement with confidence.",
    deliverables: [
      "Journey maps & wireframes",
      "UI kit & documentation",
      "Handoff-ready Figma",
    ],
  },
  {
    number: "02",
    title: "Frontend engineering",
    description:
      "Production React / Next.js builds with accessibility, performance budgets, and maintainable architecture.",
    deliverables: [
      "App Router & SSR patterns",
      "Component libraries",
      "Motion & polish",
    ],
  },
  {
    number: "03",
    title: "Design systems",
    description:
      "Tokens, primitives, and governance so teams scale quality without slowing velocity.",
    deliverables: [
      "Token architecture",
      "Radix / shadcn patterns",
      "Adoption playbooks",
    ],
  },
] as const

export type TestimonialItem = {
  quote: string
  name: string
  role: string
  company: string
  /** Small portrait for attribution row */
  avatarSrc: string
  avatarAlt: string
}

export const testimonials: readonly TestimonialItem[] = [
  {
    quote:
      "Ike elevated our product surface from capable to memorable — disciplined typography, motion that guides, and a system our team still builds on.",
    name: "Elena Voss",
    role: "VP Product",
    company: "Meridian Analytics",
    avatarSrc: "/images/portfolio-picture2.jpeg",
    avatarAlt: "Elena Voss",
  },
  {
    quote:
      "Rare blend of taste and technical fluency. Deadlines were clear, communication calm, and the shipped UI exceeded what we thought feasible in the window.",
    name: "Marcus Chen",
    role: "Engineering Lead",
    company: "Northwind Commerce",
    avatarSrc: "/images/hero-image.jpeg",
    avatarAlt: "Marcus Chen",
  },
  {
    quote:
      "Our stakeholders finally saw the same vision. The design system work alone paid for the engagement within two release cycles.",
    name: "Sofia Okonkwo",
    role: "Head of Design",
    company: "Atelier Mobile",
    avatarSrc: "/images/portfolio-picture2.jpeg",
    avatarAlt: "Sofia Okonkwo",
  },
] as const

export const contactContent = {
  eyebrow: "Contact",
  title: "Tell me about your next chapter.",
  description:
    "Share a few lines on scope, timeline, and what success looks like. I typically reply within two business days.",
  email: "hello@example.com",
  emailSubject: "Project inquiry",
} as const
