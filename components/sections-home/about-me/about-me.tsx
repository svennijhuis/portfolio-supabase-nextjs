import InViewFadeIn from "@/components/animation/inview-fade-in";
import RotateOnScroll from "@/components/animation/rotate-onscroll";
import LinkStyling from "@/components/buttons/link-styling";
import Paragraph from "@/components/text/paragraph";
import TitleSmall from "@/components/text/title-small";
import CloudIcon from "@/public/icons/background/cloud";
import Image from "next/image";
import ImageProfile from "../../../public/images/sven.webp";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="container relative grid grid-cols-1 gap-2 overflow-hidden md:grid-cols-2 md:gap-5"
    >
      <article className="col-span-1 mt-8 flex justify-between md:mt-12">
        <TitleSmall>About me</TitleSmall>
        <InViewFadeIn delay={0.8} time={0.8}>
          <Image
            className="mr-3 aspect-square h-[125px] w-[125px] rounded-full object-cover md:h-[150px] md:w-[150px]"
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
            Hey there! I'm Sven Nijhuis, a 25-year-old software developer based
            in Zaandam with a passion for building innovative and efficient
            applications.
          </Paragraph>
          <Paragraph
            className="mb-2 md:mb-3"
            size="md"
            color="black"
            fontWeight="light"
          >
            I specialize in both front-end and back-end technologies and have
            hands-on experience with a wide range of tools and languages. My
            professional journey has focused on JavaScript, using frameworks
            like Node.js, TypeScript, NestJS, Express, React, and Next.js.
            Additionally, I’ve worked extensively with C# and .NET Core and am
            currently exploring new languages like Rust to continuously expand
            my skill set.
            <br />
            <br />
            I’m dedicated to staying at the forefront of software development.
            In my spare time, I work on personal projects, experiment with new
            technologies, and keep myself updated with the latest industry
            trends. For me, programming isn’t just a profession—it’s my passion.
            <br />
            <br />
            When I’m not coding, you can find me running or setting ambitious
            personal challenges, like completing a marathon. As a former
            professional cyclist, I’ve traveled extensively across Europe,
            learning the importance of discipline, focus, and
            perseverance—qualities I now channel into my work as a developer.
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
