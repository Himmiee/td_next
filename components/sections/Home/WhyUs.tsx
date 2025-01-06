import { InfoCard } from "@/components/forms/cards/formcard";
import { whyUsData } from "@/app/helpers/mockData";

export const TechDiveComponent = () => {
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
