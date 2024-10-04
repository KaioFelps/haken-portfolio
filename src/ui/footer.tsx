import { IconBrandGithubFilled, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

import { config } from "@/app/layout";

export function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-3 mt-28">
      <span className="font-light text-sm">© Todos os direitos reservados.</span>
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
    </footer>
  );
}
