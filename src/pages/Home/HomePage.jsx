import { TopOffersSection } from '../../components/sections/TopOffersSection'
import { MainLayout } from '../../components/layouts/MainLayout'
import { useEffect } from 'react'
import Nav from '../../components/layouts/Nav'
import HeroSection from '../../components/sections/HeroSection'
import Hero2 from '../../components/sections/Hero2'
import ViewSection from '../../components/sections/View'
import Hero3 from '../../components/sections/Hero3'
export const HomePage = () => {
  return (
    <MainLayout>
      <Nav />
      {/* Hero Section */}  
      <TopOffersSection />
      <HeroSection />
      <Hero2 />
      <ViewSection/>
      <Hero3/>
      {/* Other sections... */}
    </MainLayout>
  )
}