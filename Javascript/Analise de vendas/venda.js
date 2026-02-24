VendasTotais =[]
function Adicionarvenda(){
    const venda = Number(document.getElementById("venda").value)
    VendasTotais.push(venda)
    document.getElementById("mensagem").innerText = "Venda adicionada"

}

function calculartotal(){
    let total = 0
        for (let i = 0; i < VendasTotais.length; i++) {
        total += VendasTotais[i];
        }
        alert (`O valor total de vendas foi ${total}`)
}