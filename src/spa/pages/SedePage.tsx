import { useEffect } from "react"
import { Navbar } from "../components/Navbar"
import { SedeComponent } from "../components/SedeComponent"

export const SedePage = ({ city } : { city: string }) => {
    useEffect(() => {
        document.title = `Casa de cobranzas en ${city} - Grupo Coactiva S.A.S`
    }, [city]);

    return (
        <>
            <Navbar />
            <div className="pt-16">
                <SedeComponent />
            </div>
        
        </>
    )
}


