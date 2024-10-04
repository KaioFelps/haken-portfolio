import Link from "next/link";

export default function Home() {
  return (
    <main className="
      flex-1 max-w-[640px] w-[calc(100%_-_48px)] mx-auto flex flex-col justify-center
      "
    >
      <h1 className="text-white font-black text-7xl mb-20 text-center">Kaio Felipe</h1>

      <h2 className="text-4xl font-black text-blue-500 mb-6 text-center text-balance">
        desenvolvedor full-stack, cientista da computação,
        engenheiro de software ou alguma coisa do tipo
      </h2>

      <p className="text-lg text-center text-balance">
        Apenas um garoto que gosta de mexer no computador ou com plantas
        quando não está ou na faculdade ou na circular! Ainda interessado?
        Então talvez você queira{" "}
        <Link
          href="/sobre"
          className="link"
        >
          saber mais sobre mim
        </Link>.
      </p>
    </main>
  );
}
