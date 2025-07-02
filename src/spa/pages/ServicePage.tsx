import { useEffect } from "react"
import { Navbar } from "../components/Navbar"
import { Services } from "../components/Services"
import { References } from "../components/References"

export const ServicePage = () => {
  useEffect(() => { 
    document.title = 'Cobranza judicial y extrajudicial para empresas | Grupo Coactiva SAS' 
  }, [])

  return (
    <>
        <Navbar />
        <div className="pt-24">
            <Services />
            <References />
        </div>
    </>
  )
}

