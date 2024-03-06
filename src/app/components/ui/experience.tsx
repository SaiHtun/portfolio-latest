import React from "react";
import { type TExperience } from "~/constants/experience-list";

type TProps = {
  experience: TExperience;
};

export default function Experience({ experience }: TProps) {
  const { company, position, timeline, companyIcon } = experience;

  return (
    <div className="__item_grid hover:bg-neutral-50 hover:dark:bg-neutral-800 transition-colors cursor-pointer">
      <div className="grid place-items-center">{companyIcon}</div>
      <div>
        <h3>{company}</h3>
        <p className="__secondary_text_color line-clamp-1">{position}</p>
      </div>
      <p className="self-end text-end __secondary_text_color text-sm font-mono max-sm:hidden">
        {timeline}
      </p>
    </div>
  );
}

Experience.displayName = "Experience";
