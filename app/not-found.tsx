import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import notFoundImage from "./assets/png/error-rafiki.png";
import { HeaderComponent } from "@/components/layouts/HeaderComponent";

export default function NotFound() {
  return (
    <>
      <HeaderComponent showBtn={false} />
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-16 xl:pt-[96px]">
        <div className="">
          <h1 className="text-3xl xl:text-[48px] font-bold">
            Page Not Found
          </h1>
          <p className="mt-4 text-xl text-[#667A81]">
            Oopps. Seems like the page you&apos;re looking{" "}
            <br className="hidden xl:block" /> No longer exists.
          </p>

          {/* Display image for larger screens */}
          <div className="mb-8">
            <div className="">
              <Image
                src={notFoundImage}
                priority={true}
                alt="404 Error"
                width={500}
                height={500}
              />
            </div>
          </div>

          <Link href="/" scroll>
            <Button
              className="bg-YellowBtnColor w-[200px] xl:w-[250px] text-[18px] mt-8"
              size="lg"
            >
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
