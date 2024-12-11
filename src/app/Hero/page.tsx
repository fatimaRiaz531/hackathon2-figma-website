import Hero from "@/components/hero"
import HeroTeam from "@/components/HeroTeam"
import FreeTrail from "@/components/freetrail"
import MainHero from "@/components/mainHero"
import MainHero2 from "@/components/mainHero2"
import ProductSection from "@/components/ProductSection"
import GreenBG from "@/components/greenbg"
import Universe from "@/components/universeHero"

export default function HomePage(){
    return(
       <div>
        <MainHero />
        <MainHero2 />
        <ProductSection />
        <GreenBG />
        <Universe />
        
         <Hero />
         <HeroTeam />
         <FreeTrail />
         
       
       </div>
    )
}