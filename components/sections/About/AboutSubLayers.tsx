"use client"
import Image from "next/image";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import img from "@/app/assets/png/logo-lg.png";
import { AnimatePresence, motion } from "framer-motion";
import { TechDiveCard } from "@/components/forms/cards/techCard";
import { ourMissionData, teamMembers } from "@/lib/helpers/mockData";
import { TeamProfileCard } from "@/components/forms/cards/profilecard";

export const AboutTagComponent: React.FC = () => {
  const items = [
    { id: 1, description: "In-Demand Skills Training: " },
    { id: 2, description: "Expert Mentorship:" },
    { id: 3, description: "Career Support" },
    { id: 4, description: "Supportive Community" },
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
      <motion.section
        className="h-[550px] px-4 xl:px-12 flex items-center bg-white justify-center"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
      >
        <motion.div
          className="grid grid-cols-1 3xl:max-w-screen-3xl mx-auto md:grid-cols-2 gap-8 h-full w-full"
          variants={containerVariants}
        >
          {/* Text Content Section */}
          <motion.div
            className="flex flex-col justify-center space-y-5 h-full w-full"
            variants={itemVariants}
          >
            <motion.p
              className="text-fontDark text-[32px] font-semibold"
              variants={itemVariants}
            >
              Our Vision
            </motion.p>
            <motion.p className="text-[#020100]" variants={itemVariants}>
              Our vision is to empower women with a digitally inclusive future
              across Africa, bridging the tech gap and connecting them with the
              skills and opportunities they need to succeed. We aim to become a
              leading tech education provider, not just in Nigeria, but across
              the continent, by fostering a community of 100,000+ female tech
              professionals. We hope to offer
            </motion.p>
            <motion.ul
              className="list-none space-y-4"
              variants={containerVariants}
            >
              {items.map((item) => (
                <motion.li
                  key={item.id}
                  className="flex items-center space-x-3"
                  variants={itemVariants}
                >
                  {/* Custom Bullet */}
                  <motion.div
                    className="flex items-center justify-center w-8 h-8 bg-[#F7F2F8] rounded-full"
                    variants={itemVariants}
                  >
                    <GiCheckMark className="text-[#803894] text-xs" />
                  </motion.div>
                  <motion.span className="text-lg" variants={itemVariants}>
                    {item.description}
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="hidden md:flex w-full justify-end items-center"
            variants={imageVariants}
          >
            <Image src={img} alt="techdive" />
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};


export const MissionComponent = () => {
  return (
    <section className="space-y-[74px]">
      {" "}
      <div className="">
        {ourMissionData.map((item, index) => (
          <TechDiveCard
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.icon}
            color={item.color}
            isReversed={index % 2 == 1}
            heightClass="h-[450px]"
          />
        ))}
      </div>
    </section>
  );
};


export const ProfileCardComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="p-4 px-4 xl:p-8 3xl:max-w-screen-3xl mx-auto w-full xl:px-12 space-y-24">
        <motion.p 
          variants={titleVariants}
          className="text-fontDark text-[32px] font-semibold text-center"
        >
          Meet The Team
        </motion.p>
        <motion.div className="space-y-16">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" }
                }
              }}
            >
              <TeamProfileCard
                name={member.name}
                role={member.role}
                description={member.description}
                imageUrl={member.imageUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

