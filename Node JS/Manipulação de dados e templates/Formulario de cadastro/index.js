const express = require('express');
const server = express();
const path = require('path')

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.get('/cadastro', (req, res) => {
    res.render('index');
});


server.listen(3000, () => {
    console.log('Servidor Ligado');
});