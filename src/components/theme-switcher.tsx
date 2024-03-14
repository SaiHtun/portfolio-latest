"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Variants, motion } from "framer-motion";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(darkThemeMq.matches ? "dark" : "light");
  }, [setTheme]);

  if (!mounted) return null;

  const variants: Variants = {
    darkInit: {
      opacity: 1,
      y: 0,
    },
    darkMove: {
      opacity: 0,
      y: 22,
    },
    lightInit: {
      opacity: 1,
      y: -28,
    },
    lightMove: {
      opacity: 0,
      y: 0,
    },
  };

  return (
    <button
      className="group relative w-[38px] h-[28px] max-h-[28px] py-1 font-medium overflow-hidden"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <motion.p
        className="absolute w-[38px] h-[28px] left-0 -bottom-1"
        variants={variants}
        animate={theme === "dark" ? "darkMove" : "darkInit"}
      >
        dark
      </motion.p>
      <motion.p
        className="absolute w-[38px] h-[28px] left-0 -bottom-8"
        variants={variants}
        animate={theme === "light" ? "lightMove" : "lightInit"}
      >
        light
      </motion.p>
      <div className="group w-[38px] h-[2px] bg-charcoal-gray absolute bottom-0 left-0 scale-1 group-hover:scale-75 transition-all"></div>
    </button>
  );
}
