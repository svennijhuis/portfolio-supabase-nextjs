import imageWork from "../../../public/images/work.png";
import CardWork from "./card-work";
import AnimatedTextWord from "@/components/animation/AnimatedText";
import InViewFadeIn from "@/components/animation/inview-fade-in";
import H3 from "@/components/text/H3";
import Paragraph from "@/components/text/paragraph";
import TitleSmall from "@/components/text/title-small";

const Work = () => {
  const data = [
    {
      title: "Sneaker Store",
      imageSrc: imageWork,
      viewUrl: "",
      nameUrl: "?Size",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      tech: ["Reactjs", "Nextjs", "Tailwindcss", "Framer Motion"],
    },
    {
      title: "Sneaker Store",
      imageSrc: imageWork,
      viewUrl: "",
      nameUrl: "?Size",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      tech: ["Reactjs", "Nextjs", "Tailwindcss", "Framer Motion"],
    },
    {
      title: "Sneaker Store",
      imageSrc: imageWork,
      viewUrl: "",
      nameUrl: "?Size",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      tech: ["Reactjs", "Nextjs", "Tailwindcss", "Framer Motion"],
    },
    {
      title: "Sneaker Store",
      imageSrc: imageWork,
      viewUrl: "",
      nameUrl: "?Size",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      tech: ["Reactjs", "Nextjs", "Tailwindcss", "Framer Motion"],
    },
  ];

  return (
    <section id="work" className="bg-gray py-8 md:py-12">
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
          </InViewFadeIn>
        </article>
      </div>
      <div className="container mt-3 grid grid-cols-1 gap-x-5 gap-y-5 md:mt-6 md:grid-cols-2">
        {data.map((item, index) => (
          <CardWork
            key={index}
            title={item.title}
            imageSrc={item.imageSrc}
            viewUrl={item.viewUrl}
            nameUrl={item.nameUrl}
            text={item.text}
          >
            {item.tech.map((item, index) => (
              <span
                className="flex rounded-3xl border-[1px] border-black px-1 py-[2px] text-12 font-normal"
                key={index}
              >
                {item}
              </span>
            ))}
          </CardWork>
        ))}
      </div>
    </section>
  );
};
export default Work;
