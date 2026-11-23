import { useEffect, useRef } from "react";
import { GraduationCap, Brain, BookOpen, ScrollText } from "lucide-react";
import VanillaTilt from "vanilla-tilt";

import { SectionLabel } from "@/components/SectionLabel";
import { FORMATION } from "@/lib/site";

const ICONS = [Brain, GraduationCap, BookOpen, ScrollText];

export function Formation() {
  const cardsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 10,
          speed: 800,
          glare: true,
          "max-glare": 0.3,
          scale: 1.02,
          perspective: 1000,
        });
      }
    });
  }, []);

  return (
    <section className="relative border-t border-border/20 py-24 lg:py-32 overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />


      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div data-aos="fade-up">
          <SectionLabel num="03" label="Formação" />
          <h2 className="font-display mt-8 text-4xl leading-[1] sm:text-6xl lg:text-7xl xl:text-8xl text-foreground">
            <span className="text-primary">Estudo contínuo,</span>
            <br />
            <em className="italic text-foreground/90">prática cuidadosa.</em>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2">
          {FORMATION.map((item, index) => {
            const Icon = ICONS[index] ?? Brain;
            return (
              <div 
                key={item.title} 
                data-aos="fade-up" 
                data-aos-delay={index * 150}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group card-3d relative flex flex-col rounded-[2.5rem] border border-border/20 bg-card p-0 overflow-hidden transition-all hover:border-primary/40 hover:bg-card/60 shadow-elegant hover:-translate-y-2"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241A12] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 flex size-12 sm:size-16 items-center justify-center rounded-xl sm:rounded-2xl bg-secondary/80 text-primary transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-110 shadow-glow backdrop-blur-sm z-10">
                    <Icon className="size-8" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8 pt-6">
                  <span className="label-mono text-[0.6rem] text-primary/60 tracking-[0.3em] mb-4 uppercase">FORMAÇÃO {item.n}</span>
                  <h3 className="font-display text-2xl sm:text-3xl leading-snug text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-10 transition-opacity">
                  <Icon className="size-20" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
