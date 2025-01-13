import Image, { StaticImageData } from "next/image";

export const CustomGrid = ({
  title,
  description,
  imageSrc,
  reverse = false,
}: {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`group grid lg:grid-cols-2 gap-8 border border-gray-200 overflow-hidden transition-all duration-300 hover:bg-[#2a2f8d] ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Text Content */}
      <div className="flex flex-col justify-center p-6 lg:p-16 space-y-4">
        <h2 className="text-3xl font-bold text-black group-hover:text-white">
          {title}
        </h2>
        <div className="lg:hidden">
          <Image
            src={imageSrc}
            alt={title}
            className="object-cover "
          />
        </div>
        <p className="text-gray-700 group-hover:text-white leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="relative aspect-video lg:aspect-auto w-full h-full p-2 lg:p-16 hidden lg:flex">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};
