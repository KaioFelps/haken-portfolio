import { IconArrowRight, IconArrowUpRight, IconBrandGithubFilled } from "@tabler/icons-react";
import NextLink from "next/link";

import { Link } from "@/core/structs/link";
import { Project } from "@/core/structs/project";

export function ProjectCard(project: Project) {
  return (
    <article
      key={project.id}
      className="
        p-6 rounded-[20px] bg-white/10 ring-1 ring-inset ring-white/10
        flex flex-row gap-6
        backdrop-blur-2xl shadow-[rgba(78_0_105/0.2)] shadow-[0_2px_10px_0]
        max-md:flex-col max-xs:p-6
    "
    >
      <img
        src={project.coverPath}
        alt=""
        className="
            max-w-72 object-cover object-center rounded-2xl h-auto
            max-md:max-w-none max-md:max-h-48
            "
      />

      <div className="p-12 max-xs:p-4">
        <h2 className="font-black text-white text-5xl max-sm:text-2xl mb-3">{project.title}</h2>
        <p className="text-xl max-xs:text-lg text-white/60 mb-6">{project.summary}</p>

        <div className="flex items-start gap-2.5 justify-start flex-wrap">
          {project.links.map(link => ProjectLink(project.id, link))}
        </div>
      </div>
    </article>
  );
}

function ProjectLink(projectId: number, link: Link) {
  if (link.github) {
    return (
      <a
        key={`${projectId}_link_${link.href}`}
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className="button xs:lg"
      >
        <IconBrandGithubFilled size={24} />
        Código fonte no github

        <span className="ml-3"><IconArrowUpRight size={16} /></span>
      </a>
    );
  }

  const LinkC = link.external
    ? "a"
    : NextLink;

  return (
    <LinkC
      key={`${projectId}_link_${link.href}`}
      href={link.href}
      className="button xs:lg"
      target={link.external
        ? "_blank"
        : undefined}

    >
      {link.label}
      <span className="ml-3">
        {link.external
          ? <IconArrowUpRight size={16} />
          : <IconArrowRight size={16} />}
      </span>
    </LinkC>
  );
}
