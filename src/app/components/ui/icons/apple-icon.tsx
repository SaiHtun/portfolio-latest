import React from "react";
import Image from "next/image";
import MainIconWrapper from "./main-icon-wrapper";

export default function Apple() {
  return (
    <MainIconWrapper twClasses="rounded-full">
      <Image
        src="/icons/apple-logo.png"
        width={20}
        height={20}
        alt="apple inc logo"
      />
    </MainIconWrapper>
  );
}
