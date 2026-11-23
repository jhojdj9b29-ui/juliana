import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MessageCircle, RotateCcw } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  DISCLAIMER,
  OPTIONS,
  QUESTIONS,
  RESULTS,
  STORAGE_KEY,
  reflectionFor,
} from "@/lib/quiz";
import { WHATSAPP } from "@/lib/site";

const title = "Questionário de Autoconhecimento | Juliana Janjob Psicóloga";
const description =
  "Reflexão breve e profunda, de domínio público, para observar padrões emocionais e refletir sobre o cuidado consigo mesma.";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuizPage,
});

type Step = "inicio" | "perguntas" | "resultado";

function QuizPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <Quiz />
      </main>
      <Footer />
    </div>
  );
}

function Quiz() {
  const [step, setStep] = useState<Step>("inicio");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setAnswers(JSON.parse(stored));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {
      /* ignore */
    }
  }, [answers]);

  const total = QUESTIONS.length;
  const question = QUESTIONS[index]!;
  const progress = step === "resultado" ? 100 : Math.round((index / total) * 100);
  const score = QUESTIONS.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
  const result = RESULTS.find((r) => score <= r.max) ?? RESULTS[3]!;

  function next() {
    if (answers[question.id] === undefined) {
      setError(true);
      return;
    }
    setError(false);
    if (index + 1 < total) {
      setIndex(index + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setStep("resultado");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
          <span className="label-mono text-primary/60 tracking-[0.2em]">Autoconhecimento · Reflexão</span>
          <h1 className="font-display mt-6 text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Você se reconhece em algumas dessas situações?
          </h1>
          <div className="mt-10 space-y-8">
            <div className="rounded-[2.5rem] border border-primary/20 bg-card/40 p-10 shadow-elegant backdrop-blur-md">
              <p className="label-mono mb-4 text-[0.65rem] tracking-[0.3em] text-primary/60 font-black uppercase">Objetivo do teste</p>
              <p className="text-xl lg:text-2xl leading-relaxed text-foreground italic font-display">
                "Reflexão breve, de domínio público, para observar padrões emocionais e o cuidado consigo mesma."
              </p>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground font-sans max-w-2xl">
              <p>
                Ao longo da vida, todos nós desenvolvemos formas de lidar com as experiências que
                vivemos. Algumas nos fortalecem. Outras podem se transformar em padrões que geram
                sofrimento e dificultam o bem-estar.
              </p>
              <p>
                Este questionário não tem finalidade diagnóstica. Ele foi desenvolvido apenas para
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
            Começar Questionário <ArrowRight className="size-4" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      )}


      {step === "perguntas" && (
        <div key={question.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <fieldset>
            <legend className="font-display text-3xl leading-snug text-foreground sm:text-4xl lg:text-5xl mb-12">
              {question.texto}
            </legend>
            <div className="mt-8 grid gap-4">
              {OPTIONS.map((option) => {
                const checked = answers[question.id] === option.value;
                return (
                  <label
                    key={option.value}
                    className={`group relative flex min-h-20 cursor-pointer items-center gap-6 rounded-[2rem] border px-8 py-5 text-lg transition-all duration-300 ${
                      checked
                        ? "border-primary bg-primary/10 text-foreground shadow-glow"
                        : "border-border/20 bg-card/40 text-muted-foreground hover:border-primary/40 hover:bg-card/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`pergunta-${question.id}`}
                      value={option.value}
                      checked={checked}
                      onChange={() => {
                        setAnswers((prev) => ({ ...prev, [question.id]: option.value }));
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
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            {result.texto.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h2 className="font-display mt-16 text-2xl text-cream sm:text-3xl">
            Entenda suas respostas
          </h2>
          <ul className="mt-8 space-y-5">
            {QUESTIONS.map((item) => {
              const value = answers[item.id] ?? 0;
              const option = OPTIONS.find((o) => o.value === value);
              return (
                <li
                  key={item.id}
                  className="rounded-2xl border border-border bg-card/40 p-6 shadow-soft"
                >
                  <p className="label-mono text-muted-foreground">Pergunta</p>
                  <p className="mt-2 text-cream">{item.texto}</p>
                  <p className="label-mono mt-5 text-muted-foreground">Sua resposta</p>
                  <p className="mt-2 text-primary">{option?.label}</p>
                  <p className="label-mono mt-5 text-muted-foreground">Reflexão</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reflectionFor(item.id, value)}
                  </p>
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
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Se desejar aprofundar esse processo, a psicoterapia oferece um espaço seguro de
              escuta, acolhimento e desenvolvimento pessoal.
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
            </div>
          </div>
        </div>
      )}

      <p className="mt-16 border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground">
        {DISCLAIMER}
      </p>
    </section>
  );
}
