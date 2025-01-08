import Image from "next/image";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import img from "@/app/assets/png/logo-lg.png";
import { TechDiveCard } from "@/components/forms/cards/techCard";
import { ourMissionData, teamMembers } from "@/app/helpers/mockData";
import { TeamProfileCard } from "@/components/forms/cards/profilecard";

export const AboutTagComponent: React.FC = () => {
  const items = [
    { id: 1, description: "In-Demand Skills Training: " },
    { id: 2, description: "Expert Mentorship:" },
    { id: 3, description: "Career Support" },
    { id: 4, description: "Supportive Community" },
  ];

  return (
    <section className="h-[550px] px-4 xl:px-12 flex items-center bg-white justify-center">
      <div className="grid grid-cols-1 3xl:max-w-screen-3xl mx-auto md:grid-cols-2 gap-8 h-full w-full">
        <div className="flex flex-col justify-center space-y-5 h-full w-full">
          <p className="text-fontDark text-[32px] font-semibold">Our Vision</p>
          <p className="text-[#020100]">
            Our vision is to empower women with a digitally inclusive future
            across Africa, bridging the tech gap and connecting them with the
            skills and opportunities they need to succeed. We aim to become a
            leading tech education provider, not just in Nigeria, but across the
            continent, by fostering a community of 100,000+ female tech
            professionals. We hope to offer
          </p>
          <ul className="list-none space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex items-center space-x-3">
                {/* Custom Bullet */}
                <div className="flex items-center justify-center w-8 h-8 bg-[#F7F2F8] rounded-full">
                  <GiCheckMark className="text-[#803894] text-xs" />
                </div>
                <span className="text-lg">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex w-full justify-end items-center">
          <Image src={img} alt="techdive" />
        </div>
      </div>
    </section>
  );
};

export const MissionComponent = () => {
  return (
    <section className="space-y-[74px]">
      {" "}
      <div className="">
        {ourMissionData.map((item, index) => (
          <TechDiveCard
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.icon}
            color={item.color}
            isReversed={index % 2 == 1}
            heightClass="h-[450px]"
          />
        ))}
      </div>
    </section>
  );
};

export const ProfileCardComponent = () => {
  return (
    <div className="bg-white">
      {" "}
      <div className="p-4 px-4 xl:p-8  3xl:max-w-screen-3xl mx-auto  w-full xl:px-12 space-y-24">
        {" "}
        <p className="text-fontDark text-[32px] font-semibold text-center">
          Meet The Team
        </p>
        <div className="space-y-16 ">
          {teamMembers.map((member, idx) => (
            <TeamProfileCard
              key={idx}
              name={member.name}
              role={member.role}
              description={member.description}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
