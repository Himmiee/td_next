import { StaticImageData } from "next/image";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

type IconProps = {
  icon: React.ReactNode | StaticImageData;
  title: string;
  description: string;
};

const IconWrapper = ({
  icon,
  title,
}: {
  icon: IconProps["icon"];
  title: string;
}) => {
  if ("src" in (icon as StaticImageData)) {
    return (
      <Image
        src={icon as StaticImageData}
        alt={title}
        width={40}
        height={40}
        className="w-8 h-8"
      />
    );
  }
  return <span className="text-[#9051A1] text-2xl">{icon as any}</span>;
};

export const InfoCard = ({ icon, title, description }: IconProps) => {
  return (
    <section className="flex flex-col items-start bg-white  rounded-lg p-6 w-full xl:max-w-xs">
      <div className="flex items-center justify-center w-14 h-14 bg-[#F9F5FF] rounded-full mb-4">
        <div className="flex items-center justify-center w-11 h-11 bg-[#F4EBFF] rounded-full">
          <IconWrapper icon={icon} title={title} />
        </div>
      </div>
      <h3 className="text-2xl w-3/4 font-semibold  text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-[#565A5B] text-sm  ">{description}</p>
    </section>
  );
};
export const CustomInfoCard = ({ icon, title, description }: IconProps) => {
  return (
    <section className="flex flex-col items-start bg-white rounded-lg p-6 w-full max-w-sm">
      <div className="flex items-center justify-center w-11 h-11 bg-[#F7F2F8] rounded-lg">
        <IconWrapper icon={icon} title={title} />
      </div>
      <div className="flex items-center justify-between w-full mt-4 ">
        <h3 className="text-2xl font-medium text-gray-900">{title}</h3>
        <div className="flex justify-center items-center w-8 h-8 bg-[#FCFCFD] rounded-lg">
          <MdArrowOutward className="text-YellowBtnColor" />
        </div>
      </div>
      <p className="text-[#565A5B] text-sm mt-2 ">{description}</p>
    </section>
  );
};

export const CoursesCard = ({ icon, title, description }: IconProps) => {
  return (
    <section className="flex flex-col items-start p-4 xl:p-6 w-full max-w-sm space-y-2">
      <div className="flex mt-4">
        <Image src={icon as StaticImageData} alt="i" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-[#565A5B] xl:text-lg mt-2 ">{description}</p>
    </section>
  );
};
