import "./globals.css" ;

import type { Metadata } from "next" ;
import { Poppins } from "next/font/google" ;
import React from "react" ;

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "auto",
  fallback: ["sans-serif"],
  variable: "--font-poppins",
  style: ["italic", "normal"],
}) ;

export const metadata: Metadata = {
  title: "Kaio Felipe",
  description: "Desenvolvedor de software!",
} ;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  ) ;
}
