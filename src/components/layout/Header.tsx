import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, AtSign, MapPin, Menu, MessageCircle, X } from "lucide-react";

import logo from "@/assets/logo.png";
import { CRP, INSTAGRAM, NAV, WHATSAPP } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const isHome = useRouterState({ select: (s) => s.location.pathname }) === "/";
  const href = (hash: string) => (isHome ? hash : `/${hash}`);

  // Fica compacto ao rolar para baixo e some; reaparece ao rolar para cima.
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);
  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - last.current;
    last.current = y;
    setCompact(y > 80);
    if (Math.abs(diff) < 4) return;
    setHidden(diff > 0 && y > 400);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ transform: hidden && !open ? "translateY(-120%)" : "translateY(0)" }}
    >
      <div className={`mx-auto max-w-[1400px] px-6 transition-all duration-500 lg:px-10 ${compact ? "mt-2" : "mt-4"}`}>
        <div
          className={`flex items-center justify-between gap-6 rounded-2xl border border-border/20 px-6 backdrop-blur-xl shadow-elegant transition-all duration-500 ${
            compact ? "bg-[#241A12]/95 py-2.5" : "bg-[#241A12]/80 py-4"
          }`}
        >
          <a href={href("#topo")} className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Juliana Janjob"
              className="size-10 shrink-0 rounded-full border border-primary/20 object-cover"
            />
            <span className="flex flex-col leading-none">
              <span className="font-brand whitespace-nowrap text-primary text-base tracking-wider sm:text-lg">
                JULIANA JANJOB
              </span>
              <span className="label-mono mt-0.5 text-[0.6rem] text-muted-foreground">
                {CRP}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 2xl:gap-7 xl:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={href(item.href)}
                className="link-redraw label-mono tracking-[0.1em]! whitespace-nowrap text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="hidden text-primary/70 min-[1440px]:inline">{item.num} · </span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group relative hidden items-center gap-3 overflow-hidden rounded-full bg-primary px-7 py-2.5 text-xs font-bold tracking-[0.1em] text-primary-foreground transition-all duration-500 hover:scale-105 sm:inline-flex"
            >

              <span className="relative z-10 flex items-center gap-2">
                AGENDAR <ArrowUpRight className="size-3" />
              </span>
              <div className="absolute inset-0 z-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground xl:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>


      {open && (
        <div className="bg-background border-b border-border px-6 py-8 xl:hidden">
          <nav className="flex flex-col gap-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={href(item.href)}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-foreground"

              >
                <span className="label-mono mr-3 text-primary/70">{item.num}</span>
                {item.label}
              </a>
            ))}

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              Agendar <ArrowUpRight className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
