"use client";

import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

interface TechDiveCardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  color: string;
  btnText?: string;
  isReversed?: boolean;
}

export const TechDiveCard = ({
  title,
  description,
  imageSrc,
  color,
  btnText,
  isReversed,
}: TechDiveCardProps) => {
  return (
    <section
      className="w-full h-auto"
      style={{
        backgroundColor: color.startsWith("[") ? color.slice(1, -1) : color,
      }}
    >
      <div
        className={`flex flex-col xl:flex-row ${
          isReversed ? "xl:flex-row-reverse" : ""
        }`}
      >
        {/* Image Container */}
        <div className="w-full xl:w-1/2 flex justify-center items-center">
          <div className="relative w-full h-[50vh] lg:h-[720px]">
            <Image
              src={imageSrc}
              alt={title}
              className="w-full h-full"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Text Container */}
        <div className="w-full xl:w-1/2 flex flex-col justify-center items-center  h-[50vh]  lg:h-[720px] space-y-4 px-4 xl:px-0 ">
          <div className="text-customBlue font-semibold  text-center text-[32px]  max-w-[280px]">
            {title}
          </div>
          <p className="text-sm xl:text-[16px]  leading-[1.8] text-center  max-w-[330px]">
            {description}
          </p>
          {btnText && (
            <Button className="bg-black text-white  max-w-[280px]">
              {btnText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
