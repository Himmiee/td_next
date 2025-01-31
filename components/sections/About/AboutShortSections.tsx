import Image from "next/image";
import img from "@/app/assets/png/logo-lg.png";
import imgu from "@/app/assets/png/Avatar.png";
import vector from "@/app/assets/png/vectorsub.png";
import { Button } from "@/components/ui/button";

export const AboutEndSection = () => {
  return (
    <main className="bg-[#14002D]">
      <section className="relative h-96 3xl:max-w-screen-3xl mx-auto px-6 flex flex-col items-center justify-center space-y-6 text-white ">
        {/* Vector Image Positioned Half In and Half Out */}
        <Image
          src={vector}
          alt="Vector Image Left"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[40%] opacity-20"
          width={400}
          height={100}
        />
        <Image
          src={vector}
          alt="Vector Image Right"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[40%] opacity-20"
          width={400}
          height={100}
        />

        <div className="space-y-2 mb-2">
          <div className="text-[20px] text-center font-semibold max-w-xl">
            “We believe that everyone, regardless of their background, deserves
            the chance to thrive in the exciting world of technology.”
          </div>
        </div>

        <div className="space-y-1 flex justify-center items-center flex-col text-white">
          <Image
            src={imgu}
            alt="Background Logo Right"
            className="rounded-full"
          />
          <p className=" text-[13px] font-semibold">Esther Daniels</p>
          <p className=" text-[13px]">Founder, Techdive</p>
        </div>
      </section>
    </main>
  );
};

export const AboutFounderSection = () => {
  return (
    <section className="bg-white">
      {" "}
      <div className="relative h-96 3xl:max-w-screen-3xl mx-auto px-4 flex flex-col items-center justify-center ">
        <Image
          src={img}
          alt="Background Logo Left"
          className="absolute top-10 left-10 opacity-10 hidden xl:block"
          width={300}
          height={300}
        />
        <Image
          src={img}
          alt="Background Logo Right"
          className="absolute bottom-10 right-10 opacity-10 hidden xl:block"
          width={300}
          height={300}
        />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full xl:px-12 items-center">
          {/* Title */}
          <div className="space-y-4 text-start ">
            <h1 className="xl:text-[36px] text-2xl font-semibold">Join Us</h1>
            <p className="text-lg max-w-xl mx-auto md:mx-0 ">
              Whether you’re starting your first course, attending a webinar, or
              joining our community, Tech Dive is your partner in tech education
              and career growth.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col xl:flex-row gap-4 justify-center items-center xl:justify-end w-full">
            <Button className="bg-YellowBtnColor px-6 py-2 h-12 xl:w-48 w-full font-medium rounded-lg">
              Get Started
            </Button>
            {/* <Button className="bg-white text-black px-6 py-2 h-12 xl:w-56 xl:shadow w-full font-medium rounded-lg">
              Take the Career Quiz
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
