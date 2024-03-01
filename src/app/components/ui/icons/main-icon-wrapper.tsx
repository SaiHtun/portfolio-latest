import React from "react";
import { ClassValue } from "clsx";
import { cn } from "~/lib/utils/cn";

type TProps = {
  twClasses?: ClassValue;
  children: React.ReactNode;
};

export default function MainIconWrapper({ twClasses, children }: TProps) {
  return (
    <div
      className={cn(
        "bg-zinc-100 w-10 h-10 rounded-md grid place-items-center",
        twClasses
      )}
    >
      {children}
    </div>
  );
}

MainIconWrapper.displayName = "MainIconWrapper";
