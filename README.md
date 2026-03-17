Aqui vai uma versão **mais clean e minimalista** do README.md. Copie e cole direto:

```markdown
# Séries Poster Explorer

API + Frontend para exibir pôsteres de séries via rede local.

Séries disponíveis: Black Mirror, Bridgerton, Grey's Anatomy, Pretty Little Liars.

## Estrutura

```
api-carros/
├── backend/
│   ├── data/
│   │   ├── fotos/          ← black.jpg, bridger.jpg, greys.jpg, pll.jpg
│   │   └── carros.json
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
└── README.md
```

## Como rodar

### Backend
Na pasta `backend`:

```bash
npm install
node server.js
```

Aguarde a mensagem:
```
API de Séries rodando em http://10.106.208.35:3000
```

### Frontend
Na pasta `frontend`:

- Abra `index.html` no navegador (duplo clique ou Live Server)

### Teste
- Clique em “Pôster Aleatório”
- Ou digite: `black`, `bridger`, `greys`, `pll` e clique em “Buscar Série”

## Rotas da API

- `GET /api/series/aleatorio`  
- `GET /api/series/black`  
- `GET /api/series/bridger`  
- `GET /api/series/greys`  
- `GET /api/series/pll`

Exemplo:  
http://10.106.208.35:3000/api/series/aleatorio

## Problemas comuns

- **Porta 3000 ocupada**  
  ```bash
  netstat -ano | findstr :3000
  taskkill /PID [número] /F
  ```

- Imagem não carrega → confirme que o servidor está rodando e que o IP está correto em `script.js`

Feito para a atividade de integração front/back.
```

Essa versão é bem mais curta, direta e visualmente limpa — ideal para avaliação rápida.

Se quiser ainda mais enxuta (tipo só 10 linhas), avisa que reduzo mais. Boa sorte na entrega!
