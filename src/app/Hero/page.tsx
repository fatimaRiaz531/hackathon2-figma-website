import MainHero from "@/components/mainHero"
import MainHero2 from "@/components/mainHero2"
import ProductSection from "@/components/ProductSection"
import GreenBG from "@/components/greenbg"
import Universe from "@/components/universeHero"
import FeaturedPosts from "@/components/Feature"

export default function HomePage(){
    return(
       <div>
        <MainHero />
        <MainHero2 />
        <ProductSection />
        <GreenBG />
        <Universe />
        <FeaturedPosts />
       </div>
    )
}