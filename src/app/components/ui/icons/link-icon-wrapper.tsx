import { ClassValue } from "clsx";
import Link, { LinkProps } from "next/link";
import { cn } from "~/lib/utils/cn";

type TProps = {
  twClasses?: ClassValue;
  children: React.ReactNode;
} & LinkProps;

export default function LinkIconWrapper({
  twClasses,
  children,
  ...props
}: TProps) {
  return (
    <Link
      {...props}
      className={cn(
        "bg-zinc-100 w-10 h-10 rounded-md grid place-items-center",
        twClasses
      )}
    >
      {children}
    </Link>
  );
}

LinkIconWrapper.displayName = "LinkIconWrapper";
