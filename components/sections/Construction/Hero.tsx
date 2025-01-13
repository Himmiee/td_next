import React from "react";
import constructionHeroImg from "@/public/images/services/png/construction-img.webp";
import twitterImg from "@/public/icons/twitter.png";
import instagramImg from "@/public/icons/instagram.png";
import fbImg from "@/public/icons/facebook.png";
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
