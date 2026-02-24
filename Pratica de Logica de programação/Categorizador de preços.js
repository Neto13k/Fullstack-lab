/**
 * Exercício: Categorizador de Preços
 * Objetivo: Praticar loops, conversão de tipos e lógica de negócios.
 */

for (let i = 0; i < 3; i++) {
    let inputpreco = prompt("Digite o preço do produto em reais")
 if (inputpreco === null || inputpreco.toLowerCase() === "sair"){
    console.log("Sistema encerrado pelo usuário.");
    break;
  }
  let preco = Number(inputpreco);

 if(isNaN(preco) || inputpreco.trim() === ""){
     alert ("Digite apenas números.");
  continue;
     }

if (preco >= 500){
   console.log("Produto de Categoria Premium")
}else{
console.log("Produto de Categoria Standard")
}
}