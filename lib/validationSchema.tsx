import * as yup from "yup";
import { SingleSchemasObjectKey } from "./types";

export const emailSchema = yup.object({
  email: yup
    .string()
    .required("Email is required.")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid Email format"
    ),
});

const singleSchemasObject: SingleSchemasObjectKey = {
  email: emailSchema,
};

const combineMultipleSchemas = (
  mainSchema: yup.AnyObjectSchema,
  arrayOfSchemaNames: string[]
) => {
  try {
    let combinedSchema = mainSchema;

    for (let index = 0; index < arrayOfSchemaNames.length; index++) {
      const schemaNameIndex = arrayOfSchemaNames[
        index
      ] as keyof SingleSchemasObjectKey;
      const schema = singleSchemasObject[schemaNameIndex];
      combinedSchema = combinedSchema.concat(schema);
    }

    return combinedSchema;
  } catch (error) {
    console.error(error);
    return mainSchema;
  }
};
export const ContactUsSchema = combineMultipleSchemas(
  yup.object({
    first_name: yup.string().required("Firstname is required"),
    last_name: yup.string().required("Lastname is required"),
    message: yup.string().required("Message is required"),
    phone_number: yup
      .string()
      .required("Phone Number is required")
      .min(8, "Enter a valid phone number"),
  }),
  ["email"]
);
