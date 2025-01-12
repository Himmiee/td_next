import Projects from "@/components/homepage/projects";
import { ContactFormLayout } from "@/components/projects/ContactLayout";
import { HeroSection } from "@/components/projects/hero-section";
// import { Button } from "@/components/ui/button";

export default function Project() {
  return (
    <main>
      <HeroSection />
      <div className="auto-container">
        <Projects />
      </div>
      <ContactFormLayout />
    </main>
  );
}
