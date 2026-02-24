const os = require('os')
const fs = require('fs')
const path = require ('path');

const folderName = 'config';
const fileName = 'config.json';
const filepath = path.join(__dirname, folderName, fileName);

if (!fs.existsSync(folderName)){
    fs.mkdirSync(folderName);
    console.log(`Pasta ${folderName} criada com sucesso`)
}else{
    console.log(`Pasta ${folderName} já existe`)
}

const systeminfo ={
    username: os.userInfo().username,
    platform: os.platform(),
    architecture: os.arch(),
    version: os.version(),
    machine: os.machine(),
}

const infostring = `
    usuario: ${systeminfo.username};
    Plataforma: ${systeminfo.platform};
    Arquitetura: ${systeminfo.architecture};
    version: ${systeminfo.version};
    machine:${systeminfo.machine}
`

try {
fs.writeFileSync(filepath, infostring, 'utf-8')
console.log (`Arquivo criado com sucesso. Segue o caminho ${filepath}`)
} catch (err) {
  console.error(err);
}

const filecontents = fs.readFileSync(filepath, "utf-8")
console.log (`O que contém o arquivo:\n ${filecontents} `)