let Historico = []

function Adicionar() {
    const Tarefa = document.getElementById('Tarefa').value;

    Historico.push({Tarefa})

    Listadetarefa();
}

function Listadetarefa() {

    const corpo = document.getElementById("Listadetarefa")
    corpo.innerHTML = ""

    //Cria linha e células da tabela
    Historico.forEach(item => {
        const linha = document.createElement("tr");

        const colunaTarefa = document.createElement("td")
        colunaTarefa.textContent = item.Tarefa

        linha.appendChild(colunaTarefa);
        corpo.appendChild(linha);
    })
};