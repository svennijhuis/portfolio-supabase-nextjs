import clsx from "clsx";

interface CardOutlineDashboardProps {
  children: React.ReactNode;
  className?: string;
}

const CardOutlineDashboard = ({
  children,
  className,
}: CardOutlineDashboardProps) => {
  return (
    <article
      className={clsx(
        "rounded-md border-[1px] border-gray px-2 py-3",
        className
      )}
    >
      {children}
    </article>
  );
};

export default CardOutlineDashboard;
