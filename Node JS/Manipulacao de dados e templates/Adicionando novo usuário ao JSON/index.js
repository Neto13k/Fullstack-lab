const express = require("express");
const server = express();
const path = require("path");
const fs = require('fs');
const usuarios = require("./Users.json");

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));
server.use(express.urlencoded({ extended: true }));

server.get("/usuarios", (req, res) => {
  res.render("index", {
    usuarios: usuarios,
  });
});

server.post('/usuarios', (req, res) => {

    const novoUsuario = {
        nome: req.body.nome,
        email: req.body.email
    };

    usuarios.push(novoUsuario); // adicionando ao JSON

    fs.writeFileSync(
        path.join(__dirname, 'Users.json'),
        JSON.stringify(usuarios, null, 2)
    );

    res.redirect('/usuarios');

});

server.listen(3000, () => {
  console.log("Servidor rodando");
});
