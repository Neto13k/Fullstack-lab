const express = require('express');
const server = express();

server.get ("/", (req, res) => {
    res.send("<h1> Servidor funcionando!</h1>")
})

server.listen(3000,(req, res) =>
    console.log("Abrindo servidor")
)