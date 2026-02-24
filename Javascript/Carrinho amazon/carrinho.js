let quantidade = 0;

const carrinho = document.getElementById("carrinho");
const adicionarAoCarrinho = document.getElementById("adicionarAoCarrinho");
const removerDoCarrinho = document.getElementById("removerDoCarrinho");

adicionarAoCarrinho.addEventListener("click", adicionarProduto);
removerDoCarrinho.addEventListener("click", removerProduto);
atualizarCarrinho();

function adicionarProduto() {
    quantidade++;
    atualizarCarrinho();
}

function removerProduto() {
    if (quantidade > 0) {
        quantidade--;
        atualizarCarrinho();
    }
}

function atualizarCarrinho() {
    carrinho.innerText = `Quantidade de itens: ${quantidade}`;
}
