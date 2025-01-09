"use client"

import { bulletPoints } from "@/app/helpers/mockData";
import { useRouter } from "next/navigation";
// import { FaX } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";

export const QuestionCard = () => {
  const router = useRouter()
  return (
    <div className="rounded-lg bg-[#F7F2F8] w-full xl:w-2/3 p-6 space-y-6">
      <div className="flex justify-between items-center text-[#262626]">
        <h2 className="text-[17px] font-semibold">
          What courses do you offer?
        </h2>
        {/* <div className="bg-[#FEF6D6] p-4">
          <FaX className="" />
        </div> */}
      </div>
      <div className="space-y-4">
        <p className="text-[#4C4C4D]">
          We offer a range of in-demand tech courses, including:
        </p>
        <div className="gap-y-4">
          {bulletPoints.map((point, index) => (
            <ul key={index} className="list-disc list-inside text-gray-700">
              <li>{point}</li>
            </ul>
          ))}
        </div>
        <p className="text-[#4C4C4D] max-w-3xl">
          Each course is designed to provide hands-on learning and real-world
          experience to prepare you for a successful career in tech.
        </p>
      </div>
      <div
        onClick={() => router.push("/Courses")}
        className="h-16 flex justify-between items-center p-4 rounded-lg cursor-pointer bg-white"
      >
        <p className="text-[17px]">Enroll for a course</p>
        <div>
          <IoMdArrowForward className="text-xl text-[#262626]" />
        </div>
      </div>
    </div>
  );
};


export const GeneralSectionCard = ({
  children,
  customClasses = "",
  additionalStyles = {},
  color = "customBlue",
  isFullWidth = false, // New prop to determine the layout style
}: {
  children: React.ReactNode;
  customClasses?: string;
  additionalStyles?: React.CSSProperties;
  color?: string;
  isFullWidth?: boolean; // New boolean prop
}) => {
  return (
    <section
      className={`${
        isFullWidth
          ? `3xl:max-w-screen-3xl mx-auto px-6 xl:px-12 flex items-center justify-center ${customClasses} ${color}`
          : `${color} w-full flex items-center justify-center ${customClasses}`
      }`}
      style={additionalStyles}
    >
      {isFullWidth ? (
        children
      ) : (
        <div className="3xl:max-w-screen-3xl mx-auto px-6 xl:px-12 flex items-center justify-center">
          {children}
        </div>
      )}
    </section>
  );
};
