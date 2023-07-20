import ImageProfile from "../../../public/images/sven.webp";
import InViewFadeIn from "@/components/animation/inview-fade-in";
import RotateOnScroll from "@/components/animation/rotate-onscroll";
import LinkStyling from "@/components/buttons/link-styling";
import Paragraph from "@/components/text/paragraph";
import TitleSmall from "@/components/text/title-small";
import CloudIcon from "@/public/icons/background/cloud";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="container relative grid grid-cols-1 gap-2 overflow-hidden md:grid-cols-2 md:gap-5"
    >
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
            Hey there! I'm Sven Nijhuis, a 24-year-old web developer based in
            Amsterdam. I have experience working with front-end and backend web
            technologies, and I am familiar with Solidity and Web3.
          </Paragraph>
          <Paragraph
            className="mb-2 md:mb-3"
            size="md"
            color="black"
            fontWeight="light"
          >
            I'm dedicated to continuously expanding my skills and expertise in
            web development. I currently work at Day-Six, a web development
            agency based in Mijdrecht, where I specialize in front-end
            development. Although my primary focus is front-end development, I'm
            also keep on learning more about backend development. To achieve
            this, I work on personal projects, and I attend courses at the
            Hogeschool van Amsterdam (HvA) to expand my knowledge in this area.
            <br />
            <br />
            My background in competitive cycling has taught me the value of
            perseverance and communication skills, which I apply in my work as a
            developer.
          </Paragraph>
          <LinkStyling href="/#work" icon="arrow" iconHover="eye" color="gray">
            See my work
          </LinkStyling>
        </InViewFadeIn>
      </article>
    </section>
  );
};
export default AboutMe;
