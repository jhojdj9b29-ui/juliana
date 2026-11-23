import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";

import { getTestImage } from "@/lib/test-images";
import { SectionLabel } from "@/components/SectionLabel";
import { TESTES } from "@/lib/tests";

const DESTAQUE = {
  titulo: "Questionário de Autoconhecimento",
  resumo:
    "Reflexão breve, de domínio público, para observar padrões emocionais e o cuidado consigo mesma.",
  duracao: "10 perguntas · 3 minutos",
  href: "/quiz",
  imagem: getTestImage("quiz"),
};

const ALL_TESTS = [
  DESTAQUE,
  ...TESTES.map((t) => ({
    titulo: t.titulo,
    resumo: t.resumo,
    duracao: `${t.perguntas.length} perguntas · ${Math.max(2, Math.round(t.perguntas.length / 3))} minutos`,
    href: `/testes/${t.slug}`,
    imagem: getTestImage(t.slug),
  })),
];

export function TestsArea() {
  const [showAll, setShowAll] = useState(false);
  const visibleTests = showAll ? ALL_TESTS : ALL_TESTS.slice(0, 6);
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
  }, [showAll]);

  return (
    <section id="testes" className="relative border-t border-border/20 py-24 lg:py-32 overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div data-aos="fade-up" className="max-w-2xl">
          <SectionLabel num="09" label="Autoconhecimento · Reflexão" />
          <h2 className="font-display mt-6 text-5xl leading-[1] sm:text-6xl lg:text-7xl text-foreground">
            Questionários de Autoconhecimento e Reflexão
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground font-sans">
            Responda aos questionários e olhe com mais atenção para suas emoções, hábitos, relacionamentos, personalidade e formas de lidar com a vida.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground/80 font-sans">
            Ao finalizar, você poderá visualizar uma análise do seu resultado e conhecer melhor alguns aspectos do seu perfil.
          </p>
          <div className="mt-6 inline-block rounded-xl bg-primary/5 border border-primary/10 p-4">
            <p className="text-xs leading-relaxed text-muted-foreground/70 font-sans italic">
              <strong className="text-primary/80 not-italic uppercase tracking-wider block mb-1">Aviso:</strong>
              Este questionário tem finalidade exclusivamente educativa e de autoconhecimento. O resultado oferece uma reflexão sobre suas respostas e não constitui diagnóstico psicológico ou médico. Em caso de dúvidas ou sofrimento emocional, procure avaliação de um profissional qualificado.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTests.map((test, index) => (
            <a
              key={test.href}
              href={test.href}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 100}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-border/20 bg-card shadow-elegant transition-all hover:border-primary/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={test.imagem}
                  alt={test.titulo}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241A12] via-transparent to-transparent opacity-80" />
              </div>
              <div className="flex flex-1 flex-col p-8 pt-6">
                <span className="label-mono text-[0.6rem] text-primary/50 tracking-[0.3em] mb-4">
                  ITEM {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl leading-snug text-foreground group-hover:text-primary transition-colors">
                  {test.titulo}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground font-sans line-clamp-3">
                  {test.resumo}
                </p>
                
                <div className="mt-8 flex items-center justify-between border-t border-border/10 pt-6">
                  <span className="label-mono text-[0.6rem] text-muted-foreground/60">{test.duracao}</span>
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase">
                    Começar
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {ALL_TESTS.length > 6 && (
          <div className="mt-20 flex justify-center" data-aos="fade-up">
            {showAll ? (
              <button
                onClick={() => {
                  setShowAll(false);
                  document.getElementById("testes")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative inline-flex items-center gap-4 rounded-full border border-primary/20 bg-card px-10 py-5 text-sm font-bold tracking-[0.15em] text-foreground uppercase transition-all hover:bg-primary/5"
              >
                Minimizar lista
                <ChevronDown className="size-4 rotate-180 transition-transform group-hover:-translate-y-1" />
              </button>
            ) : (
              <button
                onClick={() => setShowAll(true)}
                className="group relative inline-flex items-center gap-4 rounded-full bg-primary px-12 py-5 text-sm font-bold tracking-[0.15em] text-primary-foreground shadow-elegant transition-all hover:scale-105"
              >
                Ver todos os questionários
                <ChevronDown className="size-4 transition-transform group-hover:translate-y-1" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
