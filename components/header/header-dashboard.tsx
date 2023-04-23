import ButtonLogout from "../buttons/button-logout";
import supabase from "@/utils/supabase";
import Link from "next/link";

type Link = {
  name: string;
  href: string;
};

const HeaderDashboard = () => {
  const Links = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Posts",
      href: "/dashboard/posts",
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
    },
  ];

  return (
    <header className="flex h-6 items-center border-b-[1px] border-black/20">
      <div className="container grid grid-cols-3 items-center">
        <div className="col-span-2">
          <nav className="flex gap-3">
            {Links.map((link: Link, index: number) => (
              <Link className="text-14" key={index} href={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="cols-span-1 flex">
          <ButtonLogout />
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
