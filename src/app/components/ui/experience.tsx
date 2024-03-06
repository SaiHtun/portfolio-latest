"use client";

import React, { useState } from "react";
import { type TExperience } from "~/constants/experience-list";
import { motion, Variants } from "framer-motion";

type TProps = {
  experience: TExperience;
};

export default function Experience({ experience }: TProps) {
  const { company, position, timeline, companyIcon, descriptions, techStack } =
    experience;

  const [isClicked, setIsClicked] = useState(false);

  const variants: Variants = {
    initHeight: {
      opacity: 0,
      height: "0px",
    },
    incHeight: {
      opacity: 1,
      height: "fit-content",
      marginTop: "30px",
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
    },
  };

  return (
    <div
      className="text-sm rounded-md hover:bg-neutral-50 hover:dark:bg-neutral-800 py-4 cursor-pointer "
      onClick={() => setIsClicked((ic) => !ic)}
    >
      <div className="__item_grid py-1 ">
        <div className="grid place-items-center">{companyIcon}</div>
        <div>
          <h3>{company}</h3>
          <p className="text-shadow-gray line-clamp-1 font-mono">{position}</p>
        </div>
        <p className="self-end text-end text-shadow-gray font-mono max-sm:hidden">
          {timeline}
        </p>
        <motion.div
          className="text-shadow-gray max-sm:col-span-2 col-start-2 col-end-4 h-0 overflow-hidden"
          variants={variants}
          animate={isClicked ? "incHeight" : "initHeight"}
        >
          <ul className="space-y-4 ">
            {descriptions.map((des, index) => {
              return (
                <li className="" key={index}>
                  {des}
                </li>
              );
            })}
          </ul>
          <p className="my-4 space-x-2">
            <span className="font-semibold inline-block">Tech stack</span>
            {techStack.map((tech, index) => (
              <span className="inline-block" key={index}>
                {tech}
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

Experience.displayName = "Experience";
