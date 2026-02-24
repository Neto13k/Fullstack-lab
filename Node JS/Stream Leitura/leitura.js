// Realização da leitura do arquivo. 
const { open } = require('node:fs/promises');

 (async () => {
  const file = await open("texto.txt");

  for await (const line of file.readLines()) {
    console.log(line);
  }
})();