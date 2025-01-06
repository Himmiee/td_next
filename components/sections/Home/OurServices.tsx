import { CustomInfoCard } from "@/components/forms/cards/formcard";
import { ourServicesData } from "@/app/helpers/mockData";

export const TechDiveServiceComponent = () => {
  return (
    <section className="3xl:max-w-screen-3xl bg-white mx-auto space-y-6 py-6">
      <div className="text-[36px] text-center font-semibold mt-4">
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
    </section>
  );
};
