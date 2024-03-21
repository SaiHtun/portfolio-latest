import React from "react";
import MainIconWrapper from "./main-icon-wrapper";
import textInitialParser from "lib/utils/text-inital-parser";
import { ClassValue } from "clsx";

type TProps = {
  text: string;
  twClasses?: ClassValue;
};

export default function TextInitialIcon({ text, twClasses }: TProps) {
  return (
    <MainIconWrapper twClasses={twClasses}>
      <p className="font-mono">{textInitialParser(text)}</p>
    </MainIconWrapper>
  );
}

TextInitialIcon.displayName = "TextInitialIcon";
