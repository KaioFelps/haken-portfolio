import { IconBrandGithubFilled, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import clsx from "clsx";
import appConfig from "crate/appconfig.json";

import HakenLogo from "@/assets/haken-logo.png";

export function Footer() {
  return (
    <footer className="
        flex items-center justify-between px-6 py-3 mt-28
        max-sm:flex-col max-sm:justify-center max-sm:gap-3 max-sm:pb-12
        "
    >
      <Copyright className="max-xs:hidden" />

      <div className="
        flex gap-2.5
        max-xs:grid max-xs:grid-cols-2 max-xs:grid-flow-row
        "
      >
        <a
          href={appConfig.socials.hakenInstagram}
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          <img
            src={HakenLogo.src}
            width={24}
          />
          Haken
        </a>
        <a
          href={appConfig.socials.github}
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          <IconBrandGithubFilled size={24} />
          GitHub
        </a>
        <a
          href={appConfig.socials.linkedin}
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          <IconBrandLinkedin size={24} />
          Linkedin
        </a>
        <a
          href={appConfig.socials.instagram}
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
