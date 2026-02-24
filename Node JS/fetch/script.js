const CriarUsuario = document.getElementById("Criarusuario");

CriarUsuario.addEventListener("click", function() {
    fetch('http://localhost:3000/usuarios')
        .then(response => response.text()) 
        .then(dados => {
            console.log(dados);
        })
        .catch(erro => console.error("Erro ao buscar usuários:", erro));
});


server.post ("/usuarios", (req, res) => {
    res.send("Usuário criado!")
    console.log("Post solicitado. Usuário criado!")
})