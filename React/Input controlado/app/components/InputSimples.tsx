import React, { useState } from 'react';
import "app/Mensagem.css"

export function Mensagem(){
    const [Mensagemvalue, SetMensagemvalue] = useState('')

    const Alteracao =  (event) =>{
        SetMensagemvalue (event.target.value);
    };
    
    return(
        <form>
        <input type="text"id='input1' placeholder="Digite aqui sua mensagem"
         value={Mensagemvalue} onChange={Alteracao}/> 
         <p>Mensagem: {Mensagemvalue}</p> 
         </form>   
);

}   