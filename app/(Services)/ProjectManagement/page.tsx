import {
  AchievementLayout,
  AchievementBottomLayout,
} from "@/components/sections/Layouts/AchievementsLayouts";
import { ContactFormLayout } from "@/components/sections/Layouts/ContactLayout";
import {
  PMDetailSection,
  PMReverseDetailSection,
  PMTimeLineSection,
} from "@/components/sections/ProjectManagement/Details";
import { ProjectManangementHeroSection } from "@/components/sections/ProjectManagement/Hero";

const ProjectManagementPage: React.FC = () => {
  return (
    <section className="space-y-2 md:space-y-24">
      <ProjectManangementHeroSection />
      <PMDetailSection />
      <PMTimeLineSection />
      <PMReverseDetailSection />
      <section>
        <AchievementLayout />
        <AchievementBottomLayout />
      </section>
      <ContactFormLayout />
    </section>
  );
};

export default ProjectManagementPage;
