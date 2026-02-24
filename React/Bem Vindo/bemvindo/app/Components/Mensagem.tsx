import React, { useState } from 'react';

export function MensagemBemvindo (){

    const [mensagem, setMensagem] = useState('Olá!');

const alterarMensagem = () => {
    setMensagem('Bem-vindo(a) ao React!');
  };

  return (
    <div>
      <h1>{mensagem}</h1>
      
      <button onClick={alterarMensagem}>
        Clique para ver a nova mensagem
      </button>
    </div>
  );
}