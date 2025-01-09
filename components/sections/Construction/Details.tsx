import React from "react";
import { MethodStatementGrid, MethodStatementRightGrid } from "./SubGrid";

export const ConstructionDetailsComponent: React.FC = () => {
  return (
    <section className="space-y-12 p-6 px-4 md:px-20">
      <div className="text-[48px] text-[#4D5886] pt-8">METHOD STATEMENT</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {/* Left Column */}
        <MethodStatementGrid />
        {/* Right Column */}
        <MethodStatementRightGrid />
      </div>
    </section>
  );
};
