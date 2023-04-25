"use client";

import { Input } from "./input-field";
import supabase from "@/utils/supabase";
import { useForm, useFieldArray, FieldError } from "react-hook-form";

type FormData = {
  title: string;
  file: FileList;
  clientName: string;
  clientUrl: string;
  technologies: { name: string }[];
};

const FormPostWork = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      technologies: [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "technologies",
  });

  const onSubmit = async (dataList: FormData) => {
    const file = dataList.file[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
      .from("portfolio")
      .upload(filePath, dataList.file[0], {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      throw error;
    }

    if (data) {
      const formData = {
        title: dataList.title,
        image: `https://uhqrvwowmzogpllvrmoa.supabase.co/storage/v1/object/public/portfolio/${data.path}`,
        client_name: dataList.clientName,
        client_url: dataList.clientUrl,
        technologies: dataList.technologies,
      };
      console.log(formData);
      await fetch("/api/post/work", {
        method: "POST",
        body: JSON.stringify(formData),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Title:</label>
        <Input
          type="text"
          id="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>Title is required</span>}
      </div>
      <div>
        <label htmlFor="file">File:</label>
        <Input
          type="file"
          id="file"
          {...register("file", { required: true })}
        />
        {errors.file && <span>File is required</span>}
      </div>
      <div>
        <label htmlFor="clientName">Client Name:</label>
        <Input
          type="text"
          id="clientName"
          {...register("clientName", { required: true })}
        />
        {errors.clientName && <span>Client name is required</span>}
      </div>
      <div>
        <label htmlFor="clientUrl">Client URL:</label>
        <Input
          type="text"
          id="clientUrl"
          {...register("clientUrl", { required: true })}
        />
        {errors.clientUrl && <span>Client URL is required</span>}
      </div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <Input
            type="text"
            {...register(`technologies.${index}.name`, { required: true })}
            defaultValue={field.name}
          />
          {errors.technologies &&
            (errors.technologies as FieldError[])[index] &&
            (errors.technologies as FieldError[])[index].message && (
              <span>
                {(errors.technologies as FieldError[])[index].message}
              </span>
            )}
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: "" })}>
        Add Technology
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPostWork;
