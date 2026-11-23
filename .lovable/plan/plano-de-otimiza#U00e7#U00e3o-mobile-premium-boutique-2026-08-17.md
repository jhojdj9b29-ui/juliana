# Plano de Otimização Mobile "Premium Boutique"

Este plano visa elevar a qualidade visual da versão mobile do site, mantendo a versão desktop intacta, conforme solicitado. O foco é em legibilidade, espaçamento e uma hierarquia visual mais próxima da experiência editorial do computador.

## Alterações de Design e Layout

### 1. Seção Hero (Topo)
- **Legibilidade:** Ajustar o contraste da frase sobre o vídeo para garantir leitura clara em telas menores.
- **Hierarquia:** Reordenar elementos para que a frase de impacto seja a primeira coisa que o usuário veja, seguida pela foto e informações profissionais.
- **Espaçamento:** Reduzir o " giant feeling" do vídeo no mobile, ajustando a proporção para não ocupar toda a primeira dobra sem contexto.

### 2. Seção Sobre e Quem Sou
- **Alinhamento:** Centralizar textos e ajustar o grid para que as imagens e blocos de texto respirem melhor.
- **Tipografia:** Reduzir levemente os tamanhos de fonte H2 (títulos de seção) que estão muito grandes para telas pequenas, melhorando a quebra de linha.

### 3. Modalidades (Atendimentos)
- **Bento Grid Mobile:** Ajustar o grid de 2 colunas para 1 coluna ou um layout empilhado mais elegante, pois 2 colunas em celulares estreitos deixam o texto muito apertado.
- **Imagens:** Otimizar o `aspect-ratio` para que as fotos de atendimento não fiquem excessivamente altas.

### 4. Formação e Conteúdos
- **Cards:** Suavizar as bordas e sombras que podem parecer pesadas em resoluções menores.
- **Respiro:** Aumentar o padding horizontal geral das seções para evitar que o texto encoste nas bordas da tela.

## Detalhes Técnicos
- **Tailwind v4:** Utilização exclusiva de variantes `sm:`, `md:` e `lg:` para isolar as mudanças.
- **Refatoração CSS:** Ajuste nas variáveis de espaçamento no `src/styles.css` focadas em mobile.
- **Desempenho:** Garantir que as animações AOS e Vanilla Tilt não causem "jank" (lentidão) no scroll mobile.

---
*A versão desktop não sofrerá nenhuma alteração visual ou funcional.*
