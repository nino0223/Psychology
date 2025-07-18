import Header from "@/components/sections/header"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"

export default function PsychologistWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
