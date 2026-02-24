const express = require('express');

const app = express();

app.get('/saudacao', function(req, res) {
  res.status(200).json({mensagem:'Olá, mundo!'});
});

module.exports = app; 