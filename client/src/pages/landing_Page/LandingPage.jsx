import React from 'react'
import Navbar from '../../component/Navbar.jsx'
import Hero from './Hero.jsx'
import ImpactPage from './ImpactPage.jsx'
import EligibilitySection from './EligibiitySection.jsx'
import UserType from './UserType.jsx'
import Footer from './Footer.jsx'





export default function LandingPage() {
  return (
    <>
    <Navbar />
    <Hero />
    <ImpactPage />
    <EligibilitySection />
    <UserType />
   <Footer />
    </>
  )
}
