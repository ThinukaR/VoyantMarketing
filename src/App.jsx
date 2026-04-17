import { Navigation } from "./components/Navigation"
import { HeroSection } from "./components/HeroSection"
import { OurStorySection } from "./components/OurStorySection"
import { EnhancedFeaturesSection } from "./components/EnhancedFeaturesSection"
import { TeamSection } from "./components/TeamSection"
import { CTASection } from "./components/CTASection"
import { Footer } from "./components/Footer"

function App() {
  return (
    <main style={{
      backgroundColor: 'var(--background)',
      color: 'var(--on-background)',
      overflow: 'hidden'
    }}>
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <EnhancedFeaturesSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export default App
