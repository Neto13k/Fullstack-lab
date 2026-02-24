const express = require('express');
const server = express();
const path = require('path');

const usuarios = require('./Users.json');

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.get('/usuarios', (req, res) => {

    res.render('index', {
        usuarios: usuarios // pegando dados do json
    });

});

server.listen(3000, () => {
    console.log('Servidor rodando');
});