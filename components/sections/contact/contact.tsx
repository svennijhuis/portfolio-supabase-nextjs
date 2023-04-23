import AnimatedTextWord from "@/components/animation/AnimatedText";
import InViewFadeIn from "@/components/animation/inview-fade-in";
import LinkStyling from "@/components/buttons/link-styling";
import H3 from "@/components/text/H3";
import Paragraph from "@/components/text/paragraph";
import TitleSmall from "@/components/text/title-small";

const Contact = () => {
  return (
    <section className="bg-gray py-8 md:py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-5">
        <article className="col-span-1">
          <TitleSmall className="mb-2">Work</TitleSmall>
        </article>
        <article className="col-span-1">
          <H3 className="max-w-[370px] text-black md:max-w-[485px]">
            <AnimatedTextWord
              text="a few words about me"
              className="mr-1 uppercase"
              darkWords={[true, true, false, false]}
              marginView="-30% 0% -25% 0%"
              loadingHeight="min-h-[140px]"
            />
          </H3>
          <InViewFadeIn delay={1.3} time={0.8}>
            <Paragraph
              className="mt-2 max-w-[520px] md:mt-3"
              size="md"
              color="black"
              fontWeight="light"
            >
              Welcome my world! I am Daniel, a dedicated and creative freelance
              digital designer striving to create projects that I can be proud
              of. I am a member of the Awwwards young.
            </Paragraph>
            <div className="mt-2 flex flex-wrap gap-2 md:mt-3 ">
              <LinkStyling
                href="/contact"
                color="black"
                icon="arrow"
                iconHover="mail"
              >
                Contact
              </LinkStyling>
              <LinkStyling
                href="/contact"
                color="black"
                icon="arrow"
                iconHover="screen"
              >
                About me
              </LinkStyling>
            </div>
          </InViewFadeIn>
        </article>
      </div>
    </section>
  );
};
export default Contact;
