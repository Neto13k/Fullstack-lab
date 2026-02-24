function calcularPrazoEntrega() {
    const dataCompra = new Date(document.getElementById("dataCompra").value);
    const prazoEntrega = parseInt(document.getElementById("prazoEntrega").value);

    if (isNaN(prazoEntrega)) {
        document.getElementById("resultado").innerText = "Por favor, insira um prazo de entrega válido.";
        return;
    }

    const dataEntrega = new Date(dataCompra);
    dataEntrega.setDate(dataEntrega.getDate() + prazoEntrega);

    document.getElementById("resultado").innerText = `A data estimada da entrega é: ${dataEntrega.toLocaleDateString()}`;
}
