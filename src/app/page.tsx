import Experiences from "~/components/experiences";
import Hero from "~/components/hero";
import Projects from "~/components/projects";
import MoreAboutMe from "~/components/more-about-me";
import Announcement from "~/components/announcement";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-20 md:gap-y-40 ">
      <Hero />
      <Experiences />
      <Projects />
      <MoreAboutMe />
      <Announcement />
    </main>
  );
}
