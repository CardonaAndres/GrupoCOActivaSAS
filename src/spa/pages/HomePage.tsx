import { Hero } from "@/spa/components/Hero";
import { Services } from "../components/Services";
import { ContactSection } from "../components/ContactSection";
import { useEffect } from "react";
import { References } from "../components/References";
import { CardsNavigation } from "../components/CardsNavigation";
import { BlogSection } from "../components/BlogSection";

export const HomePage = () => {
  useEffect(() => { 
    document.title = 'Abogados en cobranza de cartera en Medellín, Bogotá y Cali | Grupo Coactiva SAS' 
  }, []);

  return (
    <>
        <Hero />
        <div id="services"> 
          <Services />
        </div>
        <References />
        <ContactSection />
        <CardsNavigation />
        <BlogSection /> 
    </>
  )
}

