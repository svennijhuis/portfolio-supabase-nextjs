import ImageProfile from "../../../public/images/work.png";
import InViewFadeIn from "@/components/animation/inview-fade-in";
import RotateOnScroll from "@/components/animation/rotate-onscroll";
import LinkStyling from "@/components/buttons/link-styling";
import Paragraph from "@/components/text/paragraph";
import TitleSmall from "@/components/text/title-small";
import CloudIcon from "@/public/icons/background/cloud";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="container relative grid grid-cols-1 gap-2 overflow-hidden md:grid-cols-2 md:gap-5">
      <article className=" col-span-1 mt-8 flex justify-between md:mt-12">
        <TitleSmall>About me</TitleSmall>
        <InViewFadeIn delay={0.8} time={0.8}>
          <Image
            className=" mr-3 aspect-square h-[125px] w-[125px] rounded-full object-cover md:h-[150px] md:w-[150px]"
            src={ImageProfile}
            width={150}
            height={150}
            alt=""
          />
        </InViewFadeIn>
        <RotateOnScroll className="absolute bottom-[-100px] left-[-100px] -z-[2] h-[250px] w-[250px] opacity-20 md:h-[375px] md:w-[375px]">
          <CloudIcon />
        </RotateOnScroll>
      </article>
      <article className="col-span-1 mb-8 max-w-[520px] md:my-12">
        <InViewFadeIn delay={0.8} time={0.8}>
          <Paragraph
            className="mb-2 md:mb-3"
            size="md"
            color="black"
            fontWeight="normal"
          >
            Welcome my world! I am Daniel, a dedicated and creative freelance
            digital designer striving to create projects that I can be proud of.
            I am a member of the Awwwards young.
          </Paragraph>
          <Paragraph
            className="mb-2 md:mb-3"
            size="md"
            color="black"
            fontWeight="light"
          >
            Welcome my world! I am Daniel, a dedicated and creative freelance
            digital designer striving to create projects that I can be proud of.
            I am a member of the Awwwards young jury 2023 and I specialise in
            delivering digital services including bespoke web design and Webflow
            development.
          </Paragraph>
          <LinkStyling href="/" icon="arrow" iconHover="eye" color="gray">
            More information
          </LinkStyling>
        </InViewFadeIn>
      </article>
    </section>
  );
};
export default AboutMe;
