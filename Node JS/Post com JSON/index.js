const express = require('express');
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send(`Servidor node JS`);
});

server.post('/', (req, res) => {
    const { nome } = req.body;

    const confirmacao = `Usuário ${nome} criado com sucesso!`;

    console.log(confirmacao);

    res.send(confirmacao);
});

server.listen(3000, () => {
    console.log("link server: http://localhost:3000");
});
