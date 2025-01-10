"use client";
import { Button } from "@/components/ui/button";
import heroRightImg from "@/app/assets/webp/hero.webp";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  highlightVariants,
  imageVariants,
} from "@/lib/helpers/helperFuncs";

export const HomeHeroSection = () => {
  return (
    <AnimatePresence mode="wait">
      <main className="xl:h-[800px] 3xl:max-w-screen-3xl mx-auto pb-9 xl:pb-0 pt-28">
        <section className="grid grid-cols-1 xl:grid-cols-2 h-full xl:px-12">
          {/* Left Side */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-5 px-4 py-10 xl:py-[80px]"
          >
            <motion.div
              variants={itemVariants}
              className="font-semibold text-center xl:text-start text-[40px] xl:text-[65px]"
            >
              Your Tech Career, <br />{" "}
              <motion.span
                variants={highlightVariants}
                className="bg-YellowBtnColor/25 border-b-8 border-b-YellowBtnColor inline-block"
              >
                Levelled Up!
              </motion.span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-xl xl:text-lg text-center xl:text-start w-full flex justify-center items-center mx-auto xl:justify-start xl:items-start xl:mx-0"
            >
              Our supportive community and expert-led courses are designed to
              empower women at every stage of their tech journey, providing
              practical resources and personalized guidance to help you achieve
              your career goals.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col xl:flex-row gap-4 max-w-sm mx-auto xl:mx-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                <Button
                  asChild
                  className="bg-YellowBtnColor px-8 py-6 font-medium cursor-pointer w-full"
                >
                  <Link href="/Courses" scroll>
                    Explore Courses
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Right Side */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="hover"
            className="relative min-h-[380px] xl:min-h-full w-full"
          >
            <Image
              src={heroRightImg}
              alt="Hero Image"
              className="object-contain xl:object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw"
            />
          </motion.div>
        </section>
      </main>
    </AnimatePresence>
  );
};

export default HomeHeroSection;
