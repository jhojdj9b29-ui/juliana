import { SectionLabel } from "@/components/SectionLabel";
import whoIAmAsset from "@/assets/who-i-am-professional.jpeg";
const julianaAbout = whoIAmAsset;
import { CRP } from "@/lib/site";

export function WhoIAm() {
  return (
    <section id="quem-sou" className="relative py-24 lg:py-40 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1" data-aos="fade-right">
            {/* Organic Blob Behind */}
            <div className="absolute -inset-10 bg-primary/10 blur-[80px] rounded-[40%] -z-10 animate-pulse" />
            
            <div className="relative z-10 overflow-hidden rounded-[20px] shadow-elegant aspect-[3/4]">
              <img 
                src={julianaAbout} 
                alt="Juliana Janjob" 
                className="w-full h-full object-cover transition-all duration-1000 hover:scale-105"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left" data-aos="fade-up">
            <SectionLabel num="02" label="Quem Sou" />
            <h2 className="font-display mt-4 text-5xl lg:text-7xl tracking-tight leading-[1.1]">
              Juliana Janjob
            </h2>
            
            <div className="mt-10 space-y-8 text-lg text-muted-foreground leading-relaxed font-sans">
              <p className="relative text-left">
                <span className="absolute -left-6 top-0 text-4xl text-primary/20 font-serif">"</span>
                Acredito que a psicoterapia é um encontro. Um espaço seguro onde você pode ser você mesma, sem julgamentos.
              </p>
              <p>
                Com especialização em Terapia Cognitivo-Comportamental, meu foco é oferecer estratégias práticas para que você possa lidar melhor com seus desafios e construir uma vida com mais sentido.
              </p>
              
              <div className="pt-4 border-t border-border/30">
                <div className="flex items-end justify-center lg:justify-start gap-4">
                  <p className="font-display text-3xl text-primary">{CRP}</p>
                  <p className="label-mono mb-1 text-xs text-muted-foreground tracking-widest">Psicóloga Clínica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
