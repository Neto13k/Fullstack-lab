import { useState } from 'react';
import "app/checkbox.css"

export function MyCheckbox() {
  const [accepted, setAccepted] = useState(false);

  function handleChange(s) {
    setAccepted(s.target.checked);
    
  }
  function conditions(){
    if (accepted) {
      alert("Você aceitou os termos e pode continuar!");
    } else {
      alert("Você precisa aceitar os termos antes de continuar.");
    }
  }
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={handleChange}
        />
        Clique para aceitar os termos e condições
      </label>
      <br />
      <button onClick={conditions}>Continuar</button>

    </>
  );
}
