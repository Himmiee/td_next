"use client";
import React, { useState } from "react";
import { AccordionItem } from "@/lib/types";
import { BiMinus, BiPlus } from "react-icons/bi";

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full xl:w-2/3 flex justify-center items-center flex-col mx-auto rounded-xl">
      {items.map((item, index) => (
        <div
          key={index}
          className={`rounded-lg overflow-hidden transition-all duration-300 border bg-white ${
            index < items.length - 1 ? "mb-4" : ""
          }`}
        >
          {/* Title Section */}
          <div
            className="flex items-center justify-between gap-5 cursor-pointer p-6"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="xl:text-lg font-medium">{item.title}</h3>
            <div
              className={`transform transition-transform duration-300 bg-[#FEF6D6] p-3 rounded-lg ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              {openIndex === index ? (
                <BiMinus size={20} />
              ) : (
                <BiPlus size={20} />
              )}
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[1000px] p-6" : "max-h-0 p-0"
            }`}
          >
            <div className="text-gray-600">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
