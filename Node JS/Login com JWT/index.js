const express = require('express');
const pool = require ('./database.js')
const path = require('path');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json())
const SECRET_KEY = "Senha"

function authMiddleware (req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'Token não fornecido!'})
    }

    jwt.verify(token, SECRET_KEY, (err, user)=>{
        if (err){
            return res.status(403).json({message: 'Token Inválido'});
        }
        req.user = user;
        next();
    });
}

app.post('/register', async (req,res) =>{
    const {nome, email, senha} = req.body;
    const hashedsenha = await bcrypt.hash(senha, 10);
    const query ='INSERT INTO usuarios (nome, email, senha) VALUES($1, $2, $3) RETURNING *';
    const values = [nome, email, hashedsenha];
    const result = await pool.query(query, values);
    res.status(201).json({message: 'Aluno cadastrado com sucesso!'});
});


app.post('/login', async (req, res) => {
    try {
        const { email, senha } = req.body;
        const userQuery = 'SELECT * FROM usuarios WHERE email = $1';
        const result = await pool.query(userQuery, [email]);
        const usuario = result.rows[0];

        if (!usuario) {
            return res.status(401).json({ message: 'Usuário ou senha inválidos' });
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (senhaValida) {
            const token = jwt.sign({ id: usuario.id, email: usuario.email }, SECRET_KEY, { expiresIn: '1h' });
            return res.json({ message: 'Login realizado com sucesso!', token });
        } else {
            return res.status(401).json({ message: 'Usuário ou senha inválidos' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
});
// Tarefa: Protegendo rotas com autenticação

app.get('/perfil/', authMiddleware, async (req, res) => {
    try {
        const { id } = req.user; 
        const query = `SELECT id, nome, email FROM usuarios WHERE id = $1`;
        const result = await pool.query(query, [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar perfil' });
    }
});

app.listen(8080, (req,res) =>{
    console.log("Servidor rodando")
});