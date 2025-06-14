import { useEffect } from "react"
import { AboutUs } from "../components/AboutUs"
import { Navbar } from "../components/Navbar"

export const AboutUsPage = () => {
  useEffect(() => { document.title = 'Grupo Coactiva S.A.S | Sobre Nosotros'}, [])

  return (
    <>
        <Navbar />
        <div className="pt-24">
            <AboutUs />
        </div>
    </>
  )
}

