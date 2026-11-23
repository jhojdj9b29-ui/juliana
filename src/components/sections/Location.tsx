import { MapPin, ArrowUpRight } from "lucide-react";
import clinicaGiglioliAsset from "@/assets/clinica-giglioli-nova.jpeg";
import { SectionLabel } from "@/components/SectionLabel";

export function Location() {
  const mapLink = "https://maps.app.goo.gl/BSJtX12opb7BkhLG6";
  const clinicalImage = clinicaGiglioliAsset;

  return (
    <section id="localizacao" className="relative border-t border-border/20 py-24 lg:py-40 overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-[20%] left-[-5%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-20 text-center" data-aos="fade-up">
          <SectionLabel num="07" label="Atendimento presencial" center className="mb-6" />
          <h2 className="font-display text-5xl lg:text-8xl leading-none text-foreground mb-10">
            Onde te <br />
            <span className="text-primary italic">espero.</span>
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground font-sans leading-relaxed">
            Ambiente planejado para oferecer total conforto, privacidade e segurança 
            durante sua jornada terapêutica em Cacoal, Rondônia.
          </p>
        </div>

        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto lg:max-w-none lg:w-[80%]" data-aos="clip-up">
            {/* Frame for clinical image */}
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-elegant group border border-border/10">
              <img
                src={clinicalImage}
                alt="Fachada Clínica Giglioli"
                className="w-full h-auto object-contain transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241A12]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                <p className="font-display text-xl mb-0.5">Clínica Giglioli</p>
                <p className="label-mono text-[0.55rem] tracking-[0.3em] uppercase text-white/70">Cacoal · Rondônia</p>
              </div>
            </div>
            {/* Decorative offset border */}
            <div className="absolute -right-4 -bottom-4 size-32 rounded-[2.5rem] border border-primary/20 -z-10" />
          </div>

          <div className="flex flex-col space-y-12 order-1" data-aos="fade-right">
            <div className="space-y-10">
              <div className="flex items-start gap-8">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-muted/40 text-primary shadow-glow">
                  <MapPin className="size-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-3xl text-foreground mb-4">Endereço</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed font-sans">
                    Av. Paraná, 105 - Novo Horizonte<br />
                    Cacoal - RO, 76962-083
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-4 rounded-full bg-primary px-12 py-5 text-sm font-bold tracking-[0.2em] text-primary-foreground uppercase shadow-elegant transition-all hover:scale-105"
              >
                Abrir Mapa
                <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
