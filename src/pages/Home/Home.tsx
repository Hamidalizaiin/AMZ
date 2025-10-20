import HeroSection from './components/Herosection'
import OurServices from './components/OurServices'
import AboutUs from './components/AboutUs'
import { OurProcess } from './components/OurProcess'
import OurValues from './components/OurValues'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'
import { FAQSection } from './components/FAQ'

export const Home = () => {
  return (
    <>
      <HeroSection />
      <OurServices />
      <AboutUs />
      <OurProcess />
      <OurValues />
      <Testimonials />
      <WhyChooseUs />
      <FAQSection />
    </>
  )
}
