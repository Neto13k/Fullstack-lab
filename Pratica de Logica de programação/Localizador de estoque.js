/**
 * Exercício: Localizador de Estoque
 * Objetivo: Praticar métodos de busca em Arrays (.includes) e normalização de Strings.
 */

let frutas =["maçã", "banana", "uva", "Manga", "Melão", "Mamão", "Melancia"]

let desejo = prompt("Digite a furta que deseja:")
if (frutas.includes(desejo)) {
  console.log("Fruta encontrada no estoque!");
} else {
  console.log("Produto indisponível");
}