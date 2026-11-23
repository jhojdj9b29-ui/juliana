import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";
import { FAQ, WHATSAPP } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<string | null>("01");

  return (
    <section id="duvidas" className="relative border-t border-border/20 py-24 lg:py-40 overflow-hidden bg-background">
      {/* Background Decorative Blob */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="mx-auto grid max-w-[1400px] gap-20 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div data-aos="fade-right" className="lg:sticky lg:top-40 lg:self-start">
          <SectionLabel num="10" label="Dúvidas" />
          <h2 className="font-display mt-8 text-5xl lg:text-7xl leading-[1.1] text-foreground">
            <span className="text-primary italic">Antes de começar,</span>
            <br />
            algumas respostas.
          </h2>
          <p className="mt-10 text-lg leading-relaxed text-muted-foreground font-sans">
            Não encontrou o que procurava?{" "}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="text-primary font-bold hover:underline underline-offset-8 transition-all"
            >
              Me escreva no WhatsApp
            </a>{" "}
            — respondo pessoalmente.
          </p>
        </div>

        <ul className="space-y-6" data-aos="fade-up" data-aos-delay="200">
          {FAQ.map((item) => {
            const isOpen = open === item.n;
            return (
              <li key={item.n} className="group overflow-hidden rounded-[2.5rem] border border-border/20 bg-card/20 transition-all hover:border-primary/40 hover:bg-card/40 shadow-soft">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.n)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-6 p-8 lg:p-10 text-left transition-all"
                >
                  <span className="label-mono text-[0.7rem] tracking-[0.3em] text-primary/50 font-black">{item.n}</span>
                  <span className="font-display flex-1 text-2xl lg:text-3xl text-foreground">
                    {item.q}
                  </span>
                  <ChevronDown className={`size-6 shrink-0 text-primary transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="px-8 pb-10 pl-20 lg:px-10 lg:pl-28 border-t border-border/10 pt-8">
                      <p className="text-lg leading-relaxed text-muted-foreground font-sans max-w-2xl">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mx-auto mt-32 flex max-w-[1400px] flex-col sm:flex-row items-center justify-between gap-8 border-y border-border/10 px-6 py-12 lg:px-10" data-aos="fade-up">
        <span className="label-mono flex items-center gap-6 text-[0.7rem] tracking-[0.4em] text-primary/40 font-black uppercase">
          <span className="h-px w-16 bg-primary/20" /> Convênios aceitos
        </span>
        <div className="flex items-center gap-6">
          <span className="font-display text-4xl lg:text-5xl italic text-foreground relative">
            Prevnorte
            <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary/20" />
          </span>
        </div>
      </div>
    </section>
  );
}
