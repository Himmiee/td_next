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
import productImgBg  from "@/app/assets/png/pm.png";
// import uiuxImg from "@/app/assets/png/uiux.png";
// import analyticsIng from "@/app/assets/png/analyics.png";
import imgOne from "@/app/assets/png/img-one.png";
import imgTwo from "@/app/assets/png/imgg-two.png";
import imgThree from "@/app/assets/png/img-three.png";
import imgFour from "@/app/assets/png/img-four.png";
import imageOne from "@/app/assets/png/about/image-1.png";
import imageTwo from "@/app/assets/png/about/image-2.png";
import imageThree from "@/app/assets/png/about/image-3.png";
import imageFour from "@/app/assets/png/about/image-4.png";
import { RiTiktokFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { StaticImageData } from "next/image";

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
  {
    icon: RiTiktokFill,
    name: "Tiktok",
    route: "https://www.tiktok.com/@techdive_?_t=ZM-8tRS7OyjFVl&_r=1",
  },
  {
    icon: BsWhatsapp,
    name: "LinkedIn",
    route: "https://wa.me/2347078358313",
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
    iconBg: productImgBg,
    title: "Product Management",
    description:
      "Become a certified Product Manager and lead successful projects.",
  },
  // {
  //   icon: uiuxImg,
  //   title: "UX/UI Design",
  //   description: "Learn to create user-friendly designs that stand out.",
  // },
  // {
  //   icon: analyticsIng,
  //   title: "Data Analytics",
  //   description: "Gain insights and make data-driven decisions.",
  // },
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
      "Our instructors provide personalized mentorship, resume reviews, job search strategies, and lifetime access to a supportive community. You’ll also benefit from customized learning plans, guest lectures, and exclusive workshops to guide your product management journey.",
  },
  {
    title: "How to Enroll in a Course",
    content:
      "Select your course, enroll online, and join our active WhatsApp learning community. All courses are 100% online, allowing you to learn at your own pace. Contact us for more details and personalized guidance from a representative.",
  },
  {
    title: "What is the duration of the courses?",
    content:
      "Each course runs for six weeks. Complex concepts are simplified into digestible modules, making learning accessible for all backgrounds. By the end, you’ll be ready to step confidently into your new tech career.",
  },
  {
    title: "Will I Get a Certificate After Completing a Course?",
    content:
      "Yes! You’ll earn a Certificate of Completion to showcase your skills and achievements. Use it to enhance your professional profile and demonstrate your expertise to potential employers.",
  },
  {
    title: "Job Placement Assistance",
    content:
      "While we don’t offer direct placements, we empower you with skills to land your dream role. Learn CV writing, job search strategies, and interview techniques to confidently secure your next opportunity.",
  },
  {
    title: "How Much Do the Courses Cost?",
    content:
      "Each course costs ₦50,000 ($30). It’s an affordable investment in your tech career with practical skills to set you up for success.",
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

export const ourMissionData = [
  {
    icon: imgFour,
    title: "Our Mission",
    description:
      "We aim to equip women with practical skills, connect them with industry experts, and foster a thriving community that supports career growth and innovation.",
    color: "#EFE6F2",
  },
];
interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: StaticImageData;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Esther Daniels",
    role: "Founder",
    description: `Esther Daniels is an accomplished Product Manager with over five years of experience across diverse industries, including education, healthcare, dating apps, and travel. As an advocate for users, she excels at iterative problem-solving, brainstorming and driving continuous value creation in every product she manages.

      Esther has collaborated with renowned organizations such as Meta, GIZ, and Project1, showcasing her ability to deliver impactful solutions on a global scale. She holds certifications as a Scrum Master (Scrum.org) and Scrum Product Owner, equipping her with the skills to lead agile teams effectively.

      As the founder of Tech Dive and its Lead Product Manager, Esther combines her expertise with a passion for empowering others. She is dedicated to helping aspiring professionals transition into tech and achieve success in their careers.`,
    imageUrl: imageOne,
  },
  {
    name: "Naomi Destiny",
    role: "Director of Operations",
    description: `Naomi Destiny is a seasoned Management Professional and Marketing & Communications Specialist with a passion for driving innovation and digital transformation. With her expertise in crafting impactful strategies and managing organizational growth, Naomi oversees the seamless execution of operations at Tech Dive.

      As the Director of Operations, Naomi leads the charge in optimizing processes, building the school’s brand, and expanding its reach. Her strategic insight ensures that Tech Dive's offerings align with the latest trends in education and technology, creating a dynamic and transformative experience for students worldwide.
`,
    imageUrl: imageTwo,
  },
  {
    name: "Fii (Michael) Stephen",
    role: "Director of Academy",
    description: `Fii (Michael) Stephen is a Senior Growth & Product Marketing Manager with extensive expertise in performance marketing, data science, and AI-driven solutions. As an AI Consultant and Prompt Engineer, Fii combines cutting-edge technology with innovative strategies to drive growth and optimize outcomes.

      At Tech Dive, Fii leads as the Director of Academy, leveraging data-driven insights to enhance student learning experiences, design scalable education solutions, and position Tech Dive as a leader in tech education. His forward-thinking approach ensures that Tech Dive's programs remain innovative, impactful, and aligned with the latest industry trends.`,
    imageUrl: imageThree,
  },
  {
    name: "Precious Amadi",
    role: "Creative Course Director",
    description: `Precious Chika Amadi is a seasoned social media strategist and entrepreneur. As Founder/CEO of Social Media Guru, she leads a strong team to empower businesses with data-driven strategies and expert training for individual looking to start a career in social media management.

      As the Creative Course Director at Tech Dive, Precious brings her creativity and experience to designing engaging and practical course content. She ensures that every course not only equips students with the skills to succeed but also inspires them to embrace the endless possibilities of tech.`,
    imageUrl: imageFour,
  },
];

export const description = `Right after college, I felt totally lost. I was sending out job applications left and right – banking, admin, you name it – but nothing clicked. I felt stuck, like I was missing something big.
Then, this crazy thing happened. I got a pair of earrings for my birthday, and on a whim, I decided to try selling them on WhatsApp. I was just using my phone and honestly, I was pretty desperate. To my surprise, someone actually wanted them!

That little sale was a complete game-changer. It sparked this huge interest in digital marketing. I became obsessed, learning everything I could, getting certified, and even working with some amazing organizations like Meta and Fate Foundation. We helped over 5,000 businesses learn how to use social media effectively.
From there, my interest in tech just kept growing, which led me to product management. I wanted to understand why people use certain products and how to build things that last. This opened up opportunities to work with some really cool brands like Highttable Africa and Chatter Cities Institute.

Now, I'm passionate about helping other people break into tech, just like I did. That's why I started Tech Dive – to guide people who are looking for a rewarding career in this field. `;

export const coursesFaqs = [
  {
    title: "SECTION 1: Introduction to Product Management",
    info: "In this section, you will learn the fundamentals of product management, including what product management entails, the role of a product manager, and the skills required to succeed in this field. By the end of this section, you will have a solid understanding of the product management landscape. You will also be assigned a task that will help you apply your knowledge and build a portfolio that you can showcase by the end of the course.",
    content: `What is Product Management?
      Who is a Product Manager?
      Understanding "What is a Product?"
      Identifying Problems as a Product Manager
      The Role of a Product Manager
      Defining the Product Vision
      Differences Between Product Manager, Project Manager, and Program Manager
      Why Companies Need a Product Manager
      Collaboration: Who Will You Work With?
      Hard & Soft Skills of a PM
      Types of Companies and PM Roles
      How to Envision Your Role as a PM
      A Day in the Life of a PM
      Quiz
      Task`,
  },
  {
    title: "SECTION 2: Understanding the Product Development Lifecycle",
    info: "This section dives into the Product Development Lifecycle, from writing a Product Requirement Document (PRD) to understanding product-market fit. You’ll explore each stage of the product lifecycle, gain insights into key product development processes (ideation, delivery, market adoption), and understand how to prioritize using frameworks like MoSCoW, Agile, and Scrum. Real-world examples will be provided to help you grasp each concept. By completing the assigned tasks, you’ll further solidify your understanding and contribute to your portfolio.",
    content: `Writing a PRD
      Steps to Creating a PRD
      What is a Product Life Cycle
      Stages of Product Life Cycle
      Real-World Product Lifecycle Examples
      Task
      What is a Product Market Fit
      Scenario Where a Product Achieves Product-Market Fit (PMF)
      Strategies to Achieve Product Market Fit
      Key Criteria of Product-Market Fit
      How to Identify Lack of Product-Market Fit
      Product Management Processes:
        1. Ideation (IDEA, VALIDATE, PLAN)
        2. Delivery (DESIGN, DEVELOP, TEST)
        3. Market Adoption (FIND MARKET, SUSTAIN SATURATION, STAY, REWORK, DECLINE)
      Prioritization Frameworks: 
        - MoSCoW, Agile, Scrum, and Kanban
        - Kano Model, RICE (Explained with Real-Life Examples)
      Quiz
      Task`,
  },
  {
    title: "SECTION 3: User Research and User Needs",
    info: "This section focuses on user research and understanding user needs. You will learn how to conduct interviews, create survey forms, and analyze results to inform your product decisions. You will also explore market validation, assumption mapping, and usability testing. A task will be assigned to help you put these skills into practice.",
    content: `Introduction to Users and Needs
      Generating Ideas as a PM
      Understanding Customers vs. Users
      Interviews: Types of Interviews
      How to Find Interviewers
      How to Get Them to Respond
      How to Write the Right Email
      How to Interpret Feedback
      Other Ways of Conducting Interviews
      Good/Bad Questions
      Using Survey Forms
      Tools to Create Survey Forms
      Analyzing Results
      Market Validation
      Assumption Mapping
      Steps to Assumption Mapping
      Market Validation and Market Research
      Validating Market Demand
      Market Research Breakdown
      Usability Testing and A/B Testing
      Who is a User?
      Steps to Conduct Usability Testing
      A/B Testing
      Using Data Analytics to Observe and Interpret User Behavior
      Quiz
      Task`,
  },
  {
    title: "SECTION 4: User-Centric Product Development",
    info: "In this section, you will learn about Your Customers, product development, including user segmentation, user personas, and market research. You will understand how to identify your target audience, create user personas, and conduct market research to inform your product decisions. A task will be assigned to help you apply these concepts.",
    content: `What is User Segmentation?
      Types of User Segmentation
      Identifying Casual, Core, and Power Users
      User Persona
      Steps to Creating User Personas
      Conducting Market Research and Sizing the Market
      Understanding Competitors and Market Analysis
      Finding Competitors as a Product Manager
      Feature Table`,
  },
  {
    title: "SECTION 5: Designing and Running Experiments",
    info: "This section covers designing and running experiments, including building a Minimum Viable Product (MVP), identifying and validating assumptions, and evaluating results. You will learn how to use MVP techniques to test your product ideas and iterate on your design. A task will be assigned to help you practice these skills.",
    content: `MVP (Minimum Viable Product): What is an MVP?
      Real-Life Example
      Seven Steps to Building an MVP
      Identifying and Validating Assumptions
      Identifying Assumptions for MoniePoint
      Hypothesis
      How to Set Up a Hypothesis
      MVP Techniques: Emails, Shadow Buttons, 404 Pages, and "Coming Soon" Pages
      Evaluating the Results of MVP Experiments`,
  },
  {
    title: "SECTION 6: Design and Wireframing",
    info: "In this section, you will learn about product design principles, including what makes a good design, sketching, and creating wireframes. You will discover tools for wireframing and prototyping and understand how to apply design principles to your product. A task will be assigned to help you practice your design skills.",
    content: `What is Product Design?
      What Makes a Good Design
      Sketching and Creating Wireframes
      Tools for Wireframes and Prototypes
      Quiz
      Task`,
  },
  {
    title: "SECTION 7: Metrics for Product Managers",
    info: "This section focuses on metrics for product managers, including defining and measuring success, choosing the right metrics, and understanding AARRR metrics (Pirate Metrics). You will learn how to use metrics to inform your product decisions and drive growth.",
    content: `Introduction to Metrics for Product Managers
      Exploring Feedback Loops
      How to Define and Measure Success
      Choosing the Right Metrics for Your Product Goals
      What Makes a Good Metric?
      Understanding AARRR Metrics (Pirate Metrics)`,
  },
  {
    title: "SECTION 8: Building Products",
    info: "In this section, you will learn about building products, including epics, user stories, sprints, and product roadmaps. You will understand how to write acceptance criteria, prioritize backlogs, and create product roadmaps. A task will be assigned to help you practice these skills.",
    content: `Introduction to Epics, User Stories, and Sprints
      Writing Acceptance Criteria and Prioritizing Backlogs
      Creating Product Roadmaps and Using the Right Tools
      Quiz
      Task`,
  },
  {
    title: "SECTION 9: Collaboration and Stakeholder Management",
    info: "This section covers collaboration and stakeholder management, including communication skills, working with engineers and executives, and managing stakeholders. You will learn how to effectively collaborate with your team and stakeholders to drive product success.",
    content: `Communication Skills for PMs
      Working with Engineers/Developers/Programmers
      Working Effectively with Executives and Other Stakeholders`,
  },
  {
    title: "SECTION 10: Your Guide to Landing a PM Role",
    info: "In this final section, you will learn how to land a product management role, including how to look for the perfect role, interview tips and strategies, resume and cover letter templates, and LinkedIn optimization. You will also receive resources to help you nail every interview and stay organized during your job search. You'll also get access to a Job Application Tracker to stay organized during your job search. By the end of this section, you'll be equipped with the tools and strategies to secure your next PM role.",
    content: `How to Look for the Perfect Role
      Interview Tips and Strategies
      Resume and Cover Letter Templates
      LinkedIn Optimization Checklist
      100+ Interview Power Phrases: Nail Every Interview!
      Recruiter Outreach Messages: Templates for LinkedIn and Email
      Job Application Tracker: Stay Organized During Your Search`,
  },
];
