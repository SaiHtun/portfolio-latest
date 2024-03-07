"use client";
// hugely inspired by https://twitter.com/jh3yy
// https://codepen.io/jh3y/pen/GRLKMPY
import { cn } from "lib/utils/cn";
import { useRouter } from "next/navigation";
import styles from "~/styles/name.module.css";

export default function MyName() {
  const router = useRouter();

  const name = "Sai Htun ";
  const GLYPHS =
    "ラドクリフマラソンわ谷たしワタシんょンョたばこタバコとう信きょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFG忠HIJKLMNOPQRSTUVWXYZ";
  const speed = 0.25;
  const chinese_name = "谷 _ 忠 _ 信";

  return (
    <button
      className={cn("font-mono font-semibold text-left ", styles.btn)}
      style={{ "--speed": speed }}
      onClick={() => router.push("/")}
    >
      {name.split("").map((char, index) => {
        return (
          <span
            suppressHydrationWarning
            key={index}
            data-char={char}
            style={{
              "--index": index,
              "--char-1": `"${
                GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
              }"`,
              "--char-2": `"${
                GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
              }"`,
              "--char-3": `"${
                GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
              }"`,
              "--chinese-name": `"${chinese_name[index]}"`,
            }}
          >
            {char}
          </span>
        );
      })}
      <p className="text-shadow-gray text-sm font-sans">Software Engineer</p>
    </button>
  );
}
