import React from "react";
import MainFooter from "~/components/main-footer";
import MainHeader from "~/components/main-header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between max-w-[900px] h-full my-[100px] mx-auto text-charcoal-gray font-sans px-4">
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
}
