// import { ImGithub } from "react-icons/im";
import { BiLogoFacebook } from "react-icons/bi";
import { RiInstagramLine, RiTwitterXFill } from "react-icons/ri";
import { ISocialIcons, FooterLinkProps } from "@/lib/interface";
import { FaLinkedinIn } from "react-icons/fa";
import { ReactNode } from "react";
import { BsLightningCharge } from "react-icons/bs";
import { PiMoneyWavyLight } from "react-icons/pi";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { FaConnectdevelop } from "react-icons/fa6";
import careerImg from "@/app/assets/png/icons/careersupport.png";
import mentorImg from "@/app/assets/png/icons/mentorship.png";
import techImg from "@/app/assets/png/icons/techtraining.png";
import companyImg from "@/app/assets/png/icons/companybuilding.png";
import researchImg from "@/app/assets/png/icons/Research.png";
import talentImg from "@/app/assets/png/icons/TalentAquisition.png";
import consultingImg from "@/app/assets/png/icons/consulting.png";
import communityImg from "@/app/assets/png/icons/communitysupport.png";
import productImg from "@/app/assets/png/productdesign.png";
import uiuxImg from "@/app/assets/png/uiux.png";
import analyticsIng from "@/app/assets/png/analyics.png";
import imgOne from "@/app/assets/png/img-one.png";
import imgTwo from "@/app/assets/png/imgg-two.png";
import imgThree from "@/app/assets/png/img-three.png";
import imgFour from "@/app/assets/png/img-four.png";

interface MockDataItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export const whyUsData: MockDataItem[] = [
  {
    icon: <BsLightningCharge />,
    title: "Learn In-Demand Skills",
    description:
      "Master Coding and non-coding tech skills designed for today's job market.",
  },
  {
    icon: <PiMoneyWavyLight />,
    title: "Affordable and Flexible Learning",
    description:
      "Access courses that fit your schedule and budget without compromising quality.",
  },
  {
    icon: <LuMessageCircleQuestion />,
    title: "Career Guidance & Support",
    description:
      "Get tailored career quizzes, mentorship, and resume-building to make your journey easier.",
  },
  {
    icon: <FaConnectdevelop />,
    title: "Tech-Focused Community",
    description:
      "Join a network of learners, professionals, and entrepreneurs passionate about tech and growth.",
  },
];

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
    route: "https://www.instagram.com/#",
  },
  {
    icon: FaLinkedinIn,
    name: "LinkedIn",
    route: "https://www.linkedin.com/company/#",
  },
];

export const ourServicesData = [
  {
    icon: techImg,
    title: "Tech Training",
    description:
      "Master in-demand skills like Product Management, UX/UI Design, and Data Analytics with expert-led courses tailored to accelerate your career.",
  },
  {
    icon: mentorImg,
    title: "Mentorship",
    description:
      "Receive personalized guidance from industry leaders to navigate your tech journey and achieve your goals.",
  },
  {
    icon: careerImg,
    title: "Career Support",
    description:
      "From resume building to interview prep and job placement, we’re with you every step of the way to land your dream role.",
  },
  {
    icon: communityImg,
    title: "Community Building",
    description:
      "Join our vibrant community through networking events, meetups, and interactive online forums designed to connect and inspire.",
  },
  {
    icon: companyImg,
    title: "Corporate Training",
    description:
      "Equip your team with tailored tech training solutions designed to meet your organization’s specific needs.",
  },
  {
    icon: consultingImg,
    title: "Consulting",
    description:
      "Leverage our expertise to adopt and implement cutting-edge technology effectively for your business.",
  },
  {
    icon: talentImg,
    title: "Talent Acquisition",
    description:
      "Find the right fit for your organization with access to skilled and job-ready tech professionals.",
  },
  {
    icon: researchImg,
    title: "Research & Development",
    description:
      "Partner with us to explore innovative solutions and stay ahead in the rapidly evolving tech landscape.",
  },
];

export const coursesData = [
  {
    icon: productImg,
    title: "Product Management",
    description:
      "Become a certified Product Manager and lead successful projects.",
  },
  {
    icon: uiuxImg,
    title: "UX/UI Design",
    description: "Learn to create user-friendly designs that stand out.",
  },
  {
    icon: analyticsIng,
    title: "Data Analytics",
    description: "Gain insights and make data-driven decisions.",
  },
];

export const bulletPoints = [
  "Product Management",
  "UX/UI Design",
  "Data Analytics",
];
export const accordionItems = [
  {
    title: "What kind of support can I expect from instructors?",
    content:
      "Synergyy is Africa’s Talent Cloud, connecting startups and businesses with elite African tech talent. We handle everything from talent acquisition and management to payroll, making it seamless for companies to hire top professionals across borders and focus on growth.",
  },
  {
    title: "How do I Enrol in a course?",
    content:
      "Synergyy provides access to a broad range of tech talent, including software developers, data scientists, product managers, UX/UI designers, cybersecurity experts, and more. Our network includes highly skilled professionals ready to help you achieve your growth and innovation goals.",
  },
  {
    title: "How long do the courses take?",
    content:
      "Every professional on Synergyy goes through a rigorous vetting process, including skill assessments, experience verification, and soft skills evaluation. We ensure that only the most qualified individuals make it onto our platform so that you get the best fit for your needs.",
  },
  {
    title: "Will I get a certificate after completing a course?",
    content:
      "Synergyy provides access to a broad range of tech talent, including software developers, data scientists, product managers, UX/UI designers, cybersecurity experts, and more. Our network includes highly skilled professionals ready to help you achieve your growth and innovation goals.",
  },
  {
    title: "Do you offer job placement assistance?",
    content:
      "Synergyy provides access to a broad range of tech talent, including software developers, data scientists, product managers, UX/UI designers, cybersecurity experts, and more. Our network includes highly skilled professionals ready to help you achieve your growth and innovation goals.",
  },
  {
    title: "How much do the courses cost?",
    content:
      "Every professional on Synergyy goes through a rigorous vetting process, including skill assessments, experience verification, and soft skills evaluation. We ensure that only the most qualified individuals make it onto our platform so that you get the best fit for your needs.",
  },
];

export const whyTdData = [
  {
    icon: imgOne,
    title: "Learn In-Demand Skills",
    description:
      "Master Coding and non-coding tech skills designed for today's job market.",
    btnText: "View Courses",
    color: "#FEF6D6",
  },
  {
    icon: imgTwo,
    title: "Affordable and Flexible Learning",
    description:
      "Access courses that fit your schedule and budget without compromising quality.",
    color: "#EFE6F2",
  },
  {
    icon: imgThree,
    title: "Career Guidance & Support",
    description:
      "Get tailored career quizzes, mentorship, and resume-building to make your journey easier.",
    color: "#FEF6D6",
  },
  {
    icon: imgFour,
    title: "Tech-Focused Community",
    description:
      "Join a network of learners, professionals, and entrepreneurs passionate about tech and growth.",
    btnText: "Join the community",
    color: "#EFE6F2",
  },
];
