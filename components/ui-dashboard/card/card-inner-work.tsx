"use client";

import { useSupabase } from "@/context/supabase-provider";
import Link from "next/link";
import { useEffect, useState } from "react";

const CardInnerWork = ({ data }: any) => {
  const { supabase } = useSupabase();
  const [work, setWork] = useState(data);
  useEffect(() => {
    const channel = supabase
      .channel("realtime posts")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "Work",
        },
        payload => {
          setWork([...work, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, work, setWork]);

  return (
    <>
      {work.map((item: any, index: number) => (
        <Link
          className="w-full rounded-xl border-[1px] border-gray py-1 pl-1 text-13 font-medium leading-20 text-black transition-all hover:bg-gray"
          key={index}
          href={`http://localhost:3000/dashboard/post/work/${item.id}`}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
};

export default CardInnerWork;
