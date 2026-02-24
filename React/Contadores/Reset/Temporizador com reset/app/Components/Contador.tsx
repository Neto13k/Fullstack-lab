import React, {useState, useEffect} from "react";

export function ContarSegundos (){
    const [segundos, SetSegundos] = useState(0);

    useEffect(() => {
        const TempoId = setInterval(() => {
            SetSegundos((segundosAnteriores) => segundosAnteriores+ 1);        
        }, 1000);

        return() => clearInterval(TempoId);
    }, []);;

    return(
        <div>
            <p> O contador está em {segundos}, segundos</p>
            <button onClick={() => SetSegundos(0)}>zerar</button>

        </div>
    );
}

export default ContarSegundos;