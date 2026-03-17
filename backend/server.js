// =====================================
//   API DE PÔSTERES DE SÉRIES FAMOSAS
//   Feita com Node.js + Express
//
//   Imagens devem existir em: data/fotos/
// =====================================

const express = require("express");
const cors = require("cors");
const path = require("path");
const series = require("./data/series.json");   // mantemos o nome do arquivo

const app = express();
const PORT = 3002;

app.use(cors());

app.use(
  "/fotos",
  express.static(path.join(__dirname, "data/fotos"))
);

function sortear(array) {
  const i = Math.floor(Math.random() * array.length);
  return array[i];
}

// ROTA 1: Pôster aleatório (qualquer série)
app.get("/api/series/aleatorio", (req, res) => {          // ← mudei a rota para /series/
  const todasFotos = Object.values(series).flat();

  if (todasFotos.length === 0) {
    return res.status(500).json({
      status: "error",
      message: "Nenhuma imagem encontrada na pasta data/fotos/"
    });
  }

  const fotoSorteada = sortear(todasFotos);

  let nomeSerie = "Aleatório";
  if (fotoSorteada.includes("black"))    nomeSerie = "Black Mirror";
  if (fotoSorteada.includes("bridger"))  nomeSerie = "Bridgerton";
  if (fotoSorteada.includes("greys"))    nomeSerie = "Grey's Anatomy";
  if (fotoSorteada.includes("pll"))      nomeSerie = "Pretty Little Liars";

  res.json({
    status: "success",
    serie: nomeSerie,
    url: `http://10.106.208.35:${PORT}/fotos/${fotoSorteada}`
  });
});

// ROTA 2: Série específica
app.get("/api/series/:serie", (req, res) => {             // ← mudei para /series/
  const serieSlug = req.params.serie.toLowerCase();

  if (!series[serieSlug]) {
    return res.status(404).json({
      status: "error",
      message: `Série "${serieSlug}" não encontrada`
    });
  }

  const fotos = series[serieSlug];
  const fotoSorteada = sortear(fotos);

  let nomeSerie = serieSlug;
  if (serieSlug === "black")    nomeSerie = "Black Mirror";
  if (serieSlug === "bridger")  nomeSerie = "Bridgerton";
  if (serieSlug === "greys")    nomeSerie = "Grey's Anatomy";
  if (serieSlug === "pll")      nomeSerie = "Pretty Little Liars";

  res.json({
    status: "success",
    serie: nomeSerie,
    url: `http://10.106.208.35:${PORT}/fotos/${fotoSorteada}`
  });
});

// (opcional – se quiser adicionar rota de lista)
app.get("/api/series", (req, res) => {
  const lista = Object.keys(series).map(slug => {
    let nome = slug;
    if (slug === "black")    nome = "Black Mirror";
    if (slug === "bridger")  nome = "Bridgerton";
    if (slug === "greys")    nome = "Grey's Anatomy";
    if (slug === "pll")      nome = "Pretty Little Liars";
    return { slug, nome, quantidade: series[slug].length };
  });

  res.json({
    status: "success",
    total: lista.length,
    series: lista
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🎬 API de Séries rodando em http://10.106.208.35:${PORT}`);
  console.log(`   → Aleatório:     http://10.106.208.35:${PORT}/api/series/aleatorio`);
  console.log(`   → Exemplo:        http://10.106.208.35:${PORT}/api/series/black`);
  console.log(`   → Imagens em:     data/fotos/`);
});