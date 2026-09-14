import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo.png.asset.json";

export function Hero() {
  return (
    <section id="topo" className="relative">
      <img
        src={hero}
        alt="Modelo usando pulseiras artesanais de miçangas e macramê ao sol"
        width={1920}
        height={1200}
        className="h-[78vh] min-h-[480px] w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, color-mix(in oklab, var(--ink) 88%, transparent), color-mix(in oklab, var(--ink) 62%, transparent) 55%, color-mix(in oklab, var(--ink) 25%, transparent))",
        }}
      />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="max-w-xl">
            <img
              src={logo.url}
              alt="Logo oficial Makori Kariri"
              width={160}
              height={160}
              className="mb-6 h-28 w-28 rounded-full object-contain sm:h-36 sm:w-36"
            />
            <p className="mb-3 text-xs tracking-[0.35em] text-accent uppercase">
              Acessórios artesanais
            </p>
            <h1 className="font-display text-4xl leading-tight text-background sm:text-5xl md:text-6xl">
              Arte que se veste,
              <br />
              cultura que se carrega
            </h1>
            <p className="mt-5 max-w-md text-base text-background/80">
              Pulseiras de miçangas, macramê e bolsas feitas à mão — peças únicas que
              celebram identidade, raízes e o valor do trabalho manual.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#colecao"
                className="rounded-full bg-accent px-7 py-3 text-sm font-medium tracking-wide text-accent-foreground transition-opacity hover:opacity-90"
              >
                Ver coleção
              </a>
              <a
                href="#contato"
                className="rounded-full border border-background/50 px-7 py-3 text-sm tracking-wide text-background transition-colors hover:bg-background/10"
              >
                Falar com a marca
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
