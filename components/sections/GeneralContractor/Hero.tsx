import React from "react";
import constructionHeroImg from "@/public/images/services/png/construction-img.webp";
import twitterImg from "@/public/icons/twitter.png";
import instagramImg from "@/public/icons/instagram.png";
import fbImg from "@/public/icons/facebook.png";
import { HeroLayout } from "../Layouts/HeroLayout";

export const GeneralContructorHeroSection: React.FC = () => {
  return (
    <HeroLayout
      backgroundImage={constructionHeroImg}
      title="GENERAL CONTRACTOR"
      description="Incorporated in February 2018, Pearl Projects and Development is fast building its reputation as a trusted and versatile general contractor."
      socialIcons={[
        { src: twitterImg, alt: "Twitter" },
        { src: instagramImg, alt: "Instagram" },
        { src: fbImg, alt: "Facebook" },
      ]}
    />
  );
};
