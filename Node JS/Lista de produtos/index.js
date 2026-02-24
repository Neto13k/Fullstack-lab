const express = require('express');
const fs = require ('fs')
const path = require('path');

const app = express();
const PRODUCTSFILE = path.join(__dirname, 'products.json');

app.use(express.json())

function getProducts(){
    const data = fs.readFileSync(PRODUCTSFILE, 'utf-8')
    return JSON.parse(data)
}
console.log(getProducts())

function saveProducts(products){
    fs.writeFileSync(PRODUCTSFILE, JSON.stringify(products, null, 2), 'utf-8');
}

app.get('/produtos', (req,res) =>{
    const products = getProducts();
    res.json(products);
})

// Tarefa adicionar rota POST
app.post('/produtos', (req,res) =>{
    const {id, nome, preco} = req.body;
    const products = getProducts();
    products.push({id, nome, preco})
    saveProducts(products)
    res.status(201).json({message: 'Produtos adicionados com sucesso!'});
})

//Tarefa: Criar rotas PUT e DELETE com parâmetros

app.put('/produtos/:id', async (req, res) => {
    const {id} =  req.params;
    const {nome, preco} = req.body;
    const products =  getProducts();
    const idNumerico = Number(req.params.id)
    const index = products.findIndex(p => Number(p.id) === idNumerico);

    if (index !== -1) {
        products[index].nome = nome;
        products[index].preco = preco;
        
        saveProducts(products);
        res.json({ message: 'Produto atualizado com sucesso!' });
    } else {
        res.status(404).json({ message: 'Produto não encontrado.' });
    }
});
 // No JSON Colocado iDS sem "" pois seria considerado string//

 app.delete('/produtos/:id', (req, res) => {
    const {id} =  req.params;
    const products =  getProducts();
    const idNumerico = Number(req.params.id);
    const novaLista = products.filter(p => Number(p.id) !== idNumerico);
    
    if (novaLista.length < products.length) {
    saveProducts(novaLista);
    res.json({ message: 'Produto excluído com sucesso!' });
} else {
    res.status(404).json({ message: 'Produto não encontrado.' });
}
});

app.listen(8080, (req,res) =>{
    console.log("Servidor rodando")
});