import React from "react";
import { Textarea } from "@/components/ui/textarea";

interface CustomTextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  value,
  onChange,
  placeholder = "Type here...",
  className = "",
  rows = 4,
}) => {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
      rows={rows}
    />
  );
};

export default CustomTextarea;
