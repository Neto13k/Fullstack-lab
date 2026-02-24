const request = require('supertest');
const express = require('express');
const autorizacao = require('./index');

test('retorna 403 quando o usuário não é admin', async () => {

  const app = express();

  app.use((req, res, next) => {
    req.user = { role: 'user' };
    next();
  });

  app.use(autorizacao);

  const response = await request(app).get('/admin');

  expect(response.status).toBe(403);
  expect(response.body).toEqual({
    message: 'Acesso negado'
  });

});


test('retorna 200 quando o usuário é admin', async () => {

  const app = express();

  app.use((req, res, next) => {
    req.user = { role: 'admin' };
    next();
  });

  app.use(autorizacao);

  const response = await request(app).get('/admin');

  expect(response.status).toBe(200);
  expect(response.text).toBe('Acesso Autorizado');

});