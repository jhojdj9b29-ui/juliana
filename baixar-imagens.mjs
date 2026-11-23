// Script para baixar as imagens/vídeos reais que o Lovable não incluiu no export.
// Requer Node 18+ (usa fetch nativo). Rode UMA VEZ, com internet, antes do build:
//
//   node baixar-imagens.mjs
//
// Ele lê o asset-manifest.json e salva cada arquivo no caminho certo dentro de src/assets.

import { readFileSync, mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";

const manifest = JSON.parse(readFileSync(new URL("./asset-manifest.json", import.meta.url)));

let ok = 0;
let fail = 0;

for (const item of manifest) {
  try {
    const res = await fetch(item.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    mkdirSync(dirname(item.real_path), { recursive: true });
    writeFileSync(item.real_path, buf);
    console.log(`OK   ${item.real_path}`);
    ok++;
  } catch (err) {
    console.error(`FALHOU ${item.real_path} <- ${item.url} (${err.message})`);
    fail++;
  }
}

console.log(`\nConcluído: ${ok} arquivos baixados, ${fail} falharam.`);
if (fail > 0) {
  console.log("Se algo falhou, o site original (warm-hug-whisperer.lovable.app) pode ter saído do ar ou o link mudou.");
}
