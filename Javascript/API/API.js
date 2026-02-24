async function buscarnoticia() {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const ID = await resposta.json();
        
        console.log("Título da primeira notícia:", ID[0].title); ///// ID 0 pois começa por zero não por um.
    } catch (erro) {
        console.error("Erro ao buscar notícias:", erro);
    }
}
//////////////////////EXEMPLO PARA O BODY////////////////////////

async function buscarnoticia() {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const ID = await resposta.json();
        
        console.log("Título da primeira notícia:", ID[0].body);
    } catch (erro) {
        console.error("Erro ao buscar notícias:", erro);
    }
}
