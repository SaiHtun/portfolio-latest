import React from "react";
import { socialList } from "~/constants/social-list";

export default function Socials() {
  return (
    <div className="flex gap-2 w-fit">{socialList.map((social) => social)}</div>
  );
}

Socials.displayName = "Socials";
