"use client";

import Image from "next/image";
import React from "react";
import img from "@/app/assets/png/about/image-founder.png";
import { description } from "@/lib/helpers/mockData";
import { motion, AnimatePresence } from "framer-motion";

export const FoundersSection = () => {
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
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col xl:flex-row gap-8 xl:gap-16 items-center justify-center bg-white px-4 xl:px-12 py-12 xl:py-0 xl:h-[750px]"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
      >
        {/* Text Content Section */}
        <motion.div
          className="flex-1 space-y-4 max-w-4xl"
          variants={itemVariants}
        >
          <div>
            <h2 className="xl:text-3xl font-semibold mb-1">
              MY TECHDIVE JOURNEY
            </h2>
            <p className="text-[#2D2F31] text-3xl font-semibold xl:text-[45px]">
              From Uncertainty to{" "}
              <span className="text-[#9051A1]">Empowerment:</span>
            </p>
          </div>
          <div className="space-y-6 xl:space-y-4">
            {description.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <p className="font-medium">Esther Daniels</p>
            <p className="text-[#2D2F31] text-sm">Founder, Tech Dive</p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="hidden xl:w-1/3 flex-shrink-0 xl:flex justify-end"
          variants={imageVariants}
        >
          <div className="rounded-lg overflow-hidden bg-gradient-to-b from-purple-50 to-purple-100">
            <Image
              src={img}
              alt="founder"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
