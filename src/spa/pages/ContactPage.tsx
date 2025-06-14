import { Navbar } from "@/spa/components/Navbar";
import { ContactSection } from "../components/ContactSection";
import { useEffect } from "react";

export const ContactPage = () => {
  useEffect(() => { document.title = 'Grupo Coactiva S.A.S | Contáctanos' }, [])

  return (
    <>
        <Navbar />
        <div className="pt-16">
            <ContactSection />
        </div>
    
    </>
  )
}

