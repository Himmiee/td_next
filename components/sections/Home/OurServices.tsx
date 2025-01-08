import { CustomInfoCard } from "@/components/forms/cards/formcard";
import { ourServicesData } from "@/app/helpers/mockData";

export const TechDiveServiceComponent = () => {
  return (
    <section className="bg-white ">
      <div className="3xl:max-w-screen-3xl mx-auto space-y-6 py-10">
        <div className="text-[36px] text-center font-semibold ">
          Our Services
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center ">
          {ourServicesData.map((item, index) => (
            <CustomInfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
