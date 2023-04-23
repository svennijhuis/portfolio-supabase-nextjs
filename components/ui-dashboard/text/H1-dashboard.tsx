import clsx from "clsx";

interface H1DashboardProps {
  children: React.ReactNode;
  className?: string;
}

const H1Dashboard = ({ children, className }: H1DashboardProps) => {
  return (
    <h1 className={clsx("text-35 font-bold leading-45 text-black", className)}>
      {children}
    </h1>
  );
};

export default H1Dashboard;
