import { Hero } from "@/spa/components/Hero";
import { Navbar } from "../components/Navbar";
import { Services } from "../components/Services";
import { ContactSection } from "../components/ContactSection";
import { AboutUs } from "../components/AboutUs";
import { useEffect } from "react";
import { Allies } from "../components/Allies";

export const HomePage = () => {
  useEffect(() => { document.title = 'Grupo Coactiva S.A.S | Bienvenido' }, []);

  return (
    <>
        <Navbar />
        <div className="pt-16">
            <Hero />
        </div>
        <Services />
        <ContactSection />
        <AboutUs />
        <Allies />
    
    </>
  )
}

