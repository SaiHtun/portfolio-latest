import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "./lib/utils/cn";
import "./globals.css";
import ThemeProvider from "./contexts/theme-provider";

export const metadata: Metadata = {
  title: "Sai | Software Engineer",
  description: "Sai is a creative software engineer",
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
        <ThemeProvider>
          <div className="max-w-[900px] h-screen my-[100px] mx-auto __primary_text_color font-sans">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
