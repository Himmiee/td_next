import { EventSection } from "./Events";
import { FAQComponent } from "./Faq";
import { HomeHeroSection } from "./HomeHero";
import { CoursesSection, DiveSection } from "./OurCourses";
import { TechDiveServiceComponent } from "./OurServices";
import { TechDiveComponent } from "./WhyUs";

export const HomeComponent = () => {
  return (
    <section className="">
      <HomeHeroSection />
      <TechDiveComponent />
      <TechDiveServiceComponent />
      <CoursesSection />
      <EventSection />
      <DiveSection />
      <FAQComponent />
    </section>
  );
};
