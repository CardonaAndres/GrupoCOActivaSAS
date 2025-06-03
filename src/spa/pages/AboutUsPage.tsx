import { AboutUs } from "../components/AboutUs"
import { Navbar } from "../components/Navbar"


export const AboutUsPage = () => {
  return (
    <>
        <Navbar />
        <div className="pt-24">
            <AboutUs />
        </div>
    </>
  )
}

