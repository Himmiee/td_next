import React from "react";
import constructionHeroImg from "@/app/assets/png/construction-img.webp";
import twitterImg from "@/app/assets/png/icons/twitter.png";
import instagramImg from "@/app/assets/png/icons/instagram.png";
import fbImg from "@/app/assets/png/icons/facebook.png";
import { HeroLayout } from "../Layouts/HeroLayout";

export const ConstructionHeroSection: React.FC = () => {
  return (
    <HeroLayout
      backgroundImage={constructionHeroImg}
      title="CONSTRUCTION"
      description="Details for our construction services"
      socialIcons={[
        { src: twitterImg, alt: "Twitter" },
        { src: instagramImg, alt: "Instagram" },
        { src: fbImg, alt: "Facebook" },
      ]}
    />
  );
};
