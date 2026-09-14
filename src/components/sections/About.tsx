import processImg from "@/assets/process.jpg";
import { values } from "@/data/site";

export function About() {
  return (
    <section id="sobre" className="texture-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs tracking-[0.3em] text-clay uppercase">Sobre a marca</p>
          <h2 className="font-display text-3xl leading-snug sm:text-4xl">
            Cada nó guarda uma história
          </h2>
          <p className="mt-5 text-muted-foreground">
            A Makori Kariri nasce do encontro entre memória e criação. Inspirada na força
            das mulheres, na natureza do sertão e nas tradições que atravessam gerações,
            cada peça é feita à mão, com tempo, atenção e respeito pelo ofício.
          </p>
          <p className="mt-4 text-muted-foreground">
            Trabalhamos em pequenos lotes, com materiais naturais e cores que lembram a
            terra. O resultado são acessórios com personalidade — para quem quer vestir
            identidade, não tendência.
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
            src={processImg}
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
  );
}
