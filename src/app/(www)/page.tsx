import Experiences from "~/components/experiences";
import Hero from "~/components/hero";
import Projects from "~/components/projects";
import MoreAboutMe from "~/components/more-about-me";
import Announcement from "~/components/announcement";
import { Person, WithContext } from "schema-dts";

export default function Home() {
  const software_engineer: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sai Htun",
    jobTitle: "Software Engineer",
    description:
      "Sai is a creative Software Engineer with experience delivering high-quality web solutions and visually compelling user interfaces.",
    disambiguatingDescription:
      "His expertise lies in React.js and TypeScript, but his capabilities transcend boundaries.",
    url: "https://saihtun.xyz",
    email: "saihtun1430@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/sai-htun-b20a0611a/",
      "https://github.com/SaiHtun",
      "https://twitter.com/saithesamuraii",
    ],
  };

  return (
    <main className="flex min-h-screen flex-col gap-y-20 md:gap-y-40 ">
      <Hero />
      <Experiences />
      <Projects />
      <MoreAboutMe />
      <Announcement />

      <script
        async
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(software_engineer) }}
      />
    </main>
  );
}
