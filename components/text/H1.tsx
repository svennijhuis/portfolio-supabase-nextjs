// import clsx from "clsx";

// interface H1Props {
//   children: React.ReactNode;
//   className?: string;
// }

// const H1 = ({ children, className }: H1Props) => {
//   return (
//     <h1
//       className={clsx(
//         "text-normal text-38 uppercase leading-40 text-black sm:text-55 sm:leading-55 md:text-[100px] md:leading-110",
//         className
//       )}
//     >
//       {children}
//     </h1>
//   );
// };
// export default H1;

import { cn } from "@/utils/class-merge";
import React from "react";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "text-normal text-38 uppercase leading-40 text-black sm:text-55 sm:leading-55 md:text-[100px] md:leading-110",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

H1.displayName = "H1";

export default H1;
