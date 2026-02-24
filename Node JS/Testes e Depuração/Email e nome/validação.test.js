const request = require('supertest');
const app = require ("./cadastro")

test('post/usuarios deve retornar { message: "Favor preencher todos os campos"}', async () => { // teste apenas com e-mail
  const response = await request(app)
    .post('/usuarios')
    .send({
        name: '',
        email: 'teste@email.com'  
      });    
  expect(response.body).toEqual({
    message: 'Favor preencher todos os campos!'
  });
});

test('post/usuarios deve retornar { message: "Favor preencher todos os campos"}', async () => { // teste apenas com o nome
  const response = await request(app)
    .post('/usuarios')
    .send({
        name: 'José',
        email: ''
      });    
  expect(response.body).toEqual({
    message: 'Favor preencher todos os campos!'
  });
});

test('post/usuarios deve retornar { message: "Usuario cadastrado com sucesso!"}', async () => { // teste com dados completos
  const response = await request(app)
    .post('/usuarios')
    .send({
        name: 'José',
        email: 'teste@email.com'        
      });    
  expect(response.body).toEqual({
    message: 'Usuario cadastrado com sucesso!'
  });
});