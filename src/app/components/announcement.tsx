import React from "react";
import Pulse from "./ui/pulse";

export default function Announcement() {
  return (
    <div className="grid place-items-center gap-1 max-sm:text-sm">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-x-4">
        <Pulse />
        <p className="max-sm:text-center">
          actively looking for Software Engineering opportuniy
        </p>
      </div>
      <p className="font-mono text-neutral-500 word-spacing-wider ">
        frontend backend fullstack
      </p>
    </div>
  );
}
