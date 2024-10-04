import React from "react";

import { BgLights } from "@/ui/bg-lights";
import { Footer } from "@/ui/footer";
import { Header } from "@/ui/header";

type LayoutProps = {
  children: React.ReactNode
};

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-full">
      <BgLights />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
