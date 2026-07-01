import { useEffect } from 'react'
import { GrainOverlay } from '@/components/effects/GrainOverlay'
import { SiteBackground } from '@/components/effects/SiteBackground'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { TitleBanner } from '@/components/layout/TitleBanner'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactBanner } from '@/components/sections/ContactBanner'
import { HeroSection } from '@/components/sections/HeroSection'
import { TbhonShowcaseSection } from '@/components/sections/TbhonShowcaseSection'
import { ProjectsSection, WorksSection } from '@/components/sections/ProjectsSection'
import { CertificatesSection } from '@/components/sections/CertificatesSection'
import { AwardsSection } from '@/components/sections/AwardsSection'
import { scrollToSection } from '@/utils/scrollToSection'
import { useSectionFlow } from '@/hooks/useSectionFlow'

export default function App() {
  useSectionFlow()

  useEffect(() => {
    if (!window.location.hash) return
    requestAnimationFrame(() => scrollToSection(window.location.hash))
  }, [])

  return (
    <>
      <SiteBackground />
      <ScrollProgress />
      <GrainOverlay />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <TitleBanner />
          <ProjectsSection />
          <AboutSection />
          <AwardsSection />
          <CertificatesSection />
          <TbhonShowcaseSection />
          <WorksSection />
          <ContactBanner />
        </main>
        <Footer />
      </div>
    </>
  )
}
