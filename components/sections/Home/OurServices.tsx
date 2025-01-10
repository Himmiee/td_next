"use client";
import { CustomInfoCard } from "@/components/forms/cards/formcard";
import {
  containerServiceVariants,
  itemServiceVariants,
} from "@/lib/helpers/helperFuncs";
import { ourServicesData } from "@/lib/helpers/mockData";
import { motion, AnimatePresence } from "framer-motion";

export const TechDiveServiceComponent = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        className="bg-white"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerServiceVariants}
        key="services-section"
      >
        <motion.div
          className="3xl:max-w-screen-3xl mx-auto space-y-6 py-10"
          variants={containerServiceVariants}
        >
          <motion.div
            className="text-[36px] text-center font-semibold"
            variants={itemServiceVariants}
          >
            Our Services
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center"
            variants={containerServiceVariants}
          >
            <AnimatePresence>
              {ourServicesData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemServiceVariants}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CustomInfoCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};
