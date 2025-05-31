import { Hero } from "@/spa/components/Hero";
import { Navbar } from "../components/Navbar";

export const HomePage = () => {
  return (
    <>
        <Navbar />
        <div className="pt-16">
            <Hero />
        </div>
    
    </>
  )
}

