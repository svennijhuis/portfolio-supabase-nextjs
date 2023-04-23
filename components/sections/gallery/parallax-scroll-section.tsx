import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

interface ParallaxScrollSectionProps {
  children: React.ReactNode;
  distance: number;
  reverse?: boolean;
}

const ParallaxScrollSection = ({
  children,
  distance,
  reverse,
}: ParallaxScrollSectionProps) => {
  const targetRefScroll = useRef(null);
  const { scrollY } = useScroll({
    target: targetRefScroll,
    offset: ["end end", "end start"],
  });
  const Y = useTransform(scrollY, [0, 1], [-distance, distance]);
  return (
    <div ref={targetRefScroll} style={{ Y }}>
      {children}
    </div>
  );
};

export default ParallaxScrollSection;
