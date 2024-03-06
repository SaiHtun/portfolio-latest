import React from "react";
import Pulse from "./ui/pulse";

export default function Announcement() {
  return (
    <div className="grid place-items-center gap-1 ">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-x-4">
        <Pulse />
        <p className="max-sm:text-center">
          actively looking for Software Engineering opportuniy
        </p>
      </div>
      <p className="font-mono text-shadow-gray inline-flex gap-2">
        <span>frontend</span>
        <span>backend</span>
        <span>fullstack</span>
      </p>
    </div>
  );
}
