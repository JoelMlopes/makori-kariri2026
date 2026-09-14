import { steps } from "@/data/site";

export function Process() {
  return (
    <section id="processo" className="bg-ink py-20 text-background sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs tracking-[0.3em] text-accent uppercase">Processo</p>
          <h2 className="font-display text-3xl text-background sm:text-4xl">
            Do fio à peça pronta
          </h2>
        </div>
        <ol className="grid gap-10 md:grid-cols-3">
          {steps.map(([n, t, d]) => (
            <li key={n} className="border-t border-background/25 pt-6">
              <span className="font-display text-4xl text-accent">{n}</span>
              <h3 className="mt-3 font-display text-xl text-background">{t}</h3>
              <p className="mt-2 text-sm text-background/70">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
