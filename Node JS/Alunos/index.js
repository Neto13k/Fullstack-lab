const express = require('express');
const pool = require ('./db.js')
const path = require('path');

const app = express();
app.use(express.json())

app.get('/alunos', async (req,res) =>{
    const query = `SELECT nome, email FROM alunos WHERE deleted_at IS NULL `;
    const result = await pool.query(query);
    res.json(result.rows)
})

app.post('/alunos', async (req,res) =>{
    const {nome, email} = req.body;
    const query ='INSERT INTO alunos (nome, email) VALUES($1, $2) RETURNING *';
    const values = [nome, email];
    
    const result = await pool.query(query, values);
    res.status(201).json({message: 'Aluno cadastrado com sucesso!'});
});

app.put('/alunos/:id', async (req, res) => {
    const {id} =  req.params;
    const {nome, email} = req.body;
    const query =  `UPDATE alunos SET nome = $1, email = $2, updated_at = NOW() WHERE id = $3 AND deleted_at IS NULL`;
    const values = [nome, email, id];
    const result = await pool.query(query, values);
   
    if(result.rowCount === 0){
        res.status(404).json({message: 'Aluno não encontrado em sistema!'});
    }
    res.status(200).json({message: 'Dados cadastrais atualizados com sucesso!'});
});

 app.delete('/alunos/:id', async (req, res) => {
    const {id} =  req.params;
    const query = `UPDATE alunos SET deleted_at = NOW() WHERE id = $1 RETURNING id, nome, deleted_at`
    const values = [id];
    const result = await pool.query(query, values);
    
    if(result.rowCount === 0){
        return res.status(404).json({message: 'Aluno não encontrado em sistema!'});
    } {
    res.json({ message: 'Aluno excluído com sucesso!' });
}
});

app.listen(8080, (req,res) =>{
    console.log("Servidor rodando")
});