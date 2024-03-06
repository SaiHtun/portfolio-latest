import React from "react";

type TProps = {
  title: string;
  children: React.ReactNode;
};

export default function ShowcaseContainer({
  title,
  children,
}: TProps): React.ReactNode {
  return (
    <section className="__section_y_space tracking-wide">
      <h2 className="font-mono">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

ShowcaseContainer.displayName = "ShowcaseContainer";
