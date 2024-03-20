import React from "react";
import { type TProject } from "~/query/get-projects";
import TechPill from "~/components/ui/tech-pill";
import Link from "next/link";

type Props = {
  project: TProject;
};

export default function Project({ project }: Props) {
  const { name, intro, topics, slug, projectIcon } = project;

  return (
    <Link href={`/projects/${slug.current}`} prefetch>
      <div className="__item_grid hover:bg-neutral-50 hover:dark:bg-neutral-800 transition-colors cursor-pointer">
        <div className="grid place-items-center">{projectIcon}</div>
        <div>
          <h3>{name}</h3>
          <p className="text-shadow-gray line-clamp-1">{intro}</p>
        </div>
        <div className="justify-end space-x-2 max-sm:hidden flex">
          {topics.map((t, i) => (
            <TechPill key={i} techName={t.name} />
          ))}
        </div>
      </div>
    </Link>
  );
}
