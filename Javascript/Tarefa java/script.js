function exibir(t, c) {
  document.getElementById("resultado").innerHTML += `<h2>${t}</h2><p>${c}</p>`;
}

exibir("1. Tarefa Cidades", "");

const cidadesBR = ["Maceió", "Rio de Janeiro", "Salvador", "Brasília", "Aracaju", "Recife", "Campina Grande", "Caruaru",];
exibir("Cidades Brasileiras: ", cidadesBR.join(", "));

const cidadesINT = ["Liverpool", "Orlando", "Buenos Aires", "Tóquio", "Berlim", "Londres", "Paris", "Marselha"];
exibir("Cidades Estrangeiras: ", cidadesINT.join(", "));

const todasCidades = cidadesBR.concat(cidadesINT);
exibir("Segue todas as cidades: ", todasCidades.join(", "));

exibir("2. Tarefa Animais", "");

let animais = ["Leão", "Capivara", "Calopsita", "Onça", "Gavião", "Porco"];
exibir("Todos os animais: ", animais.join(", "));
animais.splice(3, 2, "Tigre", "Cavalo");
exibir("Alterações nos Animais", "Foram retirados: Onça e Gavião<br>Adicionados: Tigre e Cavalo<br>Lista final: " + animais.join(", "));

exibir("3. Tarefa Números Maiores ou Menores", "");

let numeros1 = [10, 20, 30, 40, 49];
exibir("Números: ", numeros1.join(", "));
let temMaiorQue50 = false;
for (let i = 0; i < numeros1.length; i++) {
  if (numeros1[i] > 50) {
    temMaiorQue50 = true;
    break;
  }
}
exibir("Resultado:", temMaiorQue50 ? "Sim, Há pelo menos um número maior que 50." : "Nenhum número maior que 50.");

exibir("4. Tarefa Soma com For", "");

let numeros2 = [0, 50, 100, 150, 200, 250, 300];
exibir("Números: ", numeros2.join(", "));
let somaFor = 0;
for (let i = 0; i < numeros2.length; i++) {
  somaFor += numeros2[i];
}
exibir("Resultado: ", `Soma = ${somaFor}`);

exibir("5. Soma com While", "");

let numeros3 = [500, 550, 600, 650, 700, 750, 800];
exibir("Números: ", numeros3.join(", "));
let somaWhile = 0;
let i = 0;
while (i < numeros3.length) {
  somaWhile += numeros3[i];
  i++;
}
exibir("Resultado: ", `Soma = ${somaWhile}`);

let Frutas = ["Banana", "maça", "mamão", "melão", "melancia", "limão", "laranja"]
Frutas.splice(6,7, "Manga", "abacaxi")
exibir ("Frutas", Frutas.join(","))
exibir ("Alterações realizadas", "Foram retirados limão e laranja<br>Adicionados: Manga e abacaxi<br>Lista final: "+Frutas.join(", "))

const cores = ["Azul", "Amarelo", "Verde", "Roxo", "Preto", "Salmão", "Bege",]
exibir ("Segue as cores: " + cores.join("<br>"))