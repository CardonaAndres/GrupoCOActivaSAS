import { useEffect } from "react"
import { Navbar } from "../components/Navbar"
import { Services } from "../components/Services"

export const ServicePage = () => {
  useEffect(() => { document.title = 'Grupo Coactiva S.A.S | Servicios' }, [])

  return (
    <>
        <Navbar />
        <div className="pt-24">
            <Services />
        </div>
    </>
  )
}

