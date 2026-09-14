import { INSTAGRAM_URL, WHATSAPP_LABEL, WHATSAPP_URL } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-background/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center text-sm">
        <span className="font-display tracking-[0.2em] text-background uppercase">
          Makori Kariri
        </span>
        <p>Acessórios artesanais · Feitos à mão no Brasil</p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-background transition-opacity hover:opacity-80"
          >
            Instagram @makorikariri
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-background transition-opacity hover:opacity-80"
          >
            {WHATSAPP_LABEL}
          </a>
        </div>
        <p className="text-xs text-background/50">
          © {new Date().getFullYear()} Makori Kariri. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
