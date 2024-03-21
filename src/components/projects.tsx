import React from "react";
import ShowcaseContainer from "./ui/showcase-container";
import Project from "./ui/project";
import { getProjecstWithIcon } from "~/query/get-projects";

export default async function Projects() {
  const projects = await getProjecstWithIcon();

  return (
    <ShowcaseContainer title="projects">
      {projects?.map((project) => (
        <Project key={project._id} project={project} />
      ))}
    </ShowcaseContainer>
  );
}

Projects.displayName = "Projects";
