"use client";

import logo from "../../app/assets/png/Logo Main.png";
import Image from "next/image";
import { NavData, socialIcons } from "@/app/helpers/mockData";
import Link from "next/link";
import { motion } from "framer-motion";

export const FooterComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 360 },
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <motion.div
      className="xl:h-[400px] w-full bg-[#2D0046] xl:px-12 flex flex-col overflow-x-hidden pt-10 pb-4 xl:py-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Flex container for logo, footer links, and social icons */}
      <div className="space-y-8 3xl:max-w-screen-3xl mx-auto w-full pb-14 xl:pb-0 3xl:px-12">
        <motion.div
          className="flex flex-col xl:flex-row items-center mt-12 space-y-20 xl:space-y-0 justify-between xl:mt-24 xl:mb-20"
          variants={containerVariants}
        >
          {/* Logo */}
          <motion.div variants={itemVariants}>
            <Image src={logo} alt="Patnerd logo" />
          </motion.div>

          {/* Footer links */}
          <motion.div
            className="text-white flex flex-col text-center xl:flex-row gap-10 lg:gap-24 text-[16px] font-medium"
            variants={containerVariants}
          >
            {NavData.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Link href={item.route}>{item.name}</Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="flex space-x-3 pb-12 xl:pb-0"
            variants={containerVariants}
          >
            {socialIcons.map(({ icon: Icon, name, route }, idx) => (
              <motion.div
                key={idx}
                className={`xl:p-2 p-[7px] rounded-full text-white hover:bg-gray-700 transition-colors duration-200 ${
                  name === "Facebook" ? "bg-[#AF82BC]" : "bg-[#000013]"
                }`}
                variants={socialIconVariants}
                whileHover="hover"
                animate="visible"
              >
                <a href={route} target="_blank" rel="noopener noreferrer">
                  <Icon className="text-xl" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full border-b-2 border-b-[#470060]"
          variants={itemVariants}
        ></motion.div>

        {/* Copyright text */}
        <motion.div variants={itemVariants}>
          <p className="text-[#CBD5E1] text-sm text-center mt-12 ">
            © Copyright 2024, All Rights Reserved by Tech Dive
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
