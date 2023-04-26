"use client";

import ampere from "../../../public/images/ampere.png";
import AndCoWoman from "../../../public/images/andcowoman.png";
import dynamicCharting from "../../../public/images/dynamic-chart.png";
import gapstars from "../../../public/images/gapstars.png";
import Headload from "../../../public/images/headload.png";
import svenNijhuis from "../../../public/images/portfolio-sven.png";
import Scanner from "../../../public/images/scanner.png";
import ParallaxScrollSection from "./parallax-scroll-section";
import Image from "next/image";

interface MappingImageProps {
  children: React.ReactNode;
}

const MappingImage = ({ children }: MappingImageProps) => {
  return (
    <>
      {children} {children}
    </>
  );
};

const ImageGallery = () => {
  const data = [
    {
      src: ampere,
      title: "Ampère",
    },
    {
      src: gapstars,
      title: "Gapstars",
    },
    {
      src: svenNijhuis,
      title: "Sven Nijhuis Portfolio",
    },
    {
      src: dynamicCharting,
      title: "Dynamic Charting",
    },
    {
      src: Scanner,
      title: "Scanner",
    },
    {
      src: Headload,
      title: "Headload productions",
    },

    {
      src: AndCoWoman,
      title: "AndCoWoman",
    },
  ];

  return (
    <div className="max-w-screen relative h-[150vh] overflow-hidden">
      <section className=" absolute left-1/2 top-0 grid  h-[150vh] w-[190vw] -translate-x-1/2 transform grid-cols-3 gap-[15px] overflow-hidden bg-softBlack sm:w-[160vw] md:w-[140vw] md:gap-3">
        <div className="relative col-span-1 h-full">
          <ParallaxScrollSection className="flex flex-col gap-3" speed={15}>
            <MappingImage>
              {data
                .sort(() => Math.random() - 0.5)
                .map((item: any, index: number) => (
                  <Image
                    className="mb-[15px] aspect-video  w-full rounded-md object-cover md:mb-3  md:rounded-xl"
                    key={index}
                    src={item.src}
                    alt={item.title}
                    width={1000}
                    height={1000}
                  />
                ))}
            </MappingImage>
          </ParallaxScrollSection>
        </div>
        <div className="relative col-span-1 h-full">
          <ParallaxScrollSection speed={-10}>
            <MappingImage>
              {data
                .sort(() => Math.random() - 0.5)
                .map((item: any, index: number) => (
                  <Image
                    className="mb-[15px] aspect-video  w-full rounded-md object-cover md:mb-3  md:rounded-xl"
                    key={index}
                    src={item.src}
                    alt={item.title}
                    width={1000}
                    height={1000}
                  />
                ))}
            </MappingImage>
          </ParallaxScrollSection>
        </div>
        <div className="relative col-span-1 h-full">
          <ParallaxScrollSection speed={10}>
            <MappingImage>
              {data
                .sort(() => Math.random() - 0.5)
                .map((item: any, index: number) => (
                  <Image
                    className="mb-[15px] aspect-video  w-full rounded-md object-cover md:mb-3  md:rounded-xl"
                    key={index}
                    src={item.src}
                    alt={item.title}
                    width={1000}
                    height={1000}
                  />
                ))}
            </MappingImage>
          </ParallaxScrollSection>
        </div>
      </section>
    </div>
  );
};
export default ImageGallery;
