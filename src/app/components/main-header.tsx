import React from "react";
import ThemeSwitcher from "./theme-switcher";
import MyName from "./ui/my-name";

export default function MainHeader() {
  return (
    <header className="flex justify-between items-end">
      <div>
        <MyName />
        <p className="text-shadow-gray">Software Engineer</p>
      </div>
      <ThemeSwitcher />
    </header>
  );
}

MainHeader.displayName = "MainHeader";
