import Image, { StaticImageData } from "next/image";
import React from "react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: StaticImageData;
}

interface TeamProfileCardProps extends TeamMember {
  className?: string;
}

export const TeamProfileCard: React.FC<TeamProfileCardProps> = ({
  name,
  role,
  description,
  imageUrl,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col xl:flex-row gap-8 xl:gap-16 items-start justify-between ${className}`}
    >
      {/* Text Content Section */}
      <div className="flex-1 space-y-4 max-w-4xl xl:block hidden">
        <div>
          <h2 className="text-3xl font-semibold mb-1">{name}</h2>
          <p className="text-gray-600 text-lg">{role}</p>
        </div>
        <div className="space-y-4">
          {description.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Image Section with Hover Effect for Small Screens */}
      <div className="relative w-full xl:w-[320px] h-[400px] xl:h-auto flex-shrink-0 group">
        <div className="rounded-lg overflow-hidden bg-gradient-to-b from-purple-50 to-purple-100 relative h-full">
          <Image
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />

          {/* Hover Description (Visible on small to lg screens) */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 xl:hidden">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-sm">{role}</p>
            <p className="text-sm mt-2">{description}</p>
          </div>
        </div>
      </div>

      {/* Text Content Section for Large Screens */}
      <div className="flex-1 space-y-4 max-w-4xl xl:hidden">
        <div>
          <h2 className="text-3xl font-semibold mb-1">{name}</h2>
          <p className="text-gray-600 text-lg">{role}</p>
        </div>
      </div>
    </div>
  );
};
