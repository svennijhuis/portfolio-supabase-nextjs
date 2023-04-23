"use client";

import CardExperience from "./card-experience";
import AnimatedTextWord from "@/components/animation/AnimatedText";
import ButtonStyling from "@/components/buttons/button-styling";
import H3 from "@/components/text/H3";
import Paragraph from "@/components/text/paragraph";
import TitleSmallDynamic from "@/components/text/title-small-dynamic";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [subject, setSubject] = useState<string>("Skills");
  const [data, setData] = useState<any[]>([]);
  const myRef = useRef<null | HTMLDivElement>(null);

  const WorkExperience: any = [
    {
      title: "Sneaker Store",
      icon: "grid",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      subjectArray: ["Reactjs", "Nextjs", "Tailwindcss"],
    },
    {
      title: "Sneaker Store",
      icon: "grid",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      subjectArray: ["Reactjs", "Nextjs", "Tailwindcss"],
    },
    {
      title: "Sneaker Store",
      icon: "grid",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      subjectArray: ["Reactjs", "Nextjs", "Tailwindcss"],
    },
    {
      title: "Sneaker Store",
      icon: "grid",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      subjectArray: ["Reactjs", "Nextjs", "Tailwindcss"],
    },
  ];

  const School: any = [
    {
      title: "Sneakeadsdasr Store",
      icon: "grid",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      subjectArray: ["Reactjs", "Nextjs", "Tailwindcss"],
    },
    {
      title: "Sneaker Store",
      icon: "grid",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      subjectArray: ["Reactjs", "Nextjs", "Tailwindcss"],
    },
    {
      title: "Sneaker Store",
      icon: "grid",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      subjectArray: ["Reactjs", "Nextjs", "Tailwindcss"],
    },
    {
      title: "Sneaker Store",
      icon: "grid",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      subjectArray: ["Reactjs", "Nextjs", "Tailwindcss"],
    },
  ];

  const Skills: any = [
    {
      title: "Sneakasdaser Store",
      icon: "grid",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      subjectArray: ["Reactjs", "Nextjs", "Tailwindcss"],
    },
    {
      title: "Sneaker Store",
      icon: "grid",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      subjectArray: ["Reactjs", "Nextjs", "Tailwindcss"],
    },
    {
      title: "Sneaker Store",
      icon: "grid",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      subjectArray: ["Reactjs", "Nextjs", "Tailwindcss"],
    },
    {
      title: "Sneaker Store",
      icon: "grid",
      text: "Een nieuwe look en website voor voor sneaker store in opdracht van ",
      subjectArray: ["Reactjs", "Nextjs", "Tailwindcss"],
    },
  ];

  useState(Skills);

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
      {" "}
      <div ref={myRef} className="mt-[-120px] pt-12"></div>
      <section className="bg-softBlack py-8 md:py-12">
        <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-5">
          <div className=" col-span-1 ">
            <div className="sticky top-8 md:top-[200px]">
              <TitleSmallDynamic
                className="mb-2"
                list={["experience", "work", "test"]}
              />
              <H3 className="max-w-[370px] text-white md:max-w-[485px]">
                <AnimatedTextWord
                  text="How can help you"
                  className="mr-1 uppercase"
                  darkWords={[false, false, true, true]}
                  marginView="-30% 0% -25% 0%"
                  loadingHeight="min-h-[70px]"
                />
              </H3>
              <Paragraph
                className="my-2 max-w-[520px] md:my-3"
                size="md"
                color="white"
                fontWeight="light"
              >
                Welcome my world! I am, a dedicated and creative freelance
                digital designer striving to create projects that I can be proud
                of. I am a member of the Awwwards young jury 2023 and I
                specialise in delivering digital services including bespoke web
                design and Webflow development.
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
                  School
                </ButtonStyling>
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-4 grid gap-2">
            {data.map((item: any, index: number) => (
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
