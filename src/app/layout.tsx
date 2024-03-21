import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "../lib/utils/cn";
import "~/styles/globals.css";
import ThemeProvider from "~/contexts/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { me } from "./shared-metadata";

export const metadata: Metadata = {
  ...me,
  keywords:
    "HTML, JavaScript, TypeScript, React.js, Node.js, Python, Software Development, Web Applications",
  alternates: {
    canonical: "https://saihtun.xyz",
    languages: {
      en: "https://saihtun.xyz",
    },
  },
  openGraph: {
    ...me,
    images: ["https://saihtun.xyz/images/sai_linkedin_img.jpeg"],
    url: "https://saihtun.xyz",
  },
  twitter: {
    ...me,
    card: "summary_large_image",
    images: ["https://saihtun.xyz/images/sai_linkedin_img.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
