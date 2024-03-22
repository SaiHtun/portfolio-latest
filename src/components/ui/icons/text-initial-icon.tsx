import React from "react";
import MainIconWrapper from "./main-icon-wrapper";
import textInitialCapitalizer from "~/lib/utils/text-inital-capitalizer";
import { ClassValue } from "clsx";

type TProps = {
  text: string;
  twClasses?: ClassValue;
};

export default function TextInitialIcon({ text, twClasses }: TProps) {
  return (
    <MainIconWrapper twClasses={twClasses}>
      <p className="font-mono font-medium">{textInitialCapitalizer(text)}</p>
    </MainIconWrapper>
  );
}

TextInitialIcon.displayName = "TextInitialIcon";
