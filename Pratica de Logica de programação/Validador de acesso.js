/**
 * Exercício Rápido: Validador de Acesso
 * Objetivo: Manter a constância e praticar validação de tipos.
 */
while(true){

  let entrada = prompt("Digite sua idade (ou sair para encerrar):");
  
  if (entrada === null || entrada.toLowercase === "sair"){
    console.log("Sistema encerrado pelo usuário.");
    break;
  }
  
  let idade = Number(entrada);
  
  if(isNaN(idade) || entrada.trim() === ""){
     alert ("Digite apenas números.");
  continue;
     }
  
  if (idade < 18){
   console.log("Acesso Negado")
  }else if (idade >= 18 && idade < 60){
console.log("Acesso permitido")
  }else {
    console.log("Acesso prioritario")
  }
  
}
