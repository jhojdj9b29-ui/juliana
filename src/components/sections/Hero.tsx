import { useEffect, useRef, useState, useMemo } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

import hero1Asset from "@/assets/hero-white-suit.jpeg";
import hero2Asset from "@/assets/hero-tan-blouse.jpeg";
import videoAsset from "@/assets/planta-hero.mp4";
import { WHATSAPP, CRP } from "@/lib/site";

const images = [hero1Asset, hero2Asset];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const words = useMemo(() => "Como posso te ajudar a".split(" "), []);

  useEffect(() => {
    const handleScroll = () => {
      if (videoWrapRef.current) {
        const scrolled = window.scrollY;
        videoWrapRef.current.style.transform = `translateY(${scrolled * 0.06}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32 pb-24"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] h-72 w-72 animate-pulse rounded-full bg-primary/10 blur-[100px]" />
        <div
          className="absolute bottom-[10%] right-[10%] h-96 w-96 animate-pulse rounded-full bg-primary/5 blur-[120px]"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          {/* LADO ESQUERDO — Vídeo com a Frase por cima */}
          <div className="order-1 flex flex-col items-center lg:items-start" data-aos="fade-right">
            <div ref={videoWrapRef} className="relative w-full transition-transform duration-100 ease-out">
              <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-primary/20 p-2 shadow-glow backdrop-blur-sm aspect-[4/5] w-full max-w-[480px] lg:h-[600px] mx-auto">
                <video
                  className="w-full h-full rounded-[22px] object-cover"
                  src={videoAsset}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label="Vídeo de uma planta em movimento suave"
                />
                
                {/* Overlay Gradient for Mobile Readability */}
                <div className="absolute inset-0 bg-black/20 lg:bg-transparent rounded-[22px]" />
                
                {/* Frase por cima do vídeo */}
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center sm:p-12">
                  <h1 className="font-display text-3xl leading-[1.2] text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl flex flex-wrap justify-center items-center content-center gap-x-2 gap-y-2 lg:gap-x-3">
                    {words.map((word, i) => (
                      <span
                        key={`word-${i}`}
                        className="inline-block opacity-0 animate-[fade-in-up_0.6s_ease-out_forwards]"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        {word}
                      </span>
                    ))}
                    <span 
                      className="relative inline-block italic text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] opacity-0 animate-[fade-in-up_0.6s_ease-out_forwards]"
                      style={{ animationDelay: `${words.length * 0.2}s` }}
                    >
                      cuidar de você?
                    </span>
                  </h1>
                </div>

                <div className="pointer-events-none absolute inset-2 rounded-[22px] ring-1 ring-inset ring-primary/15" />
              </div>
            </div>
          </div>

          {/* LADO DIREITO — Foto e identificação */}
          <div className="order-2 flex flex-col items-center text-center justify-center h-full" data-aos="fade-left" data-aos-delay="150">
            <div className="flex flex-col items-center w-full">
              <div className="relative shrink-0 mb-8 w-full">
                <div className="absolute -inset-4 rounded-[40px] bg-primary/10 blur-3xl" />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[40px] border border-primary/25 shadow-elegant max-w-[480px] lg:h-[600px] mx-auto">
                  {images.map((img, index) => (
                    <img
                      key={img}
                      src={img}
                      alt="Juliana Janjob, psicóloga clínica"
                      className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-1000 ease-in-out ${
                        index === currentImageIndex 
                          ? "opacity-100 scale-100 translate-x-0" 
                          : index < currentImageIndex 
                            ? "opacity-0 scale-105 -translate-x-full" 
                            : "opacity-0 scale-105 translate-x-full"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="min-w-0">
                <p className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Psicóloga Juliana Janjob
                </p>
                <p className="mt-4 text-base tracking-wide text-muted-foreground sm:text-lg lg:text-xl">
                  Especialista em Saúde Emocional Feminina
                </p>
                <span className="mt-4 block label-mono tracking-[0.25em] text-primary">
                  Psicóloga · {CRP}
                </span>
              </div>
            </div>

            <div className="mt-8 h-px w-32 bg-primary/30" />

            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
              Um espaço de acolhimento, escuta e cuidado emocional para mulheres.
            </p>

            <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-primary px-10 py-5 text-primary-foreground shadow-elegant transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 font-semibold tracking-wide">
                  Agende sua consulta
                </span>
                <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
                <div className="pointer-events-none absolute -inset-1 animate-[ping_3s_ease-in-out_infinite] rounded-full border-2 border-primary/30" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              </a>
              <a
                href="#sobre"
                className="text-sm font-semibold uppercase tracking-widest transition-colors hover:text-primary"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-bounce p-2 text-muted-foreground hover:text-primary sm:block"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
