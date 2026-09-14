import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero.jpg";
import beaded from "@/assets/beaded.jpg";
import macrameBracelet from "@/assets/macrame-bracelet.jpg";
import macrameBag from "@/assets/macrame-bag.jpg";
import process from "@/assets/process.jpg";
import ig1 from "@/assets/ig1.jpg";
import ig2 from "@/assets/ig2.jpg";
import ig3 from "@/assets/ig3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Makori Kariri | Acessórios Artesanais em Miçangas e Macramê" },
      {
        name: "description",
        content:
          "Pulseiras de miçangas, macramê e bolsas feitas à mão. Makori Kariri celebra cultura, identidade e trabalho manual em peças únicas.",
      },
      { property: "og:title", content: "Makori Kariri | Acessórios Artesanais" },
      {
        property: "og:description",
        content:
          "Acessórios artesanais que carregam cultura, identidade e o valor do feito à mão.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#colecao", label: "Coleção" },
  { href: "#processo", label: "Processo" },
  { href: "#instagram", label: "Instagram" },
  { href: "#contato", label: "Contato" },
];

const products = [
  {
    img: beaded,
    name: "Pulseiras de Miçangas",
    desc: "Contas selecionadas uma a uma, em combinações de cor inspiradas na terra e no sertão.",
  },
  {
    img: macrameBracelet,
    name: "Pulseiras de Macramê",
    desc: "Nós tradicionais em fio de algodão natural, resistentes e leves no dia a dia.",
  },
  {
    img: macrameBag,
    name: "Bolsas de Macramê",
    desc: "Peças amplas, trançadas à mão, com caimento suave e acabamento em franjas.",
  },
];

const values = [
  { t: "Feito à mão", d: "Cada peça nasce do início ao fim nas mãos de quem cria." },
  { t: "Cultura e identidade", d: "Referências indígenas e afro-brasileiras que contam histórias." },
  { t: "Materiais naturais", d: "Algodão, contas e fibras escolhidas com cuidado." },
  { t: "Peças únicas", d: "Pequenos lotes: nenhuma pulseira é exatamente igual à outra." },
];

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
          <a href="#topo" className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="Logo oficial Makori Kariri"
              width={56}
              height={56}
              className="h-12 w-12 shrink-0 rounded-full object-contain"
            />
            <span className="truncate font-display text-lg tracking-[0.18em] uppercase">
              Makori Kariri
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="rounded-md border border-border px-3 py-2 text-sm md:hidden"
          >
            Menu
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-border px-5 pb-4 md:hidden">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
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
                Pulseiras de miçangas, macramê e bolsas feitas à mão — peças únicas
                que celebram identidade, raízes e o valor do trabalho manual.
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

      {/* Sobre */}
      <section id="sobre" className="texture-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] text-clay uppercase">Sobre a marca</p>
            <h2 className="font-display text-3xl leading-snug sm:text-4xl">
              Cada nó guarda uma história
            </h2>
            <p className="mt-5 text-muted-foreground">
              A Makori Kariri nasce do encontro entre memória e criação. Inspirada
              na força das mulheres, na natureza do sertão e nas tradições que
              atravessam gerações, cada peça é feita à mão, com tempo, atenção e
              respeito pelo ofício.
            </p>
            <p className="mt-4 text-muted-foreground">
              Trabalhamos em pequenos lotes, com materiais naturais e cores que
              lembram a terra. O resultado são acessórios com personalidade — para
              quem quer vestir identidade, não tendência.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.t} className="border-l-2 border-accent pl-4">
                  <h3 className="font-display text-lg">{v.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={process}
              alt="Mãos trançando macramê e montando pulseiras de miçangas"
              width={1600}
              height={1100}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-5 shadow-lg sm:block">
              <p className="font-display text-3xl text-clay">100%</p>
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Feito à mão
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coleção */}
      <section id="colecao" className="bg-sand py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs tracking-[0.3em] text-clay uppercase">Coleção</p>
            <h2 className="font-display text-3xl sm:text-4xl">Peças feitas para durar</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Encomendas sob medida em cores e tamanhos escolhidos por você.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article
                key={p.name}
                className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={1200}
                    height={1200}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <a
                    href="#contato"
                    className="mt-4 inline-block text-sm tracking-wide text-clay underline underline-offset-4"
                  >
                    Encomendar
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="bg-ink py-20 text-background sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 max-w-xl">
            <p className="mb-3 text-xs tracking-[0.3em] text-accent uppercase">Processo</p>
            <h2 className="font-display text-3xl text-background sm:text-4xl">
              Do fio à peça pronta
            </h2>
          </div>
          <ol className="grid gap-10 md:grid-cols-3">
            {[
              ["01", "Escolha dos materiais", "Contas, fios de algodão e fibras naturais selecionados um a um."],
              ["02", "Trançado manual", "Cada nó e cada conta são montados à mão, sem produção em série."],
              ["03", "Acabamento e entrega", "Revisão cuidadosa, embalagem artesanal e envio para todo o Brasil."],
            ].map(([n, t, d]) => (
              <li key={n} className="border-t border-background/25 pt-6">
                <span className="font-display text-4xl text-accent">{n}</span>
                <h3 className="mt-3 font-display text-xl text-background">{t}</h3>
                <p className="mt-2 text-sm text-background/70">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Instagram */}
      <section id="instagram" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs tracking-[0.3em] text-clay uppercase">Instagram</p>
            <h2 className="font-display text-3xl sm:text-4xl">Bastidores da marca</h2>
            <a
              href="https://www.instagram.com/makorikariri/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm tracking-wide text-clay underline underline-offset-4"
            >
              @makorikariri
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[ig1, ig2, ig3, beaded].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Publicação da Makori Kariri ${i + 1}`}
                width={900}
                height={900}
                loading="lazy"
                className="aspect-square w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-sand py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <img
            src={logo.url}
            alt="Logo oficial Makori Kariri"
            width={140}
            height={140}
            loading="lazy"
            className="mx-auto mb-6 h-24 w-24 rounded-full object-contain"
          />
          <h2 className="font-display text-3xl sm:text-4xl">Vamos criar sua peça?</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Encomendas personalizadas, pedidos em quantidade e parcerias. Envie uma
            mensagem e conte o que você imagina.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/5588988797442?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20quero%20encomendar%20uma%20pe%C3%A7a."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-7 py-3 text-sm font-medium tracking-wide text-accent-foreground transition-opacity hover:opacity-90"
            >
              WhatsApp (88) 98879-7442
            </a>
            <a
              href="https://www.instagram.com/makorikariri/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-7 py-3 text-sm tracking-wide transition-colors hover:bg-card"
            >
              @makorikariri
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-md text-xs text-muted-foreground">
            Se o botão não abrir, salve o número manualmente:{" "}
            <a href="tel:+5588988797442" className="text-clay underline underline-offset-4">
              +55 88 98879-7442
            </a>
            . No celular, o link abre direto no WhatsApp; no computador, abre o WhatsApp Web.
          </p>
          <form
            className="mx-auto mt-10 grid max-w-xl gap-4 text-left"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Seu nome"
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none focus:border-accent"
              />
              <input
                required
                type="email"
                placeholder="Seu e-mail"
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none focus:border-accent"
              />
            </div>
            <textarea
              required
              rows={4}
              placeholder="Conte sobre a peça que você deseja"
              className="rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="justify-self-start rounded-full bg-accent px-8 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-ink py-10 text-background/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center text-sm">
          <span className="font-display tracking-[0.2em] text-background uppercase">
            Makori Kariri
          </span>
          <p>Acessórios artesanais · Feitos à mão no Brasil</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="https://www.instagram.com/makorikariri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background transition-opacity hover:opacity-80"
            >
              Instagram @makorikariri
            </a>
            <a
              href="https://wa.me/5588988797442"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background transition-opacity hover:opacity-80"
            >
              WhatsApp (88) 98879-7442
            </a>
          </div>
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Makori Kariri. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
