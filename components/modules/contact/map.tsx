import Image from "next/image";
import React from "react";

type ContactMapProps = {
  lat?: number;
  lng?: number;
  zoom?: number;
  className?: string;
  location?: string;
};

const ContactMap = ({
  lat,
  lng,
  zoom,
  className,
  location,
}: ContactMapProps) => {
  return (
    <div className="w-full h-[604px]">
      {/* Placeholder Map Image */}
      <Image
        src={"/images/mapplaceholder.png"}
        alt="banner"
        width={1920}
        height={1920}
        quality={100}
        className="object-cover object-center w-full h-full"
      />
    </div>
  );
};

export default ContactMap;
