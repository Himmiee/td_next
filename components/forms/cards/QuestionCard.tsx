import { bulletPoints } from "@/app/helpers/mockData";
import { FaX } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";

export const QuestionCard = () => {
  return (
    <div className="rounded-lg bg-[#F7F2F8] w-full xl:w-2/3 p-6 space-y-6">
      <div className="flex justify-between items-center text-[#262626]">
        <h2 className="text-[17px] font-semibold">
          What courses do you offer?
        </h2>
        <div className="bg-[#FEF6D6] p-4">
          <FaX className="" />
        </div>
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
      <div className="h-16 flex justify-between items-center p-4 rounded-lg bg-white">
        <p className="text-[17px]">Enroll for a course</p>
        <div>
          <IoMdArrowForward className="text-xl text-[#262626]" />
        </div>
      </div>
    </div>
  );
};
