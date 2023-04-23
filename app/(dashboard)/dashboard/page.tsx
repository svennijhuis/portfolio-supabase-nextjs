import CardInnerAccount from "@/components/ui-dashboard/card/card-inner-account";
import CardInnerContactForm from "@/components/ui-dashboard/card/card-inner-contact-form";
import CardInnerWork from "@/components/ui-dashboard/card/card-inner-work";
import CardOutlineDashboard from "@/components/ui-dashboard/card/card-outline";
import H1Dashboard from "@/components/ui-dashboard/text/H1-dashboard";
import H3Dashboard from "@/components/ui-dashboard/text/H3-dashboard";
import supabase from "@/utils/supabase";
import Link from "next/link";

type Link = {
  name: string;
  href: string;
};

const page = async () => {
  const PagesLink = [
    {
      name: "Home",
      href: "/dashboard/pages/home",
    },
  ];

  const { data } = await supabase.from("Work").select();

  return (
    <section className="my-6">
      <div className="container my-3">
        <H1Dashboard>Dashboard</H1Dashboard>
      </div>
      <div className="container grid grid-cols-3 gap-3">
        <div className="col-span-1">
          <CardOutlineDashboard>
            <H3Dashboard className="mb-2">Pages</H3Dashboard>
            <div className="flex flex-col gap-1">
              {PagesLink.map((link: Link, index: number) => (
                <Link
                  className="w-full rounded-xl border-[1px] border-gray py-1 pl-1 text-13 font-medium leading-20 text-black transition-all hover:bg-gray"
                  key={index}
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </CardOutlineDashboard>
        </div>
        <div className="col-span-1">
          <CardOutlineDashboard>
            <H3Dashboard>Post - Work</H3Dashboard>
            <div className="flex flex-col gap-1">
              <CardInnerWork data={data ?? []} />
            </div>
          </CardOutlineDashboard>
        </div>
        <div className="col-span-1">
          <CardOutlineDashboard>
            <H3Dashboard>Contact form</H3Dashboard>
            <div>
              {/* @ts-expect-error */}
              <CardInnerContactForm />
            </div>
          </CardOutlineDashboard>
        </div>
        <div className="col-span-1">
          <CardOutlineDashboard>
            <H3Dashboard>Account</H3Dashboard>
            <div>
              {/* @ts-expect-error */}
              <CardInnerAccount />
            </div>
          </CardOutlineDashboard>
        </div>
      </div>
    </section>
  );
};
export default page;
