import React from "react";
import ThemeSwitcher from "./theme-switcher";

export default function MainHeader() {
  return (
    <header className="flex justify-between items-end">
      <div>
        <p>Sai Htun</p>
        <p className="__secondary_text_color">Software Engineer</p>
      </div>
      <ThemeSwitcher />
    </header>
  );
}

MainHeader.displayName = "MainHeader";
