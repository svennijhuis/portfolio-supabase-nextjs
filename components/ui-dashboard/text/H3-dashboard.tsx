import clsx from "clsx";

interface H1DashboardProps {
  children: React.ReactNode;
  className?: string;
}

const H3Dashboard = ({ children, className }: H1DashboardProps) => {
  return (
    <h1
      className={clsx("text-16  font-medium leading-20 text-black", className)}
    >
      {children}
    </h1>
  );
};

export default H3Dashboard;
