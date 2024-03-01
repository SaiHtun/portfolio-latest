import ShowcaseContainer from "~/ui/showcase-container";

export default function Hero() {
  return (
    <ShowcaseContainer title="Me">
      <div className="space-y-4 text-neutral-500 tracking-wide">
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
    </ShowcaseContainer>
  );
}

Hero.displayName = "Hero";
