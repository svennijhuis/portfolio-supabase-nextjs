"use client";

import ParallaxScrollSection from "./parallax-scroll-section";
// import SingleImage from "@/components/sections/gallery/single-image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const ImageGallery = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section
      ref={ref}
      className="grid h-[150vh] grid-cols-5 gap-3 overflow-hidden bg-softBlack"
    >
      {/* <div className="col-span-1 flex flex-col gap-5">
        {DataImageGallery.map((image, index) => (
          <SingleImage key={index} src={image.src} alt={image.title} />
        ))}
      </div>
      <div className="col-span-1 flex flex-col gap-5">
        {DataImageGallery.map((image, index) => (
          <SingleImage key={index} src={image.src} alt={image.title} />
        ))}
      </div>
      <div className="col-span-1 flex flex-col gap-5">
        {DataImageGallery.map((image, index) => (
          <SingleImage key={index} src={image.src} alt={image.title} />
        ))}
      </div> */}
      <div className="col-span-1">
        <ParallaxScrollSection distance={300} reverse={true}>
          test
        </ParallaxScrollSection>
      </div>
      <div className="col-span-2 h-full">
        <ParallaxScrollSection distance={300} reverse={true}>
          test
        </ParallaxScrollSection>
      </div>
      <div className="col-span-1 h-full">
        <ParallaxScrollSection distance={300} reverse={false}>
          test
        </ParallaxScrollSection>
      </div>
    </section>
  );
};
export default ImageGallery;
