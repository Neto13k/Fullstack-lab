import React, { useState } from 'react';
import "app/input.css"

export function Message(){
    const [Messagevalue, SetMensagevalue] = useState('')

    const MessageChange =  (event: React.ChangeEvent<HTMLInputElement>) =>{
        SetMensagevalue (event.target.value);
    };
    
    return(
        <form>
        <input type="text"id='input1' placeholder="Digite aqui sua mensagem"
         value={Messagevalue} onChange={MessageChange}/> 
         <p>Mensagem: {Messagevalue}</p> 
         </form>   
);

}   