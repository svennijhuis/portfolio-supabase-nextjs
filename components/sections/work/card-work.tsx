"use client";

import InViewFadeIn from "@/components/animation/inview-fade-in";
import LinkStyling from "@/components/buttons/link-styling";
import Paragraph from "@/components/text/paragraph";
import { Variants, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface CardWorkProps {
  children: React.ReactNode;
  title: string;
  imageSrc: any;
  viewUrl: string;
  nameUrl: string;
  text: string;
}

const CardWork = ({
  title,
  imageSrc,
  viewUrl,
  nameUrl,
  text,
  children,
}: CardWorkProps) => {
  const cardVariants: Variants = {
    offscreen: {
      width: 0,
    },
    onscreen: {
      width: "100%",
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50,
        delay: 0.5,
      },
    },
  };

  const linkVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        delay: 1,
      },
    },
  };

  return (
    <article className="col-span-1 flex flex-col">
      <div className="relative w-full">
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-15% 0% -15% 0%" }}
          className="relative h-[250px] overflow-hidden  md:h-[350px]"
        >
          <Image
            className="h-full w-full rounded-xl object-cover md:rounded-2xl"
            src={imageSrc}
            alt={title}
            width={400}
            height={400}
          />
        </motion.div>
        <motion.div
          variants={linkVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-15% 0% -15% 0%" }}
          className="absolute bottom-2 right-2 flex w-full"
        >
          <LinkStyling
            className="ml-auto"
            href={viewUrl}
            icon="arrow"
            iconHover="eye"
            color="gray"
          >
            View
          </LinkStyling>
        </motion.div>
      </div>
      <InViewFadeIn delay={0.5} time={0.5}>
        <div className="mt-2 grid grid-cols-3 gap-1">
          <h4 className="col-span-3 text-20 font-medium text-black md:col-span-1">
            {title}
          </h4>

          <div className="col-span-3 md:col-span-2 md:mr-2">
            <Paragraph
              className="mb-[15px]"
              size="sm"
              color="black"
              fontWeight="light"
            >
              {text}
              <a className="font-medium underline" href={viewUrl}>
                {nameUrl}
              </a>
            </Paragraph>

            <div className="flex flex-wrap gap-1">{children}</div>
          </div>
        </div>
      </InViewFadeIn>
    </article>
  );
};

export default CardWork;
