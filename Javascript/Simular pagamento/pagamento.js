async function Pagamento(){
    const pagamento = document.getElementById("pagamento").value;
    const resultado = document.getElementById("resultado");

console.log("Estamos processando o pagamento...")

await new Promise(resolve => setTimeout(resolve, 5000));
    if (pagamento > 1000) {
        resultado.innerHTML = "Saldo insuficiente 😞😞";
    } else {
        resultado.innerHTML = "Pagamento Aprovado! ✅";
    }
}

