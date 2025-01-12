import GallerySection from "@/components/about/gallery-section";
import { HeroSection } from "@/components/about/hero-section";
import TrustedSuppliers from "@/components/about/trusted-suppliers";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="auto-container">
        <GallerySection />
      </div>
      <TrustedSuppliers />
      {/* <GridSection /> */}
    </main>
  );
}
