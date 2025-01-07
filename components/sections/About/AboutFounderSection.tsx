import Image from "next/image";
import React from "react";
import img from "@/app/assets/png/about/image-founder.png";

export const FoundersSection = () => {
  const description = `Right after college, I felt totally lost. I was sending out job applications left and right – banking, admin, you name it – but nothing clicked. I felt stuck, like I was missing something big.
Then, this crazy thing happened. I got a pair of earrings for my birthday, and on a whim, I decided to try selling them on WhatsApp. I was just using my phone and honestly, I was pretty desperate. To my surprise, someone actually wanted them!

That little sale was a complete game-changer. It sparked this huge interest in digital marketing. I became obsessed, learning everything I could, getting certified, and even working with some amazing organizations like Meta and Fate Foundation. We helped over 5,000 businesses learn how to use social media effectively.
From there, my interest in tech just kept growing, which led me to product management. I wanted to understand why people use certain products and how to build things that last. This opened up opportunities to work with some really cool brands like Highttable Africa and Chatter Cities Institute.

Now, I'm passionate about helping other people break into tech, just like I did. That's why I started Tech Dive – to guide people who are looking for a rewarding career in this field. `;

  return (
    <div
      className={`flex flex-col xl:flex-row gap-8 xl:gap-16 items-center justify-center bg-white px-4 xl:px-8 py-12 xl:py-0 xl:h-[750px]`}
    >
      {/* Text Content Section */}
      <div className="flex-1 space-y-4 max-w-4xl">
        <div>
          <h2 className="xl:text-3xl font-semibold mb-1">MY TECHDIVE JOURNEY</h2>
          <p className="text-[#2D2F31] text-3xl font-semibold xl:text-[45px]">
            From Uncertainty to{" "}
            <span className="text-[#9051A1]">Empowerment:</span>
          </p>
        </div>
        <div className="space-y-6 xl:space-y-4">
          {description.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          <p className="font-medium">Esther Daniels</p>
          <p className="text-[#2D2F31] text-sm">Founder, Tech Dive</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden xl:w-1/3 flex-shrink-0 xl:flex justify-center">
        <div className="rounded-lg overflow-hidden bg-gradient-to-b from-purple-50 to-purple-100">
          <Image
            src={img}
            alt="founder"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};
