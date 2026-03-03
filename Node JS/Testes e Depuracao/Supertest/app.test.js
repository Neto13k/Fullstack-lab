const request = require('supertest');
const app = require ("./app")


test('GET /saudacao deve retornar { mensagem: "Olá, mundo!" }', async () => {
  const response = await request(app)
    .get('/saudacao')
    .expect('Content-Type', /json/)
    .expect(200);

  expect(response.body).toEqual({
    mensagem: 'Olá, mundo!'
  });
});