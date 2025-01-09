"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Testimonials } from "@/data";

const TestimonialAccordion = () => {
  const [currentItem, setCurrentItem] = useState<string | undefined>("item-0");

  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={currentItem}
        onValueChange={(value) => setCurrentItem(value)}
      >
        {Testimonials.map((testimonial, index) => (
          <AccordionItem key={testimonial.id} value={`item-${index}`}>
            <AccordionTrigger
              className={`grid grid-cols-3 items-center justify-between py-4 px-20 text-sm font-medium transition-all text-left h-[190px] ${
                currentItem === `item-${index}`
                  ? "bg-[#2B2F841A] text-[#2B2F84]"
                  : "bg-white text-black"
              }`}
            >
              <div className="text-center font-medium text-xl">
                {testimonial.clientName}
              </div>
              <div className="text-end text-lg">{testimonial.projectType}</div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="w-[750px] mx-auto text-center text-base py-14 font-light">
                {testimonial.details}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default TestimonialAccordion;
