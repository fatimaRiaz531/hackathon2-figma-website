import About from "@/components/about";
import AboutFooter from "@/components/aboutFooter";
import AchivementAbout from "@/components/AchivementAbout";
import AboutTeam from "@/components/AboutTeam";
import CompaniesSection from "@/components/companiesSection";
import GrowSection from "@/components/growSection";
import CompaniesHeader from "@/components/CompaniesHeader";


function AboutPage(){
    return(
       <div>
         <About />
         <AboutFooter />
         <AchivementAbout />
         <AboutTeam />
         <CompaniesHeader />
         <CompaniesSection />
         <GrowSection />
         
       
       </div>
    )
}
export default AboutPage