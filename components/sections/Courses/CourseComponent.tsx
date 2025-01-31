import Image from "next/image";
import aboutImg from "@/app/assets/png/courses-img.png";

export const CourseSection = () => {
  return (
    <main className="h-[350px] relative xl:m-8 mt-[115px] xl:mt-[105px] bg-white">
      <section className="relative w-full h-full grid grid-cols-1 xl:grid-rows-[1fr_auto] ">
        {/* Hero Image with Gradient */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full xl:rounded-xl">
            <Image
              src={aboutImg}
              alt="About Hero Background"
              layout="fill"
              objectFit="cover"
              className="clip-hero xl:rounded-xl"
              priority
            />
            <div className="absolute inset-0 bg-hero-gradient xl:rounded-xl"></div>
          </div>
        </div>

        {/* Grid Content */}
        <div className="relative 3xl:max-w-screen-3xl mx-auto z-10 h-full  flex text-white justify-end xl:justify-start items-center gap-4 ">
          {/* Left Side Content */}
          <div className=" xl:text-left">
            <p className="text-3xl  text-center xl:text-[56px] font-medium">
              Product Management Program
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
