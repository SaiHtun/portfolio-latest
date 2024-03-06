"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "lib/utils/cn";

export default function SaiIcon() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
    >
      <div
        className={cn(
          "invisible hidden lg:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all ease-out rounded-full w-[30px] h-[30px]",
          {
            "visible w-[120px] h-[120px]": hovered,
          }
        )}
      >
        <Image
          src="/images/sai_linkedin_img.jpeg"
          width={120}
          height={120}
          alt="Sai's linkedin big picture"
          className="rounded-full"
        />
      </div>
      <Image
        src="/images/sai_linkedin_img.jpeg"
        width={30}
        height={30}
        alt="Sai's linkedin picture"
        className="rounded-full"
      />
    </div>
  );
}
