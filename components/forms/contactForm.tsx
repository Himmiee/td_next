"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { ContactUsSchema } from "@/lib/validationSchema";
import { CustomInput } from "./inputs/CustomInput";
import { Button } from "@/components/ui/button";
import { FormTextArea } from "./inputs/TextAreaContainer";
import PhoneInputField from "./inputs/Phoneinput";
import { formControls } from "@/lib/helpers/helperFuncs";
import { containerVariants } from "@/lib/helpers/helperFuncs";
import { socialIcons } from "@/lib/helpers/mockData";
import { useSubmitContactForm } from "@/lib/queries";
import toast from "react-hot-toast";
import { ContactFormData, ErrorResponse } from "@/lib/interface";
import { useEffect } from "react";
import { Loader } from "lucide-react";

interface ContactFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const ContactFormComponent = ({ setStep }: ContactFormProps) => {
  const methods = useForm({
    resolver: yupResolver(ContactUsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onChange",
    shouldFocusError: true,
  });
  const { mutate, isError, isSuccess, error, isPending, data } =
    useSubmitContactForm();
  const onSubmit = (values: ContactFormData) => {
    // console.log(values);
    mutate(values);
  };

  const { handleSubmit } = methods;

  useEffect(() => {
    if (isError) {
      const typedError = error as ErrorResponse;
      toast.error(`${typedError.response?.data.message || typedError.message}`);
    }

    if (isSuccess) {
      // toast.success(`${data?.message}`);
      window.scrollTo(0, 0);
      setStep(1);
      methods.reset();
    }
  }, [isError, isSuccess, error, methods, setStep]);
  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 360 },
    transition: { type: "spring", stiffness: 300 },
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="xl:bg-[#F4F7F8] xl:min-h-[600px] xl:p-12 xl:pb-6 flex flex-col rounded-lg"
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex-grow">
          <div className="w-full space-y-6">
            <motion.div
              className="grid grid-cols-1 space-y-6 xl:space-y-0 xl:grid-cols-2 gap-x-6"
              variants={formControls}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <CustomInput
                isFormInput={true}
                name="firstName"
                label="First name"
                required
                type="Firstname"
                placeholder="First name"
                variant="default"
              />
              <CustomInput
                isFormInput={true}
                name="lastName"
                label="Last name"
                required
                type="Lastname"
                placeholder="Last name"
                variant="default"
              />
            </motion.div>

            <motion.div
              variants={formControls}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <CustomInput
                isFormInput={true}
                name="email"
                label="Email"
                required
                type="Email"
                placeholder="i.e youremail@gmail.com"
                variant="default"
              />
            </motion.div>

            <motion.div variants={formControls} initial="visible" custom={2}>
              <PhoneInputField
                name="phone"
                label="Phone"
                required={true}
                placeholder="Enter your phone number"
              />
            </motion.div>

            <motion.div
              variants={formControls}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <FormTextArea
                name="message"
                label="Message"
                placeholder="Message"
                required
              />
            </motion.div>
          </div>
          <motion.div
            variants={formControls}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-col justify-center items-center space-y-3"
          >
            <Button
              size="lg"
              className="w-full mt-6 bg-YellowBtnColor text-white"
              type="submit"
            >
              {isPending ? (
                <Loader className="animate-spin w-full text-lg" />
              ) : (
                "Contact Us"
              )}
            </Button>
            <div className="space-y-3 xl:hidden">
              <p className="text-[12px] text-center font-medium">
                Follow us on Social Media
              </p>
              <motion.div
                className="flex space-x-3 pb-12 xl:pb-0"
                variants={containerVariants}
              >
                {socialIcons.map(({ icon: Icon, name, route }, idx) => (
                  <motion.div
                    key={idx}
                    className={`xl:p-1  p-[7px] rounded-full text-white hover:bg-gray-700 transition-colors duration-200 ${
                      name === "Facebook" ? "bg-blue-600" : "bg-[#1E293B]"
                    }`}
                    variants={socialIconVariants}
                    whileHover="hover"
                    animate="visible"
                  >
                    <a href={route} target="_blank" rel="noopener noreferrer">
                      <Icon className="text-lg" />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </form>
      </FormProvider>
    </motion.section>
  );
};
