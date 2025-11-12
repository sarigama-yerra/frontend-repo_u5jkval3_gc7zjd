import Header from '../Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="bg-[#0a0a0b] text-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default Home
