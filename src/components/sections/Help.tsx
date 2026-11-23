import { Leaf } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { HELP_ITEMS } from "@/lib/site";

export function Help() {
  return (
    <section
      id="ajuda"
      className="relative overflow-hidden border-t border-border/20 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div data-aos="fade-up" className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div className="relative">
            <SectionLabel num="02" label="Como posso ajudar" />
            <h2 className="font-display mt-8 text-5xl leading-[1] sm:text-6xl lg:text-7xl xl:text-8xl text-foreground">
              <span className="text-primary">Demandas </span>
              <em className="italic text-foreground/90">emocionais</em>
              <br />
              <span className="text-primary">que atendo</span>
            </h2>
          </div>
          <div className="relative">
            <span
              aria-hidden
              className="font-display pointer-events-none absolute -top-24 right-0 hidden select-none text-[8rem] leading-none text-primary/[0.05] lg:block"
            >
              emoções
            </span>
            <p className="relative text-lg leading-relaxed text-muted-foreground font-sans max-w-lg">
              Cada processo é único. A lista abaixo é apenas um ponto de partida — o que importa é o
              que traz você aqui hoje.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {HELP_ITEMS.map((item, index) => (
            <article
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 120}
              className="group relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] border border-border/20 shadow-elegant transition-all hover:border-primary/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241A12] via-[#241A12]/20 to-transparent" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {index === 0 && (
                  <span
                    aria-hidden
                    className="breathe pointer-events-none absolute right-4 top-4 size-10 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm sm:right-8 sm:top-8 sm:size-16"
                  />
                )}
              </div>

              <div className="absolute inset-x-4 bottom-4 sm:inset-x-8 sm:bottom-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex size-8 sm:size-10 items-center justify-center rounded-xl sm:rounded-2xl border border-primary/30 bg-[#241A12]/60 text-primary backdrop-blur-md shadow-glow">
                    <Leaf className="size-5" />
                  </span>
                  <span className="label-mono text-[0.6rem] text-primary/60 tracking-[0.2em]">/ {item.n}</span>
                </div>
                <span className="block label-mono text-[0.65rem] text-primary/80 tracking-[0.3em] font-bold transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">· {item.tag}</span>
                <h3 className="font-display mt-2 text-xl sm:text-3xl text-foreground">{item.title}</h3>
                <span className="mt-4 block h-0.5 w-10 bg-primary/40 transition-all duration-700 group-hover:w-24 group-hover:bg-primary" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
