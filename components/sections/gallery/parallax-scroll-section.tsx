"use client";

import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
  useParallax,
} from "react-scroll-parallax";

interface ParallaxScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

const ParallaxScrollSection = ({
  children,
  speed,
  className,
}: ParallaxScrollSectionProps) => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          {
            speed: speed,
            children: children,
          },
        ]}
        className={clsx("h-full", className)}
      />
    </ParallaxProvider>
  );
};

export default ParallaxScrollSection;
