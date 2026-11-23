import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

type Word = { text: string; highlight?: boolean };

function AnimatedWord({
  word,
  progress,
  range,
}: {
  word: Word;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const content: ReactNode = word.highlight ? (
    <span className="text-primary italic underline decoration-primary/20 underline-offset-8">
      {word.text}
    </span>
  ) : (
    word.text
  );
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {content}
    </motion.span>
  );
}

/**
 * Frase em que cada palavra "acende" conforme a rolagem passa pela frase.
 * Com prefers-reduced-motion, mostra o texto inteiro aceso.
 */
export function ScrollWords({ words, className = "" }: { words: Word[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <span key={`${word.text}-${i}`}>
            {reduce ? (
              word.highlight ? (
                <span className="text-primary italic underline decoration-primary/20 underline-offset-8">
                  {word.text}
                </span>
              ) : (
                word.text
              )
            ) : (
              <AnimatedWord word={word} progress={scrollYProgress} range={[start, end]} />
            )}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}
