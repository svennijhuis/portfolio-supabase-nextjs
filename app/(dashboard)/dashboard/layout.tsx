import HeaderDashboard from "@/components/header/header-dashboard";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderDashboard />
      <main className="">{children}</main>
      <footer>Footer</footer>
    </>
  );
}
