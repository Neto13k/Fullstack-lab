import { Boasvindas } from "../components/Boasvindas";
import type { Route } from "./+types/home";
export function meta({}: Route.MetaArgs) {''
  return [
    { title: "Mensagem boas vindas" },
    { name: "Boas vindas", content: "Bem vindo React Router!" },
  ];
}

export default function Home() {
  return (
     <main>
      <Boasvindas></Boasvindas>
    </main>
  );
}