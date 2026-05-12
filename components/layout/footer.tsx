import Link from "next/link"

import { Container } from "@/components/utilities/container"
import { navLinkClassName } from "@/lib/ui-constants"
import { footerNav, site } from "@/lib/site-config"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border/40 bg-card/25 mt-auto border-t backdrop-blur-md">
      <Container className="flex flex-col gap-12 py-16 md:flex-row md:items-start md:justify-between md:py-20">
        <div className="max-w-sm space-y-3">
          <p className="font-heading text-foreground text-xl font-semibold tracking-tight">
            {site.name}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {site.description}
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8"
          aria-label="Footer"
        >
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClassName}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>

      <div className="border-border/40 border-t">
        <Container className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-xs">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground/80 text-xs">
            Crafted with Next.js & Tailwind CSS
          </p>
        </Container>
      </div>
    </footer>
  )
}
