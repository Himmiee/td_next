"use client";

import Image from "next/image";
import aboutImg from "@/app/assets/png/about.png";
import { motion, AnimatePresence } from "framer-motion";

export const AboutHeroSection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      <motion.main
        className="h-[800px] relative"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
        key="about-hero"
      >
        <section className="relative w-full h-full grid grid-cols-1 xl:grid-rows-[1fr_auto]">
          {/* Hero Image with Gradient */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <motion.div
              className="relative w-full h-full"
              variants={itemVariants}
            >
              <Image
                src={aboutImg}
                alt="About Hero Background"
                layout="fill"
                objectFit="cover"
                className="clip-hero"
                priority
              />
              <div className="absolute inset-0 bg-hero-gradient"></div>
            </motion.div>
          </div>

          {/* Grid Content */}
          <motion.div
            className="relative 3xl:max-w-screen-3xl mx-auto z-10 h-full flex flex-col text-white xl:grid grid-cols-1 xl:grid-cols-2 justify-end xl:justify-start xl:items-center gap-4 xl:gap-8 pb-24 p-6 xl:pt-72 xl:px-24"
            variants={containerVariants}
          >
            {/* Left Side Content */}
            <motion.div className="xl:text-left" variants={itemVariants}>
              <p className="text-[38px] font-medium">About Tech Dive</p>
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              className="text-lg xl:text-left"
              variants={itemVariants}
            >
              <p>
                At Tech Dive, we’re on a mission to bridge the gap between
                aspiration and achievement by empowering individuals with
                in-demand tech skills and a supportive community. Whether you’re
                starting your tech journey, advancing your career, or pivoting
                into a new field, we provide the resources, training, and
                guidance you need to succeed in the fast-evolving digital world.
              </p>
            </motion.div>
          </motion.div>
        </section>
      </motion.main>
    </AnimatePresence>
  );
};
