# Projeto API - Séries Poster Explorer

👥 **Integrantes**

- Ana Carolina Santos Denobi 
- Rayka Dom Pedro Hirata

📌 **Tema da API**  
Pôsteres de séries famosas (Black Mirror, Bridgerton, Grey's Anatomy, Pretty Little Liars)

📖 **Descrição do Projeto**  
Este projeto consiste em uma aplicação com backend e frontend integrados via rede local.  
O backend fornece pôsteres de séries através de uma API simples, enquanto o frontend consome esses dados e exibe de forma interativa com botão aleatório e busca por código.

🚀 **Tecnologias Utilizadas**

- **Backend**: Node.js + JavaScript
- **Frontend**: HTML5 + JavaScript (fetch API)  
- **Comunicação**: Rede local (IP fixo)

⚙️ **Como executar o Backend**

1. Acesse a pasta do backend:
cd backend
text2. Instale as dependências:
npm install
text3. Execute o servidor:
node server.js
textVocê verá:
🎬 API de Séries rodando em http://10.106.208.35:3000
text💻

**Como executar o Frontend**

1. Acesse a pasta do frontend:
cd frontend
text2. Abra o arquivo `index.html` no navegador:
- Duplo clique no arquivo  
- Ou use **Live Server** no VS Code

🌐 **Endereço da API**

http://10.106.208.35:3000

**Rotas principais:**

- Aleatório:  
http://10.106.208.35:3000/api/series/aleatorio

- Por série:  
http://10.106.208.35:3000/api/series/black  
http://10.106.208.35:3000/api/series/bridger  
http://10.106.208.35:3000/api/series/greys  
http://10.106.208.35:3000/api/series/pll

🔍 **Como testar**

- Clique em **Pôster Aleatório**  
- Ou digite no campo: `black`, `bridger`, `greys` ou `pll` e clique em **Buscar Série**

🍿 Divirta-se explorando os pôsteres das séries!

Feito com carinho para a atividade de integração front + back via rede local 💜
