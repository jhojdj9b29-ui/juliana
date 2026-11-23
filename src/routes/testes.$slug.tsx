import { createFileRoute, notFound } from "@tanstack/react-router";

import { GenericQuiz } from "@/components/GenericQuiz";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getTestImage } from "@/lib/test-images";
import { TESTES, getTeste } from "@/lib/tests";

export const Route = createFileRoute("/testes/$slug")({
  loader: ({ params }) => {
    const teste = getTeste(params.slug);
    if (!teste) throw notFound();
    return teste;
  },
  head: ({ loaderData }) => {
    const titulo = loaderData
      ? `${loaderData.titulo} | Autoconhecimento · Juliana Janjob`
      : "Questionários de Autoconhecimento | Juliana Janjob";
    const descricao =
      loaderData?.resumo ??
      "Questionários reflexivos de domínio público para autoconhecimento, sem finalidade diagnóstica.";
    return {
      meta: [
        { title: titulo },
        { name: "description", content: descricao },
        { property: "og:title", content: titulo },
        { property: "og:description", content: descricao },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TestePage,
});

export const ALL_SLUGS = TESTES.map((t) => t.slug);

function TestePage() {
  const teste = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 shadow-elegant">
            <img
              src={getTestImage(teste.slug)}
              alt={teste.titulo}
              width={768}
              height={512}
              className="h-56 w-full object-cover sm:h-72 lg:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
        </div>
        <GenericQuiz teste={teste} />
      </main>
      <Footer />
    </div>
  );
}

