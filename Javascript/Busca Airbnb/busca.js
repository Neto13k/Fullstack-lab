let Historico = []

function Busca() {
    const Cidade = document.getElementById('Cidade').value;
    const horario = new Date().toLocaleTimeString("pt-br", { hour: "2-digit", minute: "2-digit" });

    Historico.push({ horario, Cidade })

    Atualizarhistorico();
}
function Atualizarhistorico() {

    const corpo = document.getElementById("Atualizarhistorico")
    corpo.innerHTML = ""

    //Cria linha e células da tabela
    Historico.forEach(item => {
        const linha = document.createElement("tr");

        const colunahora = document.createElement("td")
        colunahora.textContent = item.horario;

        const colunaCidade = document.createElement("td")
        colunaCidade.textContent = item.Cidade

        linha.appendChild(colunahora);
        linha.appendChild(colunaCidade);
        corpo.appendChild(linha);
    })
};
