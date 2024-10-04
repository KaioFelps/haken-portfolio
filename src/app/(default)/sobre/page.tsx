import Link from "next/link";

import { config } from "@/app/layout";

export default function AboutMePage() {
  return (
    <main className="
        flex-1 max-w-[866px] w-[calc(100%_-_48px)] mx-auto flex flex-col justify-center
        "
    >
      <h1 className="heading mb-9">Sobre mim</h1>

      <div className="
            prose-p:mb-6 last:prose-p:!mb-0 prose-p:text-xl prose-p:text-white/80 text-balance
        "
      >
        <p>
          Tenho 19 anos, e durante todo esse tempo venho vivendo em Campo Mourão.
          Hoje, sou um graduando em Ciência da Computação pela UTFPR-CM. Há dois anos,
          venho estudando e me aprofundando cada vez mais em ambos os polos
          do desenvolvimento web: front e back-end.
        </p>

        <p>
          Apesar de não ter experiência profissional, já fiz
          alguns {" "}
          <Link
            href="/projetos"
            className="link"
          >
            projetos
          </Link>! Você pode conferir tudo e mais
          um pouco no meu {" "}
          <a
            href={config.socials.github}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            github
          </a>.
        </p>
      </div>
    </main>
  );
}
