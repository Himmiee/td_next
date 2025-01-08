import { QuestionCard } from "@/components/forms/cards/QuestionCard";
import Accordion from "@/components/layouts/accordion";
import { accordionItems } from "@/app/helpers/mockData";

export const FAQComponent = () => {
  return (
    <section className="bg-white"> 
      <div className="p-6 xl:p-8 space-y-10  3xl:max-w-screen-3xl mx-auto py-10">
        <div className="space-y-3 text-center">
          <h1 className="text-[36px] font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-[#59595A]">
            Here’s everything you need to know about us and our offerings.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <QuestionCard />
        </div>
        <Accordion items={accordionItems} />
      </div>
    </section>
  );
};
