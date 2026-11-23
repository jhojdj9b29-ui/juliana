import { useState } from "react";
import { ArrowLeft, ArrowRight, MessageCircle, RotateCcw } from "lucide-react";

import type { Teste } from "@/lib/tests";
import { DISCLAIMER_TESTES } from "@/lib/tests";
import { WHATSAPP } from "@/lib/site";

type Step = "inicio" | "perguntas" | "resultado";

export function GenericQuiz({ teste }: { teste: Teste }) {
  const [step, setStep] = useState<Step>("inicio");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [error, setError] = useState(false);

  const total = teste.perguntas.length;
  const pergunta = teste.perguntas[index]!;
  const progress = step === "resultado" ? 100 : Math.round((index / total) * 100);
  const score = teste.perguntas.reduce((sum, _q, i) => sum + (answers[i] ?? 0), 0);
  const result = teste.bandas.find((b) => score <= b.max) ?? teste.bandas[teste.bandas.length - 1]!;

  function next() {
    if (answers[index] === undefined) {
      setError(true);
      return;
    }
    setError(false);
    if (index + 1 < total) setIndex(index + 1);
    else setStep("resultado");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restart() {
    setAnswers({});
    setIndex(0);
    setError(false);
    setStep("inicio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
      {step !== "inicio" && (
        <div className="mb-10">
          <div
            className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            aria-label="Progresso do questionário"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary transition-[width] duration-500 ease-out"
              style={{ width: `${Math.max(progress, 4)}%` }}
            />
          </div>
          {step === "perguntas" && (
            <p className="label-mono mt-3 text-muted-foreground">
              Pergunta {index + 1} de {total}
            </p>
          )}
        </div>
      )}

      {step === "inicio" && (
        <div className="reveal is-visible" data-aos="fade-up">
          <span className="label-mono text-primary/60 tracking-[0.2em]">Questionário · Reflexão</span>
          <h1 className="font-display mt-6 text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            {teste.titulo}
          </h1>
          <div className="mt-10 space-y-8">
            <div className="rounded-[2.5rem] border border-primary/20 bg-card/40 p-10 shadow-elegant backdrop-blur-md">
              <p className="label-mono mb-4 text-[0.65rem] tracking-[0.3em] text-primary/60 font-black uppercase">Objetivo do teste</p>
              <p className="text-xl lg:text-2xl leading-relaxed text-foreground italic font-display">
                "{teste.resumo}"
              </p>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground font-sans max-w-2xl">
              <p>{teste.intro}</p>
              <p>
                Este questionário não tem finalidade diagnóstica. Ele foi disponibilizado apenas para
                promover autoconhecimento e reflexão.
              </p>
              <p className="text-foreground font-bold italic">Responda com sinceridade.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setStep("perguntas");
              setIndex(0);
            }}
            className="group relative mt-12 inline-flex items-center gap-4 rounded-full bg-primary px-12 py-5 text-sm font-bold tracking-[0.2em] text-primary-foreground uppercase shadow-elegant transition-all hover:scale-105 active:scale-95"
          >
            Começar <ArrowRight className="size-4" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      )}


      {step === "perguntas" && (
        <div key={index} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <fieldset>
            <legend className="font-display text-3xl leading-snug text-foreground sm:text-4xl lg:text-5xl mb-12">
              {pergunta}
            </legend>
            <div className="mt-8 grid gap-4">
              {teste.escala.map((option) => {
                const checked = answers[index] === option.value;
                return (
                  <label
                    key={option.label}
                    className={`group relative flex min-h-20 cursor-pointer items-center gap-6 rounded-[2rem] border px-8 py-5 text-lg transition-all duration-300 ${
                      checked
                        ? "border-primary bg-primary/10 text-foreground shadow-glow"
                        : "border-border/20 bg-card/40 text-muted-foreground hover:border-primary/40 hover:bg-card/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`pergunta-${index}`}
                      value={option.value}
                      checked={checked}
                      onChange={() => {
                        setAnswers((prev) => ({ ...prev, [index]: option.value }));
                        setError(false);
                      }}
                      className="size-5 accent-primary cursor-pointer"
                    />
                    <span className="font-sans font-medium">{option.label}</span>
                    {checked && <div className="absolute right-8 size-2 rounded-full bg-primary animate-pulse" />}
                  </label>
                );
              })}
            </div>
          </fieldset>

          {error && (
            <p role="alert" className="mt-6 text-sm font-bold tracking-widest text-destructive uppercase text-center">
              Por favor, selecione uma opção para continuar.
            </p>
          )}

          <div className="mt-16 flex items-center justify-between gap-6">
            <button
              type="button"
              onClick={() => {
                setError(false);
                if (index === 0) setStep("inicio");
                else setIndex(index - 1);
              }}
              className="group flex items-center gap-3 rounded-full border border-border/20 px-8 py-4 text-xs font-bold tracking-widest text-muted-foreground uppercase transition-all hover:text-foreground hover:bg-white/5"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /> Anterior
            </button>
            <button
              type="button"
              onClick={next}
              className="group relative flex items-center gap-4 rounded-full bg-primary px-10 py-4 text-xs font-black tracking-[0.2em] text-primary-foreground uppercase shadow-elegant transition-all hover:scale-105"
            >
              {index + 1 === total ? "Finalizar" : "Próxima"}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      )}


      {step === "resultado" && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="label-mono text-muted-foreground">Seu resultado</span>
          <h1 className="font-display mt-5 text-3xl leading-tight text-cream sm:text-4xl">
            {result.titulo}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{result.texto}</p>

          <h2 className="font-display mt-16 text-2xl text-cream sm:text-3xl">Suas respostas</h2>
          <ul className="mt-8 space-y-5">
            {teste.perguntas.map((item, i) => {
              const value = answers[i] ?? 0;
              const option = teste.escala.find((o) => o.value === value);
              return (
                <li
                  key={item}
                  className="rounded-2xl border border-border bg-card/40 p-6 shadow-soft"
                >
                  <p className="label-mono text-muted-foreground">Pergunta</p>
                  <p className="mt-2 text-cream">{item}</p>
                  <p className="label-mono mt-5 text-muted-foreground">Sua resposta</p>
                  <p className="mt-2 text-primary">{option?.label}</p>
                </li>
              );
            })}
          </ul>

          <div className="mt-16 rounded-3xl border border-primary/25 bg-card/50 p-8 shadow-elegant">
            <p className="font-display text-2xl italic text-cream">
              Cuidar da saúde emocional é um processo.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Conhecer seus padrões é um passo importante para desenvolver relações mais saudáveis,
              fortalecer sua autoestima e viver com mais equilíbrio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <MessageCircle className="size-4" /> Agendar atendimento
              </a>
              <button
                type="button"
                onClick={restart}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-muted-foreground transition-colors hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <RotateCcw className="size-4" /> Refazer
              </button>
              <a
                href="/#testes"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-muted-foreground transition-colors hover:text-cream"
              >
                Ver outros testes
              </a>
            </div>
          </div>
        </div>
      )}

      <p className="mt-16 border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground">
        {DISCLAIMER_TESTES}
      </p>
    </section>
  );
}
