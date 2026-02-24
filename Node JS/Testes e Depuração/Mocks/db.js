module.exports = {
  query: async () => {
    throw new Error('Não deve acessar banco real em teste');
  }
};