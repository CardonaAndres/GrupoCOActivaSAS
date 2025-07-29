import { Hero } from "@/spa/components/Hero";
import { Navbar } from "../components/Navbar";
import { Services } from "../components/Services";
import { ContactSection } from "../components/ContactSection";
import { useEffect } from "react";
import { References } from "../components/References";
import { CardsNavigation } from "../components/CardsNavigation";
// import { BlogSection } from "../components/BlogSection";
import { CityButtons } from "../components/CityButtons";

export const HomePage = () => {
  useEffect(() => { 
    document.title = 'Abogados en cobranza de cartera en Medellín, Bogotá y Cali | Grupo Coactiva SAS' 
  }, []);

  return (
    <>
        <Navbar />
        <div className="pt-16">
            <Hero />
        </div>
        <CityButtons />
        <div id="services"> 
          <Services />
        </div>
        <References />
        <ContactSection />
        <CardsNavigation />
        {/* <BlogSection /> */}
    </>
  )
}

