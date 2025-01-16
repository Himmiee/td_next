"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: StaticImageData;
}

interface TeamProfileCardProps extends TeamMember {
  className?: string;
}
export const TeamProfileCard: React.FC<TeamProfileCardProps> = ({
  name,
  role,
  description,
  imageUrl,
  className = "",
}) => {
  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-col xl:flex-row gap-8 xl:gap-16 items-start justify-between ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Text Content Section */}
      <motion.div
        variants={contentVariants}
        className="flex-1 space-y-4 max-w-4xl xl:block hidden"
      >
        <motion.div>
          <motion.h2
            className="text-3xl font-semibold mb-1"
            variants={contentVariants}
          >
            {name}
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            variants={contentVariants}
          >
            {role}
          </motion.p>
        </motion.div>
        <motion.div className="space-y-4">
          {description.split("\n\n").map((paragraph, idx) => (
            <motion.p
              key={idx}
              variants={contentVariants}
              className="text-gray-700 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        variants={imageVariants}
        whileHover="hover"
        className="relative w-full xl:w-[320px]  h-[400px] xl:h-auto flex-shrink-0 group"
      >
        <motion.div className="rounded-lg overflow-hidden relative h-full">
          <Image
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover md:object-contain xl:object-cover"
          />

          {/* Hover Description */}
          <motion.div
            initial={{ opacity: 0.1 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white p-4 xl:hidden"
          >
            <motion.p
              initial={{ y: 10, opacity: 0}}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0 }}
              className="text-sm mt-2"
            >
              {description}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile Text Content */}
      <motion.div
        variants={contentVariants}
        className="flex-1 space-y-4 justify-center items-center w-full xl:hidden"
      >
        <motion.div className="w-full flex justify-center items-center flex-col space-y-2">
          <motion.h2
            variants={contentVariants}
            className="text-3xl font-semibold mb-1"
          >
            {name}
          </motion.h2>
          <motion.p
            variants={contentVariants}
            className="text-gray-600 text-lg"
          >
            {role}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
