"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import img from "../../app/assets/png/L.png";
import { Button } from "../ui/button";
import { NavData } from "@/app/helpers/mockData";
import Link from "next/link";
import SidebarComponent from "./SidebarComponent";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  showBtn?: boolean;
}

export const HeaderComponent = ({ showBtn = true }: HeaderProps) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    // Check initial scroll position on mount
    const currentScrollPos = window.scrollY;
    setIsScrolled(currentScrollPos > 20); // Adjust threshold as needed

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine if we're scrolling up or down
      const isScrollingUp = prevScrollPos > currentScrollPos;

      // Update visibility based on scroll direction
      setIsVisible(isScrollingUp || currentScrollPos < 10);

      // Update background opacity based on scroll position
      setIsScrolled(currentScrollPos > 20);

      // Save current scroll position
      setPrevScrollPos(currentScrollPos);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1023) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Ensure menu state is correct on resize

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const headerBackgroundVariants = {
    initial: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      backdropFilter: "blur(0px)",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(10px)",
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="w-full fixed top-0 left-0 right-0 z-50 bg-[#f9f7f5]"
        >
          <motion.div
            initial="initial"
            animate={isScrolled ? "scrolled" : "initial"}
            variants={headerBackgroundVariants}
            transition={{ duration: 0.3 }}
            className="max-w-screen-3xl mx-auto px-6 xl:px-12 py-6"
          >
            {/* Header Content */}
            <div className="flex justify-between items-center w-full">
              {/* Desktop Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer flex font-medium items-center justify-center gap-3"
                onClick={() => router.push("/")}
              >
                <Image src={img} alt="techdive logo" priority />
                <p>Tech Dive Africa</p>
              </motion.div>

              {/* Navigation Links */}
              {showBtn && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`xl:flex flex-col  text-center hidden xl:flex-row gap-10 lg:gap-16 xl:text-sm lg:text-[16px] font-semibold`}
                >
                  {NavData.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      <Link href={item.route}>{item.name}</Link>
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-current"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Buttons and Menu */}
              {showBtn && (
                <>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-auto xl:ml-0 hidden xl:block"
                  >
                    <Button
                      size="lg"
                      onClick={() => router.push("/")}
                      className="relative overflow-hidden group bg-YellowBtnColor text-base"
                    >
                      Get Started
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="xl:hidden"
                  >
                    <HiOutlineMenuAlt1 size={30} onClick={toggleMenu} />
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
          <SidebarComponent isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default HeaderComponent;
