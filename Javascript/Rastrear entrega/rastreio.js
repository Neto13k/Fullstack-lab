async function rastrearPedido() {

  const minhaPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve("Pedido em rota de entrega!");
    }, 2000);
  });

  const resultado = await minhaPromise;

  document.getElementById("resultado").innerText = resultado;
}