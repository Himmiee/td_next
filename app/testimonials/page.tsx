import BannerWithOverlay from "@/components/custom/banner-with-overlay";
import TestimonialAccordion from "@/components/modules/testimonial/testimonial-accordion";
import React from "react";

const TestimonialPages = () => {
  return (
    <div>
      <BannerWithOverlay
        imageSrc={require("@/public/images/testimonials.jpeg")}
        title="TESTIMONIALS"
        description="We carry out various types of projects, from minor refurbishment works to completing a new build development."
      />

      <div className="my-20">
        <TestimonialAccordion />
      </div>
    </div>
  );
};

export default TestimonialPages;
