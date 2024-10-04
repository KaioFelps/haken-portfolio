"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/assets/Logo.svg";

export function Header() {
  const pathname = usePathname();

  // [path, label][]
  const routes: [string, string][] = [
    ["/", "Home"],
    ["/sobre", "Quem sou"],
    ["/projetos", "Projetos"],
  ];

  return (
    <header className="p-6 flex items-center justify-between mb-28">
      <img
        src={Logo.src}
        alt="Kaio Felipe"
      />

      <nav className={clsx(
        "px-5 py-2.5 rounded-2xl bg-white/10 flex items-center gap-5",
        "prose-a:text-white/60 hover:prose-a:text-white/70 active:prose-a:text-white/80",
        "data-[active=true]:prose-a:text-white prose-a:transition-all prose-a:duration-100",
        "prose-a:text-sm prose-a:cursor-default prose-a:font-medium"
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
