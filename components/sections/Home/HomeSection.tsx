import { HomeHeroSection } from "./HomeHero";
import { CoursesSection, DiveSection } from "./OurCourses";
import { TechDiveServiceComponent } from "./OurServices";
import { TechDiveComponent } from "./WhyUs";

export const HomeComponent = () => {
  return (
    <section className="pt-28 ">
      <HomeHeroSection />
      <TechDiveComponent />
      <TechDiveServiceComponent />
      <CoursesSection />
      <DiveSection />
    </section>
  );
};
