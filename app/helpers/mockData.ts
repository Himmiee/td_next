// import { ImGithub } from "react-icons/im";
import { BiLogoFacebook } from "react-icons/bi";
import { RiInstagramLine, RiTwitterXFill } from "react-icons/ri";
import { ISocialIcons, IAboutus, FooterLinkProps } from "@/lib/interface";
import { FaLinkedinIn } from "react-icons/fa";


export const NavData: FooterLinkProps[] = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/About" },
  { name: "Contact", route: "/Contact" },
];

export const socialIcons: ISocialIcons[] = [
  {
    icon: RiTwitterXFill,
    name: "Twitter",
    route: "https://x.com/#",
  },
  {
    icon: BiLogoFacebook,
    name: "Facebook",
    route: "https://web.facebook.com/#",
  },
  {
    icon: RiInstagramLine,
    name: "Instagram",
    route:
      "https://www.instagram.com/#",
  },
  {
    icon: FaLinkedinIn,
    name: "LinkedIn",
    route:
      "https://www.linkedin.com/company/#",
  },
];


