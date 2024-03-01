"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="font-mono text-sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? <span>light</span> : <span>dark</span>}
    </button>
  );
}
