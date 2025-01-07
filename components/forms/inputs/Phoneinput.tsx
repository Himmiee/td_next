import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormContext } from "react-hook-form";
import { InputContainer } from "./InputContainer";
import logoSm from "@/public/images/icon-sm.svg";
import classnames from "classnames";
import Image from "next/image";

interface PhoneInputProps {
  name: string;
  label: string;
  required: boolean;
  placeholder?: string;
  country?: string;
}

const PhoneInputField: React.FC<PhoneInputProps> = ({
  name,
  label,
  required,
  placeholder,
  country = "us",
}) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const value = watch(name);

  return (
    <InputContainer
      label={label}
      required={required}
      error={errors[name]?.message}
    >
      <div className="relative">
        {/* Phone Input Component */}
        <PhoneInput
          country={country}
          value={value}
          inputClass="bg-transparent"
          onChange={(value) => {
            setValue(name, value);
          }}
          enableSearch
          containerClass={classnames("custom-phone-input h-11 rounded-lg", {
            "border-red-500 border": Boolean(errors[name]?.message),
          })}
          placeholder={placeholder}
          inputProps={{
            ...register(name, {
              required: required ? "Phone number is required" : false,
            }),
          }}
        />
        <Image
          src={logoSm} 
          alt="Custom Logo Small"
          className="absolute left-10 top-[51%] transform -translate-y-1/2 w-[10px] h-[10px] pointer-events-none"
        />
      </div>
    </InputContainer>
  );
};

export default PhoneInputField;
