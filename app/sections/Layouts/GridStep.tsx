import React from "react";

interface TimelineItemProps {
  children: React.ReactNode;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  isLast = false,
}) => {
  return (
    <div className="flex gap-6">
      {/* Timeline */}
      <div className=" flex-col items-center hidden lg:flex">
        {/* Square */}
        <div className="w-12 h-12 rounded bg-[#2B2F84] shrink-0"></div>
        {/* Line */}
        {!isLast && (
          <div className="w-2 border-t-0 border-b-0 h-[calc(100%-3rem)] border-[#2B2F84] bg-white border"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 lg:pb-20 lg:px-12">{children}</div>
    </div>
  );
};

interface TimelineProps {
  children: React.ReactNode;
}

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="w-full max-w-4xl mx-auto lg:pl-32 relative">{children}</div>
  );
};
