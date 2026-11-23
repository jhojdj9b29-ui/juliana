/**
 * Catálogo de testes de autoconhecimento (versões de domínio público / adaptações reflexivas).
 * Nenhum destes instrumentos tem finalidade diagnóstica.
 */

export type Scale = { label: string; value: number }[];

export type Banda = { max: number; titulo: string; texto: string };

export type Teste = {
  slug: string;
  titulo: string;
  resumo: string;
  intro: string;
  escala: Scale;
  perguntas: string[];
  bandas: Banda[];
};

const FREQ: Scale = [
  { label: "Nunca", value: 0 },
  { label: "Raramente", value: 1 },
  { label: "Às vezes", value: 2 },
  { label: "Frequentemente", value: 3 },
  { label: "Quase sempre", value: 4 },
];

const CONCORDA: Scale = [
  { label: "Discordo totalmente", value: 0 },
  { label: "Discordo em parte", value: 1 },
  { label: "Neutro", value: 2 },
  { label: "Concordo em parte", value: 3 },
  { label: "Concordo totalmente", value: 4 },
];

const DIAS: Scale = [
  { label: "Nenhum dia", value: 0 },
  { label: "Vários dias", value: 1 },
  { label: "Mais da metade dos dias", value: 2 },
  { label: "Quase todos os dias", value: 3 },
];

/** Gera bandas proporcionais ao total possível de pontos. */
function bandas(total: number, textos: [string, string][]): Banda[] {
  const cortes = [0.25, 0.5, 0.75, 1];
  return cortes.map((corte, i) => ({
    max: Math.round(total * corte),
    titulo: textos[i]![0],
    texto: textos[i]![1],
  }));
}

function build(
  slug: string,
  titulo: string,
  resumo: string,
  intro: string,
  escala: Scale,
  perguntas: string[],
  textos: [string, string][],
): Teste {
  const total = perguntas.length * escala[escala.length - 1]!.value;
  return { slug, titulo, resumo, intro, escala, perguntas, bandas: bandas(total, textos) };
}

export const TESTES: Teste[] = [
  build(
    "ansiedade-social",
    "Ansiedade social",
    "Observa o desconforto em situações de exposição, avaliação e convívio social.",
    "Situações sociais podem gerar desconforto em qualquer pessoa. Este teste observa a intensidade e a frequência desse desconforto.",
    FREQ,
    [
      "Evito falar em público ou em reuniões.",
      "Fico preocupado(a) com o que os outros pensam de mim.",
      "Sinto o corpo reagir (suor, rubor, tremor) em situações sociais.",
      "Evito iniciar conversas com pessoas desconhecidas.",
      "Reviso mentalmente o que falei depois de encontros sociais.",
      "Deixo de ir a eventos por receio de constrangimento.",
      "Sinto medo de parecer ridículo(a) ou inadequado(a).",
      "Prefiro passar despercebido(a) em grupos.",
      "Tenho dificuldade em comer ou beber diante de outras pessoas.",
      "Sinto alívio intenso quando um compromisso social é cancelado.",
    ],
    [
      ["Desconforto social baixo", "Situações sociais raramente representam um obstáculo para você."],
      [
        "Desconforto social leve",
        "Certos contextos exigem mais esforço, mas você consegue participar do que considera importante.",
      ],
      [
        "Desconforto social moderado",
        "O receio de avaliação já influencia escolhas e limita algumas experiências.",
      ],
      [
        "Desconforto social elevado",
        "O medo de exposição parece restringir bastante sua vida social. A psicoterapia tem recursos eficazes para isso.",
      ],
    ],
  ),
  build(
    "lidar-com-conflitos",
    "Lidar com conflitos",
    "Observa seu estilo diante de desacordos: evitação, confronto, acomodação ou diálogo.",
    "Conflitos fazem parte de qualquer relação. O que muda é a forma como cada pessoa lida com eles.",
    FREQ,
    [
      "Prefiro deixar passar a levantar um assunto difícil.",
      "Elevo o tom de voz quando discordo de alguém.",
      "Cedo rapidamente para encerrar a discussão.",
      "Guardo mágoas sem falar sobre elas.",
      "Consigo dizer o que sinto sem atacar a outra pessoa.",
      "Fico remoendo a discussão por muito tempo depois.",
      "Uso o silêncio como forma de resposta.",
      "Peço desculpas mesmo quando não me sinto responsável.",
      "Tento entender o ponto de vista do outro antes de responder.",
      "Saio da conversa antes de chegarmos a algum acordo.",
    ],
    [
      [
        "Estilo majoritariamente dialógico",
        "Você tende a enfrentar desacordos com abertura e sem grandes desgastes.",
      ],
      [
        "Estilo equilibrado com pontos de evitação",
        "Em alguns temas fica mais difícil se posicionar. Identificar quais são eles ajuda muito.",
      ],
      [
        "Estilo reativo ou evitativo frequente",
        "Os conflitos costumam gerar desgaste e nem sempre chegam a uma resolução.",
      ],
      [
        "Padrão de conflito muito desgastante",
        "O modo como os desacordos acontecem parece produzir sofrimento recorrente. Trabalhar comunicação e limites pode transformar suas relações.",
      ],
    ],
  ),
  build(
    "habitos-de-sono",
    "Hábitos de sono",
    "Avalia rotina, higiene do sono e o quanto ele restaura sua energia.",
    "O sono sustenta o humor, a memória e a regulação emocional. Este teste olha para os seus hábitos.",
    FREQ,
    [
      "Vou dormir e acordo em horários muito variáveis.",
      "Uso telas até o momento de dormir.",
      "Consumo cafeína no fim da tarde ou à noite.",
      "Levo mais de 30 minutos para adormecer.",
      "Acordo várias vezes durante a noite.",
      "Acordo cansado(a) mesmo depois de dormir.",
      "Sinto sonolência durante o dia.",
      "Faço as refeições pesadas pouco antes de deitar.",
      "Levo preocupações do dia para a cama.",
      "Durmo menos de 6 horas por noite.",
    ],
    [
      ["Hábitos de sono saudáveis", "Sua rotina de sono parece favorecer descanso e recuperação."],
      [
        "Hábitos parcialmente favoráveis",
        "Alguns ajustes simples de rotina podem melhorar bastante a qualidade do seu descanso.",
      ],
      [
        "Hábitos comprometidos",
        "Vários fatores estão atrapalhando o seu sono, com reflexos prováveis no humor e na concentração.",
      ],
      [
        "Sono bastante prejudicado",
        "O padrão descrito tende a afetar saúde física e emocional. Vale procurar avaliação profissional.",
      ],
    ],
  ),
  build(
    "comportamentos-toxicos",
    "Comportamentos tóxicos",
    "Reflexão sobre padrões relacionais que desgastam vínculos — nos outros e em si.",
    "Este teste convida a olhar para dinâmicas relacionais que costumam gerar sofrimento, sem julgamento.",
    FREQ,
    [
      "Sinto que preciso controlar o que a outra pessoa faz.",
      "Uso a culpa para conseguir o que quero.",
      "Minhas relações têm ciclos de brigas e reconciliações intensas.",
      "Falo coisas duras quando estou magoado(a).",
      "Comparo constantemente minha relação com a dos outros.",
      "Tenho dificuldade em reconhecer meus erros.",
      "Sinto ciúmes que me deixam desconfortável.",
      "Coloco condições para demonstrar afeto.",
      "Ignoro a outra pessoa como forma de punição.",
      "Sinto que minhas relações me deixam exausto(a).",
    ],
    [
      [
        "Padrões saudáveis predominantes",
        "Suas relações parecem se sustentar em respeito e diálogo.",
      ],
      [
        "Alguns pontos de atenção",
        "Certos comportamentos aparecem em momentos de estresse. Percebê-los já é um bom começo.",
      ],
      [
        "Padrões desgastantes frequentes",
        "Há dinâmicas que se repetem e produzem desgaste para os envolvidos.",
      ],
      [
        "Dinâmica relacional muito adoecida",
        "O conjunto de respostas indica sofrimento significativo nas relações. Apoio psicológico pode ajudar a romper esses ciclos.",
      ],
    ],
  ),
  build(
    "inteligencia-emocional",
    "Inteligência emocional",
    "Observa percepção, compreensão e regulação das próprias emoções e das dos outros.",
    "Inteligência emocional é um conjunto de habilidades que pode ser desenvolvido ao longo da vida.",
    CONCORDA,
    [
      "Percebo com clareza o que estou sentindo.",
      "Consigo nomear minhas emoções com precisão.",
      "Sei acalmar a mim mesmo(a) quando fico alterado(a).",
      "Percebo as emoções dos outros pelo tom de voz e postura.",
      "Consigo pensar antes de reagir.",
      "Aceito emoções desagradáveis sem me desorganizar.",
      "Escuto o outro sem interromper para me defender.",
      "Adapto minha forma de falar conforme a pessoa e o momento.",
      "Aprendo com situações emocionalmente difíceis.",
      "Consigo pedir ajuda quando preciso.",
    ],
    [
      [
        "Recursos emocionais em desenvolvimento",
        "Reconhecer e regular emoções ainda é um desafio frequente — e isso pode ser trabalhado.",
      ],
      [
        "Recursos emocionais parciais",
        "Você já dispõe de estratégias, mas elas oscilam conforme a intensidade da situação.",
      ],
      [
        "Bons recursos emocionais",
        "Há consciência e regulação presentes na maior parte das situações.",
      ],
      [
        "Recursos emocionais consolidados",
        "Suas respostas indicam boa consciência emocional e repertório sólido de regulação.",
      ],
    ],
  ),
  build(
    "procrastinacao",
    "Procrastinação",
    "Observa o adiamento de tarefas e o custo emocional que ele gera.",
    "Procrastinar raramente é preguiça: costuma envolver ansiedade, perfeccionismo ou desconexão com a tarefa.",
    FREQ,
    [
      "Adio tarefas importantes até o último momento.",
      "Começo várias coisas e não termino nenhuma.",
      "Prefiro tarefas fáceis quando há algo difícil pendente.",
      "Sinto culpa por não ter feito o que planejei.",
      "Espero estar 'no clima' para começar.",
      "Subestimo o tempo necessário para concluir algo.",
      "Me distraio facilmente com o celular.",
      "Evito começar por medo de não fazer bem o suficiente.",
      "Trabalho melhor apenas sob pressão de prazo.",
      "Minhas pendências afetam meu humor.",
    ],
    [
      ["Adiamento pontual", "Você costuma dar conta do que se propõe dentro dos prazos."],
      [
        "Adiamento moderado",
        "Algumas tarefas ficam presas, especialmente as que envolvem mais exigência.",
      ],
      [
        "Procrastinação frequente",
        "O adiamento já cobra um preço em produtividade e bem-estar.",
      ],
      [
        "Procrastinação intensa",
        "O ciclo de adiamento e culpa parece constante. Entender o que o alimenta costuma ser mais eficaz do que cobrar disciplina.",
      ],
    ],
  ),
  build(
    "estresse",
    "Estresse",
    "Mede a percepção de sobrecarga e falta de controle no período recente.",
    "O estresse aparece quando as demandas parecem maiores que os recursos disponíveis.",
    FREQ,
    [
      "Senti que não daria conta de tudo o que precisava fazer.",
      "Fiquei irritado(a) por coisas pequenas.",
      "Senti tensão no corpo (ombros, mandíbula, estômago).",
      "Tive dificuldade de concentração.",
      "Senti que as coisas estavam fora do meu controle.",
      "Dormi mal por causa de preocupações.",
      "Deixei de fazer coisas que me fazem bem por falta de tempo.",
      "Senti cansaço mesmo depois de descansar.",
      "Fiquei impaciente com pessoas próximas.",
      "Senti o corpo em estado de alerta constante.",
    ],
    [
      ["Estresse baixo", "Você parece conseguir equilibrar demandas e recursos no momento."],
      ["Estresse moderado", "Há sinais de sobrecarga em certos períodos. Pausas conscientes ajudam."],
      [
        "Estresse elevado",
        "Sua rotina parece estar consumindo mais do que repõe. Vale rever demandas e apoios.",
      ],
      [
        "Estresse muito elevado",
        "O nível descrito tende a afetar saúde física e emocional. Buscar apoio é um cuidado importante.",
      ],
    ],
  ),
  build(
    "qualidade-da-rotina",
    "Qualidade da rotina",
    "Observa equilíbrio entre trabalho, descanso, corpo e vínculos no seu dia a dia.",
    "Uma rotina sustentável combina produtividade, descanso, movimento e convivência.",
    FREQ,
    [
      "Minha rotina é tomada quase toda por obrigações.",
      "Deixo de me alimentar em horários adequados.",
      "Passo dias sem qualquer atividade física.",
      "Não tenho momentos de lazer durante a semana.",
      "Trabalho ou estudo além do horário previsto.",
      "Fico sem contato significativo com pessoas queridas.",
      "Tenho dificuldade em separar trabalho e descanso.",
      "Sinto que o dia passa sem eu fazer o que gostaria.",
      "Adio cuidados de saúde por falta de tempo.",
      "Termino o dia sem energia para nada.",
    ],
    [
      ["Rotina equilibrada", "Há espaço para obrigações e também para o que te sustenta."],
      ["Rotina razoável", "Alguns domínios estão descuidados e podem ser reequilibrados."],
      ["Rotina desequilibrada", "As obrigações têm ocupado espaço demais em relação ao cuidado."],
      [
        "Rotina insustentável",
        "O padrão descrito dificilmente se mantém sem custo à saúde. Vale reorganizar prioridades com apoio.",
      ],
    ],
  ),
  build(
    "esperanca",
    "Esperança",
    "Avalia a percepção de caminhos possíveis e de energia para persegui-los.",
    "A esperança combina duas coisas: acreditar que existem caminhos e sentir-se capaz de percorrê-los.",
    CONCORDA,
    [
      "Consigo pensar em várias formas de resolver um problema.",
      "Persigo com energia os objetivos que estabeleço.",
      "Mesmo em dificuldades, encontro alguma saída.",
      "Minhas experiências passadas me prepararam para o futuro.",
      "Acredito que meus esforços fazem diferença.",
      "Consigo estabelecer metas que me motivam.",
      "Quando um caminho falha, procuro outro.",
      "Sinto que o futuro pode ser melhor que o presente.",
    ],
    [
      [
        "Esperança em nível baixo",
        "Parece difícil enxergar caminhos ou reunir energia neste momento. Isso costuma acompanhar cansaço emocional.",
      ],
      [
        "Esperança em construção",
        "Você vê possibilidades, mas nem sempre sente força para segui-las.",
      ],
      ["Boa esperança", "Você combina visão de caminhos e disposição para percorrê-los."],
      [
        "Esperança elevada",
        "Há forte senso de agência e de possibilidades — um recurso protetor importante.",
      ],
    ],
  ),
  build(
    "qualidade-de-vida",
    "Qualidade de vida",
    "Panorama sobre saúde, autonomia, relações e satisfação geral.",
    "Um olhar amplo para diferentes áreas que compõem seu bem-estar.",
    CONCORDA,
    [
      "Estou satisfeito(a) com minha saúde física.",
      "Tenho energia suficiente para o dia a dia.",
      "Estou satisfeito(a) com meu sono.",
      "Tenho apoio das pessoas próximas.",
      "Estou satisfeito(a) com minhas relações pessoais.",
      "Sinto que minha vida tem sentido.",
      "Consigo aproveitar meu tempo livre.",
      "Estou satisfeito(a) com minhas condições de moradia e segurança.",
      "Consigo tomar decisões sobre a minha própria vida.",
      "De modo geral, estou satisfeito(a) com a minha vida.",
    ],
    [
      [
        "Qualidade de vida comprometida",
        "Várias áreas importantes estão em déficit neste momento.",
      ],
      ["Qualidade de vida regular", "Há áreas satisfatórias e outras que pedem atenção."],
      ["Boa qualidade de vida", "A maior parte das áreas avaliadas está bem sustentada."],
      ["Qualidade de vida elevada", "Você relata satisfação consistente nas áreas avaliadas."],
    ],
  ),
  build(
    "insonia",
    "Insônia",
    "Índice reflexivo sobre dificuldade de iniciar, manter o sono e o impacto disso no dia.",
    "Observe as últimas duas semanas ao responder.",
    FREQ,
    [
      "Tenho dificuldade para pegar no sono.",
      "Acordo no meio da noite e demoro a voltar a dormir.",
      "Acordo mais cedo do que gostaria.",
      "Estou insatisfeito(a) com meu sono atual.",
      "Meu sono interfere no meu desempenho diário.",
      "Outras pessoas percebem meu cansaço.",
      "Fico preocupado(a) com o meu sono.",
      "Preciso de medicação ou recursos para dormir.",
    ],
    [
      ["Sono preservado", "Não há indicativos relevantes de insônia."],
      ["Insônia leve", "Existem dificuldades ocasionais que respondem bem a ajustes de rotina."],
      ["Insônia moderada", "O padrão já interfere no seu dia. Vale buscar orientação."],
      [
        "Insônia acentuada",
        "As dificuldades são intensas e persistentes. Procure avaliação profissional.",
      ],
    ],
  ),
  build(
    "satisfacao-com-a-vida",
    "Satisfação com a vida",
    "Escala clássica de avaliação global da própria vida.",
    "Pense na sua vida como um todo ao responder.",
    CONCORDA,
    [
      "Minha vida está próxima do meu ideal.",
      "As condições da minha vida são excelentes.",
      "Estou satisfeito(a) com a minha vida.",
      "Consegui as coisas importantes que quero na vida.",
      "Se pudesse viver de novo, mudaria pouca coisa.",
    ],
    [
      [
        "Insatisfação marcante",
        "Há uma distância importante entre o que você vive e o que deseja.",
      ],
      ["Satisfação parcial", "Algumas áreas atendem suas expectativas, outras não."],
      ["Satisfação boa", "No geral, você avalia sua vida de forma positiva."],
      ["Satisfação elevada", "Você se sente bastante alinhado(a) com a vida que construiu."],
    ],
  ),
  build(
    "autoconfianca",
    "Autoconfiança",
    "Avalia a percepção de capacidade diante de desafios.",
    "Autoconfiança é a crença de que você consegue lidar com o que aparece.",
    CONCORDA,
    [
      "Consigo resolver problemas difíceis se me esforçar.",
      "Mantenho a calma diante de imprevistos.",
      "Confio nas minhas decisões.",
      "Sei defender meu ponto de vista.",
      "Encaro desafios novos sem me paralisar.",
      "Acredito na minha capacidade de aprender.",
      "Recupero-me bem depois de um erro.",
      "Assumo responsabilidades sem medo excessivo.",
    ],
    [
      ["Autoconfiança baixa", "A insegurança tem limitado suas escolhas."],
      ["Autoconfiança em construção", "Você confia em si em algumas áreas e hesita em outras."],
      ["Boa autoconfiança", "Você se percebe capaz na maior parte das situações."],
      ["Autoconfiança elevada", "Há um senso sólido de capacidade e recuperação."],
    ],
  ),
  build(
    "problemas-de-relacionamento",
    "Problemas de relacionamento",
    "Observa comunicação, confiança e satisfação no relacionamento atual.",
    "Pense na sua relação afetiva atual (ou na mais recente) ao responder.",
    FREQ,
    [
      "Discutimos os mesmos assuntos sem chegar a lugar algum.",
      "Sinto que não sou ouvido(a).",
      "Evito falar de temas importantes para não brigar.",
      "Sinto falta de afeto e demonstrações de carinho.",
      "Desconfio da outra pessoa.",
      "Sinto-me sozinho(a) mesmo estando acompanhado(a).",
      "Nossas rotinas nos afastaram.",
      "Penso em terminar a relação.",
      "Sinto que preciso mudar quem sou para caber na relação.",
      "As brigas deixam marcas que demoram a passar.",
    ],
    [
      ["Relação em bom estado", "Os pontos de atrito parecem administráveis."],
      ["Alguns desgastes", "Há temas mal resolvidos que merecem conversa cuidadosa."],
      ["Desgaste significativo", "O acúmulo de conflitos já afeta o bem-estar de ambos."],
      [
        "Sofrimento relacional intenso",
        "Vale considerar terapia individual ou de casal para compreender e decidir com clareza.",
      ],
    ],
  ),
  build(
    "gestao-de-raiva",
    "Gestão de raiva",
    "Observa intensidade, frequência e expressão da raiva.",
    "A raiva é uma emoção legítima. O que precisa de cuidado é a forma como ela se expressa.",
    FREQ,
    [
      "Fico irritado(a) muito rapidamente.",
      "Sinto o corpo reagir quando estou com raiva.",
      "Falo coisas de que me arrependo depois.",
      "Guardo raiva por muito tempo.",
      "Bato portas, grito ou quebro coisas.",
      "Sinto raiva desproporcional ao que aconteceu.",
      "Descarrego a raiva em quem não tem culpa.",
      "Tenho dificuldade em me acalmar depois de irritado(a).",
      "Sinto culpa depois das explosões.",
      "Pessoas próximas evitam me contrariar.",
    ],
    [
      ["Boa regulação", "Você lida com a raiva sem grandes prejuízos."],
      ["Regulação parcial", "Em situações específicas, a raiva escapa do controle."],
      ["Dificuldade relevante", "A raiva tem gerado consequências nas suas relações."],
      [
        "Dificuldade acentuada",
        "O padrão descrito costuma causar sofrimento a você e aos outros. Há técnicas eficazes para isso na terapia.",
      ],
    ],
  ),
  build(
    "niveis-de-ansiedade",
    "Níveis de ansiedade",
    "Escala breve sobre preocupação, tensão e sintomas físicos de ansiedade.",
    "Nas últimas duas semanas, com que frequência você sentiu cada uma destas coisas?",
    DIAS,
    [
      "Sentir-se nervoso(a), ansioso(a) ou no limite.",
      "Não conseguir parar ou controlar as preocupações.",
      "Preocupar-se demais com coisas diferentes.",
      "Dificuldade para relaxar.",
      "Ficar tão inquieto(a) que é difícil permanecer parado(a).",
      "Ficar facilmente aborrecido(a) ou irritado(a).",
      "Sentir medo como se algo terrível fosse acontecer.",
    ],
    [
      ["Ansiedade mínima", "Os sinais aparecem pouco no seu cotidiano."],
      ["Ansiedade leve", "Há preocupação presente, mas ainda administrável."],
      ["Ansiedade moderada", "Vale buscar apoio para desenvolver estratégias de manejo."],
      [
        "Ansiedade grave",
        "O nível descrito costuma limitar bastante a vida. A TCC tem excelentes resultados nesses casos.",
      ],
    ],
  ),
];

export const DISCLAIMER_TESTES =
  "Este questionário tem finalidade exclusivamente educativa e de autoconhecimento. O resultado oferece uma reflexão sobre suas respostas e não constitui diagnóstico psicológico ou médico. Em caso de dúvidas ou sofrimento emocional, procure avaliação de um profissional qualificado.";

export function getTeste(slug: string) {
  return TESTES.find((t) => t.slug === slug);
}
