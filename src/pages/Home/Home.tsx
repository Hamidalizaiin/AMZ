 import HeroSection from './components/Herosection'
import OurServices from './components/OurServices'
import AboutUs from './components/AboutUs'
import { OurProcess } from './components/OurProcess'
import OurValues from './components/OurValues'
import Testimonials from './components/Testimonials'

export const Home = () => {
  return (
    <>
      <HeroSection />
      <OurServices />
      <AboutUs />
      <OurProcess />
      <OurValues />
      <Testimonials />
    </>
  )
}
