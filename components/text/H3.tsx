import { cn } from "@/utils/class-merge";
import React from "react";

interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H3 = React.forwardRef<HTMLHeadingElement, H3Props>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        className={cn(
     "text-normal text-33 leading-40 sm:text-35 md:text-45 md:leading-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

H3.displayName = "H3";

export default H3;