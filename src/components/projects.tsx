import React from "react";
import ShowcaseContainer from "./ui/showcase-container";
import Project from "./ui/project";
import { projectList } from "~/constants/project-list";

export default function Projects() {
  return (
    <ShowcaseContainer title="projects">
      {projectList.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ShowcaseContainer>
  );
}

Projects.displayName = "Projects";
