import clinicVideo from "@/assets/clinic-video.mp4";
import consultorio from "@/assets/consultorio.webp";
import { SectionLabel } from "@/components/SectionLabel";

export function About() {
  return (
    <section id="sobre" className="relative border-t border-border/20 py-24 lg:py-40 overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="mx-auto grid max-w-[1400px] items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative order-2 lg:order-1" data-aos="fade-right">
          <div className="relative">
            {/* Organic shape frame for the image */}
            <div className="relative overflow-hidden rounded-[3rem] shadow-elegant group">
              <video
                src={clinicVideo}
                autoPlay
                muted
                loop
                playsInline
                className="h-[450px] w-full object-cover transition-transform duration-[2s] group-hover:scale-110 sm:h-[650px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241A12]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            {/* Floating Label */}
            <div 
              data-aos="zoom-in" 
              data-aos-delay="400"
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl border border-primary/20 bg-[#241A12]/90 px-8 py-4 text-primary shadow-elegant backdrop-blur-xl"
            >
              <span className="label-mono text-xs tracking-[0.2em]">Clínica Giglioli · Cacoal</span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 text-center lg:text-left" data-aos="fade-up">
          <SectionLabel num="01" label="Sobre" />
          <h2 className="font-display mt-8 text-4xl leading-[1.1] text-foreground sm:text-6xl lg:text-7xl">
            <span className="text-primary italic">Escuta </span>
            sem pressa.
            <br />
            <span className="text-primary italic">Olhar </span>
            sem julgamentos.
          </h2>
          
          <div className="mt-12 space-y-8 text-lg leading-relaxed text-muted-foreground font-sans max-w-xl mx-auto lg:mx-0">
            <p className="font-display text-xl sm:text-2xl italic text-primary/80 border-l-2 border-primary/30 pl-6 my-10 text-left">
              Um espaço seguro para compreender sua história e construir novos caminhos.
            </p>
            
            <div className="grid gap-10 sm:grid-cols-1">
              <div className="space-y-6">
                <p>
                  Sou psicóloga em Cacoal RO, especialista em{" "}
                  <strong className="text-foreground font-semibold border-b border-primary/40">
                    Terapia Cognitivo-Comportamental
                  </strong>
                  . Atendo mulheres que buscam entender melhor a própria história e construir mudanças
                  possíveis no dia a dia.
                </p>
                
                <div className="flex flex-wrap gap-3 mt-4">
                  {["Neuropsicologia", "TEA", "Psicologia do Trânsito"].map(tag => (
                    <span key={tag} className="label-mono text-[0.6rem] px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <p>
                  Meu trabalho parte de um princípio simples: cada pessoa carrega um mundo. Meu papel
                  é criar um espaço seguro para que esse mundo possa ser dito, ouvido e reorganizado.
                </p>
              </div>
            </div>
          </div>

          <blockquote className="mt-16 relative">
            <div className="font-display flex gap-4 text-4xl italic text-foreground items-start">
              <span className="text-6xl text-primary/20 leading-none">“</span>
              <p>Permita-se.</p>
              <span className="text-6xl text-primary/20 leading-none self-end">”</span>
            </div>
            <footer className="label-mono mt-6 flex items-center gap-4 text-muted-foreground/60 tracking-[0.3em] text-[0.65rem]">
              <span className="h-px w-12 bg-primary/30" /> JULIANA JANJOB
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
