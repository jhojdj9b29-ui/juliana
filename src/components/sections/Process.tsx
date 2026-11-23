import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";

const STEPS = [
  {
    n: "01",
    title: "Primeiro contato",
    text: "Pelo WhatsApp ou pelo formulário, sem compromisso.",
  },
  {
    n: "02",
    title: "Acolhimento",
    text: "A primeira sessão é de escuta e avaliação: queixa, histórico e objetivos.",
  },
  {
    n: "03",
    title: "Plano terapêutico",
    text: "Definimos juntas os objetivos e o caminho, com base na TCC.",
  },
  {
    n: "04",
    title: "Sessões semanais",
    text: "50 minutos, em sigilo, com estratégias práticas para o dia a dia.",
  },
  {
    n: "05",
    title: "Autonomia",
    text: "O objetivo é que você tenha ferramentas para seguir com mais leveza.",
  },
];

/* ---------- geometria do fio ---------- */

const VIEW_W = 400;
const VIEW_H = 600;
const N = 140; // pontos do fio
const TOP = 40;
const BOTTOM = 560;

type Pt = [number, number];

// fio embaraçado: laços orgânicos que somem nas pontas
const TANGLED: Pt[] = Array.from({ length: N }, (_, i) => {
  const t = i / (N - 1);
  const env = Math.pow(Math.sin(Math.PI * t), 1.3);
  const x =
    VIEW_W / 2 +
    env * (95 * Math.sin(2 * Math.PI * 3.2 * t) + 55 * Math.cos(2 * Math.PI * 6.6 * t + 0.6));
  const y =
    TOP + (BOTTOM - TOP) * t + env * (85 * Math.sin(2 * Math.PI * 4.4 * t + 1.1));
  return [x, y];
});

// fio reto e sereno: uma linha vertical com uma curva muito leve
const STRAIGHT: Pt[] = Array.from({ length: N }, (_, i) => {
  const t = i / (N - 1);
  return [VIEW_W / 2 + 14 * Math.sin(2 * Math.PI * t), TOP + (BOTTOM - TOP) * t];
});

// Catmull-Rom -> Bézier cúbica, para curvas suaves
function toPath(pts: Pt[]): string {
  const first = pts[0]!;
  let d = `M${first[0].toFixed(1)},${first[1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i]!;
    const p1 = pts[i]!;
    const p2 = pts[i + 1]!;
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

const ease = (k: number) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

function pathAt(k: number): string {
  const e = ease(Math.min(1, Math.max(0, k)));
  return toPath(
    TANGLED.map(([x, y], i) => {
      const [sx, sy] = STRAIGHT[i]!;
      return [x + (sx - x) * e, y + (sy - y) * e] as Pt;
    }),
  );
}

const STRAIGHT_PATH = toPath(STRAIGHT);

/* ---------- componente ---------- */

export function Process() {
  const reduce = useReducedMotion();
  if (reduce) return <ProcessStatic />;
  return <ProcessAnimated />;
}

function Header({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <SectionLabel num="04" label="Como funciona" />
      <h2 className="font-display mt-6 text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
        <span className="text-primary">Como funciona</span>{" "}
        <em className="italic text-foreground/90">o processo</em>
      </h2>
    </div>
  );
}

function Cta() {
  return (
    <a
      href="#agendar"
      className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-[0.12em] text-primary-foreground uppercase shadow-elegant transition-transform duration-500 hover:scale-105"
    >
      Agendar primeira sessão
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function ProcessAnimated() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.6 });

  // 0 -> 0.15: o fio se desenha; 0.12 -> 0.9: o fio se desenrola
  const pathLength = useTransform(progress, [0, 0.15], [0.04, 1]);
  const untangle = useTransform(progress, [0.12, 0.9], [0, 1]);
  const d = useTransform(untangle, (k) => pathAt(k));

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(STEPS.length - 1, Math.max(0, Math.floor(((v - 0.06) / 0.86) * STEPS.length)));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  return (
    <section
      id="processo"
      ref={sectionRef}
      className="relative h-[300vh] border-t border-border/20 md:h-[400vh]"
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -z-10 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

        <div className="mx-auto grid w-full max-w-[1280px] gap-6 px-6 pt-20 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16 md:pt-0 lg:px-10">
          <Header className="md:hidden" />
          {/* Fio */}
          <div className="relative mx-auto h-[34svh] w-full max-w-[420px] md:h-[72svh]">
            <svg
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              className="h-full w-full overflow-visible"
              aria-hidden
              preserveAspectRatio="xMidYMid meet"
            >
              <motion.path
                d={d}
                initial={false}
                fill="none"
                stroke="#D8C4B1"
                strokeOpacity={0.25}
                strokeWidth={8}
                strokeLinecap="round"
                style={{ pathLength, filter: "blur(6px)" }}
              />
              <motion.path
                d={d}
                initial={false}
                fill="none"
                stroke="#D8C4B1"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Etapas */}
          <div>
            <Header className="hidden md:block" />

            {/* desktop: lista completa */}
            <ol className="mt-10 hidden space-y-6 md:block">
              {STEPS.map((step, i) => {
                const on = i === active;
                return (
                  <li
                    key={step.n}
                    className="relative pl-10 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ opacity: on ? 1 : 0.35 }}
                  >
                    <span
                      className="absolute left-0 top-3 h-px bg-primary transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{ width: on ? 28 : 10 }}
                    />
                    <span className="label-mono text-primary/70">{step.n}</span>
                    <h3 className="font-display mt-1 text-2xl text-foreground lg:text-3xl">
                      {step.title}
                    </h3>
                    <p
                      className="mt-2 max-w-md text-base leading-relaxed text-muted-foreground transition-all duration-700"
                      style={{ maxHeight: on ? 120 : 0, opacity: on ? 1 : 0, overflow: "hidden" }}
                    >
                      {step.text}
                    </p>
                  </li>
                );
              })}
            </ol>

            {/* celular: só a etapa ativa */}
            <div className="mt-6 md:hidden">
              <div className="flex gap-2">
                {STEPS.map((step, i) => (
                  <span
                    key={step.n}
                    className="h-0.5 flex-1 rounded-full transition-colors duration-700"
                    style={{ background: i <= active ? "#D8C4B1" : "rgba(216,196,177,0.2)" }}
                  />
                ))}
              </div>
              <div className="relative mt-6 min-h-[140px]">
                {STEPS.map((step, i) => (
                  <div
                    key={step.n}
                    className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      opacity: i === active ? 1 : 0,
                      transform: `translateY(${i === active ? 0 : i < active ? -16 : 16}px)`,
                    }}
                    aria-hidden={i !== active}
                  >
                    <span className="label-mono text-primary/70">{step.n}</span>
                    <h3 className="font-display mt-1 text-2xl text-foreground">{step.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="transition-opacity duration-700"
              style={{ opacity: active === STEPS.length - 1 ? 1 : 0.35 }}
            >
              <Cta />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStatic() {
  return (
    <section id="processo" className="relative border-t border-border/20 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:grid-cols-[1fr_1.1fr] md:items-center lg:px-10">
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="mx-auto h-[50svh] w-full max-w-[360px]" aria-hidden>
          <path d={STRAIGHT_PATH} fill="none" stroke="#D8C4B1" strokeWidth={2} strokeLinecap="round" />
        </svg>
        <div>
          <Header />
          <ol className="mt-10 space-y-8">
            {STEPS.map((step) => (
              <li key={step.n} className="pl-10 relative">
                <span className="absolute left-0 top-3 h-px w-7 bg-primary" />
                <span className="label-mono text-primary/70">{step.n}</span>
                <h3 className="font-display mt-1 text-2xl text-foreground lg:text-3xl">{step.title}</h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
          <Cta />
        </div>
      </div>
    </section>
  );
}
