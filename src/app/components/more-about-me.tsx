"use client";

import React from "react";
import ShowcaseContainer from "./ui/showcase-container";

export default function MoreAboutMe() {
  return (
    <ShowcaseContainer title="more about me">
      <div className="grid md:grid-cols-2 gap-y-10  __secondary_text_color">
        <div className="space-y-4 text-pretty">
          <p>
            I’m a Sofware Enginner by accident. That’s right! I didn’t plan on
            becoming a tech whiz, but the pandemic had other ideas.
          </p>
          <p>
            As the world shut down, I found myself with more free time than ever
            before, so I decided to try my hand at learning a new skill.
          </p>
          <p>
            Little did I know, coding would soon become my obsession. But hey, I
            swear to god that I can print <span> “Hello World”</span>, center a{" "}
            <span>&lt;div/&gt;</span> and make the <span>&lt;button/&gt;</span>{" "}
            works!
          </p>
          <p>
            I speak{" "}
            <span className="font-mono text-sm">
              {" "}
              “hello” “你好” “မင်္ဂလာပါ”{" "}
            </span>
          </p>
        </div>
        <div className="place-self-end text-end">
          <h2 className="__primary_text_color">
            tools I love, but not limited to.
          </h2>
          <div className="word-spacing-wide font-mono text-sm">
            <p>html css javascript typescript react</p>
            <p>node restapi graphql sql nosql </p>
            <p>docker kubernetes aws </p>
          </div>
        </div>
      </div>
    </ShowcaseContainer>
  );
}
