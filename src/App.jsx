import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Work />
        <Process />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
