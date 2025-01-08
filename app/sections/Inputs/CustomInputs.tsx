import React from "react";
import { Input } from "@/components/ui/input";

interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder = "Type here...",
  className = "",
}) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default CustomInput;
