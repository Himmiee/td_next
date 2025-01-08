import { TechDiveComponentRight } from "../Home/WhyUs";
import { AboutHeroSection } from "./AboutComp";
import { FoundersSection } from "./AboutFounderSection";
import { AboutEndSection, AboutFounderSection } from "./AboutShortSections";
import { AboutTagComponent, MissionComponent, ProfileCardComponent } from "./AboutSubLayers";


export const AboutComponent = () => {
  return (
    <section className="">
      <AboutHeroSection />
      <AboutTagComponent />
      <MissionComponent />
      <FoundersSection />
      <TechDiveComponentRight />
      <ProfileCardComponent />
      <AboutEndSection />
      <AboutFounderSection />
    </section>
  );
};
