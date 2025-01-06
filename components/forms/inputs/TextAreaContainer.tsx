import React from "react";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../../ui/textarea";
import { InputContainer } from "./InputContainer";
import classnames from "classnames";
import { Label } from "../../ui/label";
import { FormTextAreaProps } from "../../../lib/interface";

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  name,
  label,
  required = false,
  placeholder = "Type your message here.",
  // maxWords = 125,
}) => {
  const {
    register,
    // watch,
    formState: { errors },
  } = useFormContext();

  const textareaError = errors[name]?.message;
  // const textareaValue = watch(name) || "";
  // const wordCount = textareaValue.trim().split(/\s+/).filter(Boolean).length;

  // const isError = Boolean(textareaError) || wordCount > maxWords;

  return (
    <InputContainer label={""} required={false} error={textareaError}>
      <Label htmlFor={name} className="">
        {label}{" "}
        {required && (
          <span className="text-red-500 text-base relative -top-[2px]">
            *
          </span>
        )}
      </Label>
      <Textarea
        id={name}
        placeholder={placeholder}
        className={classnames("mt-3", {
          // "border-red-500": isError,
        })}
        {...register(name)}
      />
      {/* <p
        className={classnames("text-sm mt-1 flex justify-end", {
          "text-red-500": isError,
          "text-gray-500": !isError,
        })}
      >
        {wordCount}/{maxWords} words
      </p> */}
    </InputContainer>
  );
};
