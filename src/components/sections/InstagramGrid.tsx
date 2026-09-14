import beaded from "@/assets/beaded.jpg";
import ig1 from "@/assets/ig1.jpg";
import ig2 from "@/assets/ig2.jpg";
import ig3 from "@/assets/ig3.jpg";
import { INSTAGRAM_URL } from "@/data/site";

export function InstagramGrid() {
  return (
    <section id="instagram" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs tracking-[0.3em] text-clay uppercase">Instagram</p>
          <h2 className="font-display text-3xl sm:text-4xl">Bastidores da marca</h2>
          <a
            href={INSTAGRAM_URL}
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
  );
}
