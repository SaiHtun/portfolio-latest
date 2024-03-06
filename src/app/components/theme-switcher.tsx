"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Variants, motion } from "framer-motion";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const variants: Variants = {
    darkInit: {
      opacity: 1,
      y: 0,
    },
    darkMove: {
      opacity: 0,
      y: 20,
    },
    lightInit: {
      opacity: 0,
      y: 20,
    },
    lightMove: {
      opacity: 1,
      y: -24,
    },
  };

  return (
    <button
      className="w-[38px] max-h-[25px] hover:max-h-[20px] font-medium hover:text-sm transition-all border-b-charcoal-gray border-b-2 overflow-hidden"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <motion.p
        variants={variants}
        animate={theme === "dark" ? "darkMove" : "darkInit"}
      >
        dark
      </motion.p>
      <motion.p
        variants={variants}
        animate={theme === "light" ? "lightInit" : "lightMove"}
      >
        light
      </motion.p>
    </button>
  );
}
