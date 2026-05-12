import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function SkipLink({
  className,
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      href="#main-content"
      className={cn(
        "bg-primary text-primary-foreground focus-visible:ring-ring sr-only rounded-md px-4 py-2 text-sm font-medium shadow-lg focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:outline-none focus-visible:ring-3",
        className
      )}
      {...props}
    >
      Skip to main content
    </a>
  )
}
