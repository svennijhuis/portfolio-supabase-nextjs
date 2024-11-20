"use client";

import AnimatedTextWord from "@/components/animation/AnimatedText";
import ButtonStyling from "@/components/buttons/button-styling";
import H3 from "@/components/text/H3";
import Paragraph from "@/components/text/paragraph";
import TitleSmallDynamic from "@/components/text/title-small-dynamic";
import { useEffect, useRef, useState } from "react";
import CardExperience from "./card-experience";

interface Card {
  title: string;
  text: string;
  icon:
    | "arrow"
    | "book"
    | "development"
    | "eye"
    | "grid"
    | "mail"
    | "phone"
    | "screen"
    | "work";
  subjectArray: string[];
}

const Experience = () => {
  const [subject, setSubject] = useState<string>("Skills");
  const [data, setData] = useState<Card[]>([]);
  const myRef = useRef<null | HTMLDivElement>(null);

  const WorkExperience: Card[] = [
    {
      title: "Software Developer",
      icon: "work",
      text: "I started at Auto.nl in 2023 as an intern, and after my internship, I took over my mentor's position when they left. Initially responsible for the front-end of Auto.nl, I transitioned into backend development. I now lead the backend, focusing on building scalable and efficient solutions using .NET, C#, Terraform, and Azure.",
      subjectArray: [
        ".NET",
        "C#",
        "Terrafom",
        "Azure",
        "Node.js",
        "Apollo Server",
        "API",
        "GraphQL",
        "Angular",
        "React",
        "Express",
        "SCSS",
        "C#",
      ],
    },
    {
      title: "Front-end Web Development",
      icon: "work",
      text: "I have been working at Day-Six since April 2021, primarily focusing on front-end development. Additionally, I have experience creating small custom plugins and themes.",
      subjectArray: [
        "React.js",
        "Tailwind CSS",
        "PHP",
        "GSAP",
        "Gutenburg Blocks",
      ],
    },
    {
      title: "Shop Assistant & B2B Maintenance",
      icon: "work",
      text: "I was employed at Fietskledingvoordeel.nl from October 2019 to April 2021, where I was primarily responsible for customer service both in-store and online. Additionally, I was involved in uploading articles to the webshop.",
      subjectArray: ["Magento 2", "Customer Service", "B2B"],
    },
    {
      title: "Cyclist",
      icon: "work",
      text: "From January 2018 to October 2019, I was a member of the Volkerwessels-Merckx Cycling Team and competed in cycling races national and internationally.",
      subjectArray: ["Challenges"],
    },
    {
      title: "Marketing & Communications Intern",
      icon: "work",
      text: "From November 2018 to April 2019, I worked as an intern at Racefietsblog.nl. My main responsibilities included assisting with events and conducting interviews for the website.",
      subjectArray: ["Marketing", "Communications", "Social Media"],
    },
    {
      title: "Marketing & Communications Assistant",
      icon: "work",
      text: "I was employed at Van Walraven from April 2017 to September 2018, where I primarily worked on organizing events. Additionally, I used Photoshop and InDesign to create posters and job vacancies for clients.",
      subjectArray: ["Marketing", "Communications", "Social Media"],
    },
  ];

  const School: Card[] = [
    {
      title: "Communication and Multimedia Design (HBO)",
      icon: "grid",
      text: "At the Hogeschool van Amsterdam, the CMD program teaches students how to effectively communicate with clients, web design and web development.",
      subjectArray: ["Development", "UX Design", "Research"],
    },
    {
      title: "Minor Blockchain Development",
      icon: "grid",
      text: "Minor Blockchain Development at the Hogeschool van Amsterdam provides an introduction to blockchain technology and challenges students to create a web3 dapp.",
      subjectArray: ["Blockchain", "Smart Contracts", "Decentralized Apps"],
    },
    {
      title: "Minor information design",
      icon: "grid",
      text: "The Minor Information Design program at the Hogeschool van Amsterdam focuses on teaching students how to effectively visualize data and explore various options for web development.",
      subjectArray: [
        "D3.js",
        "React.js",
        "Data Visualization",
        "UX Design",
        "Interaction Design",
      ],
    },
    {
      title: "Marketing and Communication (MBO niveau 4)",
      icon: "grid",
      text: "Johan Cruyff College is a school for elite athletes that offers a Marketing and Communication vocational education program alongside their athletic pursuits",
      subjectArray: ["Marketing", "Communication", "Sales"],
    },
    {
      title: "Vmbo-T",
      icon: "grid",
      text: "I attended VMBO-T at Veenlanden College Vinkeveen, which is a regular school.",
      subjectArray: ["General Education"],
    },
  ];

  const Skills: Card[] = [
    {
      title: "C# & .NET",
      icon: "development",
      text: "My primary focus is backend development, where I specialize in building scalable and efficient solutions using C# and .NET. These technologies form the core of my daily work.",
      subjectArray: ["C#", ".NET"],
    },
    {
      title: "React.js & Front-end Development",
      icon: "development",
      text: "As a skilled developer, I specialize in React.js, crafting dynamic user interfaces. I also have extensive experience with Next.js, Tailwind CSS, and Framer Motion, which I use to build responsive and visually appealing front-end applications.",
      subjectArray: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Express & Backend Integration",
      icon: "development",
      text: "I enjoy using Express and NestJS to create APIs for web applications, effectively connecting the backend with the front-end and databases. I've utilized these frameworks extensively in personal and professional projects.",
      subjectArray: ["Express", "NestJS", "Node.js", "GraphQL", "RESTful APIs"],
    },
    {
      title: "Rust (Ongoing Learning)",
      icon: "development",
      text: "I'm currently diving into Rust, a language that excites me for its safety and performance features. While I'm not yet an expert, I'm actively working to deepen my understanding and mastery of Rust.",
      subjectArray: ["Rust", "Axum", "Tokio"],
    },
    {
      title: "Solidity & Blockchain Development",
      icon: "development",
      text: "Though I'm relatively new to Solidity, the concept of smart contract development on the Ethereum blockchain captivates me. I'm enthusiastic about continuing to learn and explore this cutting-edge technology.",
      subjectArray: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"],
    },

    {
      title: "PHP & WordPress Development",
      icon: "development",
      text: "I've used PHP in various projects, including developing custom themes and plugins for WordPress. It remains a valuable tool in my development toolkit.",
      subjectArray: ["PHP", "WordPress", "Custom Plugins", "Custom Themes"],
    },
  ];

  useEffect(() => {
    if (subject === "WorkExperience") {
      setData(WorkExperience);
    } else if (subject === "School") {
      setData(School);
    } else if (subject === "Skills") {
      setData(Skills);
    }
  }, [subject]);

  return (
    <>
      <div id="experience" ref={myRef} className="mt-[-60px] pt-6"></div>
      <section className="bg-softBlack py-8 md:py-12">
        <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-5">
          <div className="col-span-1">
            <div className="sticky top-8 md:top-[200px]">
              <TitleSmallDynamic
                className="mb-2"
                list={["Skills", "Work Experience", "Education"]}
              />
              <H3 className="max-w-[370px] text-white md:max-w-[485px]">
                <AnimatedTextWord
                  text="Skills, Experience, Education"
                  className="mr-1 uppercase"
                  darkWords={[false, true, false]}
                  marginView="-30% 0% -25% 0%"
                  loadingHeight="min-h-[80px] md:min-h-[100px]"
                />
              </H3>
              <Paragraph
                className="my-2 max-w-[520px] md:my-3"
                size="md"
                color="white"
                fontWeight="light"
              >
                With a diverse background in web development, work experience,
                and education, I have gained valuable skills and the ability to
                tackle challenges from various perspectives. I am always eager
                to continue learning and growing in my field.
              </Paragraph>
              <div className="flex flex-wrap gap-2">
                <ButtonStyling
                  icon="arrow"
                  iconHover="eye"
                  color="gray"
                  onClick={() => {
                    setSubject("Skills");
                    if (myRef.current) {
                      myRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  Skills
                </ButtonStyling>
                <ButtonStyling
                  icon="arrow"
                  iconHover="eye"
                  color="gray"
                  onClick={() => {
                    setSubject("WorkExperience");
                    if (myRef.current) {
                      myRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  Work Experience
                </ButtonStyling>
                <ButtonStyling
                  icon="arrow"
                  iconHover="eye"
                  color="gray"
                  onClick={() => {
                    setSubject("School");
                    if (myRef.current) {
                      myRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  Education
                </ButtonStyling>
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-4 grid gap-2">
            {data.map((item: Card, index: number) => (
              <CardExperience
                key={index}
                title={item.title}
                text={item.text}
                icon={item.icon}
              >
                {item.subjectArray.map((item: string, index: number) => (
                  <span
                    className="flex rounded-3xl border-[1px] border-black px-1 py-[2px] text-12 font-normal text-black"
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </CardExperience>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Experience;
