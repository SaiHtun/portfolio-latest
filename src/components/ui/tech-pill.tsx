import React from "react";

type TProps = {
  techName: string;
};

export default function TechPill({ techName }: TProps) {
  return (
    <div className="w-fit border border-shadow-gray text-shadow-gray rounded-full text-xs font-mono px-2 py-1">
      {techName}
    </div>
  );
}
