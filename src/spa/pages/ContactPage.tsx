import { Navbar } from "@/spa/components/Navbar";
import { ContactSection } from "../components/ContactSection";
import { useEffect } from "react";

export const ContactPage = () => {
  useEffect(() => { 
    document.title = 'Contacta abogados de cobranza para empresas | Grupo Coactiva SAS' 
  }, [])

  return (
    <>
        <Navbar />
        <div className="pt-16">
            <ContactSection />
        </div>
    
    </>
  )
}

