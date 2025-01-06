import { InfoCard } from "@/components/forms/cards/formcard";
import { whyTdData, whyUsData } from "@/app/helpers/mockData";
import { TechDiveCard } from "@/components/forms/cards/techCard";

export const TechDiveComponentRight = () => {
  return (
    <section className="xl:h-[500px] 3xl:max-w-screen-3xl mx-auto bg-[#FFF4E5] p-8 px-5 space-y-[74px]">
      <div className="text-[36px] text-center font-semibold mt-4">
        Why Choose TechDive Africa?
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-8 gap-4 justify-items-center">
        {whyUsData.map((item, index) => (
          <InfoCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export const TechDiveComponent = () => {
  return (
    <section className="3xl:max-w-screen-3xl mx-auto space-y-[74px]">
      <div className="">
        {whyTdData.map((item, index) => (
          <TechDiveCard
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.icon}
            color={item.color}
            btnText={item.btnText}
            isReversed={index % 2 != 1}
          />
        ))}
      </div>
    </section>
  );
};
