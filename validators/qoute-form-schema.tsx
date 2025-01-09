import { z } from "zod";

export const qouteFormSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().min(10, {
    message: "Invalid phone number.",
  }),
  country: z.string().min(2, {
    message: "Invalid country.",
  }),
  project_type: z.string().min(2, {
    message: "Invalid project type.",
  }),
  estimated_budget: z
    .number({
      invalid_type_error: "Estimated budget must be a number.",
    })
    .positive("Estimated budget must be a positive number.")
    .min(0.01, "Estimated budget must be greater than 0."),
  desired_start_date: z.date({
    message: "Invalid date.",
  }),
  attachment: z
    .custom<File>((value) => value instanceof File, {
      message: "Please upload a valid file.",
    })
    .nullable(),
});
