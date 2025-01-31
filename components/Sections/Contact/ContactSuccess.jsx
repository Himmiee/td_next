"use client";
import { motion } from "framer-motion";

export const ContactSuccessMessage = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="xl:bg-[#F4F7F8]  xl:p-12 rounded-lg space-y-4 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-semibold xl:text-[36px]"
      >
        Thank You for Reaching Out!
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-[#222D41]"
      >
        We&apos;ve received your message and will get back to you shortly. In
        the meantime, feel free to explore more of what TECH DIVE has to offer.
        We&apos;re excited to connect with you!
      </motion.p>
    </motion.section>
  );
};
