/*
EXERCÍCIO 02: Contador de Estoque Inteligente

OBJETIVO:
Criar um sistema que registre múltiplos produtos, calcule descontos 
individuais e apresente um relatório financeiro final.

REGRAS DE NEGÓCIO:
1. O programa deve pedir o NOME e o PREÇO de cada produto repetidamente.
2. Condição de Parada: O loop deve encerrar quando o usuário digitar "sair" no nome do produto.
3. Regra de Desconto:
   - Se o preço do produto for maior que R$ 1.000,00: Aplicar 5% de desconto.
   - Caso contrário: Sem desconto.
4. Validação: Não permitir preços negativos ou inválidos.

SAÍDA FINAL (Ao encerrar):
- Quantidade total de produtos cadastrados.
- Valor total Bruto (soma dos preços originais).
- Valor total Líquido (soma dos preços com os descontos aplicados).
*/


let totalBruto = 0;
let totalLiquido = 0;
let quantidade = 0;

while (true) {
    let nome = prompt("Nome do produto (ou 'sair' para encerrar):");

    if (nome === null || nome.toLowerCase() === "sair") {
        break;
    }

    let valorNumerico; 

    do {
        let entradaValor = prompt(`Digite o valor de: ${nome}`);

        if (entradaValor === null) break; 

        valorNumerico = Number(entradaValor);

        if (isNaN(valorNumerico) || valorNumerico <= 0) {
            alert("Erro! Digite um número válido maior que zero.");
        }
    } while (isNaN(valorNumerico) || valorNumerico <= 0);

    if (valorNumerico === undefined || isNaN(valorNumerico)) break;

    let precoFinal;
    if (valorNumerico >= 1000) {
        precoFinal = valorNumerico * 0.95; 
    } else {
        precoFinal = valorNumerico;
    }

    totalBruto = totalBruto + valorNumerico;
    totalLiquido = totalLiquido + precoFinal;
    quantidade = quantidade + 1;
}

console.log(`--- RESUMO DA COMPRA ---`);
console.log(`Produtos cadastrados: ${quantidade}`);
console.log(`Total Bruto: R$ ${totalBruto.toFixed(2)}`);
console.log(`Total com Descontos: R$ ${totalLiquido.toFixed(2)}`);