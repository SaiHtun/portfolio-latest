import React from "react";
import Socials from "./ui/socials";
import SaiIcon from "./ui/icons/sai-icon";

export default function MainFooter() {
  return (
    <div className="w-full h-[200px] flex justify-between items-center">
      <Socials />
      <div className="font-mono text-shadow-gray text-sm flex gap-2 items-center">
        <p>
          © 2024 <span className="text-charcoal-gray"> Sai Htun </span>
        </p>
        <SaiIcon />
      </div>
    </div>
  );
}
