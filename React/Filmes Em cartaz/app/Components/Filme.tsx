import "app/Films.css"
import Velozes from"app/Components/posts/Velozes e furiosos.jpg"
import Procura from"app/Components/posts/A procura.jpg"
import Branquelas from"app/Components/posts/As branquelas.jpg"

export function Films({ Title, Year, Gender, Poster}) {
  return (
    <div>
    <img src={Poster} alt={Title} className="Poster" />
      <h1>{Title}</h1>
      <p> Ano de lançamento: {Year}</p>
      <p>Gênero: {Gender}</p>
    </div>
  );
}

export function Poster () {
    return(
    <>
      <Films Title="Velozes e Furiosos" Year="2001" Gender="Ação" Poster={Velozes}/>
      <Films Title="À Procura da Felicidade" Year="2006" Gender="Drama" Poster={Procura}/>
      <Films Title="As Branquelas" Year="2004" Gender="2004" Poster={Branquelas} />
    </>
  );
}