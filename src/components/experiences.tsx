import Experience from "~/ui/experience";
import ShowcaseContainer from "~/ui/showcase-container";
import { experienceList } from "~/constants/experience-list";

export default function Experiences() {
  return (
    <ShowcaseContainer title="experiences">
      {experienceList.map((experience) => (
        <Experience key={experience.id} experience={experience} />
      ))}
    </ShowcaseContainer>
  );
}

Experiences.displayName = "Experiences";
