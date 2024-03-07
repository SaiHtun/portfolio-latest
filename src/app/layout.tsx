import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "../lib/utils/cn";
import "~/styles/globals.css";
import ThemeProvider from "~/contexts/theme-provider";
import MainFooter from "~/components/main-footer";
import MainHeader from "~/components/main-header";

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
          <div className="flex flex-col justify-between max-w-[900px] h-full my-[100px] mx-auto text-charcoal-gray font-sans px-6">
            <MainHeader />
            {children}
            <MainFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
