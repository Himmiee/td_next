import { Button } from "@/components/ui/button";
import heroImg from "@/app/assets/webp/Hero Image.webp";
import heroRightImg from "@/app/assets/webp/hero.webp";
import Image from "next/image";

export const HomeHeroSectionRight = () => {
  return (
    <main className="xl:h-[680px] 3xl:max-w-screen-3xl mx-auto px-8">
      {" "}
      <section className="relative py-10 pb-24 xl:pb-[80px] xl:py-[80px] grid grid-cols-1 xl:grid-cols-2  justify-items-center space-y-6 xl:space-y-0">
        {/* Left Side */}
        <section className="space-y-5">
          <div className=" font-semibold text-center xl:text-start text-[44px] xl:text-[65px]">
            Your Tech Career, <br />{" "}
            <span className="bg-YellowBtnColor/25 border-b-8 border-b-YellowBtnColor">
              Levelled Up!
            </span>
          </div>
          <p className="max-w-xl text-lg text-center xl:text-start">
            Our supportive community and expert-led courses are designed to
            empower women at every stage of their tech journey, providing
            practical resources and personalized guidance to help you achieve
            your career goals.
          </p>
          <div className="flex flex-col xl:flex-row gap-4 ">
            <Button className="bg-YellowBtnColor px-8 py-6 font-medium">
              Explore Courses
            </Button>
            <Button className="px-8 py-6 shadow-none font-medium">
              Take the Career Quiz
            </Button>
          </div>
        </section>

        {/* Right Side */}
        <section className="relative md:w-[70%] xl:w-2/3 h-full overflow-hidden ">
          <Image
            src={heroImg}
            alt="Hero Image"
            className="w-full h-full object-contain"
            priority
          />
        </section>
      </section>
    </main>
  );
};

export const HomeHeroSection = () => {
  return (
    <main className="xl:h-[800px] 3xl:max-w-screen-3xl mx-auto pb-9 xl:pb-0 pt-28">
      <section className="grid grid-cols-1 xl:grid-cols-2 h-full xl:px-12">
        {/* Left Side */}
        <section className="space-y-5 px-4 py-10 xl:py-[80px]">
          <div className="font-semibold text-center xl:text-start text-[40px] xl:text-[65px]">
            Your Tech Career, <br />{" "}
            <span className="bg-YellowBtnColor/25 border-b-8 border-b-YellowBtnColor">
              Levelled Up!
            </span>
          </div>
          <p className="max-w-xl text-lg text-center xl:text-start w-full flex justify-center items-center mx-auto xl:justify-start xl:items-start xl:mx-0">
            Our supportive community and expert-led courses are designed to
            empower women at every stage of their tech journey, providing
            practical resources and personalized guidance to help you achieve
            your career goals.
          </p>
          <div className="flex flex-col xl:flex-row gap-4 max-w-3xl mx-auto">
            <Button className="bg-YellowBtnColor px-8 py-6 font-medium">
              Explore Courses
            </Button>
            <Button className="px-8 py-6 shadow-none font-medium">
              Take the Career Quiz
            </Button>
          </div>
        </section>

        {/* Right Side */}
        <div className="relative min-h-[380px] xl:min-h-full w-full">
          <Image
            src={heroRightImg}
            alt="Hero Image"
            className="object-contain xl:object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw"
          />
        </div>
      </section>
    </main>
  );
};