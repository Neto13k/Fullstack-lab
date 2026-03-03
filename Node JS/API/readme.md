# API de Notícias Favoritas

API em Node.js que consome a News API e permite salvar, listar, editar e excluir notícias favoritas em um arquivo JSON.

## Endpoints

**GET /noticias**
Busca notícias por assunto:
`/noticias?assunto=tecnologia`

**GET /noticias/favoritos**
Lista favoritos.

**POST /noticias/favoritos**
Adiciona um favorito:

```json
{
  "title": "Título da notícia",
  "url": "https://link.com"
}
```

**PUT /noticias/favoritos/:id**
Atualiza um favorito.

**DELETE /noticias/favoritos/:id**
Remove um favorito.

## .env

```env
API_KEY=sua_chave
PORT=8080
```

## Executar

```bash
npm install
node index.js
```
