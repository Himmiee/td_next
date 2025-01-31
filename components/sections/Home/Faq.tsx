"use client";
// import { QuestionCard } from "@/components/forms/cards/QuestionCard";
import Accordion from "@/components/layouts/accordion";
import { accordionItems } from "@/lib/helpers/mockData";
import { motion, AnimatePresence } from "framer-motion";

export const FAQComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.section
        className="bg-white"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        key="faq-section"
      >
        <motion.div
          className="p-6 xl:p-8 space-y-10 3xl:max-w-screen-3xl mx-auto py-10"
          variants={containerVariants}
        >
          {/* Header Section */}
          <AnimatePresence>
            <motion.div
              className="space-y-3 text-center"
              variants={itemVariants}
            >
              <motion.h1
                className="text-[36px] font-semibold"
                variants={itemVariants}
              >
                Frequently Asked Questions
              </motion.h1>
              <motion.p
                className="text-lg text-[#59595A]"
                variants={itemVariants}
              >
                Here&apos;s everything you need to know about us and our
                offerings.
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* QuestionCard */}
          {/* <AnimatePresence>
            <motion.div
              className="w-full flex justify-center items-center"
              variants={itemVariants}
            >
              <QuestionCard />
            </motion.div>
          </AnimatePresence> */}

          {/* Accordion */}
          <AnimatePresence>
            <motion.div variants={itemVariants}>
              <Accordion items={accordionItems} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};
