import React from "react";
import ThemeSwitcher from "./theme-switcher";
import MyName from "./ui/my-name";

export default function MainHeader() {
  return (
    <header className="flex justify-between items-end mb-[80px] md:mb-[160px] px-6">
      <MyName />
      <ThemeSwitcher />
    </header>
  );
}

MainHeader.displayName = "MainHeader";
