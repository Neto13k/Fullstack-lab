async function Status() {
  const resultado1 = await promise1();
  document.getElementById("resultado1").innerText = resultado1;

  const resultado2 = await promise2();
   document.getElementById("resultado2").innerText = resultado2;

  const resultado3 = await promise3();
   document.getElementById("resultado3").innerText = resultado3;
}

function promise1() {
  return new Promise(resolve => {
      resolve("Pedido recebido!");
    });
}

function promise2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Preparando");
    }, 1000);
  });
}

function promise3() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Pedido saiu para entrega");
    }, 2000);
  });
}

const cancelarpedido = document.getElementById("Cancelarpedido")
cancelarpedido.addEventListener("click", function () {
    alert("O pedido foi cancelado");
});
