"use client";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  cardmdVariants,
  getContentVariants,
  getImageVariants,
  mdTextVariants,
} from "@/lib/helpers/helperFuncs";
import Link from "next/link";

interface TechDiveCardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  color: string;
  btnText?: string;
  isReversed?: boolean;
  heightClass?: string;
  btnFunc?: string;
}

export const TechDiveCard = ({
  title,
  description,
  imageSrc,
  color,
  btnText,
  isReversed = false,
  heightClass = "h-[43vh] xl:h-[550px]",
  btnFunc,
}: TechDiveCardProps) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardmdVariants}
      className="w-full h-auto"
      style={{
        backgroundColor: color.startsWith("[") ? color.slice(1, -1) : color,
      }}
    >
      <div
        className={`flex flex-col md:flex-row ${
          isReversed ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image Container */}
        <motion.div
          variants={getImageVariants(isReversed)}
          className={`w-full xl:w-1/2 flex justify-center items-center ${heightClass}`}
        >
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={imageSrc}
              alt={title}
              className="w-full h-full"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </motion.div>

        {/* Text Container */}
        <motion.div
          variants={getContentVariants(isReversed)}
          className={`w-full xl:w-1/2 flex flex-col justify-center items-center space-y-4 px-4 xl:px-0 ${heightClass}`}
        >
          <motion.div
            variants={mdTextVariants}
            className="text-customBlue font-semibold text-center text-[32px] max-w-[280px]"
          >
            {title}
          </motion.div>
          <motion.p
            variants={mdTextVariants}
            className="text-sm xl:text-[16px] leading-[1.8] text-center max-w-[330px]"
          >
            {description}
          </motion.p>
          {btnText && (
            <motion.div
              variants={mdTextVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-black text-white max-w-[280px]">
                <Link href={btnFunc ?? ""} scroll>
                  {" "}
                  {btnText}
                </Link>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechDiveCard;
