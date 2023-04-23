"use client";

import AnimatedTextWord from "@/components/animation/AnimatedText";
import InViewFadeIn from "@/components/animation/inview-fade-in";
import ScaleOnScrollTest from "@/components/animation/scale-on-scroll";
import LinkStyling from "@/components/buttons/link-styling";
import H1 from "@/components/text/H1";
import Paragraph from "@/components/text/paragraph";
import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

const HeroHome = ({ data }: any) => {
  console.log(data);
  const [heroData, setHeroData] = useState(data);
  useEffect(() => {
    const channel = supabase
      .channel("realtime posts")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "home",
        },
        payload => {
          setHeroData(payload.new);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, heroData, setHeroData]);

  console.log(heroData);

  return (
    <ScaleOnScrollTest className="pb-10 pt-12 md:pt-[180px]">
      <section className="container grid grid-cols-1 md:grid-cols-2">
        <article className="col-span-1 mb-2 md:col-span-2 md:mb-3">
          <H1 className="max-w-[1200px] text-black">
            <AnimatedTextWord
              text="WEB DESIGNER & WEBFLOW DEVELOPER"
              className="mr-[10px] md:mr-3"
              darkWords={[true, false, false]}
              marginView="-15% 0% -15% 0%"
              loadingHeight="min-h-[120px] md:min-h-[220px]"
            />
          </H1>
        </article>
        <article className="col-span-1 mb-2 md:mb-0">
          <InViewFadeIn delay={1} time={0.8}>
            <Paragraph
              className="max-w-[440px]"
              size="md"
              color="black"
              fontWeight="medium"
            >
              Freelance web designer harnessing the power of design to achieve
              online goals.
            </Paragraph>
          </InViewFadeIn>
        </article>
        <article className="col-span-1">
          <InViewFadeIn delay={1} time={0.8}>
            <Paragraph
              className="mb-2 max-w-[440px] md:mb-3"
              size="md"
              color="black"
              fontWeight="light"
            >
              I create successful digital presences for innovative startups and
              established businesses with cutting-edge UI/UX design and Webflow
              development.
            </Paragraph>
            <div className="flex gap-2 md:gap-3">
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
                color="gray"
                icon="arrow"
                iconHover="screen"
              >
                About me
              </LinkStyling>
            </div>
          </InViewFadeIn>
        </article>
      </section>
    </ScaleOnScrollTest>
  );
};
export default HeroHome;
