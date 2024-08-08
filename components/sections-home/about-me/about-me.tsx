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
    Hey there! I'm Sven Nijhuis, a 25-year-old web developer based in Zaandam. I have experience working with both front-end and back-end web technologies.
          </Paragraph>
          <Paragraph
            className="mb-2 md:mb-3"
            size="md"
            color="black"
            fontWeight="light"
          >
   I'm committed to constantly expanding my skills and expertise in software development. Over the past few years, my primary focus has been on JavaScript with frameworks and tools like Node.js, TypeScript, NestJS, Express, React, and Next.js. I've also worked with PHP and have developed a strong interest in exploring other languages like Rust and C#. To stay up-to-date, I work on personal projects and continuously educate myself. Programming isn’t just my job, it’s my hobby.
            <br />
            <br />
      Outside of coding, I’m passionate about running and set ambitious goals like completing a marathon. I was a professional cyclist and traveled extensively across Europe for it. The challenges I faced taught me the value of perseverance, which I now apply to achieving my goals in programming.
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
