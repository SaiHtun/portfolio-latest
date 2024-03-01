import ShowcaseContainer from "~/ui/showcase-container";
import Socials from "./ui/socials";

export default function Hero() {
  return (
    <ShowcaseContainer title="Me">
      <div className="space-y-4 __secondary_text_color tracking-wide text-pretty">
        <p>
          I’m a dynamic software engineer nestled in the vibrant tech hub of San
          Francisco. At the heart of my expertise lies React.js and TypeScript
          but my capabilities transcends boundaries.
        </p>
        <p>
          I’m not just building compelling and visually appealing web
          applications. I’m sculpting experiences, I elevate my web applications
          beyond mere functionality to become immersive extensions of the human
          experience.
        </p>
      </div>
      <Socials />
    </ShowcaseContainer>
  );
}

Hero.displayName = "Hero";
