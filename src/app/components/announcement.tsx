import React from "react";
import Pulse from "./ui/pulse";

export default function Announcement() {
  return (
    <div className="grid place-items-center gap-1">
      <div className="flex items-center gap-x-4">
        <Pulse />
        <p>actively looking for Software Engineering opportuniy</p>
      </div>
      <p className="font-mono text-sm text-neutral-500 word-spacing-wider">
        Frontend Backend Fullstack
      </p>
    </div>
  );
}
