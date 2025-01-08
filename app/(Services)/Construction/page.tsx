import { ContactSection } from "@/app/sections/Construction/ContactSection";
import { ConstructionDetailsComponent } from "@/app/sections/Construction/Details";
import { ConstructionHeroSection } from "@/app/sections/Construction/Hero";

const ConstructionPage: React.FC = () => {
  return (
    <>
      <ConstructionHeroSection />
      <ConstructionDetailsComponent />
      <ContactSection />
    </>
  );
};

export default ConstructionPage;
