"use client";

import ButtonForm from "@/components/buttons/button-form";
import { Input } from "@/components/form/input-field";
import { useSupabase } from "@/context/supabase-provider";
// import supabase from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  Gebruikersnaam: string;
  Password: string;
};

const Page = () => {
  const { supabase } = useSupabase();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async dataForm => {
    console.log(dataForm);

    const { error, data } = await supabase.auth.signInWithPassword({
      email: dataForm.Gebruikersnaam,
      password: dataForm.Password,
    });

    if (error) {
      throw new Error(error.message);
    }

    if (data) {
      router.push("/dashboard");
    }
  };

  return (
    <>
      <section className="flex min-h-[100vh] bg-softBlack">
        <section className="mx-auto my-auto w-[400px] ">
          <h1 className=" mb-3 border-b-[0.5px] border-white/20 pb-2 text-center text-20 uppercase text-white">
            Sign in to your account
          </h1>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2 flex flex-col gap-[15px]">
              <Input
                type="text"
                placeholder="Gebruikersnaam"
                {...register("Gebruikersnaam", { required: true })}
              />
              {errors.Gebruikersnaam && (
                <span className="error-message">
                  Gebruikersnaam is verplicht
                </span>
              )}
              <Input
                type="password"
                placeholder="Password"
                {...register("Password", { required: true })}
              />
              {errors.Password && (
                <span className="error-message">Wachtwoord is verplicht</span>
              )}
            </div>
            <ButtonForm type="submit" icon="arrow" iconHover="eye" color="gray">
              Submit
            </ButtonForm>
          </form>
        </section>
      </section>
    </>
  );
};

export default Page;
