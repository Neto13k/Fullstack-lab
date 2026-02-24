function Verificar(){
    const CPF0 = document.getElementById('CPF0').value;
    const CPF1 = document.getElementById('CPF1').value;
    const CPF2 = document.getElementById('CPF2').value;
    const CPF3 = document.getElementById('CPF3').value;
    const CPF4 = document.getElementById('CPF4').value;
    let valid = ""

    if (CPF0.length === 11){
        valid += `O  Primeiro CPF informado: ${CPF0} é valido\n`;
    }
    else{
        valid += `O Primeiro CPF informado: ${CPF0} é invalido\n`;
    }

    if (CPF1.length === 11){
        valid += `O Segundo CPF informado ${CPF1} é valido\n`;
    }
    else{
        valid += `O Segundo CPF informado ${CPF1} é invalido\n`;
    }

        if (CPF2.length === 11){
        valid += `O Terceiro CPF informado ${CPF2} é valido\n`;
    }
    else{
        valid += `O Terceiro CPF informado ${CPF2} é invalido\n`;
    }

        if (CPF3.length === 11){
        valid += `O Quarto CPF informado ${CPF3} é valido\n`;
    }
    else{
        valid += `O Quarto CPF informado ${CPF3} é invalido\n`;
    }

        if (CPF4.length === 11){
        valid += `O Quinto CPF informado ${CPF4} é valido\n`;
    }
    else{
        valid += `O Quinto CPF informado ${CPF4} é invalido\n`;
    }

    document.getElementById('Verificar').innerText = valid;
}