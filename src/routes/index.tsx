import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Collection } from "@/components/sections/Collection";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { Process } from "@/components/sections/Process";

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

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Collection />
        <Process />
        <InstagramGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
