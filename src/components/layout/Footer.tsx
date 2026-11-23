import { Instagram, Linkedin, Youtube, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import brandAsset from "@/assets/marca-grande-footer.jpeg";
import { CRP, INSTAGRAM, NAV, WHATSAPP } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20 bg-[#241A12] py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-4">
          <div className="lg:col-span-2" data-aos="fade-up">
            <a href="#topo" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo Juliana Janjob"
                className="size-12 rounded-full border border-primary/20 object-cover"
              />
              <span className="flex flex-col leading-none">
                <span className="font-brand text-xl tracking-wider text-primary">JULIANA JANJOB</span>
                <span className="label-mono mt-1 text-[0.7rem] text-muted-foreground">{CRP}</span>
              </span>
            </a>
            <p className="mt-8 max-w-sm text-lg leading-relaxed text-muted-foreground">
              Psicoterapia individual online e presencial. Acolhimento e técnica para sua saúde mental.
            </p>
            <div className="mt-10 flex gap-4">
              {[
                { icon: Instagram, href: INSTAGRAM },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex size-12 items-center justify-center rounded-full bg-card border border-border/30 transition-all hover:bg-primary hover:-translate-y-1 shadow-soft"
                >
                  <social.icon className="size-5 text-primary" />
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="label-mono mb-8 text-primary tracking-widest">Navegação</h4>
            <nav className="flex flex-col gap-4">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href.replace('#', '')}`}
                  className="text-muted-foreground transition-colors hover:text-primary font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a href="#conteudos" className="text-muted-foreground transition-colors hover:text-primary font-medium">
                Conteúdos
              </a>
            </nav>
          </div>

          <div className="text-left lg:text-right" data-aos="fade-up" data-aos-delay="200">
            <h4 className="label-mono mb-8 text-primary tracking-widest">Contato</h4>
            <div className="flex flex-col gap-6 lg:items-end">
              <a
                href={WHATSAPP}
                className="group flex items-center gap-3 text-lg text-foreground transition-colors hover:text-primary"
              >
                <span>WhatsApp</span>
                <MessageCircle className="size-5 text-primary" />
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="text-sm">Cacoal · RO</span>
                <MapPin className="size-5 text-primary/60" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 w-full overflow-hidden" data-aos="fade-up">
          <img 
            src={brandAsset} 
            alt="Marca Juliana Janjob" 
            className="mx-auto max-w-[650px] w-full h-auto object-contain transition-all duration-1000 rounded-3xl"
          />
        </div>

        <div className="mt-16 border-t border-border/10 pt-10 text-center flex flex-col gap-2">
          <p className="label-mono text-[0.65rem] text-muted-foreground/60">
            © {currentYear} Juliana Janjob · Todos os direitos reservados.
          </p>
          <a
            href="#gerenciar-cookies"
            className="text-xs text-muted-foreground/50 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Gerenciar cookies
          </a>
          <p className="label-mono text-[0.6rem] text-muted-foreground/40 tracking-widest uppercase">
            Desenvolvido por João Pedro Janjob
          </p>
        </div>
      </div>
    </footer>
  );
}
