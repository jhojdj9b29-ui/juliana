import { ScrollWords } from "@/components/ScrollWords";
import { SectionLabel } from "@/components/SectionLabel";
import { CRP } from "@/lib/site";

const STATS: [string, string][] = [
  ["50min", "duração da sessão"],
  ["Semanal", "frequência típica"],
  ["Sigilo", "conforme CFP"],
];

export function Method() {
  return (
    <section id="metodo" className="relative overflow-hidden border-t border-border/20 py-24 lg:py-40">
      {/* Decorative Text in background */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute inset-x-0 top-10 select-none text-center text-[10rem] font-black leading-none text-primary/[0.03] sm:text-[18rem] uppercase tracking-tighter"
      >
        Método
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div data-aos="fade-up" className="rounded-[3.5rem] border border-primary/20 bg-[#241A12]/40 p-10 shadow-elegant backdrop-blur-xl sm:p-20">
          <SectionLabel num="03" label="Abordagem Clínica" />
          
          <div className="mt-12 grid gap-16 lg:grid-cols-[1.2fr_1fr] items-center">
            <h2 className="font-display text-5xl leading-[1] sm:text-7xl lg:text-9xl tracking-tight text-foreground">
              <span className="text-primary block">Pensamento,</span>
              <em className="italic block ml-[0.3em] text-foreground/80">Emoção e</em>
              <span className="text-primary block ml-[0.8em] relative">
                Ação.
                <div className="absolute -bottom-4 left-0 h-1 w-full bg-primary/20 rounded-full" />
              </span>
            </h2>
            
            <div className="space-y-8 text-xl leading-relaxed text-muted-foreground font-sans max-w-xl">
              <p className="relative pl-10 border-l-2 border-primary/30">
                A Terapia Cognitivo-Comportamental é uma das abordagens mais estudadas do mundo, com
                forte evidência científica para ansiedade, depressão e traumas.
              </p>
              <p>
                Trabalhamos juntas na relação entre o que você pensa e como você se sente — construindo
                estratégias práticas e reais para o seu dia a dia.
              </p>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-12 border-t border-border/10 pt-16 sm:grid-cols-3">
            {STATS.map(([value, label], idx) => (
              <div key={value} data-aos="fade-up" data-aos-delay={idx * 150} className="text-center sm:text-left group">
                <p className="font-display text-6xl text-primary mb-4 transition-transform group-hover:scale-105 duration-500">{value}</p>
                <p className="label-mono text-[0.7rem] tracking-[0.4em] text-muted-foreground uppercase font-black">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-40 max-w-5xl px-6 text-center">
        <span className="label-mono text-primary/40 tracking-[0.5em] text-[0.7rem] uppercase font-black">O Convite</span>
        <ScrollWords
          className="font-display mt-12 text-5xl leading-[1.1] sm:text-7xl text-foreground"
          words={[
            { text: "“Você" },
            { text: "não" },
            { text: "precisa" },
            { text: "chegar" },
            { text: "ao" },
            { text: "limite", highlight: true },
            { text: "para" },
            { text: "começar" },
            { text: "a" },
            { text: "cuidar" },
            { text: "de" },
            { text: "si.”" },
          ]}
        />
        <div className="mt-16 flex flex-col items-center gap-8">
          <div className="h-24 w-px bg-gradient-to-b from-primary/40 to-transparent" />
          <p className="label-mono text-[0.75rem] tracking-[0.6em] text-primary/60 font-black uppercase">
            Juliana Janjob · {CRP}
          </p>
        </div>
      </div>
    </section>

  );
}
