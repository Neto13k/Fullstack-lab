const frutas = ['Maçã', 'Banana', 'Uva', 'Laranja', 'Abacaxi'];

export const ListadeFrutas = () => {
  return (
    
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
};