import { Mensagem } from "./Mensagem";

const HoraAtual = () => {
  const hora = new Date().getHours();
  
  if (hora >= 6 && hora < 12) {
    return "Bom dia";
  } else if (hora >= 12 && hora < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
};

export function MensagemFinal() {
    
    const Mensagempersonalizada = HoraAtual();
  return (
    <>
      <Mensagem Momentododia={Mensagempersonalizada} usuario="José Hermes" />
      <br />
      <Mensagem Momentododia={Mensagempersonalizada} usuario="Pedro Soares" />
      <br />
      <Mensagem Momentododia={Mensagempersonalizada} usuario="Ana Paula" />
      
    </>
  );
}