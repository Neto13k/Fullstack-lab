const express = require('express');
const server = express();

//criação middleware
const Global = (req, res, next) => {
    const dataAtual = new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo'
    });

    console.log(`[${dataAtual}] ${req.method} em ${req.url}`);
    next();
};

server.use(Global);//aplicação do middleware

server.get("/", (req, res) => {
    res.send(`Servidor node JS`);
});

server.post("/", (req, res) => {
    res.send("Post Solicitado!");
    console.log("Post Criado com sucesso.");
});

server.listen(3000, () => {
    console.log("link server: http://localhost:3000");
});
