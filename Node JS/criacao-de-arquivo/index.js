const fs = require('fs');

const fileName = 'mensagem.txt'
const phrase = "Olá, este é meu primeiro arquivo com Node.js!"

try {
    if (!fs.existsSync(fileName)) {
        fs.writeFileSync(fileName, phrase, 'utf-8');
        console.log(`Arquivo ${fileName} criado com sucesso!`);
    } else {
        console.log(`Arquivo ${fileName} já existe.`);
    }
} catch (error) {
    console.log("Erro ao processar arquivo:", error);
}
// Tarefa de leitura do arquivo. 

const filecontents = fs.readFileSync(fileName, "utf-8")
console.log (`O que contém o arquivo:\n ${filecontents} `)