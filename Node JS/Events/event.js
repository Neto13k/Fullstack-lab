const EventEmitter = require('node:events');
const EventLogin = new EventEmitter();
EventLogin.on('usuarioLogado', () => console.log('Usuário logado com sucesso!'));
EventLogin.emit('usuarioLogado');
