import React from "react";

export default function MainHeader() {
  return (
    <header className="flex justify-between items-end">
      <div>
        <p className="space-x-2">
          <span>Sai Htun</span>
          <span className="text-neutral-500">谷忠信</span>
        </p>
        <p className="text-neutral-500">Software Engineer</p>
      </div>
      <button>light</button>
    </header>
  );
}

MainHeader.displayName = "MainHeader";
