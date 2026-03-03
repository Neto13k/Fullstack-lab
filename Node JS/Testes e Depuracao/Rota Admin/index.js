const express = require('express');
const app = express();

app.use(express.json());

// Middleware de permissão
const permissao = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).json({ message: "Acesso negado" }); // Proibido
    }
  };
};

app.get('/admin', permissao('admin'), (req, res) => {
  res.send('Acesso Autorizado');
});

module.exports = app; 