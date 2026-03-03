const axios = require('axios');
const express = require('express');
const fs = require('fs');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./Swagger.json');

require('dotenv').config();
const apiKey = process.env.API_KEY;
const port = process.env.PORT || 8080;

const server = express();
server.use(express.json());
const baseUrl = "https://newsapi.org/v2/";
const favoritosFile = path.join(__dirname, 'favoritos.json');
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

///////Criação do get geral
server.get('/noticias', async (req, res) => {
    try {
        const assunto = req.query.assunto || 'geral';
        const resposta = await axios.get(`${baseUrl}everything?q=${assunto}&language=pt&apiKey=${apiKey}`);
        return res.send(resposta.data);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro ao buscar notícias" });
    }
});

///////Criação do get noticias favoritas

function getFavoritos() {
    const data = fs.readFileSync(favoritosFile, 'utf-8');
    return JSON.parse(data);
}

function saveFavoritos(favoritos) {
    fs.writeFileSync(favoritosFile, JSON.stringify(favoritos, null, 2), 'utf-8');
}

server.get('/noticias/favoritos', (req, res) => {
    const favoritos = getFavoritos();
    res.json(favoritos);
});

server.post('/noticias/favoritos', (req, res) => {
    const novaNoticia = req.body;
    const favoritos = getFavoritos();
    novaNoticia.id = Date.now(); // geração de ID único
    favoritos.push(novaNoticia);
    saveFavoritos(favoritos);
    res.status(201).json(novaNoticia);
});

server.put('/noticias/favoritos/:id', (req, res) => {
    const { id } = req.params;
    const favoritos = getFavoritos();
    const index = favoritos.findIndex(f => f.id == id);
    if (index !== -1) {
        favoritos[index] = { ...favoritos[index], ...req.body };
        saveFavoritos(favoritos);
        return res.json(favoritos[index]);
    }
    res.status(404).send("Notícia não encontrada.");
});

server.delete('/noticias/favoritos/:id', (req, res) => {
    const { id } = req.params;
    const favoritos = getFavoritos();
    const novosFavoritos = favoritos.filter(f => f.id != id);

    if (novosFavoritos.length < favoritos.length) {
        saveFavoritos(novosFavoritos);
        res.json({ message: 'Noticia excluída com sucesso!' });
    } else {
        res.status(404).json({ message: 'Noticia não encontrada.' });
    }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
