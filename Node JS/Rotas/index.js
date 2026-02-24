const express = require('express');
const server = express();

const nomes = ["Maria", "Cristiano"]


server.get ("/usuarios", (req, res) => {
    res.json({
        lista: nomes
    });
});
server.post ("/usuarios", (req, res) => {
    res.send("Usuário criado!")
    console.log("Post solicitado. Usuário criado!")
})

server.listen(3000,(req, res) =>
    console.log("Abrindo servidor")
)