import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { PiFacebookLogoFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { StaticImageData } from "next/image";

interface BannerWithOverlayProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  socialIcons?: boolean;
}
const BannerWithOverlay = ({
  imageSrc,
  title,
  description,
  socialIcons = true,
}: BannerWithOverlayProps) => {
  return (
    <div className="relative w-full h-[604px]">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="banner"
        quality={100}
        className="object-cover object-center w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-[60%]"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-row justify-center items-center text-white px-4 gap-14">
        {socialIcons && (
          <div className="flex flex-row gap-12">
            <div className="flex flex-col justify-between py-4">
              <FaTwitter className="text-2xl" />
              <PiFacebookLogoFill className="text-2xl" />
              <RiInstagramFill className="text-2xl" />
            </div>
            <div className="w-[4px] h-[241px] bg-white mr-9"></div>
          </div>
        )}
        <div className="flex flex-row items-center gap-8">
          <h1 className="text-5xl font-medium mr-9">{title}</h1>
          <p className="mt-4 text-lg w-[427px] text-center md:text-start">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerWithOverlay;
