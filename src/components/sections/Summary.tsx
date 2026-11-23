import { useState, useRef, useEffect } from "react";
import { BookOpen, ChevronDown, ChevronRight, ChevronUp, X } from "lucide-react";
import VanillaTilt from "vanilla-tilt";

import abstractWavesPremiumV3 from "@/assets/abstract-waves-premium-v3.jpeg";
import { SUMMARY_ITEMS, type SummaryItem } from "@/lib/summary";

export function Summary() {
  const [showAll, setShowAll] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SummaryItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  
  const displayedItems = showAll ? SUMMARY_ITEMS : SUMMARY_ITEMS.slice(0, 6);

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
  }, [showAll]);

  const toggleShowAll = () => {
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowAll(prev => !prev);
  };

  return (
    <section 
      ref={sectionRef}
      id="conteudos" 
      className="relative border-t border-border/20 py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -z-10" />
      
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="mb-20 text-center" data-aos="fade-up">
          <span className="label-mono text-primary/60 tracking-[0.2em] mb-4 block">Educação e Consciência</span>
          <h2 className="font-display text-5xl lg:text-7xl text-foreground mb-8">Conteúdos para sua Saúde Emocional</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed font-sans">
            Informações e reflexões sobre emoções, relacionamentos, comportamentos e saúde mental, para ajudar você a compreender melhor o que sente e vivencia.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedItems.map((item, index) => (
            <div 
              key={`${item.title}-${index}-${showAll}`}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 80}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-border/20 bg-card transition-all hover:border-primary/40 shadow-soft"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={abstractWavesPremiumV3}
                  alt={item.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241A12] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-6 flex size-12 items-center justify-center rounded-2xl bg-secondary/80 text-primary shadow-glow backdrop-blur-sm transition-transform group-hover:scale-110">
                  <BookOpen className="size-6" strokeWidth={1.5} />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-8 pt-6">
                <h3 className="font-display text-2xl leading-tight text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <button 
                  onClick={() => setSelectedItem(item)}
                  className="mt-8 inline-flex items-center gap-2 self-start text-xs font-bold tracking-[0.2em] text-primary uppercase transition-all hover:gap-3"
                >
                  Ler conteúdo <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center" data-aos="fade-up">
          <button
            onClick={toggleShowAll}
            className="group relative flex items-center gap-4 rounded-full bg-primary px-12 py-5 text-sm font-bold tracking-[0.15em] text-primary-foreground shadow-elegant transition-all hover:scale-105 active:scale-95"
          >
            {showAll ? (
              <>
                Recolher temas <ChevronUp className="size-4 transition-transform group-hover:-translate-y-1" />
              </>
            ) : (
              <>
                Ver todos os temas <ChevronDown className="size-4 transition-transform group-hover:translate-y-1" />
              </>
            )}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>

      {/* Modern Modal Overlay */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <div 
            className="absolute inset-0 bg-[#241A12]/95 backdrop-blur-xl animate-in fade-in duration-500" 
            onClick={() => setSelectedItem(null)}
          />
          <div className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-[3rem] border border-border/20 bg-[#241A12] shadow-2xl animate-in fade-in zoom-in slide-in-from-bottom-8 duration-500">
            <div className="sticky top-0 z-10 flex shrink-0 items-center justify-between bg-[#241A12]/80 p-8 backdrop-blur-md">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary shadow-glow">
                <BookOpen className="size-7 text-primary-foreground" />
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="flex size-12 items-center justify-center rounded-full bg-white/5 text-foreground transition-all hover:bg-white/10 hover:rotate-90"
              >
                <X className="size-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-10 pt-4 custom-scrollbar">
              <h3 className="font-display text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
                {selectedItem.title}
              </h3>
              <div className="font-sans text-lg text-muted-foreground/90 leading-relaxed whitespace-pre-line">
                {selectedItem.content}
              </div>
            </div>

            <div className="shrink-0 p-8 pt-0">
              <button 
                onClick={() => setSelectedItem(null)}
                className="w-full rounded-full bg-primary py-5 text-sm font-bold tracking-[0.2em] text-primary-foreground shadow-elegant transition-all hover:scale-[1.02] uppercase"
              >
                Fechar Artigo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
