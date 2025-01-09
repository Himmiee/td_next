import React from "react";
import constructionHeroImg from "@/public/images/png/construction-img.webp";
import twitterImg from "@/public/icons/twitter.png";
import instagramImg from "@/public/icons/instagram.png";
import fbImg from "@/public/icons/facebook.png";
import { HeroLayout } from "../Layouts/HeroLayout";

export const ProjectManangementHeroSection: React.FC = () => {
  return (
    <HeroLayout
      backgroundImage={constructionHeroImg}
      title="PROJECT MANAGEMENT"
      description="Details for our project management  services"
      socialIcons={[
        { src: twitterImg, alt: "Twitter" },
        { src: instagramImg, alt: "Instagram" },
        { src: fbImg, alt: "Facebook" },
      ]}
    />
  );
};
