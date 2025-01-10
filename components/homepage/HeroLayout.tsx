"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface SocialIcon {
  src: string | StaticImageData;
  alt: string;
  href: string;
}

interface HeroLayoutProps {
  backgroundImage: string | StaticImageData;
  title: string;
  description?: string;
  socialIcons?: SocialIcon[];
  buttons?: React.ReactNode; // For optional buttons at the bottom
}

export const HeroLayout: React.FC<HeroLayoutProps> = ({
  backgroundImage,
  title,
  description,
  socialIcons = [],
  buttons,
}) => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <main className="min-h-[400px] h-screen max-h-[600px] relative w-full">
      <section className="relative w-full h-full flex justify-center items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={backgroundImage}
              alt={`${title} Hero Background`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        </div>

        {/* Content Container */}
        <motion.div
          className="relative h-full flex flex-col lg:flex-row items-center justify-center lg:justify-start text-white lg:space-x-24 lg:w-3/4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Social Icons */}
          {socialIcons.length > 0 && (
            <motion.div
              className="flex lg:flex-col gap-6 lg:gap-12 lg:space-y-16 mb-6 lg:mb-0 lg:border-r-4 lg:pr-24"
              variants={itemVariants}
            >
              {socialIcons.map((icon, index) => (
                <motion.a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image src={icon.src} alt={icon.alt} />
                </motion.a>
              ))}
            </motion.div>
          )}

          {/* Text Content */}
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16 text-center lg:text-left lg:pl-12 lg:space-x-16"
            variants={itemVariants}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-semibold"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            <motion.p
              className="max-w-xl text-lg lg:text-xl text-white/90"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Optional Buttons */}
      {buttons && (
        <motion.div
          className="absolute bottom-10 lg:right-40 right-0 w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {buttons}
        </motion.div>
      )}
    </main>
  );
};
