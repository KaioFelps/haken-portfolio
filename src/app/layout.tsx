import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "auto",
  fallback: ["sans-serif"],
  variable: "--font-poppins",
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaio Felipe",
  description: "Desenvolvedor de software!",
};

export const config = await import("@/../appconfig.json");

type LayoutProps = {
  children: React.ReactNode
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="pt-Br" className="min-h-full h-full">
      <body className={poppins.variable + "antialiased bg-background text-white min-h-full h-full"}>
        {children}
      </body>
    </html>
  );
}
