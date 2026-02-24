function Aplicarcumpom(){

    const cupom = document.getElementById("Cupom").value;
    const resultado = document.getElementById("resultado")

    if (cupom === "STACKX10"){
        alert ("O cupom foi aplicado")
    }
    else{
        resultado.innerHTML = `Cupom não encontrado`
    }
}