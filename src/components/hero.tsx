import ShowcaseContainer from "~/components/ui/showcase-container";
import Socials from "~/ui/socials";

export default function Hero() {
  return (
    <ShowcaseContainer title="me">
      <div className="space-y-4 text-shadow-gray tracking-wide text-pretty mb-4">
        <p>
          I’m a human-centered software engineer located in San Francisco. At
          the heart of my expertise lies React.js and TypeScript but my
          capabilities transcends boundaries.
        </p>
        <p>
          Experience in delivering high-quality web solution and visually
          compelling user interface through the principles of invisible design.
          I focus on simplicity, clarity, functionality and ensure a seamless
          interaction between users and technology.
        </p>
      </div>
      <Socials />
    </ShowcaseContainer>
  );
}

Hero.displayName = "Hero";
