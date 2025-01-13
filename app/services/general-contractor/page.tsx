import { GMServices } from "@/components/sections/GeneralContractor/Details";
import { GeneralContructorHeroSection } from "@/components/sections/GeneralContractor/Hero";
import { ContactFormLayout } from "@/components/sections/Layouts/ContactLayout";

const ProjectManagementPage: React.FC = () => {
  return (
    <>
      <GeneralContructorHeroSection />
      <GMServices />
      <ContactFormLayout />
    </>
  );
};

export default ProjectManagementPage;
