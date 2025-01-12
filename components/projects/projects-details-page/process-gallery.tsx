"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import lockIcon from "@/public/icons/camera.png"; // Replace with your lock icon path
import processImage1 from "@/public/images/projects/img-1.jpg"; // Replace with your process images
import processImage2 from "@/public/images/projects/img-1.jpg";
import processImage3 from "@/public/images/projects/img-1.jpg";
import processImage4 from "@/public/images/projects/img-1.jpg";
import processImage5 from "@/public/images/projects/img-1.jpg";
import processImage6 from "@/public/images/projects/img-1.jpg";

const ProcessGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );

  const images = [
    { src: processImage1, alt: "Process Step 1" },
    { src: processImage2, alt: "Process Step 2" },
    { src: processImage3, alt: "Process Step 3" },
    { src: processImage4, alt: "Process Step 4" },
    { src: processImage5, alt: "Process Step 5" },
    { src: processImage6, alt: "Process Step 6" },
  ];

  const handleImageClick = (src: StaticImageData) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="w-full py-16 auto-container">
      <div className=" mb-8">
        <h2 className="text-4xl font-medium  text-primary-80">THE PROCESS</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-0">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group bg-gray-100  overflow-hidden md:w-[470px] md:h-[296px] w-full h-full"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={425}
              height={296}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              onClick={() => handleImageClick(image.src)}
            >
              <Image src={lockIcon} alt="Locked" className="w-12 h-12" />
            </div>
          </div>
        ))}
      </div>

      {/* Full Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative bg-white rounded-lg shadow-lg overflow-hidden w-[90%] max-w-5xl h-[80vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={selectedImage}
                alt="Full Process Image"
                className="w-full h-full object-contain"
              />
              <button
                className="absolute w-10 h-10 top-4 right-4 text-white bg-black/50 rounded-full p-2"
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProcessGallery;
