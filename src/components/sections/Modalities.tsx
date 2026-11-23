import { useEffect, useRef } from "react";
import { ArrowUpRight, House, MapPin, Monitor } from "lucide-react";
import VanillaTilt from "vanilla-tilt";

import { SectionLabel } from "@/components/SectionLabel";
import { MODALITIES, WHATSAPP } from "@/lib/site";

import consultorio from "@/assets/consultorio.webp";
import online from "@/assets/online.png";
import homecare from "@/assets/homecare.jpg";

const ICONS = [MapPin, Monitor, House];
const MODALITY_IMAGES = [consultorio, online, homecare];

export function Modalities() {
  const cardsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 10,
          speed: 800,
          glare: true,
          "max-glare": 0.3,
          scale: 1.05,
          perspective: 1000,
        });
      }
    });
  }, []);

  return (
    <section id="atendimentos" className="border-t border-border/20 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div data-aos="fade-up">
          <SectionLabel num="04" label="Atendimentos" />
          <h2 className="font-display mt-8 max-w-4xl text-5xl leading-[1] sm:text-6xl lg:text-7xl xl:text-8xl text-foreground">
            <span className="text-primary">Escolha a modalidade que </span>
            <em className="italic text-foreground/90">seja mais confortável para você.</em>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODALITIES.map((item, index) => {
            const Icon = ICONS[index] ?? MapPin;

            const colSpan = "col-span-1";

            
            return (
              <article
                key={item.title}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className={`${colSpan} group card-3d relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] border border-border/20 bg-card shadow-elegant transition-all`}
              >
                <div className="grid h-full grid-cols-1">


                  <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
                    <img
                      src={MODALITY_IMAGES[index] ?? item.img}
                      alt={item.title}
                      loading="lazy"
                      className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                        item.title === "Home Care" ? "object-[center_20%]" : "object-center"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241A12]/80 to-transparent" />
                  </div>
                  
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                    <span className="label-mono text-primary/60 mb-4 tracking-widest">/ {item.n}</span>
                    <h3 className="font-display text-xl sm:text-4xl text-primary mb-4">{item.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground/60 mb-6 uppercase text-[0.65rem] tracking-[0.2em] font-bold">
                      <Icon className="size-3.5" />
                      Modalidade Profissional
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-xs sm:text-sm lg:text-base">
                      {item.desc}
                    </p>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn mt-auto inline-flex items-center gap-2 text-sm font-bold tracking-widest text-foreground uppercase transition-colors hover:text-primary"
                    >
                      Consultar disponibilidade
                      <ArrowUpRight className="size-4 text-primary transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
