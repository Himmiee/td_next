"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactFormComponent } from "@/components/forms/contactForm";
import { GeneralSectionCard } from "@/components/forms/cards/QuestionCard";
import { containerVariants, fadeIn } from "@/lib/helpers/helperFuncs";
import { socialIcons } from "@/lib/helpers/mockData";
import { ContactSuccessMessage } from "./ContactSuccess";

export const ContactHeroSection = () => {
  const [step, setStep] = useState<number>(0);
  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 360 },
    transition: { type: "spring", stiffness: 300 },
  };
  return (
    <GeneralSectionCard
      isFullWidth
      customClasses="xl:min-h-[800px] pt-40 relative xl:py-32"
    >
      <div className="w-full grid xl:grid-cols-2 gap-x-8 gap-y-6  xl:gap-y-0 xl:px-6 lg:px-14">
        {/* Left side with heading */}
        <motion.div
          className={`${
            step == 0 ? "flex" : "hidden xl:flex"
          } flex-col justify-center xl:pl-6`}
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            className="font-semibold text-[32px] xl:text-[52px] lg:text-[64px] lg:-mt-48"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Contact Us
          </motion.h3>
          <motion.p
            className="font-normal lg:text-[18px] text-[#231F1F] xl:w-4/5 lg:w-3/5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Have something to say or a suggestion? <br className="xl:hidden" />{" "}
            Send us a message
          </motion.p>
          <div className="space-y-3 mt-4 hidden xl:block">
            <p className="text-sm font-medium">Follow us on Social Media</p>
            <motion.div
              className="flex space-x-3 pb-12 xl:pb-0"
              variants={containerVariants}
            >
              {socialIcons.map(({ icon: Icon, name, route }, idx) => (
                <motion.div
                  key={idx}
                  className={`xl:p-2 p-[7px] rounded-full text-white hover:bg-gray-700 transition-colors duration-200 ${
                    name === "Facebook" ? "bg-blue-600" : "bg-[#1E293B]"
                  }`}
                  variants={socialIconVariants}
                  whileHover="hover"
                  animate="visible"
                >
                  <a href={route} target="_blank" rel="noopener noreferrer">
                    <Icon className="text-lg" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right side with form */}
        <div className="flex flex-col pb-20 xl:pb-0">
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <motion.div
                key="form"
                className="xl:ml-auto xl:max-w-[600px] w-full xl:justify-end xl:min-h-[600px] mx-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <ContactFormComponent setStep={setStep} />
              </motion.div>
            ) : (
              <motion.div
                key="success"
                className="xl:ml-auto xl:max-w-[600px] w-full xl:justify-end lg:-mt-48 mx-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <ContactSuccessMessage />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </GeneralSectionCard>
  );
};
