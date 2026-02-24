import "app/Mensagem.css"

export function Mensagem({Momentododia, usuario }) {
  return (
    <div>
      <h1>{Momentododia}, {usuario}!! </h1>
    </div>
  );
}
