import Hero from "@/components/hero"
import HeroTeam from "@/components/HeroTeam"
import FreeTrail from "@/components/freetrail"
import MainHero from "@/components/mainHero"
import MainHero2 from "@/components/mainHero2"

export default function HomePage(){
    return(
       <div>
        <MainHero />
        <MainHero2 />
         <Hero />
         <HeroTeam />
         <FreeTrail />
         
       
       </div>
    )
}