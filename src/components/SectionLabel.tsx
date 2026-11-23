import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export function SectionLabel({
  num,
  label,
  center = false,
  className = "",
}: {
  num: string;
  label: string;
  center?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className={`flex items-center gap-4 ${center ? "justify-center" : ""} ${className}`}>
      <span className="label-mono text-primary/70">{num}</span>
      <motion.span
        className="h-px w-10 origin-left bg-primary/40"
        initial={false}
        animate={{ scaleX: reduce || inView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      />
      <span className="label-mono text-muted-foreground">{label}</span>
    </div>
  );
}
