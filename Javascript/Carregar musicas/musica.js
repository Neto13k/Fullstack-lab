async function carregarMusica() {

  const minhaPromise = new Promise(resolve => {
    console.log ("Carregando...")
    setTimeout(() => {
      resolve("Música compartilhada com sucesso!");
    }, 1500);
  });

  const resultado = await minhaPromise;

  document.getElementById("resultado").innerText = resultado;
}

///// Realizado alteração para configuração em console///