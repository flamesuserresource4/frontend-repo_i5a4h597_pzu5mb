import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Technology from './components/Technology'
import Team from './components/Team'
import Reviews from './components/Reviews'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Technology />
        <Team />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
