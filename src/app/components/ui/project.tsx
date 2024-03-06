import React from "react";
import { TProject } from "~/constants/project-list";

type Props = {
  project: TProject;
};

export default function Project({ project }: Props) {
  const { name, intro, topics, projectIcon } = project;

  return (
    <div className="__item_grid hover:bg-neutral-50 hover:dark:bg-neutral-800 transition-colors cursor-pointer">
      <div className="grid place-items-center">{projectIcon}</div>
      <div>
        <h3>{name}</h3>
        <p className="text-shadow-gray line-clamp-1">{intro}</p>
      </div>
      <p className="self-end text-end  text-shadow-gray text-sm font-mono space-x-2 max-sm:hidden">
        {topics.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </p>
    </div>
  );
}
