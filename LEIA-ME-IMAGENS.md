# Correção das imagens que não vieram do Lovable

## O que estava acontecendo
128 arquivos em `src/assets` eram na verdade ponteiros (`*.asset.json`) para imagens/vídeos
gerados no Lovable, guardados no armazenamento do próprio Lovable (Cloudflare R2). O código
importava esses `.asset.json` como se fossem a imagem, e só o Lovable sabe transformar isso
na imagem real durante o build. Fora do Lovable (GitHub puro, Vercel, local), isso quebra.

## O que já foi corrigido neste projeto
- Todos os imports nos arquivos `.tsx`/`.ts` foram ajustados: em vez de
  `import x from "@/assets/foto.jpeg.asset.json"`, agora é
  `import x from "@/assets/foto.jpeg"` — apontando pro arquivo de imagem real.
- Os arquivos `.asset.json` foram removidos (não são mais necessários).
- Foi criado `asset-manifest.json`, com a lista das 128 imagens/vídeos e a URL de onde
  baixar cada um (ainda estão publicados em warm-hug-whisperer.lovable.app).
- Foi criado `baixar-imagens.mjs`, um script Node que baixa tudo pro lugar certo.

## O que você precisa fazer (só uma vez)
Antes de instalar dependências / buildar / hospedar em outro lugar, rode, na raiz do
projeto, com internet disponível:

```bash
node baixar-imagens.mjs
```

Isso vai criar os arquivos de imagem/vídeo de verdade dentro de `src/assets` (nos mesmos
caminhos que o código já espera). Depois disso é só seguir o fluxo normal:

```bash
bun install   # ou npm install / pnpm install
bun run build # ou npm run build
```

E aí pode subir pro GitHub, Vercel, Netlify, hospedagem local, onde quiser — as imagens
vão estar de fato dentro do repositório, sem depender do Lovable.

**Importante:** o script depende do site `warm-hug-whisperer.lovable.app` ainda estar no ar.
Se algum dia ele sair do ar, rode o script antes disso, ou baixe as imagens manualmente
pelas URLs listadas em `asset-manifest.json`.
