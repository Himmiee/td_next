import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define the variant styles using cva
const inputVariants = cva(
  "flex h-11 w-full rounded-lg py-1 text-sm transition-colors shadow-none px-4 focus-visible:ring-0 bg-transparent",
  {
    variants: {
      variant: {
        default:
          "border-2 border-[#DFE6E8] bg-[#F9FEFF] file:text-sm file:font-medium placeholder:text-muted-foreground shadow-sm focus-visible:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015ecc]",
        secondary: "border-2 border-gray-500",
        ghost: "border-2 border-transparent",
        link: "border-2 underline text-blue-500",
        danger: "border-2 border-red-500 bg-red-100",
        outline:
          "border-none tablet:bg-transparent bg-black/10 tablet:rounded-none outline-none w-full text-[#000000] placeholder:text-black/50 placeholder:tablet:text-[16px] placeholder:font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant }), className)} // Apply variant styles
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
