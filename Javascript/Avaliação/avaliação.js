
function Avaliarnota() {

    const Nota = document.getElementById("Nota").value;

    if (Nota==="0"){
        alert("Lamentamos que você não tenha gostado. Prometemos tentar melhorar!"); 
    }
    else if(Nota==="1"){
        alert("Sentimos muito que a experiência não tenha sido boa. Vamos nos esforçar para melhorar!"); 
    }
    else if(Nota==="2"){
        alert("Poxa, parece que não foi perfeito. Agradecemos sua sinceridade e vamos melhorar!"); 
    }
    else if(Nota==="3"){
        alert("Obrigado pelo feedback! Estamos felizes que tenha sido razoável e vamos buscar melhorar."); 
    }
    else if(Nota==="4"){
        alert("Que bom que você gostou! Continuaremos nos esforçando para surpreender ainda mais."); 
    }
    else{
        alert("Ficamos muito felizes que você adorou! Obrigado pelo feedback."); 
    }
}