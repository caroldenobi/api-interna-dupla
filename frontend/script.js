// ELEMENTOS
const posterImage = document.getElementById("carImage");
const serieName   = document.getElementById("carName");
const randomBtn   = document.getElementById("randomBtn");
const searchBtn   = document.getElementById("searchBtn");
const inputSerie  = document.getElementById("carInput");
const area        = document.getElementById("carArea");

// API
const API_BASE = "http://10.106.208.35:3002/api/series";

async function buscarSerie(endpoint) {
  area.classList.add("loading");
  posterImage.src = "";
  serieName.textContent = "";

  try {
    const response = await fetch(`${API_BASE}${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === "error") {
      serieName.textContent = data.message || "Série não encontrada 😕";
      return;
    }

    posterImage.src = data.url;
    serieName.textContent = data.serie || "Série encontrada!";

  } catch (erro) {
    console.error("Erro ao buscar:", erro);
    serieName.textContent = "⚠️ Erro: Verifique se o servidor está rodando";
  } finally {
    area.classList.remove("loading");
  }
}

function serieAleatoria() {
  buscarSerie("/aleatorio");
}

function buscarSeriePorCodigo() {
  let codigo = inputSerie.value.trim().toLowerCase();
  if (!codigo) {
    alert("Digite o código da série! (ex: black, pll, greys)");
    return;
  }
  buscarSerie(`/${codigo}`);
}

// EVENTOS
randomBtn.addEventListener("click", serieAleatoria);
searchBtn.addEventListener("click", buscarSeriePorCodigo);
posterImage.addEventListener("click", serieAleatoria);

inputSerie.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    buscarSeriePorCodigo();
  }
});

// INICIAL
serieAleatoria();