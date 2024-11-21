import './App.css'
import HeroSection from './components/HeroSection.jsx'
import Benefits from './components/Benefits.jsx'
import Benefits2 from './components/Benefits2.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faqs from './components/Faqs.jsx'
import ContactUs from './components/ContactUs.jsx'
import Download from './components/Download.jsx'
import Footer from './components/Footer.jsx'
import GetTickets from './components/GetTickets.jsx'
import HeroSlider from './components/HeroSlider.jsx'

function App() {

  return (
    <>
    <HeroSlider/>
    {/* <HeroSection />
    <GetTickets/> */}
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
