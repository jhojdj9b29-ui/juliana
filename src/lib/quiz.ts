export const OPTIONS = [
  { label: "Nunca", value: 0 },
  { label: "Raramente", value: 1 },
  { label: "Às vezes", value: 2 },
  { label: "Frequentemente", value: 3 },
  { label: "Quase sempre", value: 4 },
];

export const QUESTIONS = [
  {
    id: 1,
    texto: 'Você tem dificuldade em dizer "não", mesmo quando isso a prejudica?',
    baixa:
      "Conseguir se posicionar é um recurso valioso. Continue observando seus limites e cuidando deles com a mesma atenção que dedica aos outros.",
    media:
      "Em alguns contextos, dizer não parece mais difícil. Perceber quando isso acontece ajuda a entender o que está em jogo nessas relações.",
    alta: "Quando o não custa muito caro, é comum que o cansaço e a sobrecarga se acumulem em silêncio. Refletir sobre a origem desse padrão pode abrir espaço para escolhas mais confortáveis para você.",
  },
  {
    id: 2,
    texto: "Você sente que vive repetindo os mesmos tipos de relacionamento?",
    baixa:
      "Você parece experimentar vínculos com alguma variedade. Seguir atenta ao que faz bem em cada relação fortalece esse movimento.",
    media:
      "Alguns padrões parecem reaparecer de tempos em tempos. Notar o que se repete costuma ser o primeiro passo para escolher de outro jeito.",
    alta: "Repetições nos vínculos costumam ter uma história por trás delas. Compreender essa história pode ajudar a construir relações mais equilibradas e menos desgastantes.",
  },
  {
    id: 3,
    texto: "Você carrega uma culpa que parece não fazer sentido?",
    baixa:
      "A culpa aparece pouco na sua rotina. Continuar acolhendo os próprios erros com gentileza sustenta esse equilíbrio.",
    media:
      "Uma culpa ocasional pode indicar cobranças antigas que ainda ecoam. Vale observar em quais situações ela costuma surgir.",
    alta: "Uma culpa constante e difícil de explicar costuma pesar sobre a autoestima e as escolhas do dia a dia. Dar nome a esse sentimento, com apoio, pode aliviar essa carga.",
  },
  {
    id: 4,
    texto: "Você vive se cobrando e sente que nunca é suficiente?",
    baixa:
      "Você parece conseguir reconhecer o próprio esforço. Celebrar as conquistas, mesmo as pequenas, mantém esse cuidado vivo.",
    media:
      "A autocobrança aparece em alguns momentos. Perceber quando ela aperta ajuda a diferenciar exigência saudável de exigência que machuca.",
    alta: "A autocrítica excessiva pode dificultar o reconhecimento das próprias conquistas e manter a busca por um padrão impossível de alcançar. Trabalhar essa exigência interna costuma trazer mais leveza.",
  },
  {
    id: 5,
    texto: "Você coloca as necessidades dos outros sempre à frente das suas?",
    baixa:
      "Cuidar dos outros sem se abandonar é um equilíbrio delicado, e você parece encontrá-lo. Siga reservando espaço para si.",
    media:
      "Às vezes suas necessidades ficam em segundo plano. Observar esses momentos ajuda a reorganizar prioridades sem culpa.",
    alta: "Quando o cuidado com os outros ocupa quase todo o espaço, é comum sentir esgotamento e distanciamento dos próprios desejos. Recuperar esse espaço é um processo possível e legítimo.",
  },
  {
    id: 6,
    texto: "Você tem dificuldade para confiar nas pessoas?",
    baixa:
      "A confiança parece acessível para você. Continue cultivando vínculos em que se sinta segura e respeitada.",
    media:
      "A confiança aparece com certa cautela. Entender o que a torna mais difícil em alguns contextos pode tornar os vínculos mais tranquilos.",
    alta: "Dificuldades de confiança costumam ter raízes em experiências que exigiram proteção. Compreendê-las com acolhimento pode ajudar a criar relações mais seguras.",
  },
  {
    id: 7,
    texto: "Você evita conflitos, mesmo quando está sofrendo?",
    baixa:
      "Você consegue se expressar mesmo em situações desconfortáveis. Esse é um recurso importante para relações saudáveis.",
    media:
      "Em algumas situações, calar parece mais simples do que falar. Notar quais são elas ajuda a encontrar formas mais confortáveis de se posicionar.",
    alta: "Evitar conflitos com frequência pode transformar o silêncio em sofrimento acumulado. Aprender a expressar necessidades com segurança costuma mudar bastante a qualidade das relações.",
  },
  {
    id: 8,
    texto:
      "Você sente que algo a impede de seguir em frente, mas não consegue explicar o quê?",
    baixa:
      "Você parece encontrar caminhos para seguir adiante. Continuar escutando suas emoções sustenta esse movimento.",
    media:
      "Há momentos em que algo parece travar. Dar atenção a essas pausas pode revelar necessidades que ainda não foram ditas.",
    alta: "Sensações difíceis de nomear costumam pedir espaço e escuta. Em um processo de acompanhamento, esse 'algo' costuma ganhar contorno e sentido.",
  },
  {
    id: 9,
    texto: "Você reage de forma muito intensa a determinadas situações?",
    baixa:
      "Suas reações parecem proporcionais ao que você vive. Continuar percebendo seus sinais emocionais ajuda a manter esse equilíbrio.",
    media:
      "Algumas situações mexem mais com você do que outras. Identificar esses gatilhos é uma forma de cuidado.",
    alta: "Reações intensas costumam sinalizar temas sensíveis que pedem acolhimento, não julgamento. Compreendê-los ajuda a responder ao mundo com mais calma.",
  },
  {
    id: 10,
    texto: "Você sente que está apenas sobrevivendo, e não vivendo plenamente?",
    baixa:
      "Você parece encontrar sentido no seu dia a dia. Preservar momentos de pausa e prazer mantém esse bem-estar.",
    media:
      "Em algumas fases a vida parece mais automática. Reconhecer isso já é um convite para reencontrar o que te faz bem.",
    alta: "Sentir que a vida se resume a sobreviver costuma indicar cansaço emocional importante. Um espaço de escuta pode ajudar a reencontrar sentido, descanso e possibilidades.",
  },
];

export const RESULTS = [
  {
    max: 10,
    titulo: "Você parece lidar bem com essas situações.",
    texto: [
      "Pelas suas respostas, esses padrões parecem aparecer com pouca frequência no seu dia a dia.",
      "Ainda assim, todos nós podemos nos beneficiar de momentos de autoconhecimento e cuidado emocional.",
      "Continue observando suas emoções e respeitando seus limites.",
    ],
  },
  {
    max: 20,
    titulo: "Algumas situações merecem atenção.",
    texto: [
      "Suas respostas indicam que alguns padrões emocionais aparecem ocasionalmente.",
      "Refletir sobre essas experiências pode ajudar a compreender melhor suas emoções, relações e formas de enfrentamento.",
    ],
  },
  {
    max: 30,
    titulo: "Talvez seja o momento de olhar com mais cuidado para si.",
    texto: [
      "Suas respostas sugerem que esses padrões estão presentes com certa frequência.",
      "Isso não significa que exista um transtorno psicológico.",
      "Entretanto, pode indicar questões emocionais importantes que merecem acolhimento e compreensão.",
    ],
  },
  {
    max: 40,
    titulo: "Suas respostas indicam um sofrimento emocional significativo.",
    texto: [
      "Você relatou que muitas dessas situações fazem parte da sua rotina.",
      "Esses padrões podem impactar seus relacionamentos, autoestima e qualidade de vida.",
      "Embora este questionário não tenha finalidade diagnóstica, conversar com um psicólogo pode ser um passo importante para compreender essas experiências e construir novas formas de lidar com elas.",
    ],
  },
];

export const DISCLAIMER =
  "Este questionário tem finalidade exclusivamente educativa e de autoconhecimento. O resultado oferece uma reflexão sobre suas respostas e não constitui diagnóstico psicológico ou médico. Em caso de dúvidas ou sofrimento emocional, procure avaliação de um profissional qualificado.";

export const STORAGE_KEY = "jj-quiz-respostas";

export function reflectionFor(id: number, value: number) {
  const question = QUESTIONS.find((q) => q.id === id);
  if (!question) return "";
  if (value <= 1) return question.baixa;
  if (value === 2) return question.media;
  return question.alta;
}
