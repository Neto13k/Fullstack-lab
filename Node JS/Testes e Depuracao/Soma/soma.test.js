const soma = require('./Soma')

test('soma de 15 e 10 deve retornar 25', () => {
    expect(soma (15, 10)).toBe(25)
});