import { useRef } from 'react';
import "app/Forms.css"


export function SelectInput() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    function SendEmail() {
        alert('E-mail encaminhado');
    }

    return (
        <div className="container">
            <button onClick={handleClick} id="Click">
                Clique para Digitar seu e-mail
            </button>
            <input ref={inputRef} />
            <button onClick={SendEmail} id="send">
                Enviar
            </button>
        </div>
    );
}