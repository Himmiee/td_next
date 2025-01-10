"use client";
import { coursesData } from "@/lib/helpers/mockData";
import { CoursesCard } from "@/components/forms/cards/formcard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { cardCourseVariants, containerCourseVariants, textCourseVariants } from "@/lib/helpers/helperFuncs";

export const CoursesSection = () => {

  return (
    <motion.main
      variants={containerCourseVariants}
      initial="hidden"
      animate="visible"
      className="xl:h-[650px] 3xl:max-w-screen-3xl mx-auto px-4 pb-6 xl:pb-0 flex flex-col items-center space-y-8 pt-10"
    >
      <motion.div variants={textCourseVariants} className="space-y-3">
        <motion.div
          variants={textCourseVariants}
          className="text-[36px] text-center font-semibold"
        >
          Our Courses
        </motion.div>
        <motion.p
          variants={textCourseVariants}
          className="text-[#59595A] text-center max-w-3xl"
        >
          Our courses are designed to help you master in-demand skills. With
          expert-led training and hands-on learning, you&apos;ll gain the
          knowledge and confidence to excel in the tech industry.
        </motion.p>
      </motion.div>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center w-full">
        {coursesData.map((item, index) => (
          <motion.div
            key={index}
            variants={cardCourseVariants}
            whileHover={{
              scale: 1.03,
              y: -5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <CoursesCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
};
export const DiveSection = () => {
  return (
    <main className="h-96 px-4 flex flex-col items-center justify-center space-y-6 bg-YellowBtnColor">
      <div className="space-y-2 mb-2">
        {" "}
        <div className="text-[36px] text-center font-semibold ">
          Ready to Dive In?
        </div>
        <p className="text-lg text-center max-w-3xl">
          Take the first step toward your tech career today.
        </p>
      </div>
      <Link href="/Contact" scroll>
        {" "}
        <Button className="bg-black text-white p-6">Get Started Now</Button>
      </Link>
      <p className="text[#484848] text-[13px]">
        Join <span className="text-black">100+</span> others levelling up with
        TechDive
      </p>
    </main>
  );
};
