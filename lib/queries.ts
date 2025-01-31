import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ContactFormData, ContactFormResponse } from "./interface";


// API function
const submitContactForm = async (
  data: ContactFormData
): Promise<ContactFormResponse> => {
  const response = await axios.post<ContactFormResponse>(
    "https://tech-dive-api.onrender.com/api/v1/user/contact-form",
    data
  );
  return response.data;
};

// Custom hook for mutation
export const useSubmitContactForm = () => {
  return useMutation<ContactFormResponse, Error, ContactFormData>({
    mutationFn: submitContactForm,
    onSuccess: (data) => {
      // console.log("Form submitted successfully", data);
    },
    onError: (error) => {
      // console.error("Error:", error);
    },
  });
};
