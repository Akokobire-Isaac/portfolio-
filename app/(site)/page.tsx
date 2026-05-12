import { AboutSection } from "@/components/sections/about"
import { ContactSection } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { ProjectsSection } from "@/components/sections/projects"
import { ServicesSection } from "@/components/sections/services"
import { TechStackSection } from "@/components/sections/tech-stack"
import { TestimonialsSection } from "@/components/sections/testimonials"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
