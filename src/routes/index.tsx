import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";

import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Formation } from "@/components/sections/Formation";
import { Help } from "@/components/sections/Help";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Location } from "@/components/sections/Location";
import { Modalities } from "@/components/sections/Modalities";
import { Process } from "@/components/sections/Process";
import { Summary } from "@/components/sections/Summary";
import { TestsArea } from "@/components/sections/TestsArea";
import { useReveal } from "@/hooks/use-reveal";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const title = "Juliana Janjob · Psicóloga em Cacoal RO | Terapia TCC";
const description =
  "Psicoterapia presencial, online e home care em Cacoal RO. Escuta acolhedora e Terapia Cognitivo-Comportamental para ansiedade, lutos, traumas e autoconhecimento.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  useReveal();
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Help />
        <Method />
        <Process />
        <Formation />
        <Modalities />
        <Location />
        <Summary />
        <TestsArea />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
