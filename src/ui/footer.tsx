import { IconBrandGithubFilled, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import clsx from "clsx";

import { config } from "@/app/layout";

export function Footer() {
  return (
    <footer className="
        flex items-center justify-between px-6 py-3 mt-28
        max-xs:flex-col max-xs:justify-center max-xs:gap-3 max-xs:pb-12
        "
    >
      <Copyright className="max-xs:hidden" />
      <div className="flex gap-2.5">
        <a
          href={config.socials.github}
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          <IconBrandGithubFilled size={24} />
          GitHub
        </a>
        <a
          href={config.socials.linkedin}
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          <IconBrandLinkedin size={24} />
          Linkedin
        </a>
        <a
          href={config.socials.instagram}
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          <IconBrandInstagram size={24} />
          Instagram
        </a>
      </div>

      <Copyright className="xs:hidden text-white/60" />
    </footer>
  );
}

export const Copyright = ({ className }: { className?: string }) =>
  <span className={clsx("font-light text-sm", className && className)}>
    © Todos os direitos reservados.
  </span>;
