"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import smallImg from "../../app/assets/png/L.png";
import { Button } from "../ui/button";
import { NavData } from "@/app/helpers/mockData";
import Link from "next/link";
import { useEffect } from "react";

interface SidebarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isDark?: boolean;
}

const SidebarComponent = ({ isMenuOpen, toggleMenu }: SidebarProps) => {
  const router = useRouter();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    isMenuOpen && (
      <div className="fixed inset-0 h-screen xl:hidden bg-white z-50 shadow-lg text-black">
        <div className="flex justify-between items-center py-6 p-6">
          <div
            className="cursor-pointer xl:hidden"
            onClick={() => router.push("/")}
          >
            <Image src={smallImg} alt="techdive logo" />
          </div>
          <div className="cursor-pointer" onClick={toggleMenu}>
            <AiOutlineClose size={30} />
          </div>
        </div>

        <nav className="flex flex-col text-[17px] px-6 font-semibold py-6 space-y-6 bg-white">
          {NavData.map((item, idx) => (
            <div key={idx} className="hover:translate-x-2 transition-transform">
              <Link href={item.route} onClick={toggleMenu}>
                {item.name}
              </Link>
            </div>
          ))}
          <div className="flex flex-col py-3 gap-y-2">
            <Button
              variant={"default"}
              size="lg"
              className="text-base bg-YellowBtnColor border border-YellowBtnColor"
              onClick={() => {
                toggleMenu();
                router.push("/Contact");
              }}
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    )
  );
};

export default SidebarComponent;
