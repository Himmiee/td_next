import { coursesFaqs } from "@/lib/helpers/mockData";
import Accordion from "@/components/layouts/accordion";

export const CourseFaqs = () => {
  return (
    <section className=" bg-white">
      {" "}
      <div className=" 3xl:max-w-screen-3xl mx-auto px-4 xl:px-8 space-y-8 py-6 ">
        <div className="text-2xl text-[#262626] font-medium">
          Course Outline
        </div>
        <Accordion items={coursesFaqs} width="w-full" />
      </div>
    </section>
  );
};
