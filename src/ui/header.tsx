"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Logo from "@/assets/Logo.svg";

export function Header() {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const pathname = usePathname();

  // [path, label][]
  const routes: [string, string][] = [
    ["/", "Home"],
    ["/sobre", "Quem sou"],
    ["/projetos", "Projetos"],
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolledDown(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={clsx(
      "p-6 flex items-center justify-between mb-28 sticky top-0 transition-all duration-200",
      "border-b border-transparent",
      !hasScrolledDown && "bg-transparent",
      hasScrolledDown && "bg-white/[1%] border-white/5 z-50 backdrop-blur-3xl",
    )}
    >
      <img
        src={Logo.src}
        alt="Kaio Felipe"
        className="max-xs:hidden"
      />

      <nav className={clsx(
        "px-5 py-2.5 rounded-2xl bg-white/10 flex items-center gap-5",
        "prose-a:text-white/60 hover:prose-a:text-white/70 active:prose-a:text-white/80",
        "data-[active=true]:prose-a:text-white prose-a:transition-all prose-a:duration-100",
        "prose-a:text-sm prose-a:cursor-default prose-a:font-medium",
        "max-xs:w-full max-xs:prose-a:flex-1 max-xs:prose-a:text-center",
        "max-xs:hover:prose-a:bg-white/5 max-xs:prose-a:px-5 max-xs:prose-a:py-2.5",
        "max-xs:p-0 max-xs:gap-0 max-xs:overflow-hidden",
      )}
      >
        {routes.map(([path, label]) => (
          <Link
            key={`layout_navbar_${path}-${label}`}
            href={path}
            data-active={path === pathname}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
