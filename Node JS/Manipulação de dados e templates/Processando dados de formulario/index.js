const express = require("express");
const server = express();
const path = require("path");

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use(express.urlencoded({ extended: true }));

server.get("/cadastro", (req, res) => {
  res.render("index");
});

server.post("/cadastro", (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;

  res.render("sucesso", {
    nome: nome,
    email: email,
  });
});

server.listen(3000, () => {
  console.log("Servidor Aberto");
});
