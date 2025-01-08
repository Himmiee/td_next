"use client";

import { useState } from "react";
import CustomInput from "../Inputs/CustomInputs";
import CustomTextarea from "../Inputs/CustomTextarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export const GeneralContactForm: React.FC = () => {
  const [text, setText] = useState("");
  return (
    <section className="space-y-6">
      <div className="text-[#303030] font-semibold text-xl">
        Are you interested in a similar service? <br /> Contact us via this
        form.
      </div>
      <div className="space-y-4">
        {" "}
        <CustomInput
          value={text}
          onChange={setText}
          placeholder="Name"
          className="w-full rounded-none"
        />
        <CustomInput
          value={text}
          onChange={setText}
          placeholder="Email"
          className="w-full rounded-none"
        />
        <CustomInput
          value={text}
          onChange={setText}
          placeholder="Subject"
          className="w-full rounded-none"
        />
        <CustomTextarea
          value={text}
          onChange={setText}
          placeholder="Message"
          className="w-full rounded-none"
          rows={6}
        />
      </div>
      <div className="flex gap-3 items-center ">
        <Checkbox />
        By continuing you agree to our
        <span className="font-medium">
          Terms of Service and Privacy Policy.
        </span>
      </div>
      <Button className="w-full bg-[#2B2F84] text-white rounded-none">
        Submit
      </Button>
    </section>
  );
};
