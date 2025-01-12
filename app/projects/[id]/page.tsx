import { ContactFormLayout } from "@/components/projects/projects-details-page/ContactLayout";
import { HeroSection } from "@/components/projects/projects-details-page/hero-section";
import ProcessGallery from "@/components/projects/projects-details-page/process-gallery";
import ProjectDetails from "@/components/projects/projects-details-page/project-details";

export default function ProjectsPage() {
  return (
    <>
      <HeroSection />
      <div className="auto-container">
        <ProcessGallery />
      </div>

      <ProjectDetails />
      <ContactFormLayout />
    </>
  );
}
