import logo from "@/assets/logo.png.asset.json";
import { INSTAGRAM_URL, WHATSAPP_LABEL, WHATSAPP_URL } from "@/data/site";

export function Contact() {
  return (
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
          Encomendas personalizadas, pedidos em quantidade e parcerias. Envie uma mensagem
          e conte o que você imagina.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-7 py-3 text-sm font-medium tracking-wide text-accent-foreground transition-opacity hover:opacity-90"
          >
            {WHATSAPP_LABEL}
          </a>
          <a
            href={INSTAGRAM_URL}
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
  );
}
