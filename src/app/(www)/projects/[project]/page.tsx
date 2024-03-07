import React from "react";
import Image from "next/image";

type TProps = {
  params: {
    project: string;
  };
};

const contents = {
  timesync: {
    title: "global timezones coordinator",
    description:
      "Timesync is an ultimate web application for seamless global timezone coordination. Perfect for scheduling meetings, planning travel, and staying connected across different timezones. Excited to share the URL with your friends? we got you covered!",
    github: "https://github.com/SaiHtun",
    imageUrl: "/images/timesync.png",
    webUrl: "https://timesync.saihtun.xyz",
    builtWith: ["React.js", "TypeScript", "Jotai", "Vercel"],
    features: [
      "light, dark mode",
      "Lightning-fast fuzzy searching timezones",
      "Share URL with beloved friends and family, and annoying co-workers",
      "Schedule meeting minutes threshold",
      "Support 12/24 hours format",
      "Dials color options",
    ],
    constraints: [
      "Better experience with desktop browser",
      "Not every cities are searchable but all timezones are and they're case-insensitive. ( Ex: PST, gmt, pacific standard time, ... )",
    ],
  },
};

export default function Page({ params }: TProps) {
  const k = params.project as keyof typeof contents;
  const { title, description, github } = contents[k];

  return (
    <div className="w-full h-screen">
      <div className="w-full h-[100px] ">{params.project}</div>
      <Image
        src={"/images/timesync.png"}
        width={0}
        height={0}
        sizes="100vw"
        objectFit="cover"
        alt="timesync website screenshot"
        className="rounded-md w-full h-[400px] object-cover"
      />
    </div>
  );
}
