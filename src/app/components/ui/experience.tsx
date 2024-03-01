import React from "react";
import { type TExperience } from "~/constants/experience-list";

type TProps = {
  experience: TExperience;
};

export default function Experience({ experience }: TProps) {
  const { company, position, timeline, companyIcon } = experience;

  return (
    <div className="__item_grid">
      <div className="grid place-items-center">{companyIcon}</div>
      <div>
        <h3>{company}</h3>
        <p className="text-neutral-500">{position}</p>
      </div>
      <p className="self-end text-end  text-neutral-500 text-sm font-mono">
        {timeline}
      </p>
    </div>
  );
}

Experience.displayName = "Experience";
