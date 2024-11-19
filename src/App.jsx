import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection.jsx'
import Benefits from './components/Benefits.jsx'
import Benefits2 from './components/Benefits2.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faqs from './components/Faqs.jsx'
import ContactUs from './components/ContactUs.jsx'
import Download from './components/Download.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
    <HeroSection />
    <Benefits />
    <Benefits2 />
    <Testimonials />
    <Faqs />
    <ContactUs />
    <Download />
    <Footer />
    </>
  )
}

export default App
