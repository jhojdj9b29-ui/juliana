import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

import hero1Asset from "@/assets/hero-white-suit.jpeg";
import hero2Asset from "@/assets/hero-tan-blouse.jpeg";
import videoAsset from "@/assets/planta-hero.mp4";
import { WHATSAPP, CRP } from "@/lib/site";

const images = [hero1Asset, hero2Asset];
const WORDS = ["Como", "posso", "te", "ajudar", "a"];
const ACCENT = ["cuidar", "de", "você?"];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const photoScale = useTransform(scrollYProgress, [0, 0.8], reduce ? [1, 1] : [1.15, 1]);
  const photoRadius = useTransform(scrollYProgress, [0, 0.8], reduce ? [40, 40] : [28, 64]);
  const videoY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 60]);

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="topo"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-32"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] h-72 w-72 animate-pulse rounded-full bg-primary/10 blur-[100px]" />
        <div
          className="absolute bottom-[10%] right-[10%] h-96 w-96 animate-pulse rounded-full bg-primary/5 blur-[120px]"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:gap-x-20 lg:gap-y-6">
          {/* Vídeo com a frase por cima */}
          <motion.div
            style={{ y: videoY }}
            className="order-1 w-full lg:row-span-2 lg:self-center"
          >
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-primary/20 p-2 shadow-glow backdrop-blur-sm sm:aspect-[4/5] lg:aspect-auto lg:h-[min(calc(100svh-200px),680px)]">
                <video
                  className="h-full w-full rounded-[22px] object-cover"
                  src={videoAsset}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label="Vídeo de uma planta em movimento suave"
                />
                <div className="absolute inset-2 rounded-[22px] bg-black/25" />

                <div className="absolute inset-0 flex items-center justify-center p-6 text-center sm:p-12">
                  <h1 className="font-display text-3xl leading-[1.15] text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl">
                    {WORDS.map((word, i) => (
                      <span key={word} className="mask-word mr-[0.25em]">
                        <span style={{ animationDelay: `${0.2 + i * 0.09}s` }}>{word}</span>
                      </span>
                    ))}
                    <br className="hidden sm:block" />
                    {ACCENT.map((word, i) => (
                      <span key={word} className="mask-word mr-[0.25em] italic text-primary">
                        <span style={{ animationDelay: `${0.2 + (WORDS.length + i) * 0.09}s` }}>
                          {word}
                        </span>
                      </span>
                    ))}
                  </h1>
                </div>

                <div className="pointer-events-none absolute inset-2 rounded-[22px] ring-1 ring-inset ring-primary/15" />
              </div>
            </div>
          </motion.div>

          {/* Identificação e botão: no celular vem logo depois do vídeo */}
          <div
            className="order-2 flex flex-col items-center text-center lg:col-start-2 lg:row-start-2 lg:self-start"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <p className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Psicóloga Juliana Janjob
            </p>
            <p className="mt-3 text-base tracking-wide text-muted-foreground sm:text-lg">
              Especialista em Saúde Emocional Feminina
            </p>
            <span className="mt-3 block label-mono tracking-[0.25em] text-primary">
              Psicóloga · {CRP}
            </span>

            <p className="mt-5 hidden max-w-md font-sans text-base leading-relaxed text-muted-foreground sm:block">
              Um espaço de acolhimento, escuta e cuidado emocional para mulheres.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-primary px-9 py-4 text-primary-foreground shadow-elegant transition-transform duration-500 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 font-semibold tracking-wide">Agende sua consulta</span>
                <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              </a>
              <a
                href="#sobre"
                className="link-redraw text-sm font-semibold uppercase tracking-widest transition-colors hover:text-primary"
              >
                Saiba mais
              </a>
            </div>
          </div>

          {/* Foto com zoom ligado à rolagem */}
          <div className="order-3 flex justify-center lg:col-start-2 lg:row-start-1 lg:self-end">
            <div className="relative w-full max-w-[420px] lg:w-auto">
              <div className="absolute -inset-4 rounded-[40px] bg-primary/10 blur-3xl" />
              <motion.div
                style={{ borderRadius: photoRadius }}
                className="relative aspect-[4/5] w-full overflow-hidden border border-primary/25 shadow-elegant lg:h-[min(42svh,440px)] lg:w-auto"
              >
                {images.map((img, index) => (
                  <motion.img
                    key={img}
                    src={img}
                    alt="Juliana Janjob, psicóloga clínica"
                    style={{ scale: photoScale }}
                    className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-[1400ms] ease-in-out ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce p-2 text-muted-foreground hover:text-primary xl:block"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
