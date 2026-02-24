const axios = require('axios');
const express = require('express');
const fs = require('fs')
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./Swagger.json');

require('dotenv').config();
const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 8080;


const server = express();
server.use(express.json());
const BASE_URL = "https://newsapi.org/v2/"
const FAVORITOSFILE = path.join(__dirname, 'favoritos.json');
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

///////Criação do get geral
server.get('/noticias', async (req, res) => {
    try {
        const assunto = req.query.assunto || 'geral';
        const resposta = await axios.get(`${BASE_URL}everything?q=${assunto}&language=pt&apiKey=${API_KEY}`);
        return res.send(resposta.data);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro ao buscar notícias" });
    }
});

///////Criação do get noticias favoritas

function getFavoritos() {
    const data = fs.readFileSync(FAVORITOSFILE, 'utf-8')
    return JSON.parse(data)
}

function saveFavoritos(Favoritos) {
    fs.writeFileSync(FAVORITOSFILE, JSON.stringify(Favoritos, null, 2), 'utf-8');
}

server.get('/noticias/Favoritos', (req, res) => {
    const Favoritos = getFavoritos();
    res.json(Favoritos);
})

server.post('/noticias/Favoritos', (req, res) => {
    const Novanoticia = req.body;
    const Favoritos = getFavoritos();
    Novanoticia.id = Date.now(); // geração de ID único
    Favoritos.push(Novanoticia);
    saveFavoritos(Favoritos);
    res.status(201).json(Novanoticia);
});

server.put('/noticias/Favoritos/:id', (req, res) => {
    const { id } = req.params;
    const Favoritos = getFavoritos();
    const index = Favoritos.findIndex(f => f.id == id);
    if (index !== -1) {
        Favoritos[index] = { ...Favoritos[index], ...req.body };
        saveFavoritos(Favoritos);
        return res.json(Favoritos[index]);
    }
    res.status(404).send("Notícia não encontrada.");
});

server.delete('/noticias/Favoritos/:id', (req, res) => {
    const { id } = req.params;
    const Favoritos = getFavoritos();
    const index = Favoritos.findIndex(f => f.id == id);
    const NovosFavoritos = Favoritos.filter(f => f.id != id);

    if (NovosFavoritos.length < Favoritos.length) {
        saveFavoritos(NovosFavoritos);
        res.json({ message: 'Noticia excluída com sucesso!' });
    } else {
        res.status(404).json({ message: 'Noticia não encontrada.' });
    }
});

server.listen(8080, (req, res) => {
    console.log("Servidor iniciado com sucesso.")

});