import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Partners } from "@/components/partners"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Tech } from "@/components/tech"
import { Cases } from "@/components/cases"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Services />
        <About />
        <Tech />
        <Cases />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
