import { GMServices } from "@/components/sections/GeneralContractor/Details";
import { GeneralContructorHeroSection } from "@/components/sections/GeneralContractor/Hero";
import { ContactFormLayout } from "@/components/sections/Layouts/ContactLayout";

const ProjectManagementPage: React.FC = () => {
  return (
    <section className="">
      <GeneralContructorHeroSection />
      <section className="space-y-6 lg:space-y-16">
        <GMServices />
        <ContactFormLayout />
      </section>
    </section>
  );
};

export default ProjectManagementPage;
