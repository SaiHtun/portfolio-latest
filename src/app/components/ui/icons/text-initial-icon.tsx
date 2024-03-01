import React from "react";
import MainIconWrapper from "./main-icon-wrapper";
import textInitialParser from "~/lib/utils/text-inital-parser";

type TProps = {
  text: string;
};

export default function TextInitialIcon({ text }: TProps) {
  return (
    <MainIconWrapper twClasses="rounded-full">
      <p className="font-mono">{textInitialParser(text)}</p>
    </MainIconWrapper>
  );
}

TextInitialIcon.displayName = "TextInitialIcon";
