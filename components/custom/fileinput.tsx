import React from "react";
import { Input } from "@/components/ui/input";

interface InputFileProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Value?: File | null; // File can be null or undefined initially
}

export function InputFile({ onChange }: InputFileProps) {
  return (
    <div className="grid w-full items-center gap-1.5 ">
      <Input
        id="picture"
        type="file"
        onChange={onChange} // Handles file selection
        className="w-full h-[48px] pt-3"
      />
    </div>
  );
}
