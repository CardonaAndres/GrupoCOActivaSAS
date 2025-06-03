import { Hero } from "@/spa/components/Hero";
import { Navbar } from "../components/Navbar";
import { Services } from "../components/Services";
import { ContactSection } from "../components/ContactSection";
import { AboutUs } from "../components/AboutUs";


export const HomePage = () => {
  return (
    <>
        <Navbar />
        <div className="pt-16">
            <Hero />
        </div>
        <Services />
        <ContactSection />
        <AboutUs />
    
    </>
  )
}

