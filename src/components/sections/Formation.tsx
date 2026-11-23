import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { GraduationCap, Brain, BookOpen, ScrollText } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";
import { FORMATION } from "@/lib/site";

const ICONS = [Brain, GraduationCap, BookOpen, ScrollText];

type Item = (typeof FORMATION)[number];

function CardBody({ item, index }: { item: Item; index: number }) {
  const Icon = ICONS[index] ?? Brain;
  return (
    <div className="grid overflow-hidden rounded-[2.5rem] border border-border/20 bg-[#2d2118] shadow-elegant md:grid-cols-[1.05fr_1fr]">
      <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:h-full md:min-h-[360px]">
        <img src={item.img} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241A12] via-transparent to-transparent opacity-80 md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#2d2118]" />
      </div>
      <div className="flex flex-col justify-center p-8 sm:p-12">
        <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-secondary/80 text-primary shadow-glow">
          <Icon className="size-7" strokeWidth={1.5} />
        </div>
        <span className="label-mono mb-4 text-[0.6rem] uppercase tracking-[0.3em] text-primary/60">
          Formação {item.n}
        </span>
        <h3 className="font-display text-2xl leading-snug text-foreground sm:text-4xl">{item.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{item.desc}</p>
      </div>
    </div>
  );
}

function StackCard({
  item,
  index,
  total,
  progress,
}: {
  item: Item;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - 1 - index) * 0.05]);
  const dim = useTransform(progress, [start, Math.min(1, start + 1 / total)], [0, index === total - 1 ? 0 : 0.45]);

  return (
    <div
      className="sticky flex h-[72svh] items-start md:h-[78svh]"
      style={{ top: `calc(6.5rem + ${index * 1.4}rem)` }}
    >
      <motion.div style={{ scale }} className="relative w-full origin-top">
        <CardBody item={item} index={index} />
        <motion.div
          aria-hidden
          style={{ opacity: dim }}
          className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[#150e09]"
        />
      </motion.div>
    </div>
  );
}

export function Formation() {
  const reduce = useReducedMotion();
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  return (
    <section id="formacao" className="relative border-t border-border/20 py-24 lg:py-32">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
        <div data-aos="fade-up">
          <SectionLabel num="05" label="Formação" />
          <h2 className="font-display mt-8 text-4xl leading-[1] sm:text-6xl lg:text-7xl text-foreground">
            <span className="text-primary">Estudo contínuo,</span>
            <br />
            <em className="italic text-foreground/90">prática cuidadosa.</em>
          </h2>
        </div>

        {reduce ? (
          <div className="mt-16 space-y-8">
            {FORMATION.map((item, index) => (
              <CardBody key={item.title} item={item} index={index} />
            ))}
          </div>
        ) : (
          <div ref={stackRef} className="relative mt-16">
            {FORMATION.map((item, index) => (
              <StackCard
                key={item.title}
                item={item}
                index={index}
                total={FORMATION.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
