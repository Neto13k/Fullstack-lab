import type { Route } from "./+types/home";
import { MensagemFinal } from"app/Components/MensagemFinal"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mensagem Personalizada" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <MensagemFinal />;
}
