import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { SkipLink } from "@/components/utilities/skip-link"

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main-content" className="flex flex-1 flex-col pt-16">
        {children}
      </main>
      <Footer />
    </>
  )
}
