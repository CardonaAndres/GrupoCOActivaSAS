import { AboutSectionHome, Hero, LocationsSection, ServicesSection } from "@/components/main";

export default function Home() {
  return (
    <main className="pt-9">
      <Hero />
      <ServicesSection />
      <AboutSectionHome />
      <LocationsSection />
    </main>
  );
}
