import { ContactFormLayout } from "@/components/projects/projects-details-page/ContactLayout";
import { HeroSection } from "@/components/projects/projects-details-page/hero-section";
import ProcessGallery from "@/components/projects/projects-details-page/process-gallery";

export default function ProjectsPage() {
  return (
    <>
      <HeroSection />
      <ProcessGallery />
      <ContactFormLayout />
    </>
  );
}
