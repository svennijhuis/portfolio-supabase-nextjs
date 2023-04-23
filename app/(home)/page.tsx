import AboutMe from "@/components/sections/about-me/about-me";
import Contact from "@/components/sections/contact/contact";
import Experience from "@/components/sections/experience/experience";
import ImageGallery from "@/components/sections/gallery/image-gallery";
import HeroHome from "@/components/sections/hero/hero-home";
import Work from "@/components/sections/work/work";
import supabase from "@/utils/supabase";

export default async function Page() {
  const { data } = await supabase.from("home").select();

  return (
    <>
      <HeroHome data={data} />
      <ImageGallery />
      <AboutMe />
      <Work />
      <Experience />
      <Contact />
    </>
  );
}
