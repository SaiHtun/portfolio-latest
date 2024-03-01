import React from "react";
import { TProject } from "~/constants/project-list";

type Props = {
  project: TProject;
};

export default function Project({ project }: Props) {
  const { name, intro, topics, projectIcon } = project;

  return (
    <div className="__item_grid">
      <div className="grid place-items-center">{projectIcon}</div>
      <div>
        <h3>{name}</h3>
        <p className="text-neutral-500">{intro}</p>
      </div>
      <p className="self-end text-end  text-neutral-500 text-sm font-mono space-x-2">
        {topics.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </p>
    </div>
  );
}
