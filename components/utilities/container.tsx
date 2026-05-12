import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type ContainerProps = ComponentProps<"div"> & {
  /** Narrower reading width for prose-style blocks */
  narrow?: boolean
}

export function Container({
  className,
  narrow,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[min(100%,72rem)] px-5 sm:px-7 lg:px-10 xl:px-12",
        narrow && "max-w-3xl",
        className
      )}
      {...props}
    />
  )
}
