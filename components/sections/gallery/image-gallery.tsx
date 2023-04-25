"use client";

import imagePhoto from "../../../public/images/work.png";
import ParallaxScrollSection from "./parallax-scroll-section";
import Image from "next/image";

const ImageGallery = () => {
  const data = [
    {
      src: imagePhoto,
      title: "test",
    },
    {
      src: imagePhoto,
      title: "test",
    },
    {
      src: imagePhoto,
      title: "test",
    },
    {
      src: imagePhoto,
      title: "test",
    },
    {
      src: imagePhoto,
      title: "test",
    },
    {
      src: imagePhoto,
      title: "test",
    },

    {
      src: imagePhoto,
      title: "test",
    },
    {
      src: imagePhoto,
      title: "test",
    },
    {
      src: imagePhoto,
      title: "test",
    },
  ];

  return (
    <div className="max-w-screen  relative h-[120vh] overflow-hidden">
      <section className=" absolute left-1/2 top-0 grid h-[120vh] w-[190vw] -translate-x-1/2 transform grid-cols-3 gap-[15px] overflow-hidden bg-softBlack sm:w-[160vw] md:w-[140vw] md:gap-3">
        <div className="relative col-span-1 h-full">
          <ParallaxScrollSection className="flex flex-col gap-3" speed={10}>
            {data.map((item: any, index: number) => (
              <Image
                className="mb-[15px] aspect-video  w-full rounded-md object-cover md:mb-3  md:rounded-xl"
                key={index}
                src={item.src}
                alt={item.title}
                width={500}
                height={500}
              />
            ))}
          </ParallaxScrollSection>
        </div>
        <div className="relative col-span-1 h-full">
          <ParallaxScrollSection speed={-10}>
            {data.map((item: any, index: number) => (
              <Image
                className="mb-[15px] aspect-video  w-full rounded-md object-cover md:mb-3  md:rounded-xl"
                key={index}
                src={item.src}
                alt={item.title}
                width={500}
                height={500}
              />
            ))}
          </ParallaxScrollSection>
        </div>
        <div className="relative col-span-1 h-full">
          <ParallaxScrollSection speed={10}>
            {data.map((item: any, index: number) => (
              <Image
                className="mb-[15px] aspect-video  w-full rounded-md object-cover md:mb-3  md:rounded-xl"
                key={index}
                src={item.src}
                alt={item.title}
                width={500}
                height={500}
              />
            ))}
          </ParallaxScrollSection>
        </div>
      </section>
    </div>
  );
};
export default ImageGallery;
