const express = require("express");
const server = express();
const path = require("path");
const fs = require("fs");
const usuarios = require("./Users.json");

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));
server.use(express.urlencoded({ extended: true }));

server.get("/usuarios", (req, res) => {
  res.render("index", {
    usuarios: usuarios,
  });
});

server.get("/usuarios/:index", (req, res) => {
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= usuarios.length) {
    return res.status(404).send("Usuário não encontrado");
  }

  const usuario = usuarios[index];

  res.render("detalhe", {
    usuario: usuario,
    index: index,
  });
});

server.post("/usuarios", (req, res) => {
  const novoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;

  const novoUsuario = {
    id: novoId,
    nome: req.body.nome,
    email: req.body.email,
  };

  usuarios.push(novoUsuario);

  fs.writeFileSync(
    path.join(__dirname, "Users.json"),
    JSON.stringify(usuarios, null, 2),
  );

  res.redirect("/usuarios");
});

server.listen(3000, () => {
  console.log("Servidor rodando");
});
