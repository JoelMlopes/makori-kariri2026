import { useState } from "react";

import logo from "@/assets/logo.png.asset.json";
import { nav } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
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
  );
}
