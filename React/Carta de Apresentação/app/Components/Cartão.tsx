import "app/Card.css"

export function Card({ Name, Profession, City }) {

   return (
        <div className="card">
            <h2>Nome: {Name}</h2>
            <p>Profissão: {Profession}</p>
            <p>Cidade: {City}</p>
        </div>
    );
}
export function Citizen () {
    return(
    <>
      <Card Name="José Hermes" Profession="Desenvolvedor de Software" City="Maceió/AL" />
      <Card Name="Pedro Soares" Profession="Engenheiro civil" City="Recife/PE" />
    </>
  );
}


