import clsx from "clsx";

interface H3Props {
  children: React.ReactNode;
  className?: string;
}

const H3 = ({ children, className }: H3Props) => {
  return (
    <h3
      className={clsx(
        "text-normal text-33 leading-40 sm:text-35 md:text-45 md:leading-50",
        className
      )}
    >
      {children}
    </h3>
  );
};
export default H3;
