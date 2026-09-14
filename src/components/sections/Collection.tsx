import { products } from "@/data/site";

export function Collection() {
  return (
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
  );
}
