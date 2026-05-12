"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { MenuIcon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Container } from "@/components/utilities/container"
import { navLinkClassName } from "@/lib/ui-constants"
import { mainNav, site } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b transition-[background-color,box-shadow,backdrop-filter,border-color] duration-500 ease-out",
        scrolled
          ? "border-border/60 bg-background/75 shadow-sm backdrop-blur-md supports-backdrop-filter:bg-background/55"
          : "border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-heading text-xl font-semibold tracking-tight text-foreground"
        >
          {site.name}
          <span className="text-primary/55">.</span>
        </Link>

        <nav
          className="hidden items-center gap-4 text-[0.8125rem] font-medium md:flex lg:gap-6 lg:text-sm"
          aria-label="Primary"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClassName}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="shadow-sm transition-shadow duration-300 hover:shadow-md hover:shadow-primary/10">
            <Link href="/#contact">Let&apos;s talk</Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="gap-0">
            <SheetHeader className="border-border border-b text-left">
              <SheetTitle className="font-heading text-lg">Menu</SheetTitle>
            </SheetHeader>
            <nav
              className="flex flex-col gap-1 p-2"
              aria-label="Primary mobile"
            >
              {mainNav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      navLinkClassName,
                      "hover:bg-muted/80 rounded-xl px-4 py-3.5 text-base after:bottom-2"
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Link
                  href="/#contact"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "mt-3 w-full transition-[box-shadow,transform] duration-300 hover:shadow-md hover:shadow-primary/15 active:scale-[0.99]"
                  )}
                >
                  Let&apos;s talk
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  )
}
