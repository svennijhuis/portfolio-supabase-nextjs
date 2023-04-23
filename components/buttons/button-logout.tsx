"use client";

// import supabase from "@/utils/supabase";
import { useSupabase } from "@/context/supabase-provider";

const ButtonLogout = () => {
  const { supabase } = useSupabase();
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  return (
    <button onClick={handleLogout} className="my-auto ml-auto text-14">
      Logout
    </button>
  );
};

export default ButtonLogout;
