/**
 * Exercício: Alerta de Estoque Crítico
 * Objetivo: Praticar iteração de arrays de objetos, acesso a propriedades e lógica condicional.
 */

const Produtos = [
  { nome: "Arroz", Quantidade: 0 },
  { nome: "Feijão", Quantidade: 5 },
  { nome: "Macarrão", Quantidade: 10 },
  { nome: "Verduras ", Quantidade: 15 },
  { nome: "Proteina", Quantidade: 20 }
];

for (let produto of Produtos) {
    if (produto.Quantidade <10) {
        console.log(`ALERTA: O produto ${produto.nome}  está com apenas ${produto.Quantidade} unidades!`)
    } else {
        console.log(`O produto ${produto.nome} está com o estoque em dia ${produto.Quantidade} unidades`)
    }   
}
