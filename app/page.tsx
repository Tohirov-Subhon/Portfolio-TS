import { HeroSection } from "@/widgets/hero-section"
import { AboutSection } from "@/widgets/about-section"
import { SkillsSection } from "@/widgets/skills-section"
import { ProjectsSection } from "@/widgets/projects-section"
import { ContactSection } from "@/widgets/contact-section"
import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Front-End Developer Portfolio",
  description: "A modern front-end developer portfolio showcasing UI/UX skills and web development projects",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
