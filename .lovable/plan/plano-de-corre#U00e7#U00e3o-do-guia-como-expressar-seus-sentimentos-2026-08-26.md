# Plano de correção do guia "Como expressar seus sentimentos"

## Objetivo
Substituir o conteúdo truncado do guia "Como expressar seus sentimentos: entenda como falar sobre o que você sente" em `src/lib/summary.ts` pelo texto completo enviado pelo usuário, com parágrafos devidamente separados.

## Alteração proposta
- Arquivo: `src/lib/summary.ts`
- Local: entrada cujo `title` é `"Como expressar seus sentimentos: entenda como falar sobre o que você sente"` (linhas 156–158 aproximadamente).
- Ação: atualizar o campo `content` para o texto integral fornecido, mantendo quebras de parágrafo (`\n\n`) entre as seções:
  1. Introdução — expressar sentimentos como habilidade.
  2. O primeiro passo: identificar o que se sente.
  3. Comunicando sem gerar defensividade.
  4. Escolhendo o momento certo.
  5. Os riscos de não expressar.

## Validação
Após a edição, executar `bun run build` (ou o typecheck disponível) para garantir que a sintaxe TypeScript do array permanece válida e que não há caracteres não escapados quebrem o arquivo.
