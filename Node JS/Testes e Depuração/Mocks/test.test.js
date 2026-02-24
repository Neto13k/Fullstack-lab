const db = require('./db');
const { findUserByEmail } = require('./Mock');

jest.mock('./db'); // criação do mock

describe('findUserByEmail', () => {

  test('deve retornar o usuário quando encontrado', async () => {

    const fakeUser = { // Criação de dados simulados
      id: 1,
      name: 'Jose',
      email: 'emaildojose@hotmail.com'
    };

    db.query.mockResolvedValue({
      rows: [fakeUser]
    });
    const result = await findUserByEmail('emaildojose@hotmail.com');

    expect(result).toEqual(fakeUser);
    
    expect(db.query).toHaveBeenCalledWith(  // Validação
      'SELECT id, name, email FROM users WHERE email = $1',
      ['emaildojose@hotmail.com']
    );

  });

  test('deve retornar undefined quando usuário não existir', async () => {

    db.query.mockResolvedValue({ //Sem dados no banco
      rows: []
    });

    const result = await findUserByEmail('');

    expect(result).toBeUndefined();

  });

});