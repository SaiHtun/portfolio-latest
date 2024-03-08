import React from "react";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { TypedObject } from "sanity";
import { cn } from "~/lib/utils/cn";

export default function PortableContent({ infoRaw }: { infoRaw: TypedObject }) {
  const portableTextComponents: Partial<PortableTextReactComponents> = {
    block: {
      h2: ({ children }) => <h2 className="font-semibold mb-2">{children}</h2>,
      normal: ({ children }) => (
        <p
          className={cn("text-shadow-gray", {
            "mb-8": !!children,
          })}
        >
          {children}
        </p>
      ),
    },
  };

  return (
    <div className="my-20 ">
      <PortableText value={infoRaw} components={portableTextComponents} />
    </div>
  );
}
