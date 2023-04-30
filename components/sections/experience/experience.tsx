"use client";

import CardExperience from "./card-experience";
import AnimatedTextWord from "@/components/animation/AnimatedText";
import ButtonStyling from "@/components/buttons/button-styling";
import H3 from "@/components/text/H3";
import Paragraph from "@/components/text/paragraph";
import TitleSmallDynamic from "@/components/text/title-small-dynamic";
import { useEffect, useRef, useState } from "react";

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
  const [data, setData] = useState<any[]>([]);
  const myRef = useRef<null | HTMLDivElement>(null);

  const WorkExperience: any = [
    {
      title: "Front-end Web Development",
      icon: "work",
      text: "I have been working at Day-Six since April 2021, primarily focusing on frontend development. Additionally, I have experience creating small custom plugins and themes",
      subjectArray: [
        "React.tjs",
        "Tailwind CSS",
        "PHP",
        "GSAP",
        "Gutenburg blocks",
      ],
    },
    {
      title: "Shop Assistant & B2B Maintenance",
      icon: "work",
      text: "I was employed at Fietskledingvoordeel.nl from October 2019 to April 2021, where I was primarily responsible for customer service both in-store and online. Additionally, I was involved in uploading articles to the webshop.",
      subjectArray: ["Magento 2", "customer service", "B2B"],
    },
    {
      title: "Cyclist",
      icon: "work",
      text: "From January 2018 to October 2019, I was a member of the Volkerwessels-Merckx Cycling Team and competed in cycling races national and internationally.",
      subjectArray: ["challenges"],
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

  const School: any = [
    {
      title: "Communication and Multimedia Design (HBO)",
      icon: "grid",
      text: "At the Hogeschool van Amsterdam, the CMD program teaches students how to effectively communicate with clients, web design and web development.",
      subjectArray: ["Development", "UX Design", "Research"],
      duration: "2020 - 2024",
    },
    {
      title: "Minor Blockchain Development",
      icon: "grid",
      text: "Minor Blockchain Development at the Hogeschool van Amsterdam provides an introduction to blockchain technology and challenges students to create a web3 dapp.",
      subjectArray: ["Blockchain", "Smart Contracts", "Decentralized Apps"],
      duration: "2023 - heden",
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
      duration: "2022-2023",
    },
    {
      title: "Marketing and Communication (MBO niveau 4)",
      icon: "grid",
      text: "Johan Cruyff College is a school for elite athletes that offers a Marketing and Communication vocational education program alongside their athletic pursuits",
      subjectArray: ["Marketing", "Communication", "Sales"],
      duration: "2016 - 2019",
    },
    {
      title: "Vmbo-T",
      icon: "grid",
      text: "I attended VMBO-T at Veenlanden College Vinkeveen, which is a regular school.",
      subjectArray: ["General Education"],
      duration: "2013 - 2016",
    },
  ];

  const Skills: any = [
    {
      title: "React.js",
      icon: "development",
      text: "As a skilled web developer, I specialize in React.js and creating dynamic user interfaces. I also have expertise in related technologies like Next.js, Tailwind CSS, and Framer Motion. ",
      subjectArray: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Express (NestJS)",
      icon: "development",
      text: "I like using Express (NestJS) to create APIs for web applications. It's my preferred framework for connecting the backend with the frontend and databases, and I've used it extensively for personal projects.",
      subjectArray: ["Express", "Next.js", "Nest.js", "Turborepo"],
    },
    {
      title: "Solidity",
      icon: "development",
      text: "Although I am relatively new to Solidity, I find the concept of smart contract development on the Ethereum blockchain fascinating. I am excited to continue learning and exploring this technology.",
      subjectArray: ["React.js", "Solidity", "Web3.js", "Ethereum"],
    },
    {
      title: "Supabase/Prisma",
      icon: "development",
      text: "I'm excited to be expanding my skill set by diving into Supabase and Prisma! These powerful tools are great for building secure and scalable backends for web applications, and I'm eager to master them to take my projects to the next level.",
      subjectArray: ["Supabase", "Prisma", "PostgreSQL"],
    },
    {
      title: "PHP",
      icon: "development",
      text: "I have used PHP for a variety of projects, including developing custom themes and plugins for WordPress. ",
      subjectArray: ["PHP"],
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
          <div className=" col-span-1 ">
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
                    className="flex rounded-3xl border-[1px] border-black px-1 py-[2px] text-12 font-normal"
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
