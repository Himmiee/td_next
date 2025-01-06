import * as React from "react";

import { cn } from "@/lib/utils";

// export interface TextareaProps
//   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-md border-2   border-input border-[#DFE6E8] bg-[#F9FEFF] px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground shadow-sm focus-visible:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015ecc] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
