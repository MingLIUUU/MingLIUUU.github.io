import Intro from "@/components/intro";
import SectionDivider from "@/components/sectionDivider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import { isMobileDevice } from "@/lib/utils";
import Contact from "@/components/contact";

export const metadata = {
  title: "Ming | Personal Website",
  description:
    "Ming is a full-stack developer, data analyst, bioinformatician, animal lover, and illustrator.",
};

export default function Home() {
  const isMobile = isMobileDevice();

  return (
    <main className="flex flex-col items-center justify-center px-4 overflow-x-hidden">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience isMobile={isMobile} />
      <Contact />
    </main>
  );
}
