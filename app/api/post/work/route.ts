import supabase from "@/utils/supabase";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { data } = await supabase.from("Work").select();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const { title, client_name, technologies, client_url, image } =
    await request.json();

  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const { data: dataOutput, error: insertError } = await supabase
    .from("Work")
    .insert({ title, client_name, technologies, client_url, image });

  if (insertError) {
    throw insertError;
  }

  return NextResponse.json(dataOutput);
}
