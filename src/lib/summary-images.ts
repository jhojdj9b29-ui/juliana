// Imagens dos cards de "Conteúdos". Antes, todos os cards usavam a mesma imagem.
// Nenhuma destas aparece em outra seção da página inicial.
import abstractWaves from "@/assets/abstract-waves-premium-v3.jpeg";
import bubbles from "@/assets/nature/psycho-bubbles.jpeg";
import leafShadow from "@/assets/nature/psycho-leaf-shadow.jpeg";
import roseCoffee from "@/assets/nature/psycho-rose-coffee.jpeg";
import pearls from "@/assets/nature/psycho-pearls-balls.jpeg";
import sunsetGrass from "@/assets/nature/psycho-sunset-grass.jpeg";
import brownLeaves from "@/assets/nature/psycho-brown-leaves.jpeg";
import sparklingFlowers from "@/assets/nature/psycho-sparkling-flowers.jpeg";
import rainWood from "@/assets/nature/psycho-rain-wood.jpeg";
import coffeeFlowers from "@/assets/nature/psycho-coffee-flowers.jpeg";
import beachSteps from "@/assets/nature/psycho-beach-steps.jpeg";
import ampulheta from "@/assets/uploaded/ampulheta.jpeg";
import pedrasRio from "@/assets/uploaded/pedras-rio.jpeg";
import gotaFolha from "@/assets/uploaded/gota-folha.jpeg";
import florSeca from "@/assets/uploaded/flor-seca.jpeg";
import floresOrvalho from "@/assets/uploaded/flores-orvalho.jpeg";
import folhasMadeira from "@/assets/uploaded/folhas-madeira.jpeg";
import floresEscuras from "@/assets/uploaded/flores-escuras.jpeg";
import workspace from "@/assets/uploaded/workspace.jpeg";

const POOL = [
  abstractWaves,
  leafShadow,
  roseCoffee,
  bubbles,
  sunsetGrass,
  pearls,
  brownLeaves,
  sparklingFlowers,
  rainWood,
  coffeeFlowers,
  beachSteps,
  ampulheta,
  pedrasRio,
  gotaFolha,
  florSeca,
  floresOrvalho,
  folhasMadeira,
  floresEscuras,
  workspace,
];

export function getSummaryImage(index: number): string {
  return POOL[index % POOL.length]!;
}
