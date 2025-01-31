import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ContactFormData, ContactFormResponse } from "./interface";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// API function
const submitContactForm = async (
  data: ContactFormData
): Promise<ContactFormResponse> => {
  const response = await axios.post<ContactFormResponse>(
    `${apiUrl}/user/contact-form`,
    data
  );
  return response.data;
};

// Custom hook for mutation
export const useSubmitContactForm = () => {
  return useMutation<ContactFormResponse, Error, ContactFormData>({
    mutationFn: submitContactForm,
  });
};
