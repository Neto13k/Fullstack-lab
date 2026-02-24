const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());

const nomes = 'Maria, Cristiano'

server.get ("/usuarios", (req, res) => {
    res.send(`Usuarios: ${nomes}`)
})

server.listen(3000,(req, res) =>
    console.log("Abrindo servidor")
)