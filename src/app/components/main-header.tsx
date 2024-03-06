import React from "react";
import ThemeSwitcher from "./theme-switcher";

export default function MainHeader() {
  return (
    <header className="flex justify-between items-end">
      <div>
        <p className="font-semibold">Sai Htun</p>
        <p className="text-shadow-gray">Software Engineer</p>
      </div>
      <ThemeSwitcher />
    </header>
  );
}

MainHeader.displayName = "MainHeader";
