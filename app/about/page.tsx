// import GridSection from "@/components/homepage/GridSection";
// import { HeroSection } from "@/components/homepage/hero-section";
// import Services from "@/components/homepage/main-services";
// import Projects from "@/components/homepage/projects";
// import { Button } from "@/components/ui/button";

import GallerySection from "@/components/about/gallery-section";
import { HeroSection } from "@/components/about/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="auto-container">
        <GallerySection />
        {/* <Projects /> */}
      </div>
      {/* <GridSection /> */}
    </main>
  );
}
