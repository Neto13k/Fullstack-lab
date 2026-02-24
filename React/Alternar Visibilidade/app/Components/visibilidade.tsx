import React, { useState } from 'react';

export function Visibilidade(){
  const [visivel, setvisivel] = useState(false);

  const Alternarvisibilidade = () => {
    setvisivel(!visivel);
  };

  return (
    <div>
      <button onClick={Alternarvisibilidade}>
        {visivel ? 'Ocultar texto' : 'Clique para mostrar o texto'}
      </button>

      {visivel && (
        <p>
          Parabéns você agora pode ver o texto.
        </p>
      )}
    </div>
  );
}
