const express = require('express');
const { query, validationResult, body, ExpressValidator } = require('express-validator');
const app = express();

app.use(express.json());

app.post('/usuarios',
  [body('name').notEmpty(), body('email').notEmpty()],
  (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      
      return res.status(400).json({message: 'Favor preencher todos os campos!'});
    }{
    res.status(200).json({ message: 'Usuario cadastrado com sucesso!' });
}
  },
);
module.exports = app; 


app.listen(3000, (req,res) =>{
    console.log("Servidor rodando")
});