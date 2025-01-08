import Image from "next/image";
import React from "react";
import img from "@/app/assets/png/about/image-founder.png";
import { description } from "@/app/helpers/mockData";

export const FoundersSection = () => {
  return (
    <div
      className={`flex flex-col xl:flex-row gap-8 xl:gap-16 items-center justify-center bg-white px-4 xl:px-12 py-12 xl:py-0 xl:h-[750px]`}
    >
      {/* Text Content Section */}
      <div className="flex-1 space-y-4 max-w-4xl">
        <div>
          <h2 className="xl:text-3xl font-semibold mb-1">
            MY TECHDIVE JOURNEY
          </h2>
          <p className="text-[#2D2F31] text-3xl font-semibold xl:text-[45px]">
            From Uncertainty to{" "}
            <span className="text-[#9051A1]">Empowerment:</span>
          </p>
        </div>
        <div className="space-y-6 xl:space-y-4">
          {description.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          <p className="font-medium">Esther Daniels</p>
          <p className="text-[#2D2F31] text-sm">Founder, Tech Dive</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden xl:w-1/3 flex-shrink-0 xl:flex justify-end">
        <div className="rounded-lg overflow-hidden bg-gradient-to-b from-purple-50 to-purple-100">
          <Image
            src={img}
            alt="founder"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};
