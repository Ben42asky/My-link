import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import ResumeSection from "@/components/resume-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

