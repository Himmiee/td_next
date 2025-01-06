import { StaticImageData } from "next/image";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import * as Yup from "yup";

export type InputContainerProps = {
  label: string;
  info?: string;
  required: boolean;
  children: React.ReactNode;
  error:
    | string
    | FieldError
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};

export type InfoCardProps = {
  imageSrc: StaticImageData;
  imageSrcSm?: StaticImageData;
  altText: string;
  title: string;
  description: string;
  reverse?: boolean;
  iconSrc?: string;
  iconBgColor?: string;
  iconBorderColor?: string;
  titleFontClass?: string;
  descriptionFontClass?: string;
  isSolutionPage?: boolean;
};

export type SingleSchemasObjectKey = Record<"email", Yup.AnyObjectSchema>;
export type InputVariant =
  | "default"
  | "secondary"
  | "ghost"
  | "link"
  | "danger"
  | "outline";
  
export interface AccordionItem {
  title: string;
  content: string;
}
