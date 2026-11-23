import { useState, type FormEvent } from "react";
import { ArrowUpRight, Clock, Instagram, MapPin, MessageCircle, Send } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";
import { INSTAGRAM, WHATSAPP } from "@/lib/site";

const MODES = ["Online", "Presencial", "Home Care"];

const CONTACTS = [
  { icon: MessageCircle, label: "WhatsApp", value: "Conversar agora", href: WHATSAPP },
  { icon: MapPin, label: "Localização", value: "Cacoal · Rondônia" },
  { icon: Clock, label: "Horário", value: "Seg — Sex · sob agendamento" },
  { icon: Instagram, label: "Instagram", value: "@psicologa_julianajanjob", href: INSTAGRAM },
];

const inputClass =
  "mt-2 w-full rounded-full border border-border/40 bg-card/60 px-6 py-4 text-sm text-foreground outline-none transition-all focus:border-primary/60 focus:bg-card/80 placeholder:text-muted-foreground/40";

export function Contact() {
  const [mode, setMode] = useState("Online");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `Olá, Juliana! Meu nome é ${data.get("nome")}.`,
      `Telefone: ${data.get("telefone")}`,
      data.get("email") ? `E-mail: ${data.get("email")}` : "",
      `Modalidade preferida: ${mode}`,
      data.get("mensagem") ? `Mensagem: ${data.get("mensagem")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <section id="agendar" className="relative py-24 lg:py-40 overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="mx-auto grid max-w-[1400px] gap-20 px-6 lg:grid-cols-2 lg:px-10">
        <div data-aos="fade-right">
          <SectionLabel num="07" label="Agendamento" />
          <h2 className="font-display mt-8 text-5xl lg:text-7xl leading-[1.1]">
            <span className="text-primary italic">Um passo</span>
            <br />
            de cada vez.
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground font-sans">
            Preencha o formulário ao lado ou fale direto pelo WhatsApp — retorno pessoalmente o mais
            breve possível.
          </p>

          <div className="mt-12 space-y-6">
            {CONTACTS.map((item, index) => {
              const Icon = item.icon;
              const inner = (
                <div className="group flex items-center gap-6 rounded-[2rem] border border-border/20 bg-card/20 p-4 pr-10 transition-all hover:border-primary/40 hover:bg-card/40 hover:-translate-x-2">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-muted/40 text-primary shadow-glow transition-transform group-hover:scale-110">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <span className="label-mono text-[0.6rem] block text-primary/60 tracking-[0.2em] mb-1">{item.label}</span>
                    <span className="font-display text-xl italic text-foreground">{item.value}</span>
                  </div>
                  {item.href && <ArrowUpRight className="size-5 text-primary/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />}
                </div>
              );
              return (
                <div key={item.label} data-aos="fade-up" data-aos-delay={index * 100}>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="block">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div data-aos="fade-left" className="relative">
          {/* Form container with glassmorphism */}
          <div className="relative z-10 rounded-[3rem] border border-primary/20 bg-[#241A12]/40 p-8 shadow-elegant backdrop-blur-xl sm:p-14">
            <div className="flex items-center justify-between border-b border-border/10 pb-8 mb-8">
              <span className="label-mono text-[0.65rem] text-primary/60 tracking-[0.3em] font-bold">SOLICITAÇÃO CONFIDENCIAL</span>
              <span className="label-mono text-[0.7rem] text-primary/40">JULIANA JANJOB</span>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="label-mono text-[0.6rem] text-muted-foreground tracking-[0.2em] uppercase" htmlFor="nome">
                    Seu Nome*
                  </label>
                  <input id="nome" name="nome" required placeholder="Ex: Ana Silva" className={inputClass} />
                </div>
                <div>
                  <label className="label-mono text-[0.6rem] text-muted-foreground tracking-[0.2em] uppercase" htmlFor="telefone">
                    WhatsApp*
                  </label>
                  <input id="telefone" name="telefone" required placeholder="(00) 00000-0000" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="label-mono text-[0.6rem] text-muted-foreground tracking-[0.2em] uppercase" htmlFor="email">
                  E-mail
                </label>
                <input id="email" name="email" type="email" placeholder="seu@email.com" className={inputClass} />
              </div>

              <div>
                <span className="label-mono text-[0.6rem] text-muted-foreground tracking-[0.2em] uppercase mb-4 block">Preferência de Atendimento</span>
                <div className="grid grid-cols-3 gap-4">
                  {MODES.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setMode(item)}
                      className={`rounded-full px-2 py-4 text-[0.65rem] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                        mode === item
                          ? "bg-primary text-primary-foreground shadow-glow"
                          : "border border-border/20 bg-card/40 text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="label-mono text-[0.6rem] text-muted-foreground tracking-[0.2em] uppercase" htmlFor="mensagem">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder="Se desejar, conte um pouco sobre sua busca..."
                  className="mt-2 w-full rounded-[2rem] border border-border/40 bg-card/60 px-8 py-6 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/30 focus:border-primary/60 focus:bg-card/80"
                />
              </div>

              <button
                type="submit"
                className="group relative inline-flex w-full items-center justify-center gap-4 overflow-hidden rounded-full bg-primary py-6 text-[0.7rem] font-black tracking-[0.3em] text-primary-foreground uppercase shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Enviar Solicitação <Send className="size-4" />
                </span>
                <div className="absolute inset-0 z-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
              
              <p className="text-center text-[0.65rem] text-muted-foreground/60 italic font-sans">
                Suas informações são tratadas com sigilo profissional conforme o Código de Ética do Psicólogo.
              </p>
            </form>
          </div>
          
          {/* Visual depth elements */}
          <div className="absolute -right-8 -bottom-8 size-32 rounded-3xl bg-primary/10 -z-10 rotate-12" />
          <div className="absolute -left-12 top-20 size-24 rounded-full border border-primary/10 -z-10" />
        </div>
      </div>
    </section>
  );
}
