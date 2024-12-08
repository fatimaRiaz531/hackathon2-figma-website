import About from "./about/page"
import Pricing from "./pricing/page"
import Contact from "./contact/page"
import Hero from "@/components/hero"
import Login from "./loginPage/page"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Pricing />
      <Contact />
     <Login />
     
    </div>
  )
}
