import React from "react";
import MainIconWrapper from "./icons/main-icon-wrapper";
import { GitBranchPlus } from "lucide-react";
import Link from "next/link";

function Cat() {
  return (
    <Link href="/">
      <MainIconWrapper>
        <GitBranchPlus size="20px" />
      </MainIconWrapper>
    </Link>
  );
}

export default function Socials() {
  return (
    <div>
      <Cat />
    </div>
  );
}
