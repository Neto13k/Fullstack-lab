import React, {useState, useEffect} from "react";
import "app/contador.css"

export function Contadorincrementado(){
    const [contador, Setcontador] = useState(0);

    const incremento = () =>{
        Setcontador(contador+1)
    };
    
    const decremento = () =>{
        Setcontador(contador-1)
    };
    return(
        <div>
            <p>Contador: {contador} </p>
            <button onClick={incremento}>Incrementar</button>
            <button onClick={decremento}>Decrementar</button>
        </div>
    )
}