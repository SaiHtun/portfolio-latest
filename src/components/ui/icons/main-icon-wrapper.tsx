import React from "react";
import { ClassValue } from "clsx";
import { cn } from "lib/utils/cn";

type TProps = {
  twClasses?: ClassValue;
  children: React.ReactNode;
};

export default function MainIconWrapper({ twClasses, children }: TProps) {
  return (
    <div
      className={cn(
        "bg-neutral-100 dark:bg-neutral-700/80 w-10 h-10 rounded-md grid place-items-center hover:bg-neutral-100 hover:dark:bg-neutral-700/80 transition-colors",
        twClasses
      )}
    >
      {children}
    </div>
  );
}

MainIconWrapper.displayName = "MainIconWrapper";
